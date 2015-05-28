import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    colorSelected: function (model, color) {
      model.set('value', color);
      model.save();
      window.localStorage.setItem(model.get('label'), color);
      this.get('parentController').set(model.get('label'), color);
    }
  }
});
