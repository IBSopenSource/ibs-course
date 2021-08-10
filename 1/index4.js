// can be divided by 3 => print foo
// can be divided by 5 => print bar
// can be divided by 3 or 5 => print foobar

function foobar(num) {
    var out = ""
    if (num % 3 === 0) out += "foo";
    if (num % 5 === 0) out += "bar";
    console.log(out)
}