
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('burrhurr', 'student', 'student', {
//   host: 'localhost',
//   dialect: 'postgres',
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });
// sequelize.authenticate()
// .then(()=>{
//   console.log('Connected to database Succesfully');
// })
// .catch(err=>{
//   console.error('Unable to connect to the database:',err)
// });
const model = require('../models');

const fermentables = model.fermentables;
const recipes = model.recipes;

// var selectAll = function() {

// };

module.exports = {
  fermentables: {
    findAll: ()=>{
      return fermentables.findAll();
    },
    add: (fermentable)=>{
      console.log('add',fermentable)
      return fermentables.sequelize.transaction(t => {
        return fermentables.upsert(fermentable,{transaction: t,fields: 'name'}).then(ferment => {
          console.log('insertion successfull');
        })
      })
    },
    delete: (id)=>{
      return fermentables.destroy({
        where: {
          id: id
        }
      })
    }
  },
}
