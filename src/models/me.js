import Model from 'ampersand-model'
import app from 'ampersand-app'

export default Model.extend({
	url: 'https://api.spotify.com/v1/me',

	initialize () {
    this.token = window.localStorage.token
    this.on('change:token', this.onTokenChange)
  },

	ajaxConfig: function () {
		return {
      headers: {
        'Authorization': 'Bearer ' + app.me.token
      }
    }
	},

  props: {
  	token: 'string',
  	name: 'string',
  	id: 'string',
  	avatar: 'string'
  },

  onTokenChange () {
    window.localStorage.token = this.token
    this.fetchInitialData()
  },

  fetchInitialData () {
    if (this.token) {
      this.fetch({
      	success (model, response) {
      		model.name = response.display_name
      		model.id = response.id
      		model.avatar = response.images[0].url
      		app.router.redirectTo('user')
      	}
      })
    }
  }



})