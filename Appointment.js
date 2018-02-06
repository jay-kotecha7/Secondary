/**
 * Appointment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      appointmentDate:{
        type:'date',
        required:true,
      },
      appointmentTime:{
        type:'time',
        required:true,
      },
      status:{
        type:'string',
      },
      userAppointment:{
        model:'User',
        required:true,
      },
      serviceAppointment:{
        model:'Service',
        required:'true',
      }
  }
};

