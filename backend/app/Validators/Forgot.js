'use strict'

class Forgot {
  get rules () {
    return {
      emai: 'email|required',
    }
  }
}

module.exports = Forgot
