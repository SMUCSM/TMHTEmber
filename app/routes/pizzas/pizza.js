import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('pizza', params.id);
  },

  actions: {
    delete(pizza){
      console.log('deleting', pizza);
      pizza.deleteRecord();
      pizza.save();
      this.transitionTo('pizzas');
    }
  }
});
