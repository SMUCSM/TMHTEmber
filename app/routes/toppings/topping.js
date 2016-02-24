import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('topping', params.id);
  },

  actions: {
    delete(topping){
      console.log('deleting', topping);
      topping.deleteRecord();
      topping.save();
      this.transitionTo('toppings');
    }
  }
});
