class Condition extends React.Component {
	render(){
		return <Color>
			{this.props.when} =>
			<Indent>{this.props.then}</Indent>
		</Color>
	}
}