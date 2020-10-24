import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import { nanoid } from 'nanoid';

import { dbLocation } from './config';

interface DatabaseStructure {
  stashes: Array<Stash>;
}

export interface StashInput {
  id?: string;
  files: Array<StashFile>;
}

interface Stash {
  id: string;
  createdDate: string;
  files: Array<StashFile>;
}

export interface StashFile {
  filename: string;
  absolutePath: string;
}

export class Database {

  db: lowdb.LowdbSync<DatabaseStructure>;

  constructor(adapter: lowdb.AdapterSync = new FileSync(dbLocation)) {
    this.db = lowdb(adapter);
    this.db.defaults({ stashes: [] }).write();
  }

  createId() {
    return nanoid()
  }

  addStash(stash: StashInput) {
    this.db.get('stashes').push({
      id: stash.id ?? nanoid(),
      createdDate: (new Date()).toISOString(),
      ...stash,
    }).write();
  }

  getStashes() {
    return this.db.get('stashes')
      .value();
  }
}
