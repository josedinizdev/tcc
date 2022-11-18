import { con } from "./connection.js";

export async function AtribuirCategoria(categoria, servico) {
    console.log(servico)
    const comando = `
        insert into tb_servico_categoria(id_servico, id_categoria)
               values(?, ?);
    `;
    const [linhas] = await con.query(comando, [servico, categoria]);
    return linhas;
};

export async function CadastrarLocal(local) {
    const comando = `
        insert into tb_local(ds_estado, ds_cidade, ds_endereco, ds_numero, ds_cep, ds_complemento)
               values(?, ?, ?, ?, ?, ?)
    `;  
    const [linhas] = await con.query(comando, [local.estado, local.cidade, local.endereco, local.numero, local.cep, local.complemento]);
    local.id = linhas.insertId;
    return { linhas: linhas, id: local.id };
};

export async function CadastrarServico(servico, local) {
    console.log(local)
    const comando = `
        insert into tb_servico(id_usuario, id_local, nm_servico, ds_servico, ds_ideias, ds_requisitos, dt_publicado )
            values(?, ?, ?, ?, ?, ?, current_timestamp()); 
    `;
    const [linhas] = await con.query(comando, [servico.usuario, local, servico.titulo, servico.descricao, servico.ideias, servico.requisitos]);
    servico.id = linhas.insertId;
    return { linhas: linhas, id: servico.id };
};

export async function BuscarServicos({nome = '', categoria = ''}) {
    const comando = `
        select tb_servico.id_servico     as id,
               tb_servico.nm_servico     as titulo,
               tb_servico.dt_publicado   as data,
               tb_categoria.ds_categoria as categoria
          from tb_servico
         inner join tb_servico_categoria
            on tb_servico_categoria.id_servico = tb_servico.id_servico
         inner join tb_categoria
            on tb_categoria.id_categoria = tb_servico_categoria.id_categoria
         where tb_servico.nm_servico like ?
           and tb_categoria.ds_categoria like ?;
    `
    const [linhas] = await con.query(comando, [`%${nome}%`, `%${categoria}%`]);
    return linhas;
}

export async function BuscarServicosUsuarioAt(id) {
    const comando = `
    select tb_servico.id_servico     as id,
        tb_servico.nm_servico     as titulo,
        tb_servico.dt_publicado   as data,
        tb_categoria.ds_categoria as categoria,
        tb_usuario.nm_usuario as usuario
    from tb_servico
    inner join tb_servico_categoria 
    on tb_servico_categoria.id_servico = tb_servico.id_servico 
    inner join tb_categoria 
    on tb_categoria.id_categoria = tb_servico_categoria.id_categoria 
    inner join tb_atribuido 
    on tb_atribuido.id_servico = tb_servico.id_servico 
    inner join tb_usuario
    on tb_usuario.id_usuario = tb_servico.id_usuario
    where tb_atribuido.id_worker = ?
    and tb_servico.bt_servico = false;
    `
    const [linhas] = await con.query(comando, [id]);
    return linhas;
}

export async function BuscarServicosUsuarioAtHis(id) {
    const comando = `
    select tb_servico.id_servico     as id,
        tb_servico.nm_servico     as titulo,
        tb_servico.dt_publicado   as data,
        tb_categoria.ds_categoria as categoria,
        tb_usuario.nm_usuario as usuario
    from tb_servico
    inner join tb_servico_categoria 
    on tb_servico_categoria.id_servico = tb_servico.id_servico 
    inner join tb_categoria 
    on tb_categoria.id_categoria = tb_servico_categoria.id_categoria 
    inner join tb_atribuido 
    on tb_atribuido.id_servico = tb_servico.id_servico 
    inner join tb_usuario
    on tb_usuario.id_usuario = tb_servico.id_usuario
    where tb_atribuido.id_worker = ?
    and tb_servico.bt_servico = true;
    `
    const [linhas] = await con.query(comando, [id]);
    return linhas;
}

export async function BuscarServicosTitulo(titulo) {
    const comando = `
    select  tb_servico.id_servico   id,
            tb_servico.nm_servico   titulo,
            tb_servico.dt_publicado data,
            tb_categoria.ds_categoria as categoria
    from tb_servico
    inner join tb_servico_categoria
        on tb_servico_categoria.id_servico = tb_servico.id_servico
    inner join tb_categoria
        on tb_categoria.id_categoria = tb_servico_categoria.id_categoria
    where nm_servico like ?;
    `;
    const [linhas] = await con.query(comando, [`%${titulo}%`]);
    return linhas;
}

