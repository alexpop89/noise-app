import Ember from 'ember';
import Song from '../models/song';

export default Ember.ArrayController.extend({
  baseURL: 'https://www.googleapis.com/youtube/v3/search/',

  query: '',

  suggestions: [],

  videoKey: '7Nak3uwJTMc',

  itemSelected: function (model) {
    if (model.get('id')) {
      this.set('videoKey', model.get('id'));
    }
  },

  youtubeURL: function () {
    return 'http://www.youtube.com/v/' + this.get('videoKey') + '?version=3&loop=1&autoplay=1&controls=0&autohide=1&playlist=' + this.get('videoKey');
  }.property('videoKey'),

  doQuery: function () {
    if (this.get('query')) {
      this.set('model', this.store.findQuery('song', this.get('query')));
    } else {
      this.set('model', []);
    }
  }.observes('query')
});
