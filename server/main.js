import { Meteor } from 'meteor/meteor';

Histories = new Mongo.Collection('histories');

Meteor.startup(() => {
  if( Meteor.isServer){
    console.log('we are in the server');
    // console.log(Histories);
    if( Histories.find().count() == 0){
      var list = [
      { history: 'SNSD'},
      { history: 'yaemin'},
      { history: 'Exo'}
      ];
      
      for(var i = 0; i < list.length; i++){
        Histories.insert(list[i]);
      }
    }
  // publishing Histories to client side main.js
  Meteor.publish('searchHistory', function(){
    return Histories.find();
  })
  }
});
