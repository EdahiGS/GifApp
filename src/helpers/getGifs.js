const getGifs = async (category) => {
  //!URl del api de Giphy asi como parametros
  const url = `https://api.giphy.com/v1/gifs/search?api_key=pTv6FvNcZJIxdZQIMdkHZ1rEKVRLGF0O&q=${category}&limit=10`;

  //!Recuperamos el arreglo
  const resp = await fetch(url);

  //!Lo desestructuramos y recuperamos el JSON
  const { data } = await resp.json();

  //!Generamos objetos por cada gif del array
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};

export default getGifs;
