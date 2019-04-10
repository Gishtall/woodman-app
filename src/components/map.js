import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


 
const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'red',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 53.928295,
      lng: 27.672105
    },
    zoom: 15
  };
 
  render() {
    return (
      
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyAYUaG4o2RxYhWT7urBQUadY86ib1DXMHE'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
      
        >
        
          <AnyReactComponent
            lat={53.928295}
            lng={27.672105}
            text="Woodman office"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;