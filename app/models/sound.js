import DS from 'ember-data';

var Sound = DS.Model.extend({
  title: DS.attr('string'),
  isActive: DS.attr('boolean'),
  isFontAwesome: DS.attr('boolean'),
  url: DS.attr('string')
});

Sound.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'thunderstorm',
      isFontAwesome: false,
      isActive: false,
      url: '/sounds/thunderstorm.mp3'
    },

    {
      id: 2,
      title: 'rain',
      isFontAwesome: false,
      isActive: false,
      url: '/sounds/rain.mp3'
    },

    {
      id: 3,
      title: 'windy',
      isFontAwesome: false,
      isActive: false,
      url: '/sounds/windy.mp3'
    },

    {
      id: 4,
      title: 'tree',
      isFontAwesome: true,
      isActive: false,
      url: '/sounds/tree.mp3'
    },

    {
      id: 5,
      title: 'leaf',
      isFontAwesome: true,
      isActive: false,
      url: '/sounds/leaf.mp3'
    },

    {
      id: 6,
      title: 'fire',
      isFontAwesome: true,
      isActive: false,
      url: '/sounds/fire.mp3'
    },

    {
      id: 7,
      title: 'moon-o',
      isFontAwesome: true,
      isActive: false,
      url: '/sounds/moon-o.mp3'
    },

    {
      id: 8,
      title: 'coffee',
      isFontAwesome: true,
      isActive: false,
      url: '/sounds/coffee.mp3'
    }
  ]
});

export default Sound;
