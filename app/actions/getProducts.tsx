export default async function getProducts () {
  try{
    const result = await fetch('https://media.bbf-bike.de/shop/documents/data/dorofeev/data.json');
    const data = await result.json();
    return data as any[];
  } catch(e) {
    console.log(e);
  }
}