var VideoPlayerView = Backbone.View.extend({
  el: '.player',

  initialize() {
    
    this.render();
    
  },
  
  render: function() {
    this.$el.html(this.template());
    console.log(this.videos)
 //   $('.player').append(new Video({model: this.collection.models[0].attribtues})
  //  $('.video-player-details').html(exampleVideoData[0].snippet.title);
 //   $('.video-player-list').html(this.videos.models[0].description);
 // console.log('hi', exampleVideoData[0].snippet.title)
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});

//'<div class="loading">Please wait...</div>'