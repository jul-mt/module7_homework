let string = "c";

const test1 = {
a: "aaa",
b: "be-be",
f: 4
}

let check = false;

function propCheck (str, obj) {
	for (let key in obj) {
    if (key == str) {
        check += true; 
    }
    return check
	}
}

console.log(Boolean(propCheck(string, test1)));