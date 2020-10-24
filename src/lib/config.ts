import * as os from 'os';
import * as path from 'path';

// TODO make these configurable
export const baseDirectory = path.join(os.homedir(), '.oops');
export const dbLocation = path.join(baseDirectory, 'db.json');
export const stashesDirectory = path.join(baseDirectory, 'stashes');
