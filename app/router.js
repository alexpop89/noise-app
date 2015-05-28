import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('/', {path: 'index'});
  this.resource('sounds', {path: 'sounds'});
  this.resource('songs', {path: 'songs'});
  this.resource('settings', {path: 'settings'});
});
