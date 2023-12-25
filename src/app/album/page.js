import Image from "next/image";
import Foto0 from '../../../public/assets/images/00.jpeg'
import Foto1 from '../../../public/assets/images/01.jpeg'
import Foto2 from '../../../public/assets/images/02.jpeg'
import Foto3 from '../../../public/assets/images/03.jpeg'
import Foto4 from '../../../public/assets/images/04.jpeg'
import Link from "next/link";
import { Button } from "antd";
import styles from '../styles/album.module.css'

export default function album() {
    return (

        <div className={styles.albumBox}>

            <Link href='/'>
                <Button type="primary">Página inicial</Button>
            </Link>

            <div className={styles.albumFotoBox}>

                <div className={styles.albumFotoBoxIndividual}>
                    <span>A primeira foto ❤️</span>
                    <Image
                        src={Foto0}
                        height='250'
                        width='350'
                        alt="Foto"
                        className={styles.albumFoto}
                    />
                </div>

                <div className={styles.albumFotoBoxIndividual}>
                    <span>Tinha que ser comendo 🥩</span>
                    <Image
                        src={Foto1}
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
                        src={Foto3}
                        height='300'
                        width='250'
                        alt="Foto"
                        className={styles.albumFoto}
                    />
                </div>

                <div className={styles.albumFotoBoxIndividual}>
                    <span>Praia 🏖️</span>
                    <Image
                        src={Foto4}
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