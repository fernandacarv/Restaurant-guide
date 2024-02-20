import './App.css'
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchResultPage from './pages/SearchResultPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import ErrorHandlingPage from './pages/ErrorHandlingPage';
import RestaurantList from './pages/RestaurantList';
import AddRestaurantPage from './pages/AddRestaurantPage';
import About from './pages/About';



function App() {

  return (
    <main>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/searchresultpage' element={<SearchResultPage />} />
        <Route path='/restaurantdetailpage' element={<RestaurantDetailPage />} />
        <Route path='/errorhandlingpage' element={<ErrorHandlingPage />} />
        {/* you create a Route so that when we click on a button it redirects you the list of restaurantsList page */}
        <Route path='/restaurants' element={<RestaurantList/>}/>
        <Route path='/restaurants/:id' element={<RestaurantDetailPage/>}/>
        <Route path="/restaurants/add" element={<AddRestaurantPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='*' element={<ErrorHandlingPage/>}/>
      </Routes>
    </main>
  )
          
}

export default App
