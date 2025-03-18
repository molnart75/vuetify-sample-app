// json-server.cjs
// eslint-disable-next-line @typescript-eslint/no-require-imports
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
  static: './public'
});

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
server.use(jsonServer.bodyParser);

// Add custom middleware for projects pagination and filtering
server.use((req, res, next) => {
  // Continue to JSON Server router
  next();
});

// json-server.cjs - add this before server.use('/api', router);
// Customize router response to include total count
router.render = (req, res) => {
  // Always include total count even for filtered data
  const totalCount = req.app.db.get('projects').value().length;
  res.header('X-Total-Count', totalCount.toString());
  res.jsonp(res.locals.data);
};

// Use default router
server.use('/api', router);

// Start server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
  console.log(`API base URL: http://localhost:${PORT}/api`);
  console.log(`Static files served from: ./public`);
});
