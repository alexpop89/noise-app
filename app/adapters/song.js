import DS from 'ember-data';
import Ember from 'ember';

export default DS.Adapter.extend({
  host: 'https://www.googleapis.com/youtube/v3/search',

  orderBy: 'viewCount',

  part: 'snippet',

  maxResults: '15',

  type: 'video',

  key: 'AIzaSyB3Sbx4KS1-4cai0BJMqLQmWZ6rs6OYRfQ',

  findQuery: function (typeName, typeClass, query) {
    return Ember.$.get(this.get('host'), {
      orderBy         : this.get('orderBy'),
      videoDefinition : this.get('videoDefinition'),
      part            : this.get('part'),
      type            : this.get('type'),
      maxResults      : this.get('maxResults'),
      q               : query,
      key             : this.get('key')
    });
  }
});
