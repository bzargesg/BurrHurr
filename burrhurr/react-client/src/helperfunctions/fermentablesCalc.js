module.exports = {
  gravityByExtract: (extract)=>{
    //use fine grind extract
    //returns gravity contribution in PPG
      //pound/gallon/gravity unit
    return 46 * extract;
  },
}