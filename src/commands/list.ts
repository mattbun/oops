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

   /*
    cli.table(this.db.getStashes(), {
      name: {
        get: row => row.name ?? row.id,
      },
      createdDate: {
        header: 'Date',
        get: row => (new Date(row.createdDate)).toLocaleString(),
      },
      contents: {
        get: row => row.files.map(e => e.filename).join('\n'),
      },
    }, {
      ...flags
    })
    */
  }
}
