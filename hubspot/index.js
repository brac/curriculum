var HubspotClient = require('hubspot');

var hubspot = new HubspotClient();

/*
 * You can use either a key OR a token
 */
if (config.key) {
  client.useKey(config.key);
} else if (config.token) {
  client.useToken(config.token);
}

client.campaigns.get(function(err, res) {
  if (err) { throw err; }
  console.log(res);
});
