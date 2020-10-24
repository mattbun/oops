import {Command, flags} from '@oclif/command'
import * as fs from 'fs-extra';
import * as path from 'path';
import cli from 'cli-ux';

import { Database, StashFile, StashInput } from '../lib/database';
import { stashesDirectory } from '../lib/config';

export default class Stash extends Command {
  static description = 'stash files'

  static flags = {
    help: flags.help({char: 'h'}),
    name: flags.string({char: 'n', description: 'name for the stash'}),
  }

  static args = [{name: 'file'}]
  static strict = false;

  async run() {
    const {argv, flags} = this.parse(Stash)

    const db = new Database();
    const id = db.createId();
    const files: Array<StashFile> = [];

    const destinationDirectory = path.join(stashesDirectory, id);
    fs.mkdirSync(destinationDirectory, { recursive: true });
    argv.forEach(file => {
      cli.action.start(file);

      const absolutePath = path.resolve(file);
      const filename = path.basename(file);

      fs.copySync(absolutePath, path.join(destinationDirectory, filename));
      files.push({
        filename,
        absolutePath,
      });

      cli.action.stop();
    });

    db.addStash({
      id,
      name: flags.name,
      files,
    })
  }
}
