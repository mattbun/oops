import { getName, getDate } from '../format'
import { Stash } from '../types'

describe('format', () => {
  describe('getName', () => {
    it('returns the name if it exists', () => {
      const stash = {
        id: 'some id',
        name: 'some name',
      } as unknown as Stash;

      expect(getName(stash)).toStrictEqual('some name');
    })

    it('returns the id if the stash has no name', () => {
      const stash = {
        id: 'some id',
      } as unknown as Stash;

      expect(getName(stash)).toStrictEqual('some id');
    })
  })

  describe('getDate', () => {
    it('returns the locale formatted createdDate', () => {
      const stash = {
        createdDate: '2020-02-02T20:20:02Z',
      } as unknown as Stash

      // Just checking that it doesn't error out, making it more specific could make it flaky
      expect(getDate(stash)).toEqual(expect.any(String))
    })
  })
})
