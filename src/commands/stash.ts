import Command from '../base'
import { flags } from '@oclif/command'
import * as fs from 'fs-extra'
import cli from 'cli-ux'

import stashHandler from '../handlers/stash'

export default class Stash extends Command {
  static description = 'stash files'

  static aliases = ['']

  static flags = {
    ...Command.flags,
    name: flags.string({ char: 'n', description: 'name for the stash' }),
  }

  static args = [{ name: 'file' }]

  static strict = false

  async run() {
    stashHandler({
      config: this.config,
      cli,
      db: this.db,
    }, this.parse(Stash))
  }
}
