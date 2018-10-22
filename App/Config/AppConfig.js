// Simple React Native specific changes

import '../I18n/I18n'

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,
  serverURL: __DEV__ ? 'http://192.168.31.212:3000/' : 'http://192.168.31.212:3000',
}
