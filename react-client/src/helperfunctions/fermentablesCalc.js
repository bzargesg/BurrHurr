module.exports = {
  gravityByExtract: (extract)=>{
    //use fine grind extract
    //returns gravity contribution in PPG
      //pound/gallon/gravity unit
    return 46 * extract;
  },
  totalGrain: (fermentables)=>{
    let result = 0;
    if(Object.keys(fermentables).length > 0){
      Object.keys(fermentables).map((current)=>{
        result+=fermentables[current].amount
      })
  }
  return result;
  },
  color: (fermentables, volume)=>{
    //color is color * amount for all grains / volume
    let totalColor = 0;
    if(Object.keys(fermentables).length > 0){
      Object.keys(fermentables).map((current)=>{
        totalColor+=fermentables[current].color*fermentables[current].amount
      })
  }
  totalColor=totalColor/volume;
  return totalColor;
  },
  gravity: (fermentables, volume, efficiency = .75)=>{
    let result = 0;
    if(Object.keys(fermentables).length > 0){
      Object.keys(fermentables).map((current)=>{
        result+=(fermentables[current].amount*Number(fermentables[current].gravity))
      })
    }
    result=result/volume * efficiency;
  return result;
  },
  abv: (gravity, fermEfficiency = .75)=>{
    let OG = gravity/1000 + 1;
    let FG = (gravity * (1-fermEfficiency))/1000 + 1;
    return (OG-FG)*131.25
  }
}