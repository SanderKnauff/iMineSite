import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | navigation-bar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<NavigationBar/>`);

    assert.equal(this.element.firstChild?.childNodes[1].textContent, 'Cluedo');
    assert.equal(this.element.firstChild?.childNodes[3].textContent, 'Outlaws');
    assert.equal(this.element.firstChild?.childNodes[5].textContent, 'Bingo');
  });
});
