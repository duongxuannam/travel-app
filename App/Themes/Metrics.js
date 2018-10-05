import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

const scale = width/ 320
export const normalize = (size) => {
  return Math.round(scale * size)
}
const scaleHeight = height/568
export const normalizeHeight = (size) => Math.round(scaleHeight * size)

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 4,

  // added
  screenWidth: width,
  screenHeight: width < height ? height : width,

  indicatorHeight: normalize(70),

  borderRadius: {
    circle: 50,
    roundedEdges: 5,
  },

  icons: {
    xl: 25,
    lg: 22,
    md: 18,
    sm: 15,
    xs: 12,
  },

  padding: {
    xl: normalize(15),
    lg: normalize(10),
    md: normalize(7.5),
    sm: normalize(5),
    xs: normalize(3),
  },

  margin: {
    xl: normalize(15),
    lg: normalize(10),
    md: normalize(7.5),
    sm: normalize(5),
    xs: normalize(3),
  },
}

export default metrics
