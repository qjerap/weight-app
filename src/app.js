import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import AppRouter, { history }from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './styles.scss';
import { FetchData, logoutStateWeight } from './store/actions/weight'
import { FetchInfo } from './store/actions/info'
import { firebase } from './firebase/firebase'
import { login, logout } from './store/actions/auth'


const store = configureStore();


const jsx = 
(
    <Provider store={store}>
        <AppRouter />    
    </Provider>

);





firebase.auth().onAuthStateChanged(
  
   (user) => {
    if (user) {


      store.dispatch(login(user.uid));
      store.dispatch(FetchData())
      store.dispatch(FetchInfo()) 
      history.push('/')         

    

      } else {
        store.dispatch(logout())
        store.dispatch(logoutStateWeight())
        // history.push('/')
    }
  });


ReactDOM.render(jsx, document.querySelector('#app'))




