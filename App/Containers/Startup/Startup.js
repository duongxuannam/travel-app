import React, { PureComponent} from 'react'
import { connect } from 'react-redux' 
import { Startup } from '../../Components'
import AppActions from '../../Redux/AppRedux'

class StartupContainer extends PureComponent {
  render() {
    return (
   <Startup navigation={this.props.navigation} luuApp={this.props.luuApp}/>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  luuApp: () => dispatch(AppActions.luuApp()),
})

export default connect(null, mapDispatchToProps)(StartupContainer)



