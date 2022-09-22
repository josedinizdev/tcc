import { con } from "./connection.js";

export async function cadastrarUsuario() {
    const comando = `
        insert into tb_usuario(nm_usuario, dt_registro, ds_email)
            values(?, current_date(), ?);

    `

    const dtRegistro = new Date();
    const [resp] = await con.query(comando, [
                            usuario.nome,
                            dtRegistro,
                            usuario.email,
                        ])
    return resp.insertId;
}

export async function LoginUsuario(id) {
    const comando = `
        select tb_usuario.id_usuario  as id,
            tb_usuario.nm_usuario     as nome
        from tb_usuario
        inner join tb_login
            on tb_login.id_usuario = tb_usuario.id_usuario
        where tb_usuario.ds_email = ?
        and tb_login.ds_senha = ?;
    `;

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}