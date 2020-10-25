import * as MemoryAdapter from 'lowdb/adapters/Memory';
import Database from '../database';

function createDatabase() {
  return new Database(new MemoryAdapter('test'));
}

const exampleStash = {
  id: 'test-id',
  createdDate: 'some date',
  files: [],
};

describe('database', () => {
  describe('createId', () => {
    it('returns an id', () => {
      const database = createDatabase();

      const result = database.createId();

      expect(result).toBeTruthy();
    });
  });

  describe('addStash', () => {
    it('adds a stash to the database', () => {
      const database = createDatabase();

      database.addStash(exampleStash);

      //const stashes = database.db.get('stashes');
      expect(database.db.get('stashes').value()).toStrictEqual([{
        ...exampleStash,
        createdDate: expect.any(String),
      }]);
    });
  });

  describe('getStashes', () => {
    it('returns all stashes', () => {
      const database = new Database(new MemoryAdapter('test'));
      database.db.get('stashes').push(exampleStash).write();

      const result = database.getStashes();

      expect(result).toEqual([exampleStash]);
    });
  });

  describe('deleteStash', () => {
    it('deletes a stash', () => {
      const database = new Database(new MemoryAdapter('test'));
      database.db.get('stashes').push(exampleStash).write();

      const result = database.deleteStash(exampleStash.id);

      expect(database.db.get('stashes').value()).toEqual([]);
    });
  });
});