export async function Deletarservico (id) {
    const comando = `
        delete from tb_servico 
            where id_servico = ?;
    `;
    const [linhas] = await con.query(comando, [id]);
    return linhas.affectedRows;
}

export async function EditarLocal(local) {
    const comando = `
            update tb_local
               set ds_estado      = ?, 
                   ds_cidade      = ?, 
                   ds_endereco    = ?, 
                   ds_numero      = ?, 
                   ds_cep         = ?, 
                   ds_complemento = ?
            where id_local = ?
            `;
    const [linhas] = await con.query(comando, [local.estado, local.cidade, local.endereco, local.numero, local.cep, local.complemento, local.local]);
    return linhas[0];
}

export async function EditarServico(servico) {
    const comando = `
            update tb_servico
               set nm_servico      = ?,
                   ds_servico      = ?,
                   ds_ideias       = ?, 
                   ds_requisitos   = ?
            where id_servico = ?
            `;
    const [linhas] = await con.query(comando, [servico.titulo, servico.descricao, servico.ideias, servico.requisitos, servico.servico]);
    return linhas[0];
}

export async function RedefinirCategorias (id) {
    const comando = `
        delete from tb_servico_categoria 
            where id_servico = ?;
    `;
    const [linhas] = await con.query(comando, [id]);
    return linhas.affectedRows;
}

export async function DetalhesServicos(id) {
    const comando = `
        select	tb_servico.id_servico      as s_id,
                tb_servico.id_usuario      as u_id,
                tb_servico.id_local        as l_id,
                tb_servico.nm_servico      as titulo,
                tb_servico.ds_servico      as descricao,
                tb_servico.ds_ideias       as ideias,
                tb_servico.ds_requisitos   as requisitos, 
                tb_servico.dt_publicado    as data,
                tb_usuario.nm_usuario      as usuario,
                ds_estado                  as estado, 
                ds_cidade                  as cidade, 
                ds_endereco                as endereco, 
                ds_numero                  as numero, 
                ds_cep                     as cep, 
                ds_complemento             as complemento,
                tb_servico_categoria.id_categoria as c_id,
                ds_categoria               as categoria  
        from tb_servico
        inner join tb_usuario
            on tb_usuario.id_usuario = tb_servico.id_usuario
        inner join tb_local
            on tb_local.id_local = tb_servico.id_local
        inner join tb_servico_categoria
            on tb_servico_categoria.id_servico = tb_servico.id_servico
        inner join tb_categoria
            on tb_categoria.id_categoria = tb_servico_categoria.id_categoria
        where tb_servico.id_servico = ?;
    `;
    const [linhas] = await con.query(comando, [id]);
    return linhas;
}

export async function aplicarServicos ({servico, usuario}) {
    const aply = `
        insert into tb_atribuido(id_servico, id_worker)
            values(?, ?);
    `;
    const [linhas] = await con.query(aply, [servico, usuario]);
    return linhas;
}

export async function listarServicosAplicados({ categoria = '', nome = '', trabalhador }) {
    const comando = `
    select tb_servico.id_servico     as idServico,
        tb_servico.nm_servico     as titulo,
        tb_servico.dt_publicado   as data,
        tb_categoria.ds_categoria as categoria,
    from tb_servico
    inner join tb_servico_categoria
        on tb_servico_categoria.id_servico = tb_servico.id_servico
    inner join tb_categoria
        on tb_categoria.id_categoria = tb_servico_categoria.id_categoria
    inner join tb_atribuido
        on tb_atribuido.id_servico = tb_servico.id_servico
    where tb_categoria.id_categoria = ?
        and tb_servico.nm_servico     = ?
        and tb_atribuido.id_worker    = ?;
    `;
    const [linhas] = await con.query(comando, [categoria, nome, trabalhador]);
    return linhas;
}

export async function concluirServico(id) {
    const comando = `
    update tb_servico
        set bt_servico = true
    where id_servico = ?;
    `
    const [linhas] = await con.query(comando, [id])
    return linhas;
}