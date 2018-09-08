
import { connect } from 'react-redux';

import SearchBarView from './view/SearchBarView.jsx';
import { mapStateToProps, mapDispatchToProps } from './impl/SearchBarContainer';

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarView);
