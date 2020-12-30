import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { AppRouter } from './router/AppRouter';
import { initDB } from 'react-indexed-db'
import { DBConfig } from './config/DBConfig'
import './index.css'

initDB( DBConfig ) 

export  const  App = ()=> {
  return (

    <Provider  store={ store } >
     <div >
        <AppRouter/>
    </div>
    </Provider>
  )
  
}



