export default async function handler(req, res) {
  const num = req.query.num;

  if (!num) {
    return res.status(400).json({
      success: false,
      message: "num parameter missing"
    });
  }

  const API_KEY = "nxsahilx928x926";

  const response = await fetch(
    `https://ft-osint-api.duckdns.org/api/number?key=${API_KEY}&num=${encodeURIComponent(num)}`
  );

  const data = await response.json();

  // Response edit
  data.proxy = true;
  data.owner = "My API";

  res.status(200).json(data);
}
