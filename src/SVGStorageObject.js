let SVG = require('./SVG');
let SVGResource = require('./SVGResource');

/**
 * Acts as the parent to SVGStorage and SVGTerminal.
 * @author Helam
 * @author Enrico
 * @author Spedwards
 */
class SVGStorageObject extends SVG {

	/**
	 * @author Spedwards
	 * @param {StructureStorage | StructureContainer | StructureTerminal} object - Either a StructureStorage, StructureContainer or StructureTerminal object, or an ID string corrosponding to one.
	 */
	constructor(object, expectedType) {
		super();
		let structure = this.validateConstructor(object, expectedType);
		if (structure === false) throw new Error('Not a Structure object!');

		this.object = structure;
		this.contents = this.getContents();
	}
	
	/**
	 * Outputs the contents of any StructureStorage, StructureContainer or StructureTerminal
	 * object as a html/svg string.
	 * @author Helam
	 * @author Enrico
	 * @returns {string}
	 */
	getContents() {
		if (!this.contents) {
			let outStr = '';
			
			Object.keys(this.object.store).forEach(type => {
				outStr += (new SVGResource(type, this.object.store[type])).toString();
				outStr += '\n';
			});
			return outStr;
		}
		return this.contents;
	}

}

module.exports = SVGStorageObject;
