import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureProducts from './components/FeatureProducts'
import Footer from './components/Footer'
import Banner from './components/Banner'
function App() {

  return (
    <Provider store={store}>
      <Navbar />
      <Hero />
      <Banner />
      <FeatureProducts />
      <Footer />
    </Provider>
  )
}

export default App
