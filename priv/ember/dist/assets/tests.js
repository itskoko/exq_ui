'use strict';

define('exqui/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/exq-stat.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/exq-stat.js should pass ESLint\n\n');
  });

  QUnit.test('components/exq-stats.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/exq-stats.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/failures/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/failures/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/processes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/processes/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/queues/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/queues/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/retries/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/retries/index.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/scheduled/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/scheduled/index.js should pass ESLint\n\n');
  });

  QUnit.test('models/custom-inflector-rules.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/custom-inflector-rules.js should pass ESLint\n\n');
  });

  QUnit.test('models/failure.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/failure.js should pass ESLint\n\n');
  });

  QUnit.test('models/job.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/job.js should pass ESLint\n\n');
  });

  QUnit.test('models/process.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/process.js should pass ESLint\n\n');
  });

  QUnit.test('models/queue.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/queue.js should pass ESLint\n\n');
  });

  QUnit.test('models/realtime.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/realtime.js should pass ESLint\n\n');
  });

  QUnit.test('models/retry.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/retry.js should pass ESLint\n\n');
  });

  QUnit.test('models/scheduled.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/scheduled.js should pass ESLint\n\n');
  });

  QUnit.test('models/stat.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/stat.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/failures/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/failures/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/processes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/processes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/queues/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/queues/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/queues/show.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/queues/show.js should pass ESLint\n\n');
  });

  QUnit.test('routes/retries/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/retries/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/scheduled/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/scheduled/index.js should pass ESLint\n\n');
  });
});
define('exqui/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('exqui/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'exqui/tests/helpers/start-app', 'exqui/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _exquiTestsHelpersStartApp, _exquiTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _exquiTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _exquiTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('exqui/tests/helpers/resolver', ['exports', 'exqui/resolver', 'exqui/config/environment'], function (exports, _exquiResolver, _exquiConfigEnvironment) {

  var resolver = _exquiResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _exquiConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _exquiConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('exqui/tests/helpers/start-app', ['exports', 'ember', 'exqui/app', 'exqui/config/environment'], function (exports, _ember, _exquiApp, _exquiConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _exquiConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _exquiApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('exqui/tests/test-helper', ['exports', 'exqui/tests/helpers/resolver', 'ember-qunit'], function (exports, _exquiTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_exquiTestsHelpersResolver['default']);
});
define('exqui/tests/tests.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
require('exqui/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
