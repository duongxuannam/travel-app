import React, { PureComponent } from 'react';
import { View, Text} from 'react-native'
import { Image, TextInImage } from '../../Components'
import { normalize, normalizeHeight } from '../../Themes/Metrics';
import { Colors,  } from '../../Themes'


export default class Others extends PureComponent {

  render() {
    return (
     <React.Fragment>
          <Text style={{
            textAlign: 'center', fontSize: normalize(25), fontWeight: 'bold', color: Colors.black
          }} >Others</Text>
          <View style={{
            height: normalizeHeight(200), marginVertical: normalizeHeight(10),
          }} >
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: normalize(10) }} >
              <View style={{ flex: 1, marginRight:normalize(5)}} >
              <Image uri={{ uri: 'https://unsplash.it/400/400?image=1', }}  
          style={{ borderRadius: 5 }}
          />
      
          <TextInImage style={{  right:0,left:0, bottom:0 }} styleGradient={{borderRadius:5}}>
            <Text
            numberOfLines={1}
              style={{
                textAlign:'center',
                margin: normalize(10), color: Colors.white, fontSize: normalize(15), fontWeight: 'bold'
              }}>
              Chicago
                 </Text>
          </TextInImage>
              </View>

              <View style={{ flex: 1,marginLeft:normalize(5) }} >
              <Image uri={{ uri: 'https://unsplash.it/400/400?image=1', }}  
          style={{ borderRadius: 5 }}
          />
      
          <TextInImage style={{  right:0,left:0, bottom:0 }} styleGradient={{borderRadius:5}}>
            <Text
            numberOfLines={1}
              style={{
                textAlign:'center',
                margin: normalize(10), color: Colors.white, fontSize: normalize(15), fontWeight: 'bold'
              }}>
              Washington DC
                 </Text>
          </TextInImage>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: normalize(10) }} >
              <View style={{ flex: 1, marginRight:normalize(5) }} >
              <Image uri={{ uri: 'https://unsplash.it/400/400?image=1', }}  
          style={{ borderRadius: 5 }}
          />
      
          <TextInImage style={{  right:0,left:0, bottom:0 }} styleGradient={{borderRadius:5}}>
            <Text
            numberOfLines={1}
              style={{
                textAlign:'center',
                margin: normalize(10), color: Colors.white, fontSize: normalize(15), fontWeight: 'bold'
              }}>
             LosAngles
                 </Text>
          </TextInImage>
              </View>

              <View style={{ flex: 1,marginLeft:normalize(5), }} >
              <Image uri={{ uri: 'https://unsplash.it/400/400?image=1', }}  
          style={{ borderRadius: 5 }}
          />
      
          <TextInImage style={{  right:0,left:0, bottom:0 }} styleGradient={{borderRadius:5}}>
            <Text
            numberOfLines={1}
              style={{
                textAlign:'center',
                margin: normalize(10), color: Colors.white, fontSize: normalize(15), fontWeight: 'bold'
              }}>
              San Fransisco
                 </Text>
          </TextInImage>
              </View>
            </View>
               </View> 
               </React.Fragment>
        
        )
      }
    }
    
    
    
    
    
    
    
    
