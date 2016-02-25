import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('pizza');
  },
  afterModel(model){
    if (!model.get('length')){
      this.transitionTo('pizzas.new');
    }
  }
});
