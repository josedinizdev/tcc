import { con } from "./connection.js";

export async function obterCategorias() {
    const comando = `
        select id_categoria     as id,
               ds_categoria     as categoria
          from tb_categoria;
    `;
    const [linhas] = await con.query(comando);
    return linhas;
};