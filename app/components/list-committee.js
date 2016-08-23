import Ember from 'ember';

export default Ember.Component.extend({
  showSenate: true,
  houseCommittees: Ember.computed.filterBy('committees', 'chamber', 'house'),
  senateCommittees: Ember.computed.filterBy('committees', 'chamber', 'senate'),

  actions: {
    toggleChamber() {
      this.set('showSenate', !this.showSenate);

    } 
  }
});
