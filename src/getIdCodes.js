export default async function getIdCodes(mf) {
  const response = await fetch(
    `https://www.cheminfo.org/webservices/pmgJson?fields=idCode&mf=${mf}`,
    {
      headers: {
        accept: '*/*',
        'accept-language': 'en-US,en;q=0.9,fr;q=0.8,ht;q=0.7',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded',
        pragma: 'no-cache',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
      referrer:
        'https://www.cheminfo.org/flavor/structuralAnalysis/Unsaturation/Isomer_generator/index.html',
      referrerPolicy: 'no-referrer-when-downgrade',
      body: null,
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    },
  );
  return response.json();
}
