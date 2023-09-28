import styles from "./convite.module.scss"
import { SendFill } from 'react-bootstrap-icons';


export default function Convite(props) {

    const tema = props.tema

    return (
        <span  id="ancora-contatos">
        <section className={styles.sectionConvite} id={tema === 'Light' ? styles.Light : null}>
            <div className={styles.containerConvite}>
                <p className={styles.subTitle} data-aos="fade-right">Convite</p>
                <h3 className={styles.title} data-aos="fade-right">Mande um oi 🖐</h3>
                
                <div className={styles.cards}>
                    <div className={styles.cardConvite} data-aos="zoom-in">
                        <img src="https://thumbs.dreamstime.com/z/equipe-do-programador-e-de-projeto-torna-se-para-aplica%C3%A7%C3%A3o-web-com-funcionamento-da-neg%C3%B3cio-126510094.jpg?w=992" alt="" className={styles.img} />
                        <h3 className={styles.titleConvite}>Vamos trabalhar juntos</h3>
                        <p>
                            Se a sua empresa está em busca de um desenvolvedor web, estou à disposição para uma conversa, e para discutir como posso contribuir para atender às suas necessidades. Sinta-se à vontade para dar um alô 🖐.
                        </p>
                        <a type="button" class="btnPersonalizado" id={styles.button} href="#formEmail">
                            < SendFill /> Iniciar uma conversa.
                        </a>
                    </div>
                    <div className={styles.cardConvite} data-aos="zoom-in">
                        <img src="https://thumbs.dreamstime.com/z/conceito-de-processo-desenvolvimento-aplica%C3%A7%C3%B5es-m%C3%B3veis-isom%C3%A9tricas-e-concep%C3%A7%C3%A3o-web-projetos-equipe-trabalho-do-grupo-157569667.jpg?w=992" alt="" className={styles.img} />
                        <h3 className={styles.titleConvite}>Quer iniciar um projeto comigo?</h3>
                        <p>
                            Conte comigo para colocar seu projeto em prática. Com interesse e dedicação, estou pronto para ouvir suas ideias e transformá-las em realidade. Vamos tirar esse projeto do papel juntos! eu organizo tudo.
                        </p>
                        <a type="button" class="btnPersonalizado" id={styles.button} href="#formEmail">
                            < SendFill /> Freelancer!
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </span>
    )
}