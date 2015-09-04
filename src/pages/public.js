import React from 'react'

export default React.createClass({
	displayName: 'PublicPage',
	render() {
		return (
			<div className='container'>
				<header role="banner">
					<h1>Ampersand.js React App</h1>
				</header>
				<div>
					<p>This is a react test app...</p>
					<a href="/repos" className="button button-large">
						<span className="mega-octicon octicon-mark-github"></span>Link to Repos
					</a>
				</div>
			</div>

		)
	}
})