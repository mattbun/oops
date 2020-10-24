import Command from '../base'
import * as inquirer from 'inquirer'
import * as fs from 'fs-extra'
import * as path from 'path'
import cli from 'cli-ux';

import { Stash } from '../lib/database'

export default class Drop extends Command {
  static description = 'describe the command here'

  static flags = {
    ...Command.flags
  }

  async run() {
    const stashes = this.db.getStashes()
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

      fs.removeSync(path.join(this.stashesDirectory, stash.id))
      this.db.deleteStash(stash.id)

      cli.action.stop();
    })
  }
}
