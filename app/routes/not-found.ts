import Transition from '@ember/routing/-private/transition';
import Route from '@ember/routing/route';

export default class NotFound extends Route {
  beforeModel(transition: Transition): any {
    this.replaceWith('/');
    return super.beforeModel(transition);
  }
}
