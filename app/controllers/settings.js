import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['application'],

  background: '',

  text: '',

  updateBackgroundColor: function () {
    this.get('model.content').forEach(function(setting) {
      this.set(setting.get('label'), setting.get('value'));
    }.bind(this));
  }.observes('model')
});
