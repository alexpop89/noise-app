import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['sounds', 'repeat', 'settings'],

  volume: 100,

  youTubePlayer: null,

  playingURL: Ember.computed.alias('controllers.sounds.playingURL'),

  bodyClass: Ember.computed.alias('controllers.settings.background'),

  textClass: Ember.computed.alias('controllers.settings.text'),

  youtubeURL: Ember.computed.alias('controllers.repeat.youtubeURL'),

  settingsModel: function () {
    this.store.find('setting');
  },

  /**
   * check if the user is on the index page
   *
   * @return {boolean}
   */
  isOnIndexPage: function () {
    return this.currentRouteName === 'index';
  }.property('currentRouteName'),

  /**
   * check if the user is on the sounds page page
   *
   * @return {boolean}
   */
  isOnSoundsPage: function () {
    return this.currentRouteName === 'sounds';
  }.property('currentRouteName'),

  /**
   * check if the user is on the youtube player page
   *
   * @return {boolean}
   */
  showYoutubePlayer: function () {
    return this.currentRouteName === 'repeat';
  }.property('currentRouteName'),

  /**
   * check if the sounds player is muted
   *
   * @return {boolean}
   */
  muted: function () {
    return this.get('volume') === 0;
  }.property('volume'),

  /**
   * check if the sounds player is at low volume
   *
   * @return {boolean}
   */
  lowVolume: function () {
    return (!this.get('muted') && this.get('volume') < 50);
  }.property('volume', 'muted'),

  /**
   * return the audio volume value for sounds
   *
   * @return {boolean}
   */
  audioVolume: function () {
    return this.get('volume') / 100;
  }.property('volume'),

  /**
   * set a stored class value for the body element
   */
  setBodyClass: function () {
    if (this.get('bodyClass')) {
      Ember.$('body').attr('background', this.get('bodyClass'));
    } else {
      Ember.$('body').removeAttr('background');
    }
  }.observes('bodyClass'),

  /**
   * set a stored class value for the body text elements
   */
  setBodyTextClass: function () {
    if (this.get('textClass')) {
      Ember.$('body').attr('text', this.get('textClass'));
    } else {
      Ember.$('text').removeAttr('background');
    }
  }.observes('textClass')
});
