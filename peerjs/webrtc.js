window.onload = function() {
  var peer = new Peer({key: 'klgy15uvondpwrk9'});

  peer.on('open', function(id) {
    console.log('My peer ID is: ' + id);
  });

  peer.on('connection', function(conn) {
    conn.on('open', function() {

      console.log('connection established');
      window.getConn = function() {
        return conn;
      };

      // Receive messages
      conn.on('data', function(data) {
        console.log('Received', data);
      });

      // Send messages
      conn.send('Hello!');
    });
  });

  window.getPeer = function() {
    return peer;
  };

  window.onunload = window.onbeforeunload = function() {
    peer.disconnect();
    peer.destroy();
  };
  console.log("start");
  console.log("var conn = peer.connect('gxz440s54qiu23xr');")
};
