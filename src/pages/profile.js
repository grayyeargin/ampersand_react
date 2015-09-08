import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
	mixins: [ampersandMixin],

	displayName: 'ProfilePage',

	propTypes: {
		me: React.PropTypes.object
	},

	render() {
		const {me} = this.props
		return (
			<div>
				<h1>{me.display_name}</h1>
				<ProfileImage image={me.images[0].url}/>
			</div>
		)
	}
})

const ProfileImage = React.createClass({
	render () {
		return (
			<img src={this.props.image} />
		)
	}
})