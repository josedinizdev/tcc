import axios from 'axios'
const api = axios.create ({
    baseURL: 'http://localhost:5500'
})

export async function LoginUsuario(email, senha) {
    const resp = await api.post('http://localhost:5500/usuario/login ', {
        email: email,
        senha: senha
    })
    return resp.data;
}
