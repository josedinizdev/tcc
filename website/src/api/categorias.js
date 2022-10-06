import axios from 'axios'
const api = axios.create ({
    baseURL: 'http://localhost:5500'
})

export async function obterCategorias() {
    const resp = await api.get('/categorias');
    return resp;
}