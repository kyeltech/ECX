function arg (value1, value2) {
if(is_nan(value1) || is_nan(value2)) {
return is_nan(value1) === is_nan(value2);
}
return toString.call(value1) === toString.call(value2);
}
function is_nan(val)
{
return val !== val;
}

console.log(arg('12', 100));
console.log(arg('11', '200'));
