class Band {

  constructor(name, members) {
    // if(name) this.name = name;
    this.name ? name : "unknown";
    // this.members ? members : [];
    if (members) {
      this.members = members;
    } else {
      this.members = [];
    }

    return this;
  }

  getName() {
    return this.name;
  }

  changeName(name) {
    this.name = name;
    return this;
  }

  play(song) {
    console.log("playing: ", ...song);
    return this;
  }

  stun(crowd) {
    console.log("Stunning crowd at", ...crowd);
    return this;
  }

  addMember(name) {
    if (!name) throw Error("addMember called without 'name'");
    this.members.push(name);
    return this;
  }
  
  getMembers() {
    return this.members;
  }
}

// let tool = new Tool("ikaaJ").play("Age").stun("Universe").play("Iggy").stun("Internet");
let tool = new Band("ikaaJ").changeName("IkaJ").changeName("iKaaJ");
let name = tool.getName();
name;
let members = tool.getMembers();
members;
tool.addMember("Jaaki").addMember("SOflEYE");
members;

// tool.changeName("name").addMember("Sophie");
// console.log(tool.getName())

// tool.play("Pnuema").stun("South Africa");
