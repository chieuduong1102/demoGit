//Contructor
function Mouse(name){
    this.name = name;
    this.dead = false;
}

Mouse.prototype = function(){
    this.dead = true    
}

module.export = Mouse;