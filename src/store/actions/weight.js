import db from '../../firebase/firebase'

// ADD WEIGHT

export const addDailyWeight = ({weight, time}) => ({
    type: 'ADD_DAILY_WEIGHT',
    weight,
    time
})

export const AddWeightDB = ({weight, time}) => {

    return (dispatch, getState) => {
        const uid = getState().auth.uid
        db.ref(`users/${uid}/weight`).push({[`"${time}"`]: weight})
        .then(()=> {
            dispatch(addDailyWeight({weight, time}))
        })
    }
}

// FETCH WEIGHT FROM FIREBASE

export const fetchData = (weight) => ({
    type: 'FETCH_DATA',
    weight
})

export const FetchData = () => {
    return (dispatch, getState) => {

        const uid = getState().auth.uid

        return db.ref(`users/${uid}/weight`).once('value').then((snapshot)=> {                
               const weight = {};

               snapshot.forEach((child) => {
                    Object.assign(weight, {...child.val()})
                    });
            
                    dispatch(fetchData(weight))

               });
            }

    }

// Remove redux state on logout

export const logoutStateWeight = () => ({
    type: 'LOGOUT_STATE_WEIGHT'
}) 
    