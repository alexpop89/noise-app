import DS from 'ember-data';

export default DS.Adapter.extend({
  host: 'https://www.googleapis.com/youtube/v3/search',

  order: 'rating',

  //videoDefinition: 'high',

  part: 'snippet',

  type: 'video',

  key: 'AIzaSyB3Sbx4KS1-4cai0BJMqLQmWZ6rs6OYRfQ',

  findQuery: function (typeName, typeClass, query) {
        return Ember.$.get(this.get('host'), {
        order: this.get('order'),
        videoDefinition: this.get('videoDefinition'),
        part: this.get('part'),
        type: this.get('type'),
        q: query,
        key: this.get('key')
      })
  }
});
