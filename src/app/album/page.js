import Image from "next/image";
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
                <Button>Página inicial</Button>
            </Link>

            <div className={styles.albumFotoBox}>


                <Image
                    src={Foto1}
                    height='300'
                    width='250'
                    alt="Foto"
                    className={styles.albumFoto}
                />


                <Image
                    src={Foto2}
                    height='300'
                    width='250'
                    alt="Foto"
                    className={styles.albumFoto}
                />

                <Image
                    src={Foto3}
                    height='300'
                    width='250'
                    alt="Foto"
                    className={styles.albumFoto}
                />

                <Image
                    src={Foto4}
                    height='250'
                    width='350'
                    alt="Foto"
                    className={styles.albumFoto}
                />

            </div>

        </div>
    )
}