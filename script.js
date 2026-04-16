function esFeliz(n){
    let vistos = new Set();
    while (n !== 1) {
        if (vistos.has(n)) return false;
        vistos.add(n);
        n = String(n).split('').reduce((suma, d) => suma + d * d, 0);
    }
    return true;
}

function sumaDigitos(n) {
    if (n === 0) return 0;
    let d = n % 10;
    return d * d + sumaDigitos(Math.floor(n / 10));
}

function esFeliz(n, vistos = new Set()) {
    if (n === 1) return true;
    if (vistos.has(n)) return false;
    vistos.add(n);
    return esFeliz(sumaDigitos(n), vistos);
}
