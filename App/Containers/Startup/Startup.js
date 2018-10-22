import React, { PureComponent} from 'react'
import { connect } from 'react-redux' 
import { Startup } from '../../Components'
import AppActions from '../../Redux/AppRedux'

class StartupContainer extends PureComponent {
  render() {
    return (
   <Startup navigation={this.props.navigation} skip={this.props.skip}/>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  skip: () => dispatch(AppActions.hideStartup()),
})

export default connect(null, mapDispatchToProps)(StartupContainer)



