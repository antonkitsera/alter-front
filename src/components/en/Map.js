import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 50.447734, 
    lng: 30.512667,
  },
  zoom: 14,
}

const MarkerComponent = ({ text }) => (
    <div className="map-marker">
        <p className="map-marker__text">{text}</p>
        <svg className="map-marker__icon" width="26" height="33" viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0003 18.0834C11.7848 18.0834 10.619 17.6005 9.75942 16.741C8.89988 15.8814 8.41699 14.7157 8.41699 13.5001C8.41699 12.2845 8.89988 11.1187 9.75942 10.2592C10.619 9.39963 11.7848 8.91675 13.0003 8.91675C14.2159 8.91675 15.3817 9.39963 16.2412 10.2592C17.1008 11.1187 17.5837 12.2845 17.5837 13.5001C17.5837 14.102 17.4651 14.698 17.2348 15.254C17.0044 15.8101 16.6668 16.3154 16.2412 16.741C15.8156 17.1666 15.3104 17.5042 14.7543 17.7345C14.1982 17.9649 13.6022 18.0834 13.0003 18.0834ZM13.0003 0.666748C9.59671 0.666748 6.33251 2.01883 3.92579 4.42554C1.51907 6.83226 0.166992 10.0965 0.166992 13.5001C0.166992 23.1251 13.0003 32.5001 13.0003 32.5001C13.0003 32.5001 25.8337 23.1251 25.8337 13.5001C25.8337 10.0965 24.4816 6.83226 22.0749 4.42554C19.6681 2.01883 16.4039 0.666748 13.0003 0.666748Z" fill="#5124EA"/>
        </svg>
    </div>
)

const GoogleMap = () => (
  <section className="map">
    <div className="map__wrapper container" style={{ height: '400px', width: '100%' }}  data-sal="slide-right" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease">
    <GoogleMapReact
      options={{
          styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "saturation": -100
                },
                {
                  "lightness": 60
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ]
      }}
      bootstrapURLKeys={{ key: 'AIzaSyAYvgI3aT67BHQSBqqATXjXTh4J9ol2srk' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <MarkerComponent
        lat={50.445720}
        lng={30.512667}
        text={'Kiev, Bogdan Khmelnitsky 17/52'}
      />
    </GoogleMapReact>
    </div>
  </section>
)

export default GoogleMap