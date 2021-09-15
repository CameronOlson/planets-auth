import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy'
import { StarSchema } from '../models/Star'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Galaxies = mongoose.model('Galaxies', GalaxySchema);

  Stars = mongoose.model('Stars', StarSchema);
}

export const dbContext = new DbContext()
