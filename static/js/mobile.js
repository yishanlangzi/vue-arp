window.tokenIos = "index";
window.isIos = false;
var u = navigator.userAgent;
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
// if(isiOS) {
//   window.webkit.messageHandlers.AppModel.postMessage({events: 'tokenEvents'});
//   window.isIos = true;
// }
window.isIos = true;
window.tokenIos = "bZhgnWStWQ3r";
function setTokenByIos (token) {
  window.tokenIos = token
}
