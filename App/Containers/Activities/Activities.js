import React, { PureComponent } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native'
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import Main from './Main'
import Others from './Others'
import { normalize,  } from '../../Themes/Metrics';
import { Colors,  } from '../../Themes'

class Activities extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "New York",
      headerTitleStyle: {
        textAlign: 'center', alignSelf: 'center',
        fontSize: normalize(25), fontWeight: 'bold', color: Colors.black
      },
      headerRight: (
        <TouchableOpacity>
          <IonicIcon
            style={{ paddingHorizontal: normalize(20), fontWeight: 'bold' }}
            name="ios-search"
            size={normalize(25)}
            color={Colors.black}
          />
        </TouchableOpacity>)

    }
  }
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  render() {
    return (
      <View flex={1} style={{ backgroundColor: Colors.white, }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginHorizontal: normalize(20) }}>
        <Main/>
        <Others/>
        </ScrollView>
            </View>
        )
      }
    }
    
    
    
    export default connect(null, null)(Activities)
    
    
    
    
