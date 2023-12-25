import style from '@/styles/historia.module.css'
import { Card } from 'antd'
import foto from '../../../public/assets/images/04.jpeg'


export default function historia() {
    return (
        <>
            <div className={style.historiaBox} style={{ backgroundImage: `url('${foto.src}')`, width: '100%', height: '100%', backgroundRepeat: 'round' }}>

                <h1 style={{color: '#fff'}}>História</h1>

                <Card
                    title="O INÍCIO"
                    bordered={false}
                    style={{
                        margin: 10,
                        width: 300,
                        position: 'inherit'
                    }}
                >
                    <p>Tudo começou no dia 20/10/2023 as 21:20,  após um convite para conhecer sua casa, ela manda sua localização, com medo ele mesmo assim vai ao seu encontro...</p>
                </Card>

                <Card
                    title="NATAL 2023"
                    bordered={false}
                    style={{
                        margin: 10,
                        width: 300,
                        position: 'inherit'
                    }}
                >
                    <p>Dia de conhecer a família, primeiro a vez dela, dia 24/12/2023 ela aceita ir almoçar na casa dos pais 
                        dele localizado no sítio cavaco, chegando por volta das 12:30, ela apreensiva nem conseguia respirar
                        direito.. depois foi a vez dele conhecer a família, ja chegou bebendo de tanto de nervoso que estava...</p>
                </Card>

                <Card
                    title="ANO NOVO 2023"
                    bordered={false}
                    style={{
                        margin: 10,
                        width: 300,
                        position: 'inherit'
                    }}
                >
                    <p>...</p>
                </Card>

                <Card
                    title="VIAGEM"
                    bordered={false}
                    style={{
                        margin: 10,
                        width: 300,
                        position: 'inherit'
                    }}
                >
                    <p>...</p>
                </Card>

                <Card
                    title="CASAMENTO"
                    bordered={false}
                    style={{
                        margin: 10,
                        width: 300,
                        position: 'inherit'
                    }}
                >
                    <p>...</p>
                </Card>

                
                <Card
                    title="FILHOS"
                    bordered={false}
                    style={{
                        margin: 10,
                        width: 300,
                        position: 'inherit'
                    }}
                >
                    <p>Pelo menos uns 5...</p>
                </Card>



                

            </div>

        </>
    )
}