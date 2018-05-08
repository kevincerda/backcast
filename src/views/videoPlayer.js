var VideoPlayerView = Backbone.View.extend({
  el: '.player',

  initialize() {
    this.listenTo(this.collection, 'select', this.selectVideo);
    this.render();
    
  },
  
  selectVideo: function(video) {
    this.model = video;
    console.log(this.model);
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});

