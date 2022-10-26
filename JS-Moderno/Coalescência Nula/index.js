const a = 0; //JS considera false

const b = null; // false

const c = "Teste"; // true

console.log(a || b || c); // JS só retornará o valor TRUE

console.log(a ?? b ?? c); // JS retornará valores não nulls/undefined

let A = 0;
let B = A || 42; //definir valor padrão quando o valor for indefinido

console.log({ A, B });

A = null;
B = A ?? 42;

console.log({ A, B });
