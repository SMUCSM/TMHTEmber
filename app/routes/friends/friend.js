import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('friend', params.id);
  },

  actions: {
    delete(friend){
      console.log('deleting', friend);
      friend.deleteRecord();
      friend.save();
      this.transitionTo('friends');
    }
  }
});
