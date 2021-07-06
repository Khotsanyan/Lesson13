const user = {
  _name: [],

  get name() {
    return user._name;
  },

  set name(value) {
    if (typeof value === "string") {
      user._name.push([value, value.length]);
    }
  },
};

user.name = "Vladimir";
user.name = "Arman";
user.name = "David";

console.log(user.name);
