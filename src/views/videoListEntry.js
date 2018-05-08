var VideoListEntryView = Backbone.View.extend({
  
  el: '.video-list',

  events: {
    'click .video-list-entry-title': 'handleClick',
  },

  handleClick: function() {
    this.model.select();
  },

  initialize() {
    this.render();
  },

  render: function() {
    this.$el.append(this.template(this.model));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

