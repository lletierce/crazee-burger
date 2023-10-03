export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array))
}

export const findObjectById = (id, array) => {
  return array.find((itemInArray) => itemInArray.id === id)
}

export const findIndexById = (idWithUnknowwIndex, array) => {
  return array.findIndex((itemInArray) => itemInArray.id === idWithUnknowwIndex)
}

export const removeObjectById = (idOfItemToRemove, array) => {
  return array.filter((item) => item.id !== idOfItemToRemove)
}

export const isEmpty = (array) => {
  return array.length === 0
}

// const fruits = [{ nom: "Abricot" }, { nom: "Banane" }]
// const fruitsShallowCopy = [...fruits]
// const fruitsDeepCopy = deepClone(fruits)

// //fruitsShallowCopy[1].nom = "Cerise"
// fruitsDeepCopy[1].nom = "Cerise"

// console.log("fruits: ", fruits)
// //console.log("fruitsShallowCopy: ", fruitsShallowCopy)
// console.log("fruitsDeepCopy: ", fruitsDeepCopy)
