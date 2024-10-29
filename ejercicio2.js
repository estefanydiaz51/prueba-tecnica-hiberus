function removeDuplicates(text) {
  if (!text) return ''
  const uniqueWordsSet = new Set()
  return text
    .trim()
    .split(/\s+/)
    .filter((word) => {
      const lowercase = word.toLowerCase()
      const isNew = !uniqueWordsSet.has(lowercase)
      uniqueWordsSet.add(lowercase)
      return isNew
    })
    .join(' ')
}

console.log(removeDuplicates('Este es un ejemplo ejemplo de prueba prueba'))
console.log(removeDuplicates('Hola   hola    mundo   mundo    Mundo'))
console.log(removeDuplicates('El gato Gato Esta ESTA Gordo'))

module.exports = removeDuplicates
