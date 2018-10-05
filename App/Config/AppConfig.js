// Simple React Native specific changes
import '../I18n/I18n'

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,
  serverURL: __DEV__ ? 'http://localhost:2002/api/' : 'http://localhost:2002/api/',
  oauth: {
    'clientId': 'ddykfwkzzkgxuavljeoi',
    'clientSecret': 'mmvsmoihvbdzkmjodihp',
  },
  apiPath: {
    main: 'http://169.61.54.83:2002/api',
    //main: 'http://localhost:2002/api',

    auth: 'http://169.61.54.83:2006/api',
    community: 'http://169.61.54.83:2009/api',
    upload: 'http://169.61.54.83:2011/api',
    socket: 'http://169.61.54.83:2003',
  },
  cdn: {
    image: 'https://giadinhtre.vn/cdn',
  },
}
