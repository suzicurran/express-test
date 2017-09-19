const express = require('express');
const app = express();

/* Root */
app.get('/', (request, response) => {
  response.send('Hello friend.');
});

/* Return the names of PAX friends serialized to JSON */
app.get('/paxfriends', (request, response) => {
  const friends = ['Auspex', 'Britality', 'Morte', 'Zii'];
  response.send(friends);
});

/* Redirect permanently */
app.get('/goodfriends', (request, response) => {
  response.redirect(301, '/paxfriends');
});

app.listen(3000, () => {
  console.log('Listening on port 3000. :3')
});
