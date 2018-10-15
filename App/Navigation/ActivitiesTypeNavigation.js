import { createStackNavigator } from 'react-navigation'
import ActivitiesTypeScreen from '../Containers/ActivitiesType'

// Manifest of possible screens
const ActivitiesTypeNav = createStackNavigator({
  ActivitiesTypeNavigation: { screen: ActivitiesTypeScreen },
}, {
  // Default config for all screens
  headerMode: 'float',
  navigationOptions: {
    // headerStyle: {
    //   backgroundColor: 'black',
    // },
  },
})

export default ActivitiesTypeNav
