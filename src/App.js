import logo from './logo.svg';
import './App.css';
import Todolist from './Components/Todolist';
import { Provider } from 'react-redux';
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
    <div className="abc">
    <Todolist></Todolist>
    </div>
    </Provider>
  );
}

export default App;
