import fetch from "node-fetch"; 

//There you have, the top level await, not needing a relative async to work
const response = await fetch("https://api.escuelajs.co/api/v1/products"); 

//It's important to set awaits, as the fetched API data will take time, otherwise the following assignation:
const products = await response.json(); 
//- would throw back an error.

export { products };