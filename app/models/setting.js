import DS from 'ember-data';

var Setting = DS.Model.extend({
  title: DS.attr('string'),
  isActive: DS.attr('boolean'),
  label: DS.attr('string'),
  value: DS.attr('string'),
  possibleValues: DS.attr()
});

Setting.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'background color',
      label: 'background',
      isActive: true,
      value: window.localStorage.getItem('background') || 'default',
      possibleValues: ['blood-orange', 'orange', 'amber', 'lime', 'green', 'nephritis', 'teal', 'cyan', 'light-blue', 'blue', 'purple', 'pink', 'red', 'pumpkin', 'midnight-blue', 'asbestos', 'emerald']
    }
  ]
});

export default Setting;
