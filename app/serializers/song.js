import DS from 'ember-data';

export default DS.Serializer.extend({
  extract: function (store, primaryType, payload) {
    debugger;

    var data = [];

    payload.items.map(function(songItem) {
      data.push({
        id: songItem.id.videoId,
        title: songItem.snippet.title,
        thumbnail: songItem.snippet.thumbnails.default.url,
        videoKey: songItem.id.videoId
      });
    });

    return data;
  }
});
