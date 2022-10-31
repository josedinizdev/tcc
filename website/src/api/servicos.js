import axios from 'axios'
const api = axios.create ({
    baseURL: 'http://localhost:5500'
})

export async function CadastrarServico(categoria, estado, cidade, endereco, numero, cep, complemento, usuario, titulo, descricao, ideias, requisitos) {
    const resp = await api.post('/servicos', {
        categoria: categoria,
        estado: estado,
        cidade: cidade,
        endereco: endereco,
        numero: numero,
        cep: cep,
        complemento: complemento,
        usuario: usuario,
        titulo: titulo,
        descricao: descricao,
        ideias: ideias,
        requisitos: requisitos
    })
    return resp.data;
}

export async function AtualizarServico(servico, local, categoria, estado, cidade, endereco, numero, cep, complemento, usuario, titulo, descricao, ideias, requisitos) {
    const resp = await api.put('/servicos', {
        servico: servico,
        local: local,
        categoria: categoria,
        estado: estado,
        cidade: cidade,
        endereco: endereco,
        numero: numero,
        cep: cep,
        complemento: complemento,
        usuario: usuario,
        titulo: titulo,
        descricao: descricao,
        ideias: ideias,
        requisitos: requisitos
    })
    return resp.data;
}
    
export async function ListarServico({ nome, categoria }) {
    const n = nome !== '' ? `nome=${nome}` : ''
    const c = categoria !== ''? `categoria=${categoria}` : ''
    const juncao = n !== '' && c !== ''? `?${n}&${c}` : `?${n}${c}`
    const resp = await api.get(`/servicos/s${juncao}`);
    return resp.data;
}

export async function ListarServicoUsuario(id) {
    const resp = await api.get(`/servicos/usuario/${id}`)
    return resp.data;
}

export async function ListarProfissional() {
    const resp = await api.get('/profissional')
    return resp.data;
}

export async function PesquisarServicoTitulo(titulo) {
    const resp = await api.get(`/servicos/${titulo}`)
    return resp.data;
}

export async function PesquisarProfissionalNome(nome) {
    const resp = await api.get(`/profissional/${nome}`)
    return resp.data;
}

export async function VerDetalhes(id) {
    const resp = await api.get(`/servicos/detalhes/${id}`)
    return resp.data;
}

export async function ServicosAplicados(user) {
    const resp = await api.get('/servicos/worker/', {
        nome: user.pesquisa,
        trabalhador: user.user
    })
    return resp.data;
}