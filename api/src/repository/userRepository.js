import { con } from "./connection.js";

export async function LoginUsuario(email, senha) {
    const comando = `
        select tb_usuario.id_usuario  as id,
            tb_usuario.nm_usuario     as nome
        from tb_usuario
        inner join tb_login
            on tb_login.id_usuario = tb_usuario.id_usuario
        where tb_usuario.ds_email = ?
        and tb_login.ds_senha = ?;
    `;

    const [linhas] = await con.query(comando, [email, senha]);
    return linhas[0];
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