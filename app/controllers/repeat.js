import Ember from 'ember';
import Song from '../models/song';

export default Ember.ArrayController.extend({
  baseURL: 'https://www.googleapis.com/youtube/v3/search/',

  query: '',

  suggestions: [],

  videoKey: '7Nak3uwJTMc',

  youtubeURL: function () {
    return 'http://www.youtube.com/v/' + this.get('videoKey') + '?version=3&loop=1&autoplay=0&controls=0&autohide=1&playlist=' + this.get('videoKey');
  }.property('videoKey'),

  doQuery: function () {
    this.set('model', this.store.findQuery('song', this.get('query')));
  }.observes('query')
});
