import {Command, flags} from '@oclif/command'
import * as inquirer from 'inquirer'
import * as fs from 'fs-extra'
import * as path from 'path'
import cli from 'cli-ux';

import { Database, Stash } from '../lib/database'
import { stashesDirectory } from '../lib/config'

export default class Drop extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  async run() {
    const {args, flags} = this.parse(Drop)

    const db = new Database()
    const stashes = db.getStashes()
    const choices = stashes.map(stash => ({
      name: `${stash.name ?? stash.id} (${(new Date(stash.createdDate)).toLocaleString()})`,
      value: stash,
    }))

    const { stashesToDrop } = await inquirer.prompt([{
      type: 'checkbox',
      name: 'stashesToDrop',
      choices,
    }])

    stashesToDrop.forEach((stash: Stash) => {
      cli.action.start(`Dropping ${stash.name ?? stash.id}`);
      fs.removeSync(path.join(stashesDirectory, stash.id))
      db.deleteStash(stash.id)
      cli.action.stop();
    })
  }
}
