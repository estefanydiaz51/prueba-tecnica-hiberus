async function fetchCats() {
  try {
    const response = await fetch('https://catfact.ninja/breeds')
    const data = await response.json()
    return data.data
  } catch (error) {
    console.error('Error fetching cats:', error)
    return []
  }
}

async function filterCats() {
  try {
    const cats = await fetchCats()

    const orderCats = []

    for (const cat of cats) {
      const patternIndex = orderCats.findIndex(
        (item) => item.pattern > cat.pattern
      )
      if (patternIndex === -1) {
        orderCats.push(cat)
      } else {
        orderCats.splice(patternIndex, 0, cat)
      }
    }

    return orderCats
  } catch (error) {
    console.error(error)
    return []
  }
}

filterCats().then((cats) => {
  console.log(cats)
})
