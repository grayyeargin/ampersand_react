import app from 'ampersand-app'
import React from 'react'
import Router from 'ampersand-router'
import Layout from './layout'
import PublicPage from './pages/public'
import ProfilePage from './pages/profile'
import spotifyParams from '../.api_storage'
import * as helper from './helpers/main'

export default Router.extend({
	renderPage (page, opts = {layout: true}) {
		if (opts.layout) {
			page = (
				<Layout me={app.me}>
					{page}
				</Layout>
			)
		}

		React.render(page, document.body)
	},

	routes: {
	  '': 'public',
	  'login': 'login',
	  'login/callback': 'loginCallback',
	  'users/:id': 'profile'
	},

	public () {
		this.renderPage(<PublicPage/>, {layout: false})
	},

	login () {
		var state = helper.generateRandomString(16)
		var query = spotifyParams.query + "state=" + state
		location.href = 'https://accounts.spotify.com/authorize/?' +  query + ''
	},

	loginCallback () {
		var spotifyInfo = helper.getSpotifyInfo()
		if (spotifyInfo.access_token) {
			app.me.token = spotifyInfo.access_token
		} else {
			this.redirectTo('')
		}
	},

	profile () {
		this.renderPage(<ProfilePage me={app.me}/>)
	}
})


