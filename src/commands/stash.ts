import {Command, flags} from '@oclif/command'
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

// TODO this could be nicer
import { Database, StashFile } from '../lib/database';

// TODO put somewhere more central
const destinationPath = path.join(os.homedir(), '.oops', 'stashes');

export default class Stash extends Command {
  static description = 'stash files'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]
  static strict = false;

  async run() {
    const {argv, flags} = this.parse(Stash)

    const db = new Database();
    const files: Array<StashFile> = [];

    fs.mkdirSync(destinationPath, { recursive: true });
    argv.forEach(file => {
      const absolutePath = path.resolve(file);
      const filename = path.basename(file);

      fs.copyFileSync(absolutePath, path.join(destinationPath, filename));

      // TODO fancier terminal output
      console.log(file);
      files.push({
        filename,
        absolutePath,
      });
    });

    db.addStash({
      files,
    })
  }
}
