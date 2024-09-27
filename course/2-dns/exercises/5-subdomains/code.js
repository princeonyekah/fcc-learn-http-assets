const bootdevAPIDomain = 'api.boot.dev';

// don't touch below this line
async function main() {
  const apiKey = generateKey(); // Generate API key
  const items = await getItemData(bootdevAPIDomain, apiKey); // Pass apiKey as an argument
  logItems(items);
}

main();

async function getItemData(domain, apiKey) { // Accept apiKey as a parameter
  const response = await fetch(`https://${domain}/v1/courses_rest_api/learn-http/items`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  });

  return await response.json(); // Await the JSON response
}

function generateKey() {
  const characters = 'ABCDEF0123456789';
  let result = '';
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function logItems(items) {
  for (const item of items) { // Use const here
    console.log(item.name);
  }
}