import * as cliux from 'cli-ux'
import * as path from 'path'
import * as fs from 'fs-extra'
import { IConfig } from '@oclif/config'
import simpleGit from 'simple-git'

// TODO put this in handers/types
import Database from '../lib/database'
import Stash from '../commands/stash'
import { ParserOutput } from './types'
import { StashFile } from '../lib/types'

export default async function stashHandler(
  { config, cli, db }: {
    config: IConfig;
    cli: typeof cliux.cli;
    db: Database;
  },
  { argv, flags }: ParserOutput<Stash>
) {
  const pathsToStash = await gatherPaths(argv, flags)

  if (pathsToStash.length === 0) {
    console.log('Nothing to stash')
    return
  }

  const id = db.createId()
  const files: Array<StashFile> = []

  const destinationDirectory = path.join(config.dataDir, id)
  fs.mkdirSync(destinationDirectory, { recursive: true })
  argv.forEach(file => {
    cli.action.start(file)

    const absolutePath = path.resolve(file)
    const filename = path.basename(file)

    fs.copySync(absolutePath, path.join(destinationDirectory, filename))
    files.push({
      filename,
      originalAbsolutePath: absolutePath,
      stashedRelativePath: filename,
    })

    cli.action.stop()
  })

  db.addStash({
    id,
    name: flags.name,
    files,
  })
}

export async function gatherPaths(
  argv: string[],
  { modified, untracked }: { modified: boolean; untracked: boolean }
) {
  const result = [...argv]

  if (modified || untracked) {
    const gitStatus = await simpleGit().status()

    if (modified) result.push(...gitStatus.modified)
    if (untracked) result.push(...gitStatus.not_added)
  }

  return result
}
