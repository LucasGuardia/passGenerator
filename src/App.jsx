import { useState } from 'react'
import { faker } from '@faker-js/faker'
import Button from '../components/button/Button'
import './app.css'
import Input from '../components/input/Input'

function App() {

  const [password, setPassword] = useState('')
  const [copyButton, setCopyButton] = useState('Copy')
  const [passwordSize, setPasswordSize] = useState(12)

  const randomPass = (size = 10) => {
    const password = faker.internet.password({length: size})
    setPassword(password)
    setCopyButton('Copy')
  }

  const handleCopyButton = () => {
    window.navigator.clipboard.writeText(password)
    setCopyButton('Copied')
  }

  return (
    <div className='container'>
      <h2>Password Generator</h2>
      <label>Password Characters Numbers</label>
      <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize} />
      <div className='container-main'>
        <Button event = {() => randomPass(passwordSize)} name={`Generate password ${passwordSize} characters`} />
        <Button event={handleCopyButton} name={copyButton} />
      </div>
      <span>{password}</span>
    </div>
  )
}

export default App
