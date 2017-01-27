let SVG = require('./SVG');

/**
 * Returns a html/svg string representation of the given observer object.
 * @author Spedwards
 */
class SVGObserver extends SVG {
	
	/**
	 * @author Spedwards
	 * @param {StructureObserver | string} observer - StructureObserver object or ID string corrosponding to a StructureObserver object.
	 * @param {Number} [size = 50] - SVG size.
	 */
	constructor(observer, size = 50) {
		super();
		let object = this.validateConstructor(observer, STRUCTURE_OBSERVER);
		if (object === false) throw new Error('Not an Observer object!');
		
		this.observer = object;
		this.size = typeof size === 'number' ? size : 50;
		this.string = this.toString();
	}
	
	/**
	 * @author Spedwards
	 * @returns {string}
	 */
	toString() {
		if (!this.string) {
			const SVG_SIZE = this.size;
			
			const COLOUR = this.player === this.observer.owner.username ? `#8FBB93` : `#ED5557`;
			
			return `<svg height="${SVG_SIZE}" width="${SVG_SIZE}" viewBox="0 0 100 100">` +
					`<g transform="translate(50,50)">` +
					`<ellipse rx="45" ry="40" fill="#111111" stroke="${COLOUR}" stroke-width="5" cx="0" cy="0" />` +
					`<ellipse rx="20" ry="20" fill="${COLOUR}" cx="0" cy="-15">` +
					`<animate attributeName="cx" attributeType="XML" dur="2s" repeatCount="indefinite" values="20;20;0;0;-20;-20;0;0;20" calcMode="linear" />` +
					`<animate attributeName="cy" attributeType="XML" dur="2s" repeatCount="indefinite" values="0;0;15;15;0;0;-15;-15;0" calcMode="linear" />` +
					`</ellipse>` +
					`</g>` +
					`</svg>`;
		}
		return this.string;
	}
	
}

StructureObserver.prototype.display = function(size = 50) {
	console.log(new SVGObserver(this, size));
};

module.exports = SVGObserver;
