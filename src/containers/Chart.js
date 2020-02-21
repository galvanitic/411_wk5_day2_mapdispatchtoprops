import { connect } from "react-redux";
import Chart from '../components/Chart'


const mapStateToProps = state => {
  return {
    user: state.user,
    cars: state.cars
  }
}

export default connect(mapStateToProps)(Chart)