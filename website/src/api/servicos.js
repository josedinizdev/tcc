import axios from 'axios'
const api = axios.create ({
    baseURL: 'http://localhost:5500'
})


export async function CadastrarServico(usuario, titulo, descricao, ideias, requisitos) {
    const resp = await api.post('/servicos', {
        usuario: usuario,
        titulo: titulo,
        descricao: descricao,
        ideias: ideias,
        requisitos: requisitos
    })

    return resp.data;
}

export async function ListarServico() {
    const resp = await api.get('/servicos')
    return resp.data;
}

export async function PesquisarServicoTitulo(titulo) {
    const resp = await api.get(`/servicos/${titulo}`)
    return resp.data;
}

export async function PesquisarProfissionalNome(nome) {
    const resp = await api.get(`/servicos/profissional/${nome}`)
    return resp.data;
}

