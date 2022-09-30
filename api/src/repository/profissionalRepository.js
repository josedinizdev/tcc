import { con } from "./connection.js";

export async function VirarProfissional (id) {
    const comando = `
        insert into tb_worker(
                    id_usuario      id, 
                    nr_cpf          cpf, 
                    ds_estado       estado,
                    ds_email        email,
                    dt_nascimento   nascimento, 
                    nm_cargo        cargo, 
                    ds_habilidade   habilidades)
            values(?, ?, ?, ?, ?, ?);
    `;
const [linhas] = await con.query(comando , [`%${id}%`]);
return linhas;
}

export async function AvaliaProfissional (id) {
    const comando = `
        insert into tb_avaliacao(id_worker, vl_avaliacao)
    	values(?, ?);
    `;
    const linhas = await con.query(comando , [`%${id}%`]);
    return linhas;
}

export async function UsuarioWorker (id) {
    const comando = `
        select id_worker     id,
        from tb_worker
        where id_usuario = ?;
    `;
    const linhas = await con.query(comando , [`%${id}%`]);
    return linhas;
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

    export async function BuscarProfissas(id) {
        const comando = `
            select  tb_usuario.id_usuario   id,
                    tb_usuario.nm_usuario     nome,
                    tb_usuario.ds_sobre        sobre
            from tb_usuario
        `;
        const [linhas] = await con.query(comando , [id]);
        return linhas;
    }

    export async function BuscarProfissionaisNome(nome) {
        const comando = `
            select id_usuario   id,
                nm_usuario      nome,
                ds_sobre        sobre
                from tb_usuario
            where nm_usuario like ?
        `;
        const [linhas] = await con.query(comando, [`%${nome}%`]);
        return linhas;
    }
