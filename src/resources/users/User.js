import db from '@/db'

class User {
  all () {
    return db.query('SELECT * FROM users')
  }
}

export default new User()
