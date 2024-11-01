'use client'

import Image from 'next/image'
import styles from '@/styles/app.module.css'
import foto from '../../public/assets/images/foto.jpeg'
import { Button, Input, message } from 'antd'
import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'

export default function Home() {

  //Obj whats
  const whats = {
    chatId: `558898550669@c.us`,
    contentType: "string",
    content: "Parabéns amor, Eu te amo muito e estou com saudade! Número: 10"
  }

  const [objWhats, setObjWhats] = useState(whats)

  const [senha, setSenha] = useState()
  const [showPremio, setShowPremio] = useState(false)

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
        <p>1- Olhe sua caixa dos correios</p>
        <p>2- EU TE AMO!!!! ❤️</p>
        <p>3- Qual dia que a gente se conheceu?</p>
        <p>4- Eu estou com frio, quase congelando</p>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: 10 }}>
          <p>Senha:</p>
          <Input
          placeholder='Juntes os 4 número na sequencia'
            onChange={(e) => setSenha(e.target.value)}
            max={8}>
          </Input>
          <Button style={{ backgroundColor: 'red', margin: 10 }} onClick={() => senha == "23102030" ? setShowPremio(true) : message.error("Senha errada")} type='primary'> Ver Prêmio</Button>

          {showPremio && (
            <p style={{fontWeight: 'bold', backgroundColor: 'green', padding: 10}}>Parabéns amor, você conseguiu! O prêmio está atrás da sua obra de arte que tem uma língua</p>
          )}
        </div>



        <div style={{ marginTop: 30 }}>
          <Button onClick={() => EnviarWhats()} type='primary'> EU TE AMO!!!! ❤️</Button>
        </div>

        <br />

      </div>

      {/*<Image src={foto1}></Image>*/}

    </div >
  )
}
