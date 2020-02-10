import { connect } from 'react-redux';
import { addOne, removeOne } from 'actions';
import Counter from '../components';

const mapStateToProps = state => ({
  shop: state.shop
});

const mapDispatchToProps = dispatch => ({
  addOne: item => dispatch(addOne(item)),
  removeOne: item => dispatch(removeOne(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
