import User from './User'
import { resource, get, post } from 'expresstful'

@resource('/users')
export default class Users {
  @get('/')
  async root (req, res) {
    try {
      const users = await User.all()

      res.status(200).json(users)
    } catch (error) {
      res.status(500).send(error)
    }
  }
}
