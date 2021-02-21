import EmberRouter from '@ember/routing/router';
import config from 'i-mine-site/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('outlaws');
  this.route('bingo');
  this.route('cluedo');
});
