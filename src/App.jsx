import { useState } from 'react'
import Button from '../components/button/Button'
import './app.css'

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
    <div className='container'>
      <h2>Password Generator</h2>
      <div className='container-main'>
        <Button event={randomPass} name='Generate' />
        <Button event={handleCopyButton} name={copyButton} />
      </div>
      <span>{password}</span>
    </div>
  )
}

export default App
