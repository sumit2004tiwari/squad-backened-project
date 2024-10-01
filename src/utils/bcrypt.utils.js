const Bcrypt = require('bcrypt');

const bcrypt = async(password)=>{
   return await Bcrypt.hash(password , 10)
}

module.exports = {bcrypt}