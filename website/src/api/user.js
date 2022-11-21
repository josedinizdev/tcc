import axios from 'axios'
const api = axios.create ({
    baseURL: 'http://localhost:5500'
})

export async function LoginUsuario(email, senha) {
    const resp = await api.post('/usuario/login', {
        email: email,
        senha: senha
    })
    return resp.data;
}

export async function CadastrarUsuario(nome, email, dtNascimento) {
    const resp = await api.post('/usuario/cadastro', {
        nome: nome,
        email: email,
        dtNascimento: dtNascimento
    })
    return resp.data;
}

export async function CadastrarUsuarioLogin(id, senha) {
    const resp = await api.post(`/usuario/cadastro/${id}`, {
        senha: senha
    })
    return resp.data;
}

export async function DetalhesUsuario(id) {
    const resp = await api.get(`/usuario/${id}`)
    return resp.data;
}

export async function EditarPerfil(perfil, id) {
    const resp = await api.put(`/usuario/perfil/alterar/${id}`, {
        nome: perfil.nome,
        descricao: perfil.descricao,
        email: perfil.email,
        celular: perfil.celular,
        genero: perfil.genero,
        nascimento: perfil.nascimento
    })
    return resp.data;
}

export async function AleterarFotoPerfil(id, imagem) {
    const formData = new FormData();
    formData.append('imagem', imagem);
    const resp = await api.put(`usuario/perfil/alterar/${id}/imagem`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });
    return resp.status;
}

export async function Usuarios() {
    const resp = await api.get('/usuario/perfil/s')
    return resp.data;
}

export async function isWorker(id) {
    const resp = await api.get(`/profissional/${id}`)
    return resp.data;
}

export async function beWorker(input) {
    const resp = await api.post('/profissional', input)
    return resp.data;
}   