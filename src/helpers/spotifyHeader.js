import app from 'ampersand-app'

export default {
  ajaxConfig () {
		return {
      headers: {
        'Authorization': 'Bearer ' + app.me.token
      }
    }
	}
}