const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost', // Replace with your PHP server URL
      changeOrigin: true,
    })
  );
};