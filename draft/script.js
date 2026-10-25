function complexPower(n, x) {
    const magnitude = Math.pow(n, x);
    const real = magnitude * Math.cos(Math.PI * x);
    const imag = magnitude * Math.sin(Math.PI * x);
    return { real, imag };
}