var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
 //   this.video = new Video(exampleVideoData[0])
 //   this.video = new Video()
    this.render();
    this.search = new SearchView();
    this.videoPlayer = new VideoPlayerView();
    // console.log('app', this.videos.models[0])
    this.videoListView = new VideoListView({collection: this.videos});
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});

