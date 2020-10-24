import {Command, flags} from '@oclif/command'
import { cli } from 'cli-ux'

import { Database } from '../lib/database'

export default class List extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    ...cli.table.flags(),
  }

  async run() {
    const db = new Database()
    cli.table(db.getStashes(), {
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
