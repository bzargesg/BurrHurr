module.exports = {
  fermentables: {
    //get the whole list
    get: ()=>{
      //returns array of json objects of this type
    },
    //post in a new instance
    post: (fermentable)=>{
      //fermentable is a json object resembling insertion
    },
    //put in to change an instance
    put: (id, fermentable)=>{
      //takes the table id of the instance
      //replaces the values given 
    },
    //delete an instance
    delete: (id)=>{
      //takes id of the instance and removes
    },
  },
  hops: {
  
  },
  yeasts: {

  },
  recipes: {

  },
  carbonation: {

  },
  styles: {

  },
  equipment: {

  },
  water_profiles: {

  },
  fermentation_profiles: {

  },
  carbonation_profiles: {

  },
  mash_profiles: {

  }
}