import { Command, flags } from '@oclif/command'
import * as fs from 'fs';
import * as FileSync from 'lowdb/adapters/FileSync';

import * as config from './config';
import { Database } from './lib/database';

fs.mkdirSync(config.baseDirectory, { recursive: true });

export default abstract class extends Command {
  db = new Database(new FileSync(config.dbLocation))

  // TODO There's probably a nicer way to do this
  stashesDirectory = config.stashesDirectory

  static flags = {
    help: flags.help({ char: 'h' }),
  }
}
