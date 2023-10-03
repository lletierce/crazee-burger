export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array))
}

export const find = (id, array) => {
  return array.find((itemInArray) => itemInArray.id === id)
}

export const findIndex = (idWithUnknowwIndex, array) => {
  return array.findIndex((itemInArray) => itemInArray.id === idWithUnknowwIndex)
}

export const filter = (idOfItemToRemove, array) => {
  return array.filter((item) => item.id !== idOfItemToRemove)
}

// const fruits = [{ nom: "Abricot" }, { nom: "Banane" }]
// const fruitsShallowCopy = [...fruits]
// const fruitsDeepCopy = deepClone(fruits)

// //fruitsShallowCopy[1].nom = "Cerise"
// fruitsDeepCopy[1].nom = "Cerise"

// console.log("fruits: ", fruits)
// //console.log("fruitsShallowCopy: ", fruitsShallowCopy)
// console.log("fruitsDeepCopy: ", fruitsDeepCopy)
