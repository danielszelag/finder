import { useState } from 'react'
import Icon from './components/Icon.tsx'

function App() {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div>
      <Icon iconId='credit-cards' />
      <Icon iconId='home-loans' />
      <Icon iconId='health-insurance' />
    </div>
  )
}

export default App
