import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';

// TODO make these configurable
// ~/.oops
export const baseDirectory = path.join(os.homedir(), '.oops');

// ~/.oops/db.json
export const dbLocation = path.join(baseDirectory, 'db.json');

// ~/.oops/stashes
export const stashesDirectory = path.join(baseDirectory, 'stashes');
