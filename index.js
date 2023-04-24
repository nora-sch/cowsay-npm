const info = require("./information.js");
var cowsay = require("cowsay");
console.log(cowsay.say({
    text : `Hello I'm ${info.prenom} ${info.nom} from ${info.campus} Campus!`,
    e : "oO",
    T : "U "
}));