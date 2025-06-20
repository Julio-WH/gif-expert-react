export const getGifs = async(category) => {
    const apikey = "oU8vsHX7SBF1iWSYWe6cnj06t5gDO0yH";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apikey }&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data = [] } = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url:img.images.downsized_medium.url
    }));

    return gifs;
}

export default getGifs