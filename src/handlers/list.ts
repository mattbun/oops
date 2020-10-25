import * as cliux from 'cli-ux'

import Database from '../lib/database'
import List from '../commands/list'
import { ParserOutput } from './types';

export default function listHandler(
  { cli, db }: { cli: typeof cliux.cli, db: Database },
  { flags }: ParserOutput<List>
) {
  cli.table(db.getStashes(), {
    name: {
      get: row => row.name ?? row.id,
    },
    date: {
      header: 'Date',
      get: row => (new Date(row.createdDate)).toLocaleString(),
    },
    contents: {
      get: row => row.files.map(e => e.filename).join('\n'),
    },
  }, {
    ...flags,
  })
}
