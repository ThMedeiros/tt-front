import Image from 'next/image'
import styles from './styles/app.module.css'
import foto from '../../public/assets/images/03.jpeg'
import { Button } from 'antd'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.app} style={{ backgroundImage: `url('${foto.src}')`, width: '100%', height: '100%', backgroundRepeat: 'round' }}>
     
      <Link href='/album'>
      <Button>Album</Button>
      </Link>
      {/*<Image src={foto1}></Image>*/}

    </div>
  )
}
