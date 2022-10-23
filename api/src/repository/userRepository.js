import { con } from "./connection.js";

export async function CadastroUsuario(novoUsuario) {
    const comando = `
        insert into tb_usuario(nm_usuario, ds_email, dt_nascimento, dt_registro)
            values(?, ?, ?, ?);
    `
    const data = new Date();
    const [linhas] = await con.query(comando, [novoUsuario.nome, novoUsuario.email, novoUsuario.dtNascimento, data])
    novoUsuario.id = linhas.insertId;
    return linhas;
}

export async function AtribuirContatos(id) {
    const comando = `
        insert into tb_usuario_contato(id_usuario)
            values(?)
    `
    const [linhas] = await con.query(comando, [id])
    return linhas
}

export async function CadastrarLogin(idUsuario, senha) {
    const comando = `
        insert into tb_login(id_usuario, ds_senha)
             values(?, ?, ?);
    `
    const [linhas] = await con.query(comando, [idUsuario, senha])
    novoLogin.id = linhas.insertId;
    return linhas
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

export async function editarPerfil(id, usuario) {
    const comando = `
    update tb_usuario 
        set  nm_usuario      = ?,
             ds_sobre        = ?,
             ds_email        = ?, 
             nr_celular     = ?,
             ds_genero       = ?
             dt_nascimento = ?
        where id_usuario = ? 
    `;
    const linhas = await con.query(comando, [usuario.nome, usuario.descricao, usuario.email, usuario.celular, usuario.genero,  usuario.nascimento, id]);
    return linhas.affectedRows;      
}

export async function VerDetalhesPerfil(id) {
    const comando = `
        select id_usuario                as id,
            nm_usuario                as nome,
            ds_sobre                  as sobre,
            img_usuario               as foto,
            ds_email                  as email,
            nr_celular                 as celular,
            dt_nascimento             as nascimento
        from tb_usuario
        where id_usuario = ?;
    `
    const [linhas] = await con.query(comando, [id])
    return linhas[0];
}


export async function AlterarFoto(usuario, id) {
    const comando = `
        update tb_usuario
            set img_usuario = ?
        where id_usuario = ?;
    `;
    const [linhas] = await con.query(comando, [usuario.imagem, id]);
    return linhas.affectedRows; 
}

export async function ListarUsuario() {
    const comando = `
                    select id_usuario   id,
                        nm_usuario   nome,
                        img_usuario  img,
                        ds_sobre     sobre
                from tb_usuario
    `;
    const [linhas] = await con.query(comando);
    return linhas;
}

export async function PesquisarUsuario(nome) {
    const comando = `
                    select id_usuario   id,
                        nm_usuario   nome,
                        img_usuario  img,
                        ds_sobre     sobre
                from tb_usuario
                where nm_usuario like ?
    `;
    const [linhas] = await con.query(comando, [`%${nome}%`]);
    return linhas;
}

export async function DeletarUsuario(id) {
    const comando = `
        delete from tb_usuario
            where id_usuario = ?;
    `;

    const linhas = await con.query(comando, [id]);
    return linhas.affectedRows;
}

export async function DeletarLogin(id) {
    const comando = `
        delete from tb_login
            where id_usuario = ?;
    `;

    const linhas = await con.query(comando, [id]);
    return linhas.affectedRows;
}
export async function ListarUsuarios() {
    const comando = `
        select id_usuario                as id,
            nm_usuario                as nome,
            ds_sobre                  as sobre,
            img_usuario               as foto
        from tb_usuario
        where nm_usuario like ?;
    `
    const [linhas] = await con.query(comando)
    return linhas
}

export async function ListarMeusContatos(id) {
    const comando = `
        select id_usuario                as id,
            nm_usuario                as nome,
            ds_sobre                  as sobre,
            img_usuario               as foto
        from tb_usuario
        inner join tb_contato
            on tb_contanto.id_usuario = tb_usuario.id_usuario 
        where nm_usuario like ?
            and tb_contato.id_usuario = ?;
    `
    const [linhas] = await con.query(comando, [id])
    return linhas
}

export async function AtualizarUsuario(usuario) {
    const comando = `
        update tb_usuario
        set nm_usuario = ?,
            ds_genero = ?,
            ds_email = ?,
            nr_celular = ?,
            ds_sobre = ?,
            dt_nascimento = ?
        where id_usuario = ?;
    `
    const linhas = await con.query(comando, [usuario.nome, usuario.genero, usuario.email, usuario.celular, usuario.sobre, usuario.nascimento, usuario.id])
    return linhas
}

export async function DescobrirContatoUsuario(id) {
    const comando = `
        select id_usuario_contato     id,
          from tb_usuario_contato
         where id_usuario = ?
    `
    const linhas = await con.query(comando, [id])
    return linhas
}

export async function AdicionarContato(id, contato) {
    const comando = `
        insert into tb_contato (id_usuario_contato, id_usuario)
            values(?, ?)
    `
    const linhas = await con.query(comando, [id, contato])
    return linhas
}

export async function RemoverContato(contato) {
    const comando = `
        delete from tb_contato
            where id_contato = ?
    `
    const linhas = await con.query(comando, [id, contato])
    return linhas
}