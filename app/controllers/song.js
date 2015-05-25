import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    select: function () {
      this.get("parentController").itemSelected(this.model);
    }
  }
});
