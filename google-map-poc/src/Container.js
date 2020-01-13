import React from 'react';
import GoogleApiComponent from './utils/GoogleApiComponent'
import { Map } from './Map'

class Container extends React.Component {
  render() {
      const style = {
          width: '100vm',
          height: '100vm'
      }
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div style={style}>
          <Map  google={this.props.google} />
     </div>
    )
  }
}

const __GAPI_KEY__ = 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
export default GoogleApiComponent({
  apiKey: __GAPI_KEY__
})(Container)
