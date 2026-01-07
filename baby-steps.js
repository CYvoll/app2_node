
let total = 0;
for (let i = 2; i < process.argv.length; i++) {
  console.log(+process.argv[i]);
  total += +process.argv[i];  
}
console.log (total);