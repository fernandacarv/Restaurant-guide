import './App.css'
import {Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import SearchResultPage from './pages/SearchResultPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import ErrorHandlingPage from './pages/ErrorHandlingPage';



function App() {

  return (
    <main>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/searchresultpage' element={<SearchResultPage />} />
        <Route path='/restaurantdetailpage' element={<RestaurantDetailPage />} />
        <Route path='/errorhandlingpage' element={<ErrorHandlingPage />} />
      </Routes>

    </main>
  )
          
}

export default App
