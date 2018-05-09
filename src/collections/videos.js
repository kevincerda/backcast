var Videos = Backbone.Collection.extend({

  model: Video,



});

Videos.prototype.fetch = function() {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    query: '',
    maxResults: 25,
    key: 'AIzaSyCB2GkcnPOCDc8VWDt4lRhxeYHd5j26FwE',
    success: function () {
      console.log('fetch');
    },
    error: function() {
      console.error('fail');
    } 
  });
};


// buildApiRequest('GET',
//                 '/youtube/v3/search',
//                 {'maxResults': '25',
//                  'part': 'snippet',
//                  'q': 'surfing',
//                  'type': ''});