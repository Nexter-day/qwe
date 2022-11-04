const {Button, WebView, ui} = require('tabris');

let webView = new WebView({
  left: 0, top: 'prev() 8', right: 0, bottom: 0
}).appendTo(ui.contentView);

webView.url = 'https://www.pagos.tw/'
