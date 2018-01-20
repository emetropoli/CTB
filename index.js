
var bittrex = require('node-bittrex-api');

bittrex.getticker( { market : 'BTC-LTC' }, function( data, err ) {
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
});