const apiKey = 'T3NCWTdzHG2eszV3PkJ4RwtVggnj0JJ8'; 


export default function getGifs({keyword = 'morty'} = {}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
    return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data} = response;
        const gifs = data.map(image => {
            const {
                id,
                images,
                title
            } = image;
            const url = images.downsized_medium.url;
            return {title, id, url};
        });
        return gifs;
    })
}