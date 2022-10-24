//export nomeado inline -- "as i" = renomear o module
import { inline /* as i*/ } from "./inline.js";
//export default inline // pode dar o nome que quiser // só pode ter 1 por arquivo
import defaultInline from "./inline.js";
//export nomeado non-inline
//import { group as h, a as b } from "./non-inline.js";
//export default non-inline
import teste, { group as h, a as b } from "./non-inline.js";
//ExportsDefults podem ser renomeados diretamente

inline();
defaultInline();

h();
b();
teste();
