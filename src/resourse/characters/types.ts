export interface Character {
  image: string,
  id: number,
  name: string,
  type: string,
  status: 'Alive' | 'Dead' | 'unknown',
  species: string,
  gender: 'Male' | 'Female' | 'unknown',
  origin: string,
  location: string,
  episode: Set<number>,
  url: string,
  created: string,
}
