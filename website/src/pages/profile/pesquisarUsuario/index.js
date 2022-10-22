import StyledPesquisarUsuario from "./styles";
import ProfileCard from "../../../components/profile";
import User from '../../../assets/images/perfil.png'
import ListarUsuarios from "./listarUsuario";

export default function BuscarUsuarioPage() {
    return(
        <StyledPesquisarUsuario className="wh100v container bEF7601 wrap jc-center al-center">
            <section className="container cinza-card">
                <ProfileCard    userProfile={User}
                                nome='David Douglas'
                                cargo='Desenvolvedor Sênior'
                                habilidades='   Designer UX/UL   Desenvolvedor de Software   Desenvolvedor Web   HTML & CSS Avançado'/>

                <div className="linha" />

                <nav className="container-column al-center jc-center">
                    <div className="container jc-end">
                        <select>
                            <option> Filtros </option>
                        </select>

                        <input type='text' placeholder='Pesquisar' />
                    </div>

                    <div className="linha"/>

                    <div className="card-branco listar">
                        <ListarUsuarios img={User}
                                        nome='David Douglas'
                                        descricao='Sou profissional da categoria Web, 
                                        trabalho na aréa a mais de 6meses,procuro resolver tudo ao meu alcance.'                                        />
                    </div>
                </nav>
            </section>

            
        </StyledPesquisarUsuario>
    )
}