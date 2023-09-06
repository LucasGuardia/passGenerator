import './index.css'

export default function Input(props) {
	return (
		<>
			<input
				type="number"
				min={1}
				id="passwordSize"
				value={props.passwordSize}
				onChange={(e) => props.setPasswordSize(e.target.value)}
			/>
		</>
	)
}