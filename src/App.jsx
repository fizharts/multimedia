import { Fragment } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './redux/store/store';
import { AppRouter } from './router/AppRouter';

export  const  App = ()=> {
  return (
    <Provider store={ store } >
        <AppRouter/>
    </Provider>
  )
  
}



