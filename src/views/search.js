var SearchView = Backbone.View.extend({
  el: '.search',

  initialize() {
    this.render();
  },
  
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});