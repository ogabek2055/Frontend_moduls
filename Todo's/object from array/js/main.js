var array = ["name", "John", "age", 30, "study", "pdp", "work", "pdp Academy", "life", "qoqon"];

var object = {};

for (var i = 0; i < array.length; i += 2) {
    var key = array[i];
    var value = array[i + 1];
    if (value !== undefined) {
        object[key] = value;
    }
}

console.log(object);
