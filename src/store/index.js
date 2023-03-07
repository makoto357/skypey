import reducer from '../reducers';

import {legacy_createStore as createStore} from 'redux';

const store = createStore(reducer);
export default store;
