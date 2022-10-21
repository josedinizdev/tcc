import StyledEditarPerfil from "./styles";
import ProfileCard from '../../../components/profile/index.js';
import User from '../../../assets/images/perfil.png'

export default function EditarPerfil() {
    return(
        <StyledEditarPerfil className="container al-center jc-center bEF7601 wrap wh100v">
            <section className="container cinza-card jc-center">
                <ProfileCard    userProfile={User}
                                nome='David Douglas'
                                cargo='Desenvolvedor Sênior'
                                habilidades='   Designer UX/UL   Desenvolvedor de Software   Desenvolvedor Web   HTML & CSS Avançado' /> 

                <div className="linha" /> 

                <article className="container-column container-editar card-branco ">
                    <nav className="container jc-end"> 
                        <button> Cancelar </button>
                        <button className="b1E4F6F cFFFFFF"> Finalizar </button>
                    </nav>

                    <div className="container">
                        <img src={User} alt='' />
                        <div className="container al-end">
                            <button className="alterar-img c1E4F6F"> Alterar foto de perfil </button>
                        </div>
                    </div>

                    <form className="container-column">
                        <label className="container jc-between"> Nome
                            <input type='text' />
                        </label>

                        <label className="container jc-between"> Descrição
                            <textarea />
                        </label>

                        <div className="linha" />

                        <label className="container jc-between"> Email
                            <input type='text' />
                        </label>

                        <label className="container jc-between"> Telefone
                            <input type='text' />
                        </label>

                        <label className="container jc-between"> Gênero
                            <input type='text' />
                        </label> 

                    </form>

                </article>
            </section>
        </StyledEditarPerfil>
    )
}