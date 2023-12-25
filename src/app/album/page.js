import Image from "next/image";
import Foto1 from '../../../public/assets/images/01.jpeg'
import Foto2 from '../../../public/assets/images/02.jpeg'
import Foto3 from '../../../public/assets/images/03.jpeg'
import Foto4 from '../../../public/assets/images/04.jpeg'


export default function album() {
    return (

        <div>
            <Image
                src={Foto1}
                height='100'
                width='100'
                alt="Foto" />

            <Image
                src={Foto2}
                height='100'
                width='100'
                alt="Foto" />

            <Image
                src={Foto3}
                height='100'
                width='100'
                alt="Foto" />

            <Image
                src={Foto4}
                height='100'
                width='100'
                alt="Foto" />
        </div>
    )
}