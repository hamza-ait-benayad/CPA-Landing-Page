import appsDataJson from "./apps-data.json"

export interface App {
  id: string
  title: string
  description: string
  shortDescription: string
  thumbnail: string
  category: string
  rating: number
  reviews: number
  features: string[]
  downloadUrl: string
  screenshots: string[]
  heroImage: string
  platform: string[]
  releaseDate: string
  developer: string
  publisher: string
}

export const appsData: App[] = appsDataJson as App[]

export function getAppById(id: string): App | undefined {
  return appsData.find((app) => app.id === id)
}

export function getAllApps(): App[] {
  return appsData
}

export function getAppsByCategory(category: string): App[] {
  return appsData.filter((app) => app.category === category)
}

