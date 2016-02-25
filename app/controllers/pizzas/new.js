import Ember from 'ember';
import DS from 'ember-data';

const { computed } = Ember;
const { Promise } = Ember.RSVP;
const { PromiseArray } = DS;


export default Ember.Controller.extend({
  applicableToppings: computed('friends.[]', function(){
    // Reset selected toppings
    Ember.run.scheduleOnce('afterRender', ()=>{
      this.set('toppings', Ember.A());
    });

    // get the friends and their liked topping ids
    let friends = this.get('friends');
    let allLikedToppings = friends.mapBy('likes');
    let allToppingIds = allLikedToppings.map((toppings)=>{
      return toppings.mapBy('id').toArray();
    });

    //get shared topping ids
    let applicableToppingIds = _.intersection.apply(this, allToppingIds);

    // Fetch from database
    let promise = Promise.all(applicableToppingIds.map((toppingId)=>{
      return this.store.findRecord('topping', toppingId);
    }));
    return PromiseArray.create({promise: promise});
  }),
});
