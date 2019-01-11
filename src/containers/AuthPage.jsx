import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AuthPage from '../components/auth/AuthPage';
import { login, signup } from '../core/actions';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.services.errors.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
  login,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
