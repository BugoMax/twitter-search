
import { connect } from 'react-redux';

import ContentView from './view/ContentView.jsx';
import { mapStateToProps, mapDispatchToProps } from './impl/ContentContainer';

export default connect(mapStateToProps, mapDispatchToProps)(ContentView);
