import { createStackNavigator } from 'react-navigation'
import ActivitiesDetailScreen from '../Containers/ActivitiesDetail'

// Manifest of possible screens
const ActivitiesDetailTypeNav = createStackNavigator({
  ActivitiesDetailNavigation: { screen: ActivitiesDetailScreen },
}, {
  // Default config for all screens
  headerMode: 'float',
  navigationOptions: {
    // headerStyle: {
    //   backgroundColor: 'black',
    // },
  },
})

export default ActivitiesDetailTypeNav
