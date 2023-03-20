const axios = require('axios');

const email = process.env.RMS_USER;
const url = process.env.RMS_URL;

async function reqWallet(data) {
  console.log('calling RMS service api...');
  try {
    const response = await axios({
      'method': 'POST',
      'url': url,
      'headers': {
        'Content-Type': 'application/json'
      },
      'data': JSON.stringify(data)
    });
    let result = response.data;
    console.log('INFO: Response data is ->', result);
    return result;    
  } catch (e) {
    console.log(e);
  }
}

async function init() {
  let data = {
    	 email: email,
    	 tokenSymbol: 'WETH',
    	 fillChain: 1
    }
  let response = await reqWallet(data);
  console.log(response);
}
console.log(new Date().toISOString(), 'INIT: v0.0.1a If we made it this far we should eventually see some events...');
init();
