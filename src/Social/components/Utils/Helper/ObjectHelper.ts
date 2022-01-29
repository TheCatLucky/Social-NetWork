export const updObjInArray = (items:any, itemId:number, objPropName:string, propToChange:any) => {
  return items.map((u:any) => {
    if (u[objPropName] === itemId) {
      return { ...u, ...propToChange }
    }
    return u;
  })
}