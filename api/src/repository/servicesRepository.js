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

export async function BuscarServicos() {
    const comando = `
        select tb_servico.id_servico     as id,
               tb_servico.nm_servico     as titulo,
               tb_servico.dt_publicado   as data,
               tb_categoria.ds_categoria as categoria
          from tb_servico
         inner join tb_servico_categoria
            on tb_servico_categoria.id_servico = tb_servico.id_servico
         inner join tb_categoria
            on tb_categoria.id_categoria = tb_servico_categoria.id_categoria;
    `
    const [linhas] = await con.query(comando);
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
        select	tb_servico.id_servico      as s-id,
                tb_servico.id_usuario      as u-id,
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
                ds_categoria               as categoria  
        from tb_servico
        inner join tb_usuario
            on tb_usuario.id_usuario = tb_servico.id_usuario
        inner join tb_local
            on tb_local.id_local = tb_servico.id_local
        inner join tb_servico_categoria
            on tb_servico_categoria.id_servico = tb_servico.id_servico
        inner join tb_categoria
            on tb_categoria.id_categoria = id_servico_categoria.id_categoria
        where id_servico = ?;
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