import Command from '../base'
import { cli } from 'cli-ux'

export default class List extends Command {
  static description = 'list stashes'

  static flags = {
    ...Command.flags,
    ...cli.table.flags(),
  }

  async run() {
    cli.table(this.db.getStashes(), {
      name: {
        get: row => row.name ?? row.id,
      },
      createdDate: {
        header: 'Date',
        get: row => (new Date(row.createdDate)).toLocaleString(),
      },
      Files: {
        header: 'Files',
        get: row => row.files.map(e => e.filename).join('\n'),
      },
    })
  }
}
