// O módulo url serve para decompor uma url que passamos para o método parse
import url from "url";

url;

const address = "https://www.meusite.com.br/catalog?produtos=cadeira";
const parsedUrl = new url.URL(address);

console.log(parsedUrl.post);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get("produtos"));
