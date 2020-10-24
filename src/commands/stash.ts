import {Command, flags} from '@oclif/command'
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import cli from 'cli-ux';

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
      cli.action.start(file);

      const absolutePath = path.resolve(file);
      const filename = path.basename(file);

      fs.copyFileSync(absolutePath, path.join(destinationPath, filename));
      files.push({
        filename,
        absolutePath,
      });

      cli.action.stop();
    });

    db.addStash({
      files,
    })
  }
}
