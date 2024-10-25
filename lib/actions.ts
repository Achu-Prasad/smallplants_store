export const getCollections = async () => {
    const collections = await fetch (`${process.env.NEXT_PUBLIC_API_URL}/collections`);
    return collections.json()
}
export const getProducts = async () => {
    const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    return products.json();
}