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

    const linhas = await con.query(comando, [`%${id}%`]);
    return linhas;

}

export async function EditarServico (id) {
    const comando = `
    update set tb_servico.ds_titulo      = ?,
                tb_servico.ds_sobre       = ?,
                tb_servico.ds_ideias      = ?, 
                tb_servico.ds_requisitos  = ?,  
                tb_categoria.ds_categoria = ?, 
                tb_local.ds_endereco      = ?, 
                tb_local.ds_cep           = ? 
            from tb_servico
             inner join tb_categoria
                on tb_servico.id_categoria = tb_categoria.id_categoria
            inner join tb_usuario
                on tb_servico.id_usuario = tb_usuario.id_usuario     
            inner join tb_local
                on tb_servico.id_local = tb_local.id_local;
            where tb_sevico.id_servico = ? 
    
    `;
    const [linhas] = await con.query(comando, [`%${id}%`]);
    return linhas;
}
 
   

    export async function DetalhesServicos(id) {
        const comando = `
                    select	tb_servico.id_servico      ids,
                    tb_usuario.id_usuario      idu,
                    tb_local.id_local          idl,
                    tb_servico.nm_servico       titulo,
                    tb_servico.ds_servico      descricao,
                    tb_servico.ds_ideias       ideias,
                    tb_servico.ds_requisitos   requisitos, 
                    tb_servico.dt_publicado    datas,
                    tb_usuario.nm_usuario      nomeu,
                    tb_local.ds_endereco       endereco,
                    tb_local.ds_cep            cep
            from tb_servico
            inner join tb_usuario
                on tb_usuario.id_usuario = tb_servico.id_usuario
            inner join tb_local
                on tb_local.id_local = tb_servico.id_local
            where id_servico = ?;
        `;
        
        const linhas = await con.query(comando, [id]);
        return linhas[0];
    }
    
    // tb_categoria.ds_categoria  categoria,
    //                         tb_usuario.nm_usuario      nomeu,
    //                         tb_usuario.img_usuario     imagemu,
    //                         tb_local.ds_endereco       endereco,
    //                         tb_local.ds_cep            cep
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