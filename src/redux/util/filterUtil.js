export const filterUnitsByAge = (payload) => {
  if (payload.value === "All") {
    return payload.units;
  }
  return payload.units.filter((unit) => unit.age === payload.value);
};


export const filterUnitsByCost = (units, costObject) => {   // age e göre units
  // console.log(costObject)
  Object.entries(costObject).map(([key, value]) => { //costobject-> key=gold, value={checked:,value:}, key=food, value={checked:,value:}
    if(value.checked===true){
      units = units.filter((unit) => unit.cost!==null && unit.cost.hasOwnProperty(key));
      if(value.values[0] !== null && value.values[1] !== null && value.values[0] !== 0 && value.values[1] !== 0  ){
        units = units.filter((unit) => unit.cost!==null && unit.cost.hasOwnProperty(key) && unit.cost[key] >= value.values[0] && unit.cost[key] <= value.values[1] );
      }
    }
    
  });

  return units
};


export const filterUnits = (payload) => {
  // console.log(payload);
  let unitsFilteredByAge = filterUnitsByAge(payload);
  let unitsFilteredByCost = filterUnitsByCost(unitsFilteredByAge, payload.costObject)
  return unitsFilteredByCost
};

