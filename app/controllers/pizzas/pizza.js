import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  baseCost: 15,

  toppingCost: computed('model.toppings.[]', function(){
    let toppings = this.get('model.toppings');
    let cost = toppings.mapBy('cost');
    return _.reduce(cost, (m,n)=>{return m + n;}, 0);
  }),

  tax: computed('toppingCost', 'baseCost', function(){
    return Math.ceil((this.get('baseCost') + this.get('toppingCost')) * 0.15);
  }),

  totalCost: computed('toppingCost', 'baseCost', 'tax', function(){
    return this.get('baseCost') + this.get('toppingCost') + this.get('tax');
  }),
});
