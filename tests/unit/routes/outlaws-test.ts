import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | outlaws', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:outlaws');
    assert.ok(route);
  });
});
