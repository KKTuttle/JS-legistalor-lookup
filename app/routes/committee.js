import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    console.log(this.get('chamber'));
    var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=44f6063f8fd34c5dabe368d6a4d2750b&per_page=all';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  },
});
