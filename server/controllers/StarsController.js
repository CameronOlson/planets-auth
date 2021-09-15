import { starsService } from '../services/StarsService'
import BaseController from '../utils/BaseController'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAllStars)
      .get('/:starId', this.getStar)
      .post('', this.createStar)
      .put('/:starId', this.editStar)
  }

  async getAllStars(req, res, next) {
    try {
      const stars = await starsService.getAllStars()
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async getStar(req, res, next) {
    try {
      const star = await starsService.getStarById(req.params.starId)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async createStar(req, res, next) {
    try {
      const star = await starsService.createStar(req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async editStar(req, res, next) {
    try {
      const star = await starsService.editStar(req.params.starId, req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }
}
