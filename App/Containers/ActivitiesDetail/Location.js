import React, { PureComponent } from 'react';
import { View, Text, } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors, } from '../../Themes'

export default class Location extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      region: {
        latitude: 10.925937010125281,
        latitudeDelta: 0.04203643733102069,
        longitude: 106.76560140906179,
        longitudeDelta: 0.02499999999992042
      },
      markers: [
        {
          latlng: {
            latitude: 10.925937010125281, longitude: 106.76560140906179,
          },
          description: 'nani'
        },
        {
          latlng: {
            latitude: 10.93008805303404, longitude: 106.76586430642884,
          },
          description: 'nani'

        },
        {
          latlng: {
            latitude: 10.930922878800757, longitude: 106.77173508791307
          },
          description: 'nani',
          title: 'nani'

        }
      ],

    }
  }
  render() {
    return (
    
      <View style={{
        marginHorizontal: normalize(10),
        marginVertical: normalize(10)
      }} >
        <Text style={{ fontSize: normalize(18), fontWeight: 'bold' }} >
          Location
        </Text>

        <View style={{
          marginTop: normalize(10),
          height: normalizeHeight(220)
        }} >
          <MapView
            style={{ flex: 1 }}
            region={this.state.region}
            onRegionChange={this.onRegionChange}
          >
            {this.state.markers.map((marker, index) => (
              <Marker
                key={index}
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
              />
            ))}

            {/* <Marker draggable
  coordinate={this.state.markerDrag}
  // description={marker.description}
  onDragEnd={(e) => this.setState({ markerDrag: e.nativeEvent.coordinate })}

/> */}


          </MapView>

          <View style={{
            position: 'absolute',
            zIndex: 100,
            left: normalize(10),
            right: normalize(10),
            bottom: normalize(10),
            backgroundColor: Colors.white,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: normalizeHeight(10),
            borderRadius: 5
          }} >
            <Text style={{ fontWeight: 'bold' }}> Chelsea Market/High Line </Text>
            <Text> Tour meets near 9 Ave. & 15th St. </Text>
            <Text> Exac location released upon booking </Text>
          </View>

        </View>
      </View>
    )
  }
}




