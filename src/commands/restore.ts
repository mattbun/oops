import Command from '../base'
import { flags } from '@oclif/command'
import * as inquirer from 'inquirer'
import * as fs from 'fs-extra'
import * as path from 'path'
import cli from 'cli-ux';

import { Stash } from '../lib/database'

export default class Restore extends Command {
  static description = 'restore stashes'

  static flags = {
    ...Command.flags,
    force: flags.boolean({
      char: 'f',
      description: 'overwrite if it already exists',
    }),
  }

  async run() {
    const { flags: { force } } = this.parse(Restore)

    const stashes = this.db.getStashes()
    const choices = stashes.map(stash => ({
      name: `${stash.name ?? stash.id} (${(new Date(stash.createdDate)).toLocaleString()})`,
      value: stash,
    }))

    const { stashesToRestore } = await inquirer.prompt([{
      type: 'checkbox',
      name: 'stashesToRestore',
      message: 'Which stash(es) would you like to restore?',
      choices,
    }])

    stashesToRestore.forEach((stash: Stash) => {
      console.log(`Restoring "${stash.name ?? stash.id}"...`);

      // Check if any of the files exist before copying
      if (!force) {
        stash.files.forEach(file => {
          if (fs.existsSync(file.originalAbsolutePath)) {
            throw new Error(`Path already exists, run with '-f' to overwrite: ${file.originalAbsolutePath}`);
          }
        })
      }

      stash.files.forEach(file => {
        cli.action.start(`\t${file.filename}`);

        const sourceLocation = path.join(this.config.dataDir, stash.id, file.stashedRelativePath);
        fs.copySync(sourceLocation, file.originalAbsolutePath);

        cli.action.stop();
      })
    })
  }
}
