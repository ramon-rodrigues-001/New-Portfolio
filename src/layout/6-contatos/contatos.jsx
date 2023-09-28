import { useState } from "react";
import styles from "./contatos.module.scss"
import { Github, Linkedin, Facebook, EnvelopeAt} from 'react-bootstrap-icons';

export default function Contatos() {
    
    const [copy, setCopy] = useState(false);

    const copiaChave = () => {
        setCopy(true);
        navigator.clipboard.writeText("ramon.rodrigues.dev@gmail.com");
        setTimeout(() => setCopy(false), 2000);
    };




    return (
        <footer className={styles.sectionContatos}>
            <p className={styles.subTitle} data-aos="fade-right">Contatos</p>
            <h2 className={styles.title} data-aos="fade-right">Me contate</h2>


            <div id={styles.animação_texto_contatos}>
                <div>
                    <div>
                        <a class="btn btn-outline-info btnPersonalizado" href="https://www.linkedin.com/in/ramon-rodrigues-515a9b244/" target="_blank" id={styles.footer_cards}>
                            <p>< Linkedin /></p>
                        </a>
                        <a class="btn btn-outline-info btnPersonalizado " href="https://github.com/ramon-rodrigues-001" target="_blank" id={styles.footer_cards}>
                            <p>< Github /></p>
                        </a>
                        <a class="btn btn-outline-info btnPersonalizado" href="https://www.facebook.com/profile.php?id=100084075099565" target="_blank" id={styles.footer_cards}>
                            <p>< Facebook /></p>
                        </a>
                    </div>
        
                    <button className="btn btn-outline-info btnPersonalizado" value={'ramon.rodrigues.dev@gmail.com'} id={styles.copiar_email} onClick={copiaChave}>
                        < EnvelopeAt /> . {copy ? 'COPIADO': 'COPIAR EMAIL'} . < EnvelopeAt />
                    </button>
                    <p data-aos-duration="1500" data-aos="fade-right">
                        <strong>Cell: </strong>(33) 97879-2332
                    </p>
                    <p data-aos-duration="2000" data-aos="fade-right">
                        <strong>Endereço: </strong>Capelinha-MG 39680‑000
                    </p>
                    <p data-aos-duration="2500" data-aos="fade-right">
                        V:1. 10 / 09 / 2023
                    </p>
                </div>
                
                <form action="mailto:ramon.rodrigues.dev@gmail.com" method="post" enctype="text/plain" className={styles.formulario} id="formEmail">
                    
                    <div id={styles.div_name_email}>
                        <div>
                            <label htmlFor="name">Nome completo: </label> <br />
                            <input type="text" id="name" required placeholder="Voce..." className={styles.input} />
                        </div>
                        <div>
                            <label for="email">Seu Email: </label> <br />
                            <input type="text" id="email" required placeholder="@gmail.com" className={styles.input} />
                        </div>
                    </div> <br />
                    <div id={styles.div_textarea}>
                        <label for="smg" >Mensagem: </label> <br />
                        <textarea name="smg" id="smg" required placeholder="Fale mais sobre seu projeto 😃✌" ></textarea>
                    </div>
                    <input type="submit" id={styles.submit} value="ENVIAR" />
                </form>
            </div>
        </footer>
    )
}