import Image from 'next/image'
import styles from '@/styles/app.module.css'
import foto from '../../public/assets/images/04.jpeg'
import { Button } from 'antd'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.app} style={{ backgroundImage: `url('${foto.src}')`, width: '100%', height: '100%', backgroundRepeat: 'round' }}>

      <div style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 10, margin: 20, borderRadius: 10 }}>

        EU TE AMO!!! ❤️
        <br/>

      </div>
     
      {/*<Image src={foto1}></Image>*/}

    </div>
  )
}
