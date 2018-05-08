var VideoListView = Backbone.View.extend({
  el: '.list',

  initialize() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(video => $('.video-list').append(new VideoListEntryView({model: video})));
    // this.collection.each(this.renderVideo, this); 
     

    return this;
  },

  // renderVideo: function(video) {
  //  new VideoListEntryView({
  //    this.$('.video-list').append(
  //      new VideoListEntryView({
  //        model: video
  //      }).render().el
  //       )
  //     })
  //   },

  template: templateURL('src/templates/videoList.html')

});


