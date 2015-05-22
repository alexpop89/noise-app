import DS from 'ember-data';

var Song = DS.Model.extend({
  title: DS.attr('string'),
  thumbnail: DS.attr('string'),
  videoKey: DS.attr('string')
});

Song.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'test',
      thumbnail: 'thumb',
      videoKey: 'key'
    }
  ]
});

export default Song;
