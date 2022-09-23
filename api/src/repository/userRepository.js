import { con } from "./connection.js";

export async function CadastroUsuario(novoUsuario) {
    const comando = `
        insert into tb_usuario(nm_usuario, ds_email, dt_nascimento, dt_registro)
            values(?, ?, ?, ?);
    `

    const data = new Date();
    const [linhas] = con.query(comando, [novoUsuario.nome, novoUsuario.email, novoUsuario.dtNascimento, data])
    novoUsuario.id = linhas.insertId;
    return linhas;
}

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
