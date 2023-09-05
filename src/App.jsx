import { useState } from 'react'
import Button from '../components/button/Button'

function App() {

  const [password, setPassword] = useState('')
  const [copyButton, setCopyButton] = useState('Copy')

  const randomPass = () => {
    setPassword(Math.floor(Math.random() * 999999))
    setCopyButton('Copy')
  }

  const handleCopyButton = () => {
    setCopyButton('Copied')
  }

  return (
    <div>
      <h2>Pass Generator</h2>
      <Button event={randomPass} name='Password'/>
      <Button event={handleCopyButton} name={copyButton}/>
      <span>{password}</span>
    </div>
  )
}

export default App
