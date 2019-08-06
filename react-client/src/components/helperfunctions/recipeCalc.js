module.exports={
  totalGravity: (volume, totalSugar, efficiency = .75)=>{
    //volume in gallons
    //total sugar in PPG * quantity
    return totalSugar/volume *efficiency;
  },
  totalColor: (volume, totalColor)=>{
    //color is Lovibond times grain quantity divided by volume
    return totalColor/volume;
  }
}