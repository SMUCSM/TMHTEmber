import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('friend');
  },
  afterModel(model){
    if (!model.get('length')){
      this.transitionTo('friends.new');
    }
  }
});
