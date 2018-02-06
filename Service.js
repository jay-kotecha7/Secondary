/**
 * Service.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{
      type:"string",
      required: true,
    },
    duration:{
      type: "time",
      required:true,
    },
    providers:{                                             // Many to Mamy = Service - Users(provider)
      collection:'User',
      through:'user-role',
    },
    serviceAppointments:{                                   // One to Many = Service - Multiple Appointments
      collection:'Appointment',
      via:'serviceAppointment',
    }
  }
};

