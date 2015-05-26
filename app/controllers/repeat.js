import Ember from 'ember';

export default Ember.ArrayController.extend({
  baseURL: 'https://www.googleapis.com/youtube/v3/search/',

  query: '',

  suggestions: [],

  videoKey: '',


  /**
   * a video item was selected
   *
   * @param  {song} model - the song model selected
   */
  itemSelected: function (model) {
    if (model.get('id')) {
      this.set('videoKey', model.get('id'));
    }
    this.set('query', '');
  },


  /**
   * build the youtube iframe url
   *
   * @return {string}
   */
  youtubeURL: function () {
    return 'http://www.youtube.com/v/' + this.get('videoKey') + '?version=3&loop=1&autoplay=1&controls=1&autohide=1&playlist=' + this.get('videoKey');
  }.property('videoKey'),


  /**
   * perform a query on youtube to search for videos
   */
  doQuery: function () {
    Ember.run.next(this, function () {
      if (this.get('query')) {
        this.set('model', this.store.findQuery('song', this.get('query')));
      } else {
        this.set('model', []);
      }
    });
  }.observes('query')
});
