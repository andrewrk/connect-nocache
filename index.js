module.exports = function() {
  return noCache;
};
function noCache(req, resp, next) {
  resp.setHeader('Cache-Control', 'no-cache, no-store, max-age=0');
  next();
}
