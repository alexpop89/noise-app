import DS from 'ember-data';

var Song = DS.Model.extend({
  title: DS.attr('string'),
  thumbnail: DS.attr('string'),
  videoKey: DS.attr('string')
});

export default Song;
