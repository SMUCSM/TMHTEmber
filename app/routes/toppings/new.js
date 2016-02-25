import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    create(name, cost){
      if (!name || !cost){
        console.log('missing input');
        this.get('notify').warning('missing input');
        return;
      }

      let topping = this.store.createRecord('topping', {
        name: name,
        cost: cost
      });

      console.log('topping', topping);

      topping.save().then(
        (record)=>{
          console.log('new topping saved', record);
          this.send('resetForm');
          this.get('notify').success("topping saved");
        },
        (error)=>{
          console.log('error saving topping', error);
          this.get('notify').error("topping not saved");
        }
      );
    },

    resetForm(){
      this.controller.setProperties({
        name: null,
        cost: null
      });
    }
  }
});
