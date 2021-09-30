import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test-владелец-l');
  this.route('i-i-s-test-владелец-e',
  { path: 'i-i-s-test-владелец-e/:id' });
  this.route('i-i-s-test-владелец-e.new',
  { path: 'i-i-s-test-владелец-e/new' });
  this.route('i-i-s-test-робот-l');
  this.route('i-i-s-test-робот-e',
  { path: 'i-i-s-test-робот-e/:id' });
  this.route('i-i-s-test-робот-e.new',
  { path: 'i-i-s-test-робот-e/new' });
});

export default Router;
