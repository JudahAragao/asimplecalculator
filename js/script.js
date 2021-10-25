var operations = []

const operators = {
    "+": function(prefix, suffix){return prefix + suffix},
    "-": function(prefix, suffix){return prefix - suffix},
    "*": function(prefix, suffix){return prefix * suffix},
    "/": function(prefix, suffix){return prefix / suffix},
}

function insert(num){
    document.form.textview.value += num
    operations.push(num)
}

function equal(){
    var prefix
    var operator
    var suffix
    document.form.textview.value = null
    operations.forEach(element => {
        if (typeof(element) === "string") {
            operator = element
            if (operations.indexOf(element)) {
                prefix = operations.slice(0,operations.indexOf(element))
                suffix = operations.slice(operations.indexOf(element)+1)
                result = operators[operator](prefix,suffix)
                document.form.textview.value = `${prefix}` + `${operator}` + `${suffix}` + '=' + `${result}`
            }
        }
    });

}

function clean(){
    document.form.textview.value = ""
    while(operations.length) {
        operations.pop()
    }
}

function backspace(){
    var exp = document.form.textview.value
    document.form.textview.value = exp.substring(0, exp.length-1)
    operations.pop()
}