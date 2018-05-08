var VideoListEntryView = Backbone.View.extend({
  
  el: '.video-list',

  initialize() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    Array.prototype.slice.call(window.exampleVideoData).forEach(video => {
      this.$el.append(this.template());
      console.log(video.snippet);
    });
    //console.log(this)
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

// [videos].forEach(function(video) {
//  this.el.html(this.template())
//})