import React from 'react'
import app from 'ampersand-app'
import localLinks from 'local-links'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({

	mixins: [ampersandMixin],

	displayName: 'Layout',

	propTypes: {
		me: React.PropTypes.object.isRequired,
    children: React.PropTypes.element.isRequired
  },

  onClick (evt) {
  	console.log("yowwwwwwza!")
  },

	render () {
		const {me} = this.props
		return (
			<div onClick={this.onClick}>
				<nav className='top-nav top-nav-light cf' role='navigation'>
	        <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
	        <label htmlFor='menu-toggle'>Menu</label>
	        <ul className='list-unstyled list-inline cf'>
	          <li>SpotiShit</li>
	          <li><a href='/repos'>Playlist</a></li>
	          <li className='pull-right'>Hi, {me.display_name}! <a href='/logout'>Logout</a></li>
	        </ul>
	      </nav>
	      <div className='container'>
	        {this.props.children}
	      </div>
      </div>
		)
	}
})