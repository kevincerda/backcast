var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.search = new SearchView();
    this.videoPlayer = new VideoPlayerView();
    this.videoListView = new VideoListView();
    this.videos = new Videos();
    this.videoListEntry = new VideoListEntryView();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});

