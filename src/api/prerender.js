const prerender = require('prerender-node');

module.exports = (req, res) => {
  prerender.set('prerenderToken', 'OvMQhBILHoSRlkPCilt3');
  
  // Forward the request to Prerender.io and receive the prerendered page
  prerender(req, res, () => {
    // Fallback: if not prerendered, continue to the next middleware
    res.status(404).send('Not found');
  });
};