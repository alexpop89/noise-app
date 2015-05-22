import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['sounds', 'repeat'],

  volume: 100,

  playingURL: Ember.computed.alias('controllers.sounds.playingURL'),

  bodyClass: Ember.computed.alias('controllers.sounds.playingSound'),

  youtubeURL: Ember.computed.alias('controllers.repeat.youtubeURL'),

  isOnIndexPage: function () {
    return this.currentRouteName === 'index';
  }.property('currentRouteName'),

  showYoutubePlayer: function () {
    return this.currentRouteName === 'repeat';
  }.property('currentRouteName'),

  muted: function () {
    return this.get('volume') === 0;
  }.property('volume'),

  lowVolume: function () {
    return (!this.get('muted') && this.get('volume') < 50);
  }.property('volume', 'muted'),

  audioVolume: function () {
    return this.get('volume') / 100;
  }.property('volume'),

  setBodyClass: function () {
    if (this.get('bodyClass')) {
      Ember.$('body').attr('sound', this.get('bodyClass'));
    } else {
      Ember.$('body').removeAttr('sound');
    }
  }.observes('bodyClass')
});
