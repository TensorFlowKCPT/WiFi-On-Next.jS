async function handler(req, res) {
  console.log(req.body);
  const targetUrl = `/Tariffs`;
  res.redirect(307, targetUrl);
}
