import { Command, flags } from '@oclif/command'
import { IConfig } from '@oclif/config';
import * as fs from 'fs';
import * as path from 'path';
import * as FileSync from 'lowdb/adapters/FileSync';

import { Database } from './lib/database';

const DB_FILE_NAME = 'db.json';

export default abstract class extends Command {
  db: Database

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  constructor(argv: string[], config: IConfig) {
    super(argv, config);

    fs.mkdirSync(this.config.configDir, { recursive: true });
    fs.mkdirSync(this.config.dataDir, { recursive: true });

    this.db = new Database(new FileSync(path.join(this.config.configDir, DB_FILE_NAME)))
  }
}
