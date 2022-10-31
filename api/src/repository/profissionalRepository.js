import { con } from "./connection.js";

export async function VirarProfissional (input) {
    const comando = `
        insert into tb_worker(id_usuario, nr_cpf, ds_estado, ds_email_profissional, nm_cargo, ds_habilidade)
            values(?, ?, ?, ?, ?, ?);
    `;
const [linhas] = await con.query(comando , [input.usuario, input.cpf, input.estado. input.email. input.cargo, input.habilidade]);
return linhas;
}

export async function AvaliaProfissional (input) {
    const comando = `
        insert into tb_avaliacao(id_worker, id_usuario, vl_avaliacao)
    	    values(?, ?, ?);
    `;
    const linhas = await con.query(comando , [input.worker, input.usuario, input.avaliacao]);
    return linhas;
}

export async function UsuarioWorker (id) {
    const comando = `
        select tb_worker.id_usuario as id
        from tb_worker
         inner join tb_usuario
            on tb_usuario.id_usuario = tb_worker.id_usuario
         where tb_worker.id_usuario = ?;
    `;
    const [linhas] = await con.query(comando, [`%${id}%`]);
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

export async function DeletarContato(id) {
    const comando = `
        delete from tb_contato
        where id_usuario = ?;
    `;
const [linhas] = await con.query(comando, [id]);
return linhas[0]; 
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
