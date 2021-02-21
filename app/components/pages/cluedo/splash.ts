import Component from '@glimmer/component';
import { action } from '@ember/object';

interface SplashComponentArgs {}

export default class SplashComponent extends Component<SplashComponentArgs> {
  @action
  copyIpToClipboard() {
    navigator.clipboard.writeText('cluedo.imine.nl');
    const element: any = document.querySelector('#ip-display');
    element.classList.remove('clicked');
    void element.offsetWidth; // Reflow DOM to reset animation
    element.classList.add('clicked');
  }
}
