
import { combineReducers } from 'redux';
import ContactsReducer from './contact'
import ActiveContactReducer from './active_contact'

const rootReducer = combineReducers({
  contacts: ContactsReducer,
  activeContact: ActiveContactReducer
});
export default rootReducer;