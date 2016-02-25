import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  rev: attr('string'),
  name: attr('string'),
  friends: hasMany('friend'),
  toppings: hasMany('topping')
});
