class Bob {
    name;
    age;

    contructor(name, age) {
        this.name=name;
        this.age=age;
    }

    ableToVote() {
        return this.age >= 18;
    }
}

console.log(new Bob('Bob', 40));
var voter = Bob.ableToVote;
console.log(voter);

function sort(a, b){
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else return 0;
}

var result = sort(2, 5);
console.log(result);
