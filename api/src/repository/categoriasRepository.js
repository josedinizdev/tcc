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


export async function removerServicoCategoria(id) {
    const comando = `
        delete from tb_servico_categoria 
        where id_servico = ?;
    `;
    const [linhas] = await con.query(comando, [id]);
    return linhas;
};
