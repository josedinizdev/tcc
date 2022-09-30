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

export async function CadastrarLogin(novoUsuario) {
    const comando = `
    
    `
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

    export async function AdicionarContatos (id) {
        const comando = `
        insert into tb_contato(id_usuario)
        values(?);
        `;
    
    const [linhas] = await con.query(comando, [`%${id}%`]);
    return linhas;  
    }

    export async function RemoverContatos (id) {
        const comando = `
        delete from tb_contato(id_usuario)
        where id_usuario = ?;
    `;
    const [linhas] = await con.query(comando, [`%${id}%`]);
    return linhas; 
    }

    export async function AlterarFoto (foto) {
        const comando = `
        insert into tb_usuario_img(id_usuario, img_usuario)
        values(?); 
        `;

    const [linhas] = await con.query(comando, [`%${id}%`]);
    return linhas; 
    }

    export async function editarPerfil (id) {
        const comando = `
        insert into tb_USUARIO(nm_nome, 
            ds_descricao, 
            ds_email, 
            nr_telefone,
            ds_genero)
            values(?, ?, ?, ?, ?);
            `;
            const linhas = await con.query(comando, [`%${id}%`]);
            return linhas;      
    }

    export async function PesquisarUsuario (id) {
        const comando = `
                     select id_usuario   id,
                            nm_usuario   nome,
                            ds_sobre     sobre,
                            img_usuario  imagem
                    from tb_usuario
                    where nm_usuario like %?%;
        `;

        const [linhas] = await con.query(comando, [`%${id}%`]);
    return linhas;
    }
