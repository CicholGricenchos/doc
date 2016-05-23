var {sin, cos, PI} = Math

class Hue {
	static generateTuple(x){
		return [cos(x), cos(x + 2*PI/3), cos(x + 4*PI/3)]
	}

	static mapDomain([x1, x2], [y1, y2], a){
		let ratio = (a - x1) / (x2 - x1)
		return ratio * (y2 - y1)
	}

	static decToString(dec, a = 0.25){
		var [r, g, b] = dec.map(e => parseInt(e))
		return `rgba(${r}, ${g}, ${b}, ${a})`
	}

	static get toDec(){
		return Hue.mapDomain.bind(null, [-1, 1], [0, 255])
	}

	static generateRGB(x){
		let dec = this.generateTuple(x).map(this.toDec)
		return this.decToString(dec)
	}

	static generateColors(){
		this.colors = _.range(0, PI * 2, PI *2 / this.hueDivideInto).map(e => this.generateRGB(e))
		//this.colors = _.shuffle(this.colors)
	}

	static getColor(){
		if(this.colors.length <= 0){
			this.generateColors()
		}
		return this.colors.shift()
	}

	static drawRibbon(){
		Array(30).fill(0).map(x => {
			document.write(`<span style="color:${Hue.getColor()}">&#9608;</span>`);
		})
	}
}

Hue.colors = []
Hue.hueDivideInto = 16