function groupNames(names) {
  const groups = {}
  for (let name of names) {
    const groupName = name[0].toUpperCase()
    ;(groups[groupName] ||= []).push(name)
  }
  return groups
}

console.log(
  groupNames(['Ana', 'Alberto', 'Beatriz', 'Bruno', 'Carlos', 'Clara'])
)

module.exports = groupNames
