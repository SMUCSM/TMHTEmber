import DS from 'ember-data';
import Ember from 'ember';

const { attr, hasMany } = DS;
const { computed } = Ember;

export default DS.Model.extend({
  rev: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  likes: hasMany('topping'),

  fullName: computed('firstName', 'lastName', function(){
    return this.get('firstName') + " " + this.get('lastName');
  })

});
