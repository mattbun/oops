import Command from '../base'
import { cli } from 'cli-ux'

import listHandler from '../handlers/list';

export default class List extends Command {
  static description = 'list stashes'

  static flags = {
    ...Command.flags,
    ...cli.table.flags(),
  }

  async run() {
    listHandler({
      cli,
      db: this.db,
    }, this.parse(List))
  }
}
