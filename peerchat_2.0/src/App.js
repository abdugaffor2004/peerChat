import {BrowserRouter, Route} from 'react-router-dom';
import Room from './pages/Room';
import Main from './pages/Main';
import NotFound404 from './pages/NotFound404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/room/:id' component={Room}/>
        <Route exact path='/' component={Main}/>
        <Route component={NotFound404}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
