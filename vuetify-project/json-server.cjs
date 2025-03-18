// eslint-disable-next-line @typescript-eslint/no-require-imports
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
  static: './public'
});

server.use(middlewares);

server.get('/echo', (req, res) => {
  res.jsonp(req.query);
});

server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  /* const url = new URL(req.url, `http://${req.headers.host}`);
  
  if (req.method === 'GET' && url.pathname === '/projects') {
    const searchTerm = url.searchParams.get('search_term');
    
    if (searchTerm) {
      url.searchParams.delete('search_term');
      
      req.url = url.pathname + url.search;
      
      const originalSend = res.send;
      res.send = function(body) {
        try {
          const data = JSON.parse(body);
          if (Array.isArray(data)) {
            const term = searchTerm.toLowerCase();
            const filtered = data.filter(item => 
              (item.name && item.name.toLowerCase().includes(term)) ||
              (item.description && item.description.toLowerCase().includes(term)) ||
              (item.client && item.client.toLowerCase().includes(term))
            );
            return originalSend.call(this, JSON.stringify(filtered));
          }
        } catch (e) {
          console.error('Search middleware error:', e);
        }
        return originalSend.call(this, body);
      };
    }
  } */
  next();
});


router.render = (req, res) => {
  const totalCount = req.app.db.get('projects').value().length;
  res.header('X-Total-Count', totalCount.toString());
  res.header('Content-Type', 'application/json'); 
  res.jsonp(res.locals.data);
};

server.use('/api', router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
  console.log(`API base URL: http://localhost:${PORT}/api`);
  console.log(`Static files served from: ./public`);
});
