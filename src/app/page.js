'use client'

import Image from 'next/image'
import styles from '@/styles/app.module.css'
import foto from '../../public/assets/images/foto.jpeg'
import { Button, message } from 'antd'
import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'

export default function Home() {

  //Obj whats
  const whats = {
    chatId: `558898550669@c.us`,
    contentType: "string",
    content: "Eu te amo muito e estou com saudade!"
  }

  const [objWhats, setObjWhats] = useState(whats)

  //Enviat whats
  const EnviarWhats = () => {
    axios.post("https://whats.thbytes.com.br/client/sendMessage/comunidadezdg", {
      ...objWhats
    }).then((response) => {
      message.success("Whats enviado com sucesso ", 5)
    })
      .catch(error => {
        if (error.message === "Network Error") {
          message.error("Erro de conexão, verifique sua internet ou tente novamente", 5)
        } else {
          message.error("Erro ao enviar", 5)
        }
      })
  }


  return (
    <div className={styles.app} style={{ backgroundImage: `url('${foto.src}')`, width: '100%', height: '100%', backgroundRepeat: 'round', marginTop: 50 }}>
      
      <div style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 10, margin: 20, borderRadius: 10 }}>

        EU TE AMO!!!! ❤️
        <Button onClick={() => EnviarWhats()} type='primary'>Clique aqui</Button>
        <br />

      </div>

      {/*<Image src={foto1}></Image>*/}

    </div>
  )
}
