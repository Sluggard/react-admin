import ReactDOM from 'react-dom'
import './index.less'
import Router from './router/router'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store/index'
ReactDOM.render(
  <Provider store={store}>
    <Router></Router>
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
