import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model){
    this._super(controller, model);
    controller.set('toppings', this.store.findAll('topping'));
    controller.set('likes', Ember.A());
  },

  actions: {
    create(firstName, lastName, likes){
      if (!firstName || !lastName || !likes){
        console.log('missing input');
        this.get('notify').warning('missing input');
        return;
      }

      let friend = this.store.createRecord('friend', {
        firstName: firstName,
        lastName: lastName,
        likes: likes
      });

      console.log('friend', friend);

      friend.save().then(
        (record)=>{
          console.log('new friend saved', record);
          this.send('resetForm');
          this.get('notify').success("friend saved");
        },
        (error)=>{
          console.log('error saving friend', error);
          this.get('notify').error("friend not saved");
        }
      );
    },

    resetForm(){
      this.controller.setProperties({
        firstName: null,
        lastName: null,
        likes: Ember.A()
      });
    }
  }
});
