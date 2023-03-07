import reducer from '../reducers';
import {contacts} from '../static-data';

import {legacy_createStore as createStore} from 'redux';

const store = createStore(reducer, {contacts});
console.log({contacts});
export default store;
