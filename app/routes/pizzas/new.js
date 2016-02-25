import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model){
    this._super(controller, model);
    controller.set('allFriends', this.store.findAll('friend'));
    controller.set('toppings', Ember.A());
    controller.set('friends', Ember.A());
    console.log(controller.get('allFriends'));
  },

  actions: {
    create(name, friends, toppings){
      console.log(name, friends, toppings);
      if (!name || !friends || !toppings){
        console.log('missing input');
        this.get('notify').warning('missing input');
        return;
      }

      let pizza = this.store.createRecord('pizza', {
        name: name,
        friends: friends,
        toppings: toppings
      });

      console.log('pizza', pizza);

      pizza.save().then(
        (record)=>{
          console.log('new pizza saved', record);
          this.send('resetForm');
          this.get('notify').success("pizza saved");
        },
        (error)=>{
          console.log('error saving pizza', error);
          this.get('notify').error("pizza not saved");
        }
      );
    },

    resetForm(){
      this.controller.setProperties({
        name: null,
        toppings: Ember.A(),
        friends: Ember.A()
      });
    }
  }
});
