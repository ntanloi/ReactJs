import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../component/Header'
import ProfileSection from '../component/ProfileSection'
import RecipeGrid from '../component/RecipeGrid'
import Footer from '../component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <main>
        <ProfileSection />
        <RecipeGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
