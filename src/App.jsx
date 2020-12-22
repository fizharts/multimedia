import { Provider } from 'react-redux';
import './App.css';
import { store } from './redux/store/store';
import { AppRouter } from './router/AppRouter';
import { initDB } from 'react-indexed-db'
import { DBConfig } from './config/DBConfig'

initDB( DBConfig ) 

export  const  App = ()=> {
  return (
    <Provider store={ store } >
        <AppRouter/>
    </Provider>
  )
  
}



