function* iterate(arr){
    for (let value of arr){
        yield value;
    }
}

const team = iterate(['Mario','Luigi','Snake','Peach','Heisenberg']);

console.log(team.next().value); // Mario
console.log(team.next().value); // Luigi
console.log(team.next().value); // Snake
console.log(team.next().value); // Peach
console.log(team.next().value); // Heisenberg
console.log(team.next().value); // undefined

// Test: a generator that gives new Ids on each iteration
function* getId() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
}

// Endless and random generation version.
function* getId() {
    let newMichi = 0 // Counter variable
    let id = Math.random().toString(36).substring(5).toUpperCase(); // Random alphanumeric generation logic
    while (true) {// On execution: the Id counters increments and gets concatenated to a random gen; 
      yield `${newMichi += 1}${id};` // Then, the result its 'saved' by yield
    }
}

const michiId = getId()
console.log(michiId.next().value)
console.log(michiId.next().value)
console.log(michiId.next().value)
console.log(michiId.next().value)
console.log(michiId.next().value)
