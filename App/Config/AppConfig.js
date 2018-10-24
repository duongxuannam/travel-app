// Simple React Native specific changes

import '../I18n/I18n'

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,
  serverURL: __DEV__ ? 'http://54.89.101.78:3000' : 'http://54.89.101.78:3000',
}
