import Image from 'next/image'
import styles from './app.module.css'
import foto1 from '../../public/assets/images/01.jpeg'

export default function Home() {
  return (
    <div className={styles.app} style={{ backgroundImage: `url('${foto1.src}')`, width: '100%', height: '100%', backgroundRepeat: 'round' }}>
      
      <p>teste</p>
      {/*<Image src={foto1}></Image>*/}

    </div>
  )
}
