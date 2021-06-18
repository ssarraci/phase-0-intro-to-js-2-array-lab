// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const copyofCats = [...cats, `${name}`];
    return copyofCats;
}

function prependCat(name) {
    const copyofCats = [`${name}`, ...cats];
    return copyofCats;
}

function removeLastCat() {
    const newCatsArray = cats.slice(0, -1);
    return newCatsArray;
}

function removeFirstCat() {
    const newCatsArray = cats.slice(1);
    return newCatsArray;
}