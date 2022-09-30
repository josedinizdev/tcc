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
                tb_servico.ds_servico     descricao,
                tb_servico.dt_publicado   publicacao
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



export async function Deletarservico (id) {
    const comando = `
        delete from tb_servico 
        where id_servico = ?
    `;
    const linhas = await con.query(comando, [id]);
    return linhas.affectedRows;

}

    export async function EditarServico(id, servico) {
        const comando = `
        update tb_servico 
                set  nm_servico      = ?,
                     ds_servico      = ?,
                     ds_ideias       = ?, 
                     ds_requisitos   = ?
                where id_servico = ? 
                `;
        const [linhas] = await con.query(comando, [servico.titulo, servico.descricao, servico.ideias, servico.requisitos, id]);
        return linhas[0];
    }
 
    export async function DetalhesServicos(id) {
        const comando = `
            select	tb_servico.id_servico      idServico,
                    tb_servico.id_usuario      idUsuario,
                    tb_servico.nm_servico      titulo,
                    tb_servico.ds_servico      descricao,
                    tb_servico.ds_ideias       ideias,
                    tb_servico.ds_requisitos   requisitos, 
                    tb_servico.dt_publicado    data,
                    tb_usuario.nm_usuario      nomeUsuario
            from tb_servico
            inner join tb_usuario
                on tb_usuario.id_usuario = tb_servico.id_usuario
            where id_servico = ?
        `;
        const linhas = await con.query(comando, [id]);
        return linhas[0];
    }

    export async function aplicarServicos (id) {
        const comando = `
            insert into tb_servico( ds_titulo, ds_servico, ds_ideias, ds_requisitos, dt_publicado)
            values( ?, ?, ?, ?, current_data() ) 
                   

            insert into tb_atribuido ( id_servico, id_worker)
            values   (?, ?) 
        `;
        const linhas = await con.query(comando, [`%${id}%`]);
        return linhas[0];
    }