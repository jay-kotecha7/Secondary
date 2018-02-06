/**
 * Schedule.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    week_days:{
      type:'string',
      required:true,
    },
    isAvailable:{
      type:'binary',
      required:true,
    },
    start_hour:{
      type:'time',
      required:true,
    },
    end_hour:{
      type:'time',
      required:true,
    },
    owner:{
      model:'User',
      required:true,
      unique:true,
    }

  }
};

