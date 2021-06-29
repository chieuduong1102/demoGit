function Cat(name) {
    this.name = name;    
    this.coach = [];
}

Cat.prototype.eat  = function(){
    this.coach.push(Mouse);
}

module.export = Cat;