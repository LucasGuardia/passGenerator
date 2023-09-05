import './index.css'

export default function Button(props) {
  return (
    <>
      <button onClickCapture={props.event}>{props.name}</button>
    </>
  )
}