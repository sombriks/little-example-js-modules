// in order to use anything outside this module we must import it
import DefaultPrinter from "./default-printer";

// file (module) name has no obligations with class names
class EpsonPrinter extends DefaultPrinter {
	print() {
		//super.print();
		console.log("printing the epson way")
	}
}

export default EpsonPrinter