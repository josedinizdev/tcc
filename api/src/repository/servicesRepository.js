import { con } from "./connection.js";

export async function CadastrarServico(servico) {
    const comando = `
        insert into tb_servico(id_usuario, nm_servico, ds_servico, ds_ideias, ds_requisitos, dt_publicado )
            values(?, ?, ?, ?, ?, ?) 
    `;

    const data = new Date();
    const [linhas] = await con.query(comando, [servico.usuario, servico.titulo, servico.descricao, servico.ideias, servico.requisitos, data]);
    servico.id = linhas.insertId;
    return linhas;
};

export async function CadastrarServicoCategoria(idServico, idCategoria) {
    const comando = `
        insert into tb_categoria(id_servico, id_categoria)
            values(?, ?) 
    `;

    const [linhas] = await con.query(comando, [idServico, idCategoria]);
    return linhas;
};