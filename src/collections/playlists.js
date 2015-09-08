import Collection from 'ampersand-rest-collection'
import spotifyHeader from '../helpers/spotifyHeader'

export default Collection.extend(spotifyHeader, {
  url () {
    return 'https://api.github.com/repos/' + this.parent.full_name + '/labels'
  }
})