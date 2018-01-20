var bittrex = require('node-bittrex-api');

bittrex.options({
  websockets: {
    onConnect: function() {
      console.log('Websocket connected');
      bittrex.websockets.subscribe(['BTC-ETH','BTC-SC','BTC-ZEN'], function(data) {
        if (data.M === 'updateExchangeState') {
          data.A.forEach(function(data_for) {
            console.log('Market Update for '+ data_for.MarketName, data_for);
          });
        }
      });
    },
    onDisconnect: function() {
      console.log('Websocket disconnected');
    }
  }
});
 
var websocketClient;
bittrex.websockets.client(function(client) {
  websocketClient = client;
});


/*bittrex.getticker( { market : 'BTC-LTC' }, function( data, err ) {
  console.log( data );
});

bittrex.getmarketsummary( { market : 'BTC-LTC'}, function( data, err ) {
  console.log( data );
});

bittrex.getorderbook({ market : 'BTC-LTC', depth : 10, type : 'both' }, function( data, err ) {
   	data.result.buy.forEach(function(dataset) { console.log(dataset); });
    data.result.sell.forEach(function(dataset) { console.log(dataset); });
});

bittrex.getmarkethistory({ market : 'BTC-LTC' }, function( data, err ) {
  console.log( data );
});*/