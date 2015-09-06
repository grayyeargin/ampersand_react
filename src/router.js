import app from 'ampersand-app'
import React from 'react'
import Router from 'ampersand-router'
import Layout from './layout'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import spotifyParams from '../.api_storage'
import * as helper from './helpers/main'

export default Router.extend({
	renderPage (page, opts = {layout: true}) {
		if (opts.layout) {
			page = (
				<Layout>
					{page}
				</Layout>
			)
		}

		React.render(page, document.body)
	},

	routes: {
	  '': 'public',
	  'repos': 'repos',
	  'login': 'login'
	},

	public () {
		this.renderPage(<PublicPage/>, {layout: false})
	},

	repos () {
		this.renderPage(<ReposPage/>)
	},

	login () {
		var state = helper.generateRandomString(16)
		var query = spotifyParams.query + "state=" + state
		location.href = 'https://accounts.spotify.com/authorize/?' +  query + ''
	}
})


