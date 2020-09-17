import sreemangalDetails from "./sreemangalDetails";
import sundarbansDetails from "./sundarbansDetails";

const { default: coxbazarDetails } = require("./coxbazarDetails");



const fakeData = [...coxbazarDetails, ...sreemangalDetails, ...sundarbansDetails]
export default fakeData; 