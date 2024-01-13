import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
const Home = lazy(() => import("./components/Home"));
const Learning = lazy(() => import("./components/Learning"));
const Quiz = lazy(() => import("./components/Quiz"));
const Result = lazy(() => import("./components/Result"));

const App = () => {

  return (
    <Router>
      <div className='app'>
      <Suspense fallback={<Loader/>}>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/learning' element={<Learning/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
        <Route path='/result' element={<Result/>}></Route>
      </Routes>
      </Suspense>
      </div>
    </Router>
  )
}

export default App;