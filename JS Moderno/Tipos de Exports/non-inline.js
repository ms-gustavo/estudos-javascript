function group() {
  console.log("Export nomeado não-inline (agrupado)");
}
function a() {}
function b() {}
function c() {}

function exportDefault() {
  console.log("Export default não-inline");
}

export { group, a, b, c };

export default exportDefault;
