const apikey = 'dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa'

export default function getGifs({keyword='homero'}={}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`

    return fetch(apiURL) //El fetch nos devuelve una promesa
      .then(res => res.json())
      .then(response => {
        const {data = []} = response
        if (Array.isArray(data)){ //El método Array.isArray devuelve true si el contenido de un array y false si no lo es.
          const gifs = data.map(image => {
            const { images, title, id } = image;
            const { url } = images.downsized_medium;
            return { title, id, url }
          })
          return gifs
        }
      })
  }
