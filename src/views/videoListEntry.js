var VideoListEntryView = Backbone.View.extend({
  
  el: '.video-list',

  initialize() {
    this.render();
  },

  render: function() {
    this.$el.append(this.template(this.model));
    
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

// [videos].forEach(function(video) {
//  this.el.html(this.template())
//})