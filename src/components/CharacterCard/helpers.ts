const CHARCTER_API_URL = 'https://rickandmortyapi.com/api/character/'; 

export const getCharacterData = (id: number) => fetch(CHARCTER_API_URL + id)
  .then(response => response.json())
  .then(data => ({
    image: data.image,
    id: data.id,
    name: data.name,
    status: data.status,
    species: data.species,
    gender: data.gender,
    origin: data.origin.name,
    location: data.location.name,
  }));
