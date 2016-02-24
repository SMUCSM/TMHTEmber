import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('toppings', function() {
    this.route('new');
    this.route('topping', { path: '/:id' });
  });
});

export default Router;
