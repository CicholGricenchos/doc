
class Sexp {
	eval(list, env=null){
		if(Array.isArray(list)){
			var type = list[0],
				args = list.slice(1)
			return this[type](args, env)
		}
		else return this.text([list], env)
	}

	sequence(rest){
		return <Sequence content={rest.map(e => this.eval(e, 'sequence'))} />
	}

	case([title, ...conditions]){
		var conditions = conditions.map(([when, ...then]) =>{
			if(then.length == 1){
				return <Condition when={this.eval(when, 'case-when')} then={this.eval(then[0], 'case-then-single')} />
			} else {
				var thens = then.map(e => this.eval(e, 'case-then-multi'))
				return <Condition when={this.eval(when, 'case-when')} then={thens} />
			}
			return 
		})
		return <Case title={this.eval(title, 'case-title')} conditions={conditions} />
	}

	text([text], env){
		switch(env){
			case 'sequence':
			case 'case-then-single':
			case 'case-then-multi':
				return <Color>{text}</Color>
			case 'case-when':
				return <span>{text}</span>
			case 'case-title':
				if(text == null || text.length == 0) return null
			default:
				return <div>{text}</div>
		}
	}

}