
const initialState = {
    "name": "Miguel",
    "phone": "123456789",
};
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'CONTACT_SELECTED':
        return action.payload
    } 
    // i dont care about the action because it is not inside my
    // list of actions I am interested int (case statements inside the switch)
    return state
  }