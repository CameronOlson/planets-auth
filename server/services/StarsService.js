import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class StarsService {
  async getAllStars() {
    const stars = await dbContext.Stars.find()
    return stars
  }

  async getStarById(starId) {
    const star = await dbContext.Stars.findById(starId)
    return star
  }

  async createStar(starData) {
    const star = await dbContext.Stars.create(starData)
    return star
  }

  async editStar(starId, starData) {
    const star = await this.getStarById(starId)

    star.name = starData.name || star.name
    star.description = starData.description || star.description
    await star.save()
    return star
  }
}

export const starsService = new StarsService()
