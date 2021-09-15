import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GalaxiesService {
  async getAll() {
    const galaxies = await dbContext.Galaxies.find()
    return galaxies
  }

  async getGalaxyById(galaxyId) {
    const galaxy = await dbContext.Galaxies.findById(galaxyId)
    return galaxy
  }

  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxies.create(galaxyData)
    return galaxy
  }

  async editGalaxy(galaxyId, galaxyData) {
    const galaxy = await this.getGalaxyById(galaxyId)

    galaxy.name = galaxyData.name || galaxy.name
    galaxy.description = galaxyData.description || galaxy.description
    await galaxy.save()
    return galaxy
  }
}

export const galaxiesService = new GalaxiesService()
