const weightReducerDefaultState = []


export default (state = weightReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_DAILY_WEIGHT': 
            return {
                ...state,
                [`"${action.time}"`]: action.weight
            }  
        case 'FETCH_DATA':
            return {
                ...state,
                ...action.weight
            }
        case 'LOGOUT_STATE_WEIGHT':
            return weightReducerDefaultState;
                
        default: return state;
    }
}