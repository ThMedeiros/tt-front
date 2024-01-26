import Image from 'next/image'
import styles from '@/styles/app.module.css'
import foto from '../../public/assets/images/04.jpeg'
import { Button } from 'antd'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.app} style={{ backgroundImage: `url('${foto.src}')`, width: '100%', height: '100%', backgroundRepeat: 'round' }}>

      <div style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 10, margin: 20, borderRadius: 10 }}>

        Parabéns amor, ja está na reta final..  
        Só para você não esquecer EU TE AMO!! ❤️
        <br/>
        <br/>
        <span style={{fontWeight: 'bold'}}>Vamos ver se é esperta mesmo, vá para o local mais quente da casa quando ligado</span>
      </div>
     
      {/*<Image src={foto1}></Image>*/}

    </div>
  )
}
