import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import AdminDashboard from './pages/AdminDashboard';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />

          <Route path='/admin' element={<AdminDashboard />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
