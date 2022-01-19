export const updObjInArray = (items, itemId, objPropName, propToChange) => {
  return items.map(u => {
    if (u[objPropName] === itemId) {
      return { ...u, ...propToChange }
    }
    return u;
  })
}