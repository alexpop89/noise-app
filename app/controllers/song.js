import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {

    /**
     * song was selected    
     */
    select: function () {
      this.get("parentController").itemSelected(this.model);
    }
  }
});
