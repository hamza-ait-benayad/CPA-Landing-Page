import gamesDataJson from "./games-data.json"

export interface Game {
  id: string
  title: string
  description: string
  shortDescription: string
  thumbnail: string
  genre: string
  rating: number
  reviews: number
  features: string[]
  downloadUrl: string
  screenshots: string[]
  heroImage: string
  systemRequirements: {
    os: string
    processor: string
    memory: string
    storage: string
  }
  releaseDate: string
  developer: string
  publisher: string
}

export const gamesData: Game[] = gamesDataJson as Game[]

export function getGameById(id: string): Game | undefined {
  return gamesData.find((game) => game.id === id)
}

export function getAllGames(): Game[] {
  return gamesData
}

export function getGamesByGenre(genre: string): Game[] {
  return gamesData.filter((game) => game.genre === genre)
}
