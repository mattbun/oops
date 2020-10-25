import * as lowdb from 'lowdb'
import { nanoid } from 'nanoid'

import { Stash, StashFile } from './types'

interface DatabaseStructure {
  stashes: Array<Stash>;
}

export default class Database {
  db: lowdb.LowdbSync<DatabaseStructure>

  constructor(adapter: lowdb.AdapterSync) {
    this.db = lowdb(adapter)
    this.db.defaults({ stashes: [] }).write()
  }

  createId() {
    return nanoid()
  }

  addStash(stash: {
    id: string;
    name?: string;
    files: Array<StashFile>;
  }) {
    this.db.get('stashes').push({
      ...stash,
      createdDate: (new Date()).toISOString(),
    }).write()
  }

  getStashes() {
    return this.db.get('stashes')
      .value()
  }

  deleteStash(id: string) {
    this.db.get('stashes')
      .remove({ id })
      .write()
  }
}
