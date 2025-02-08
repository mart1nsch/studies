const url = require('url');
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'

const parsedUrl = new url.URL(address);

console.log(`host: `, parsedUrl.host);
console.log(`pathname: `, parsedUrl.pathname);
console.log(`search: `, parsedUrl.search);
console.log(`searchParams: `, parsedUrl.searchParams);
console.log(`searchParams get: `, parsedUrl.searchParams.get(`produtos`));