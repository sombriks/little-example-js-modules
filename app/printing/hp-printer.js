// in order to use anything outside this module we must import it
import DefaultPrinter from "./default-printer";

// if no default export is provided, the import style changes a bit. see main.js
export class HpPrinter extends DefaultPrinter {
	print() {
		//super.print();
		console.log("printing the hp way")
	}
}
