import React, { PureComponent } from 'react'
import { View, Text, TextInput } from 'react-native'
import FastImage from 'react-native-fast-image'
import { connect } from 'react-redux'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { Avatar } from '../../Components'
import { Colors } from '../../Themes'
import { normalize } from '../../Themes/Metrics'

export class NavigationHeader extends PureComponent {

  render() {
    return (
      <View style={{
        backgroundColor: '#2CBCD4',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute', top: 0, bottom: 0, left: 0, right: 0
      }}>
        <View style={{ flex: 1, marginRight: 5, alignItems: 'center' }} >

          <Avatar size={normalize(30)} />
        </View>
        <View style={{ flex: 4, flexDirection: 'row', backgroundColor: Colors.white, borderRadius: 15, alignItems: 'center' }} >
          <Ionicon
            style={{ paddingHorizontal: 10 }}
            name="ios-search"
            size={normalize(20)}
            color={Colors.brown}
          />
          <TextInput placeholder="Search" style={{ padding: 3 }} />
        </View>
        <View style={{ flex: 3 }} >
          <Text style={{ fontSize: normalize(14), textAlign: 'center', color: Colors.white }} >Tp.Ho Chi Minh</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }} >
            <Text style={{ color: Colors.white }} >27-33 C</Text>
            <Ionicon
              style={{ marginLeft: normalize(5) }}
              name="md-cloud"
              size={normalize(20)}
              color={Colors.white}
            />
          </View>

        </View>
      </View>
    )
  }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationHeader)
