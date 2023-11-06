import { useState } from 'react'
import Categories from './components/Categories.tsx'

function App() {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className='homeSection'>
      <div className='content'>
        <h2>Join 2 million+ Australians finding better</h2>
        <p>
          Finder's team of 40+ experts will help you find the right choices in over 100 categories.
        </p>
        <Categories expanded={isExpanded} />
      </div>
    </div>
  )
}

export default App
