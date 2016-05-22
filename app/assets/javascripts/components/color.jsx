class Color extends React.Component {
	
	constructor(props, context){
		super(props, context)
		this.state = {
			background: Hue.getColor()
		}
	}

	render(){
		return <div style={{
			background: this.state.background,
			padding: '0.5em 1em 0.5em'
		}}>{this.props.children}</div>
	}
}