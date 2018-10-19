import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons'
import { CalendarList } from 'react-native-calendars'
import moment from 'moment'
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Image, TextInputLabel, Badger, Button } from '../../Components'
import { Images, Colors } from '../../Themes'
import { normalize, normalizeHeight } from '../../Themes/Metrics';

export default class UserInfomation extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <View><Text style={{ fontSize: normalize(20), fontWeight: 'bold', color: Colors.black }}> User Infomation </Text></View>,

      headerLeft: (<TouchableOpacity onPress={() => navigation.goBack(null)}>
        <View style={{ paddingHorizontal: normalize(10) }}>
          <IonicIcon name="md-arrow-back" color={Colors.primary} size={normalize(30)} />
        </View>
      </TouchableOpacity>),
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      pictureChoose: 0,
      isDateTimePickerVisible: false,
      date: new Date()

    }
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    this.setState({
date
    },this._hideDateTimePicker()
  )
  };


  setPictureChoose = (value) => () => {
    this.setState({
      pictureChoose: value,
    })
  }
  render() {
    const { pictureChoose,date } = this.state
    return (
      <View style={{ backgroundColor: Colors.white, flex: 1, }}>
        <View style={{ flex: 1, marginHorizontal: normalize(10) }}>

          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: normalize(12), color: Colors.yellow, marginTop: normalize(10) }}>
              USING TRAVEL BADGER'S AVATAR
      </Text>
            <View style={{
              flex: 1,
              flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
            }} >
              <TouchableOpacity onPress={this.setPictureChoose(0)} >
                <View style={pictureChoose === 0 ? { borderColor: Colors.primary, borderWidth: 1 } : {}}>
                  <Image uri={Images.badgerLogo}
                    style={{ marginVertical: normalize(20), marginHorizontal: normalize(30) }}
                    height={normalize(50)} width={normalize(25)} />

                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.setPictureChoose(1)} >

                <View style={pictureChoose === 1 ? { borderColor: Colors.primary, borderWidth: 1 } : {}}>
                  <Image
                    style={{ marginVertical: normalize(20), marginHorizontal: normalize(30) }}
                    uri={Images.badgerLogo} height={normalize(50)} width={normalize(30)} />

                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.setPictureChoose(2)} >

                <View style={pictureChoose === 2 ? { borderColor: Colors.primary, borderWidth: 1 } : {}}>
                  <Image
                    style={{ marginVertical: normalize(20), marginHorizontal: normalize(30) }}

                    uri={Images.badgerLogo} height={normalize(50)} width={normalize(30)} />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 2 }}>
            <TextInputLabel label="Name" placeholder='Full name' style={{ marginHorizontal: normalize(10) }}
            />

            <TextInputLabel label="E-mail" placeholder='Email' style={{ marginHorizontal: normalize(10) }}
            />
            <TextInputLabel label="Phone number" placeholder='Phone number' style={{ marginHorizontal: normalize(10) }}
            />

            <View style={{
              borderBottomWidth: 1,
              borderColor: '#D5D3D3',
              flexDirection: 'row', marginHorizontal: normalize(10)
            }} >
              <Text style={{
                color: Colors.brown, paddingVertical: normalize(13),
                flex: 1
              }} >
                Gender
              </Text>
              <View flex={3} style={{ alignItems: 'center', flexDirection: 'row' }} >
                <Badger label='Male' backgroundColor={Colors.white} color={Colors.brown} style={{ borderColor: Colors.brown, borderWidth: 1 }} />
                <Badger label='Female' backgroundColor={Colors.white} color={Colors.brown} style={{ borderColor: Colors.brown, borderWidth: 1, marginLeft: normalize(15) }} />
              </View>
            </View>

            <View style={{
              borderBottomWidth: 1,
              borderColor: '#D5D3D3',
              flexDirection: 'row', marginHorizontal: normalize(10)
            }} >
              <Text style={{
                color: Colors.brown, paddingVertical: normalize(13),
                flex: 1
              }} >
                Birthday
              </Text>

              <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                <TextInput
                  placeholder='MM/DD/YYYY'
                  disable
                  value={ moment(date).format("MM/DD/YYYY")}

                  style={{
                    marginLeft: normalize(10),
                    flex: 1,
                    paddingVertical: normalize(13),
                  }}
                />
                <View style={{
                  paddingLeft: normalize(10),
                  justifyContent: 'center', alignItems: 'center'
                }} >
                  <TouchableOpacity onPress={this._showDateTimePicker} >
                    <IonicIcon name="ios-calendar" color={Colors.primary} size={normalize(30)} />
                  </TouchableOpacity>
                </View>
               
              </View>
              
            </View>

            <Text style={{marginTop:normalizeHeight(10),fontWeight:'bold', fontSize:normalize(12), color:Colors.brown }} >
                  Enter your birthday to receive additional perks and benefits!
                </Text>
          </View>

        </View>
        <View style={{ position:'absolute', bottom:normalizeHeight(5), right:0, left:0 }} >
<Button label='Save'  style={{
  borderColor:Colors.primary,
 backgroundColor:Colors.primary,
 marginHorizontal:normalize(10)
}} 
textStyle={{ color:Colors.white }}
/> 
          </View>
        <DateTimePicker
        maximumDate={new Date()}
        date={this.state.date}
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
              />
      </View>


      // {/* <ScrollView>

      //       <View style={{flex:1 }} >
      //       <CalendarList 
      //       // current={'2018-10-19'} 
      //        futureScrollRange={2} />

      //       </View>
      // </ScrollView> */}

    );
  }
}

