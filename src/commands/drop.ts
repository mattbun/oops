import Command from '../base'
import * as inquirer from 'inquirer'
import * as fs from 'fs-extra'
import * as path from 'path'
import cli from 'cli-ux'

import { Stash } from '../lib/types'
import { getName, getDate } from '../lib/format'

export default class Drop extends Command {
  static description = 'delete stashes'

  static flags = {
    ...Command.flags,
  }

  async run() {
    const stashes = this.db.getStashes()
    const choices = stashes.map(stash => ({
      name: `${getName(stash)} (${getDate(stash)})`,
      value: stash,
    }))

    const { stashesToDrop } = await inquirer.prompt([{
      type: 'checkbox',
      name: 'stashesToDrop',
      message: 'Which stash(es) would you like to drop?',
      choices,
    }])

    stashesToDrop.forEach((stash: Stash) => {
      cli.action.start(`Dropping ${getName(stash)}`)

      fs.removeSync(path.join(this.config.dataDir, stash.id))
      this.db.deleteStash(stash.id)

      cli.action.stop()
    })
  }
}
