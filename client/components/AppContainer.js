import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from './Main';

const App = connect()(Main);

export default App;