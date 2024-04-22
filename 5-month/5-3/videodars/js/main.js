//! OOP => 4 main principles
//? Polimorphism, Abstraction, Inheritence, Encapsulation 



class Building {
    constructor(area, caption, location, rooms, lifts, floors, security, fire) {
     this.area = area
     this.caption = caption
     this.location = location
     this.rooms = rooms
     this.lifts = lifts
     this.floors = floors
     this.security = security
     this.fire = fire
    }
   fire() {
    return "Fire in the hole";
   }
}


const PDP = new Building(3000, "Pdp Academy", "Beruniy 3A", 45, 1, 4, true, ()=> {
    return "Fire in the Hole!"
})

console.log(PDP);

