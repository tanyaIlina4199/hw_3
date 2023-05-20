function fooboo(isFoo: boolean, foo: Function, boo: Function): void {
    if (isFoo) {
        foo();
    } else {
        boo();
    }
}

function foo() {
    console.log("foo")
}
function boo() {
    console.log("boo")
}

fooboo(false, foo, boo);