import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('topping');
  },
  afterModel(model){
    if (!model.get('length')){
      this.transitionTo('toppings.new');
    }
  }
});
