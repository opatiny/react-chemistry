export default async function getIdCodes(mf, options = {}) {
  const { maxResults } = options;
  const response = await fetch(
    `https://www.cheminfo.org/webservices/pmgJson?fields=idCode&mf=${mf}`,
    {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      method: 'GET',
    },
  );
  const results = await response.json();

  return results.slice(0, maxResults);
}
