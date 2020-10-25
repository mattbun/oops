import Command from '../base'
import { flags } from '@oclif/command'
import * as fs from 'fs-extra'
import * as path from 'path'
import cli from 'cli-ux'

import { StashFile } from '../lib/types'

export default class Stash extends Command {
  static description = 'stash files'

  static aliases = ['']

  static flags = {
    ...Command.flags,
    name: flags.string({ char: 'n', description: 'name for the stash' }),
  }

  static args = [{ name: 'file' }]

  static strict = false

  async run() {
    const { argv, flags } = this.parse(Stash)

    const id = this.db.createId()
    const files: Array<StashFile> = []

    const destinationDirectory = path.join(this.config.dataDir, id)
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

    this.db.addStash({
      id,
      name: flags.name,
      files,
    })
  }
}
