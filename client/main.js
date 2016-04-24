import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '.kpop/server/main.js';

// subscribing grabbing data from main.js History MongoDB collection
if(Meteor.isClient){
  Meteor.subscribe('searchHistory');
  return History.find();
  
  // template function to use History MongoDB collection
  Template.searchHistory.helpers({
    histories: function() {
      console.log('we are in the helper');
      Histories.find();
    }
  })
}