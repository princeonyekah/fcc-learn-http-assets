// Define an async function to encapsulate your logic
async function main() {
  const apiKey = generateKey();
  const items = await getItemData(apiKey); // Pass apiKey as a parameter

  logItems(items);
}

// Don't touch below this line

async function getItemData(apiKey) {
  const response = await fetch('https://api.boot.dev/v1/courses_rest_api/learn-http/items', {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json'
    }
  });
  return response.json();
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
  for (const item of items) {
    console.log(item.name);
  }
}

// Call the main function to execute the code
main();