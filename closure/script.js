//closure function
function welcome(name){
    var Info = function(message){
        console.log(message + " " + name);
    };
    return Info;
}
var func = welcome("alice");
func("welcome");
func("hello mr.");
