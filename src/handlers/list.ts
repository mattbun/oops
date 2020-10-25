import * as cliux from 'cli-ux'

import Database from '../lib/database'
import List from '../commands/list'
import { ParserOutput } from './types';
import { getName, getDate } from '../lib/format';

export default function listHandler(
  { cli, db }: { cli: typeof cliux.cli, db: Database },
  { flags }: ParserOutput<List>
) {
  cli.table(db.getStashes(), {
    name: {
      get: getName,
    },
    date: {
      get: getDate,
    },
    contents: {
      get: stash => stash.files.map(file => file.filename).join('\n'),
    },
  }, {
    ...flags,
  })
}
