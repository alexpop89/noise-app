import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['index'],

  volume: 100,

  playingURL: Ember.computed.alias('controllers.index.playingURL'),

  bodyClass: Ember.computed.alias('controllers.index.playingSound'),

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
    Ember.$('body').attr('sound', this.get('bodyClass'));
  }.observes('bodyClass')
});
