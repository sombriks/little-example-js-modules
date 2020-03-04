// to use anything from another file (module) you must import it
import DefaultPrinter from "./printing/default-printer";
import EpsonPrinter from "./printing/epson-printer";
// importing styles are various. see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import {HpPrinter} from "./printing/hp-printer";

console.log("trying to print...")

switch (process.env.MY_PRINTER) {
	case "EPSON":
		new EpsonPrinter().print()
		break
	case "HP":
		new HpPrinter().print()
		break
	default:
		new DefaultPrinter().print()
		break
}

// run with 'node index.js' at project root folder
