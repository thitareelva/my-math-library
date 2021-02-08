function sum(a, b){
    if (Array.isArray(a)){
        let total = 0
        a.forEach((i) -> (total += i))
            return total
         }
    return a + b
}



module.exports = {
    sum,
}
