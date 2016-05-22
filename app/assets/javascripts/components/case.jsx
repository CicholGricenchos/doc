class Case extends React.Component {

	render(){
		if(this.props.title){
			return <Color>
				{this.props.title}
				<Indent>{this.props.conditions}</Indent>
			</Color>
		} else {
			return <div>{this.props.conditions}</div>
		}
		
	}
}