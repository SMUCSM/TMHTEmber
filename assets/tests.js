define('pizza-order-app/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('pizza-order-app/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('pizza-order-app/tests/controllers/pizzas/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/pizzas');
  QUnit.test('controllers/pizzas/new.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/pizzas/new.js should pass jshint.');
  });
});
define('pizza-order-app/tests/controllers/pizzas/pizza.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/pizzas');
  QUnit.test('controllers/pizzas/pizza.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/pizzas/pizza.js should pass jshint.');
  });
});
define('pizza-order-app/tests/electron', ['exports'], function (exports) {
    /* jshint undef: false */

    var BrowserWindow = require('browser-window');
    var app = require('app');
    var mainWindow = null;

    app.on('window-all-closed', function onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('ready', function onReady() {
        mainWindow = new BrowserWindow({
            width: 800,
            height: 600
        });

        delete mainWindow.module;

        if (process.env.EMBER_ENV === 'test') {
            mainWindow.loadUrl('file://' + __dirname + '/index.html');
        } else {
            mainWindow.loadUrl('file://' + __dirname + '/dist/index.html');
        }

        mainWindow.on('closed', function onClosed() {
            mainWindow = null;
        });
    });

    /* jshint undef: true */
});
define('pizza-order-app/tests/electron.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('electron.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'electron.js should pass jshint.');
  });
});
define('pizza-order-app/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('pizza-order-app/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('pizza-order-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'pizza-order-app/tests/helpers/start-app', 'pizza-order-app/tests/helpers/destroy-app'], function (exports, _qunit, _pizzaOrderAppTestsHelpersStartApp, _pizzaOrderAppTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _pizzaOrderAppTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _pizzaOrderAppTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('pizza-order-app/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('pizza-order-app/tests/helpers/resolver', ['exports', 'pizza-order-app/resolver', 'pizza-order-app/config/environment'], function (exports, _pizzaOrderAppResolver, _pizzaOrderAppConfigEnvironment) {

  var resolver = _pizzaOrderAppResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _pizzaOrderAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _pizzaOrderAppConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('pizza-order-app/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('pizza-order-app/tests/helpers/start-app', ['exports', 'ember', 'pizza-order-app/app', 'pizza-order-app/config/environment'], function (exports, _ember, _pizzaOrderAppApp, _pizzaOrderAppConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _pizzaOrderAppConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _pizzaOrderAppApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('pizza-order-app/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('pizza-order-app/tests/initializers/notify.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - initializers');
  QUnit.test('initializers/notify.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/notify.js should pass jshint.');
  });
});
define('pizza-order-app/tests/models/friend.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/friend.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/friend.js should pass jshint.');
  });
});
define('pizza-order-app/tests/models/pizza.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/pizza.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/pizza.js should pass jshint.');
  });
});
define('pizza-order-app/tests/models/topping.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/topping.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/topping.js should pass jshint.');
  });
});
define('pizza-order-app/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('pizza-order-app/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('pizza-order-app/tests/routes/friends/friend.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/friends');
  QUnit.test('routes/friends/friend.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/friends/friend.js should pass jshint.');
  });
});
define('pizza-order-app/tests/routes/friends/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/friends');
  QUnit.test('routes/friends/new.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/friends/new.js should pass jshint.');
  });
});
define('pizza-order-app/tests/routes/friends.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/friends.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/friends.js should pass jshint.');
  });
});
define('pizza-order-app/tests/routes/pizzas/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/pizzas');
  QUnit.test('routes/pizzas/new.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pizzas/new.js should pass jshint.');
  });
});
define('pizza-order-app/tests/routes/pizzas/pizza.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/pizzas');
  QUnit.test('routes/pizzas/pizza.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pizzas/pizza.js should pass jshint.');
  });
});
define('pizza-order-app/tests/routes/pizzas.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/pizzas.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/pizzas.js should pass jshint.');
  });
});
define('pizza-order-app/tests/routes/toppings/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/toppings');
  QUnit.test('routes/toppings/new.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/toppings/new.js should pass jshint.');
  });
});
define('pizza-order-app/tests/routes/toppings/topping.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/toppings');
  QUnit.test('routes/toppings/topping.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/toppings/topping.js should pass jshint.');
  });
});
define('pizza-order-app/tests/routes/toppings.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/toppings.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/toppings.js should pass jshint.');
  });
});
define('pizza-order-app/tests/test-helper', ['exports', 'pizza-order-app/tests/helpers/resolver', 'ember-qunit'], function (exports, _pizzaOrderAppTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_pizzaOrderAppTestsHelpersResolver['default']);
});
define('pizza-order-app/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('pizza-order-app/tests/unit/controllers/pizzas/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:pizzas/new', 'Unit | Controller | pizzas/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('pizza-order-app/tests/unit/controllers/pizzas/new-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/pizzas');
  QUnit.test('unit/controllers/pizzas/new-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/pizzas/new-test.js should pass jshint.');
  });
});
define('pizza-order-app/tests/unit/controllers/pizzas/pizza-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:pizzas/pizza', 'Unit | Controller | pizzas/pizza', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('pizza-order-app/tests/unit/controllers/pizzas/pizza-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/controllers/pizzas');
  QUnit.test('unit/controllers/pizzas/pizza-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/pizzas/pizza-test.js should pass jshint.');
  });
});
define('pizza-order-app/tests/unit/initializers/notify-test', ['exports', 'ember', 'pizza-order-app/initializers/notify', 'qunit'], function (exports, _ember, _pizzaOrderAppInitializersNotify, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | notify', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _pizzaOrderAppInitializersNotify['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('pizza-order-app/tests/unit/initializers/notify-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/initializers');
  QUnit.test('unit/initializers/notify-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/notify-test.js should pass jshint.');
  });
});
define('pizza-order-app/tests/unit/models/friend-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('friend', 'Unit | Model | friend', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('pizza-order-app/tests/unit/models/friend-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/friend-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/friend-test.js should pass jshint.');
  });
});
define('pizza-order-app/tests/unit/models/pizza-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('pizza', 'Unit | Model | pizza', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('pizza-order-app/tests/unit/models/pizza-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/pizza-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/pizza-test.js should pass jshint.');
  });
});
define('pizza-order-app/tests/unit/models/topping-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('topping', 'Unit | Model | topping', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('pizza-order-app/tests/unit/models/topping-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/topping-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/topping-test.js should pass jshint.');
  });
});
define('pizza-order-app/tests/unit/routes/friends/friend-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:friends/friend', 'Unit | Route | friends/friend', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pizza-order-app/tests/unit/routes/friends/friend-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/friends');
  QUnit.test('unit/routes/friends/friend-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/friends/friend-test.js should pass jshint.');
  });
});
define('pizza-order-app/tests/unit/routes/friends/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:friends/new', 'Unit | Route | friends/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pizza-order-app/tests/unit/routes/friends/new-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/friends');
  QUnit.test('unit/routes/friends/new-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/friends/new-test.js should pass jshint.');
  });
});
define('pizza-order-app/tests/unit/routes/friends-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:friends', 'Unit | Route | friends', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pizza-order-app/tests/unit/routes/friends-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/friends-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/friends-test.js should pass jshint.');
  });
});
define('pizza-order-app/tests/unit/routes/pizzas/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:pizzas/new', 'Unit | Route | pizzas/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pizza-order-app/tests/unit/routes/pizzas/new-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/pizzas');
  QUnit.test('unit/routes/pizzas/new-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pizzas/new-test.js should pass jshint.');
  });
});
define('pizza-order-app/tests/unit/routes/pizzas/pizza-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:pizzas/pizza', 'Unit | Route | pizzas/pizza', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pizza-order-app/tests/unit/routes/pizzas/pizza-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/pizzas');
  QUnit.test('unit/routes/pizzas/pizza-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pizzas/pizza-test.js should pass jshint.');
  });
});
define('pizza-order-app/tests/unit/routes/pizzas-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:pizzas', 'Unit | Route | pizzas', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pizza-order-app/tests/unit/routes/pizzas-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/pizzas-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/pizzas-test.js should pass jshint.');
  });
});
define('pizza-order-app/tests/unit/routes/toppings/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:toppings/new', 'Unit | Route | toppings/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pizza-order-app/tests/unit/routes/toppings/new-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/toppings');
  QUnit.test('unit/routes/toppings/new-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/toppings/new-test.js should pass jshint.');
  });
});
define('pizza-order-app/tests/unit/routes/toppings/topping-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:toppings/topping', 'Unit | Route | toppings/topping', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pizza-order-app/tests/unit/routes/toppings/topping-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/toppings');
  QUnit.test('unit/routes/toppings/topping-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/toppings/topping-test.js should pass jshint.');
  });
});
define('pizza-order-app/tests/unit/routes/toppings-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:toppings', 'Unit | Route | toppings', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('pizza-order-app/tests/unit/routes/toppings-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes');
  QUnit.test('unit/routes/toppings-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/toppings-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('pizza-order-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map