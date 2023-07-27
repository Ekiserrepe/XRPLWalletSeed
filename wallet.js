//[EN] This code will help to get a seed for a new wallet. It's not a safe way to generate one if you store this seed in your pc or you pc is infected. DON'T SHARE YOUR SEED. More info: https://xrpl.org/get-started-using-javascript.html 
//[ES] Este código te ayudara a generar una semilla para una nueva cartera. No es un sistema seguro para generar una si almacenas esta semilla en tu pc o si tu pc está infectado. NO COMPARTAS TU SEED. Más info: https://xrpl.org/get-started-using-javascript.html 

//[EN] Importing xrpl.js library, type "npm install xrpl" on terminal, after installing Node.js
//[ES] Importamos la librería xrpl.js, escribe "npm install xrpl" en el terminal, después de instalar Node.js
const xrpl = require("xrpl")

async function main() {
//[EN] Choose a public server from this list if you don't have rippled server running: https://xrpl.org/public-servers.html
//[ES] Elige un servidor pública de esta lista si no tienes un servidor rippled corriendo: https://xrpl.org/public-servers.html
const client = new xrpl.Client("wss://s1.ripple.com/")
await client.connect()

const your_new_wallet = xrpl.Wallet.generate()
//[EN] The console log will provide all details around your new wallet. We will take the seed.
//[ES] La consola mostrará todos los detalles de la nueva cartera. Nos interesa la seed.
console.log("All our wallet details // Todos los detalles de nuestra cartera son:",your_new_wallet)
console.log("Our new wallet seed // La semilla de nuestra cartera es:",your_new_wallet.seed)

client.disconnect()
}

main()