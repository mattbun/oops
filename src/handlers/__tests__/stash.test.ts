jest.mock('simple-git')

import simpleGit from 'simple-git'

import { gatherPaths } from '../stash'

describe('gatherPaths', () => {
  it('returns the arguments passed to it', async () => {
    const result = await gatherPaths(['a', 'b'], { modified: false, untracked: false })

    expect(result).toStrictEqual(['a', 'b'])
  })

  it('returns modified files', async () => {
    simpleGit.mockReturnValue({
      status: async () => ({ modified: ['c', 'd'] }),
    })

    const result = await gatherPaths([], { modified: true, untracked: false })

    expect(result).toStrictEqual(['c', 'd'])
  })

  it('returns untracked files', async () => {
    simpleGit.mockReturnValue({
      status: async () => ({ not_added: ['e', 'f'] }),
    })

    const result = await gatherPaths([], { modified: false, untracked: true })

    expect(result).toStrictEqual(['e', 'f'])
  })

  it('combines paths from different sources', async () => {
    simpleGit.mockReturnValue({
      status: async () => ({
        modified: ['c', 'd'],
        not_added: ['e', 'f'],
      }),
    })

    const result = await gatherPaths(['a', 'b'], { modified: true, untracked: true })

    expect(result).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f'])
  })
})
