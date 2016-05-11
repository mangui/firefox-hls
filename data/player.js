
function playM3u8(url){
  if(Hls.isSupported()) {
      var video = document.getElementById('video');
      var hls = new Hls();
      var m3u8Url = decodeURIComponent(url)
      hls.loadSource(m3u8Url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
      });
      document.title = url;
    }
}

var hlsUrl = atob(window.location.href.split("#")[1]);
playM3u8(hlsUrl);
