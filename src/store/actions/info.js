import db from '../../firebase/firebase'

// ADD INFO

export const addInfo = (info) => ({
    type: 'ADD_INFO',
    info
})

export const addInfoDB = (info) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        db.ref(`users/${uid}/info`).update(info)
        .then(() => {
            dispatch(addInfo(info))
        })
    }
}

// FETCH INFO

export const FetchInfo = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        db.ref(`users/${uid}/info`).once('value')
        .then((snapshot) => {
            dispatch(addInfo(snapshot.val()))
        })
    }
}