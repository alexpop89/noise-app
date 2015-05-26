import Ember from 'ember';

export default Ember.ArrayController.extend({

  itemController: 'sound',

  playingURL: '',

  playingSound: '',

  /**
   * a sound item was selected
   *
   * @param  {sound} model - the sound model selected
   */
  itemSelected: function (soundObject) {
    var activeSound = this.get('model.content').findProperty('isActive', true);

    if (activeSound === soundObject) {
      soundObject.set('isActive', false);
      this.set('playingSound', '');
      this.set('playingURL', '');
    } else {
      if (activeSound) {
        activeSound.set('isActive', false);
      }
      soundObject.set('isActive', true);
      this.set('playingSound', soundObject.get('title'));
      this.set('playingURL', soundObject.get('url'));
    }
    soundObject.save();
  }
});
