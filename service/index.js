const fibonacciPosition = (index) => {
    let n1 = 0, n2 = 1, nextTerm, fibonacciSerie = []
    for (let i = 0; i < index + 1; i++) {
        fibonacciSerie.push(n1)
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return fibonacciSerie[index]
}

module.exports = {
    fibonacciPosition
}