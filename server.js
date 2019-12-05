const { angularUniversal } = require('angular-universal-express');
const express = require('express');

const app = express();
/* 
  I usually copy my Angular CLI "dist" build into my "dist-server" build 
  and serve them as static files so they aren't treated as dynamic routes.
*/
app.use(express.static('C:/Dev/fusion-h2f/dist/demo'));
app.get(
  '/*',
  angularUniversal({
    index: 'index.html',
    main: 'main.js',
    enableProdMode: true,
  })
);
app.listen(3005, () => {
  console.log('Listening on 3005');
});
