import Image from "next/image";
import Foto1 from '../../../public/assets/images/01.jpeg'
import Foto2 from '../../../public/assets/images/02.jpeg'
import Foto3 from '../../../public/assets/images/03.jpeg'
import Foto4 from '../../../public/assets/images/04.jpeg'
import Foto5 from '../../../public/assets/images/05.jpeg'
import Foto6 from '../../../public/assets/images/06.jpeg'
import Foto7 from '../../../public/assets/images/07.jpeg'
import Foto8 from '../../../public/assets/images/08.jpeg'
import Foto9 from '../../../public/assets/images/09.jpeg'
import Foto10 from '../../../public/assets/images/10.jpeg'
import Foto11 from '../../../public/assets/images/11.jpeg'
import Foto12 from '../../../public/assets/images/12.jpeg'
import Foto13 from '../../../public/assets/images/13.jpeg'
import Foto14 from '../../../public/assets/images/14.jpeg'


import Link from "next/link";
import { Button } from "antd";
import styles from '@/styles/album.module.css'

export default function album() {
    return (

        <div className={styles.albumBox}>


            <div className={styles.albumFotoBox}>

                <div className={styles.albumFotoBoxIndividual}>
                    <span>A primeira foto ❤️</span>
                    <Image
                        src={Foto1}
                        height='250'
                        width='350'
                        alt="Foto"
                        className={styles.albumFoto}
                    />
                </div>

                <div className={styles.albumFotoBoxIndividual}>
                    <span>Tinha que ser comendo 🥩</span>
                    <Image
                        src={Foto3}
                        height='300'
                        width='250'
                        alt="Foto"
                        className={styles.albumFoto}
                    />
                </div>

                <div className={styles.albumFotoBoxIndividual}>
                    <span>Bebendo 🍺</span>
                    <Image
                        src={Foto2}
                        height='300'
                        width='250'
                        alt="Foto"
                        className={styles.albumFoto}
                    />
                </div>

                <div className={styles.albumFotoBoxIndividual}>
                    <span>Na melhor companhia</span>
                    <Image
                        src={Foto4}
                        height='300'
                        width='250'
                        alt="Foto"
                        className={styles.albumFoto}
                    />
                </div>

                <div className={styles.albumFotoBoxIndividual}>
                    <span>Dog dela 🐩</span>
                    <Image
                        src={Foto5}
                        height='300'
                        width='250'
                        alt="Foto"
                        className={styles.albumFoto}
                    />
                </div>

                <div className={styles.albumFotoBoxIndividual}>
                    <span>Dog dele 🐶</span>
                    <Image
                        src={Foto6}
                        height='300'
                        width='250'
                        alt="Foto"
                        className={styles.albumFoto}
                    />
                </div>

                <div className={styles.albumFotoBoxIndividual}>
                    <span>Os dogs kk</span>
                    <Image
                        src={Foto7}
                        height='300'
                        width='250'
                        alt="Foto"
                        className={styles.albumFoto}
                    />
                </div>

                <div className={styles.albumFotoBoxIndividual}>
                    <span>Minha ❤️</span>
                    <Image
                        src={Foto8}
                        height='300'
                        width='250'
                        alt="Foto"
                        className={styles.albumFoto}
                    />
                </div>

                <div className={styles.albumFotoBoxIndividual}>
                    <span>Seu ❤️</span>
                    <Image
                        src={Foto9}
                        height='300'
                        width='250'
                        alt="Foto"
                        className={styles.albumFoto}
                    />
                </div>

                <div className={styles.albumFotoBoxIndividual}>
                    <span>Fazendo comida pra mim 🤤</span>
                    <Image
                        src={Foto10}
                        height='300'
                        width='250'
                        alt="Foto"
                        className={styles.albumFoto}
                    />
                </div>

                <div className={styles.albumFotoBoxIndividual}>
                    <span>Focada 💪</span>
                    <Image
                        src={Foto12}
                        height='300'
                        width='250'
                        alt="Foto"
                        className={styles.albumFoto}
                    />
                </div>

                <div className={styles.albumFotoBoxIndividual}>
                    <span>Focado 💪 (nem tanto)</span>
                    <Image
                        src={Foto13}
                        height='300'
                        width='250'
                        alt="Foto"
                        className={styles.albumFoto}
                    />
                </div>

                <div className={styles.albumFotoBoxIndividual}>
                    <span>Praia 🏖️</span>
                    <Image
                        src={Foto14}
                        height='250'
                        width='350'
                        alt="Foto"
                        className={styles.albumFoto}
                    />
                </div>

                

            </div>

        </div>
    )
}