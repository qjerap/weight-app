const infoReducerDefaultState = {}

export default (state = infoReducerDefaultState, action) => {

    switch(action.type) {
        case 'ADD_INFO':
            return {
                ...action.info
            }

        default: return state;
    }
}