var windows = require("sdk/windows").browserWindows;
var { viewFor } = require("sdk/view/core");
var tabs = require("sdk/tabs");
var base64 = require("sdk/base64");

windows.on('open', function(window) {
  console.log("A window was opened");
});

windows.on('close', function(window) {
  console.log("A window was closed");
});

windows.on('activate', function(window) {
  console.log("A window was activated");
  viewFor(window).document.addEventListener('click', onclick);
});

windows.on('deactivate', function(window) {
  console.log("A window was deactivated");
  viewFor(window).document.removeEventListener('click', onclick);
});


function onclick(evt) {
  var url = evt.target.href;
  if (url && url.indexOf(".m3u") > 0) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log('hls URL found :' + url);
    var playerUrl = 'player.html#' + base64.encode(url);
    console.log('player URL:' + playerUrl);
    tabs.open(playerUrl);
  }
}

