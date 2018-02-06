/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var Promise = require("bluebird");
var bcrypt = require("bcrypt");

module.exports = {

  attributes: {
    email: {
      type: "email",
      required: true,
      unique: true
    },
    password: {
      type: "string",
      minLength: 6,
      protected: true,
      required: true,
      columnName: "encryptedPassword"
    },
    contact:{
      type: "int",
      maxLength: 11,
      required: true,
    },
    address: {
      type:"longtext",
      required: true,
    },
    google:{
      type: "string",
    },
    facebook:{
      type:"string"
    },
    cancel:{
      type: "binary",
      required: true
    },
    roles:{                                                 // Many to Many = User <-> User-role <-> Role 
      collection:'Role',
      through:'user-role',
    },
    services:{
      collection:'Service',
      through:'service-provider',                          // Many to Many = User (provider) <-> Service-provider <-> Service
    },
    schedules:{                                             // One to One = User (provider) - Schedule
      collection:'Schedule',
      via:'owner',
    },
    userAppoinments:{                                       // One to Many = User(customer) - multiple Appointments
      collection:'Appointment',
      via:'userAppointment',
    },
    


  //   toJSON: function () {
  //     var obj = this.toObject();
  //     delete obj.password;
  //     return obj;
  //   }
  // },

  // beforeCreate: function(values, cb){
  //   bcrypt.hash(values.password, 10, function (err, hash) {
  //     if (err) return cb(err);
  //     values.password = hash;
  //     cb();
  //   });
  // },

  // comparePassword: function (password, user) {
  //   return new Promise(function (resolve, reject) {
  //     bcrypt.compare(password, user.password, function (err, match) {
  //       if (err) reject(err);

  //       if (match) {
  //         resolve(true);
  //       } else {
  //         reject(err);
  //       }
  //     })
  //   });
  }

};
