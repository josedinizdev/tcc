import { con } from "./connection.js";


export async function  VerConversas (id) {
    const comando = `
    select * from tb_mensagem
    where id_identificar_chat = ?;
    `;

const [linhas] = await con.query(comando, [`%${id}%`]);
return linhas;

}