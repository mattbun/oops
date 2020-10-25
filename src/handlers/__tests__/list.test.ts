import listHandler from "../list"

describe('listHandler', () => {
  it('prints a list', () => {
    const mockStashes = [{ id: 'some id' }];
    const dependencies = {
      cli: {
        table: jest.fn(),
      } as any,
      db: {
        getStashes: jest.fn().mockReturnValue(mockStashes),
      } as any,
    }
    const parseOutput = {
      flags: {
        someFlag: 'value',
      },
    } as any

    listHandler(dependencies, parseOutput);

    expect(dependencies.db.getStashes).toHaveBeenCalledTimes(1);
    expect(dependencies.cli.table).toHaveBeenCalledWith(
      mockStashes,
      {
        name: expect.any(Object),
        date: expect.any(Object),
        contents: expect.any(Object),
      },
      {
        ...parseOutput.flags,
      }
    )
  })
})
