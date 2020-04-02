let suma = 0
console.time('Bucle')
for (let i = 0; i < 1000000; i++) {
   suma += i
}
console.timeEnd('Bucle')