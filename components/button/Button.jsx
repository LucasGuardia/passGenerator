import './index.css'

export default function Button(props) {
  return (
    <>
      <button onClick={props.event}>{props.name}</button>
    </>
  )
}