import Ember from 'ember';
import NotifyInitializer from 'pizza-order-app/initializers/notify';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | notify', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  NotifyInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
