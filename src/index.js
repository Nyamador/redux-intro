import store from './store';
import { bugAdded} from './actions';

store.dispatch(bugAdded("Bug 2"))

console.log(store.getState())