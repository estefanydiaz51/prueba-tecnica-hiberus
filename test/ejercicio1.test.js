const groupNames = require('../ejercicio1')

const mockResult = {
  A: ['Ana', 'Alberto'],
  B: ['Beatriz', 'Bruno'],
  C: ['Carlos', 'Clara'],
}

describe('groupNames', () => {
  it('should return an empty object if the names array is empty', () => {
    expect(groupNames([])).toEqual({})
  })

  it('should group names correctly by initial letter', () => {
    const names = ['Ana', 'Alberto', 'Beatriz', 'Bruno', 'Carlos', 'Clara']
    const groups = groupNames(names)
    expect(groups).toEqual(mockResult)
  })

  it('should handle names with different capitalizations', () => {
    const names = ['Ana', 'alberto', 'Alba', 'amparo']
    expect(groupNames(names)).toEqual({
      A: ['Ana', 'alberto', 'Alba', 'amparo'],
    })
  })
})
