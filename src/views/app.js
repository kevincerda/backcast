var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
    this.search = new SearchView();
    this.videoPlayer = new VideoPlayerView({model: this.videos.at(0), collection: this.videos});
    this.videoListView = new VideoListView({model: this.videos.at(0), collection: this.videos});
  },

  render: function() {
    this.$el.html(this.template());

    // new VideoListView({
    //   el: this.$('.video-list').append(new VideoListEntryView({
    //     model: this.videos.at(0)
    //   }).render().el
    //   )
    // }),

    // new VideoPlayerView({
    //   el: this.$('.player'),
    //   model: this.videos.at(0),
    //   collection: this.videos,
    // }).render();
  

    return this;
  },

  template: templateURL('src/templates/app.html')

});
