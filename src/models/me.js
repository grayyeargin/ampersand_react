import Model from 'ampersand-model'
import spotifyHeader from '../helpers/spotifyHeader'
import app from 'ampersand-app'

export default Model.extend(spotifyHeader, {
	url: 'https://api.spotify.com/v1/me',

	urlRoot: '/users',

	initialize () {
    this.token = window.localStorage.token
    this.on('change:token', this.onTokenChange)
  },

  props: {
  	token: 'string'
  },

  extraProperties: 'allow',

  idAttribute: 'id',

  onTokenChange () {
    window.localStorage.token = this.token
    this.fetchInitialData()
  },

  fetchInitialData () {
    if (this.token) {
      this.fetch({
      	success (model, response) {
      		app.router.redirectTo('/users/' + model.getId())
      	},
      	error (model, response) {
      	}
      })
    }
  }



})