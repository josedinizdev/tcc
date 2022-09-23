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


export async function BuscarServicos() {
    const comando = `
        select  tb_servico.id_servico     id,
            tb_servico.nm_servico     servico,
            tb_servico.dt_publicado  publicacao
        from tb_servico
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function BuscarServicosTitulo(titulo) {
    const comando = `
        select id_servico   id,
            nm_servico   nome,
            dt_publicado data
        from tb_servico
        where nm_servico like ?
    `;

    const [linhas] = await con.query(comando, [`%${titulo}%`]);
    return linhas;
}


export async function BuscarProfissionaisNome(nome) {
    const comando = `
        select id_usuario   id,
            nm_usuario      nome,
            ds_sobre        sobre
            from tb_usuario
        where nm_usuario like ?;
    `;

    const [linhas] = await con.query(comando, [`%${nome}%`]);
    return linhas;
}