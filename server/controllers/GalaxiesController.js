import { galaxiesService } from '../services/GalaxiesService'
import BaseController from '../utils/BaseController'

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getAll)
      .get('/:galaxyId', this.getGalaxy)
      .post('', this.createGalaxy)
      .put('/:galaxyId', this.editGalaxy)
  }

  async getAll(req, res, next) {
    try {
      const galaxies = await galaxiesService.getAll()
      res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxy(req, res, next) {
    try {
      const galaxy = await galaxiesService.getGalaxyById(req.params.galaxyId)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async createGalaxy(req, res, next) {
    try {
      const galaxy = await galaxiesService.createGalaxy(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async editGalaxy(req, res, next) {
    try {
      const galaxy = await galaxiesService.editGalaxy(req.params.galaxyId, req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}
