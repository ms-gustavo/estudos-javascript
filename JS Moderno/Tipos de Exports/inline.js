//export nomeado = precisa usar o nome exato
export function inline() {
  console.log("Export nomeado inline");
}

//export default inline = nomeado na mesma linha // só pode ter 1 por arquivo // pode ser uma função anônima
export default function defaultInline() {
  console.log("Export default inline");
}
