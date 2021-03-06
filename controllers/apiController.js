
/*** For GET /api route ***/
function index(req, res) {
  res.json({
    message: 'Welcome to tunely!',
    documentation_url: 'https://github.com/tam94131/tunely',
    base_url: 'localhost:3000',
    endpoints: [
      {
        method: 'GET', path: '/api', description: 'Describes available endpoints'
      }
    ]
  });
}

module.exports = {
  index: index
}
