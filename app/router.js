import EmberRouter from '@ember/routing/router';
import config from 'imine-site/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('cluedo', { path: '/' });
  this.route('cluedo');
  this.route('outlaws');
  this.route('bingo');
});
