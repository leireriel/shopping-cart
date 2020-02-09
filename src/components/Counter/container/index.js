import { connect } from 'react-redux';
import Counter from '../components';

const mapStateToProps = (state) => {
  return {
    number: state.number
  };
}

export default connect(mapStateToProps)(Counter);
