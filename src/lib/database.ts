import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import * as os from 'os';
import * as path from 'path';
import { nanoid } from 'nanoid';

const DB_PATH = path.join(os.homedir(), '.oops', 'db.json');

interface DatabaseStructure {
  stashes: Array<Stash>;
}

interface StashInput {
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

  constructor(adapter: lowdb.AdapterSync = new FileSync(DB_PATH)) {
    this.db = lowdb(adapter);
    this.db.defaults({ stashes: [] }).write();
  }

  addStash(stash: StashInput) {
    this.db.get('stashes').push({
      id: nanoid(),
      createdDate: (new Date()).toISOString(),
      ...stash,
    }).write();
  }
}
