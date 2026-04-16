function esFeliz(n){
    let vistos = new Set();
    while (n !== 1) {
        if (vistos.has(n)) return false;
        vistos.add(n);
        n = String(n).split('').reduce((suma, d) => suma + d * d, 0);
    }
    return true;
}
