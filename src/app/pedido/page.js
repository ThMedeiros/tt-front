'use client'

import styles from '@/styles/pedido.module.css'
import { Button, Modal } from 'antd'
import { useState } from 'react';


export default function Pedido() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.PedidoBox}>

            <div className={styles.PedidoCard}>
                <span style={{ margin: 10 }}>Tamires, você aceitar namorar comigo?</span>
                <Button className={styles.PedidoButton1} onClick={showModal}>SIM</Button>
                <Button className={styles.PedidoButton2} disabled={true} >
                    NÃO
                </Button>
            </div>

            <Modal title="Pedido aceito" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Parabéns, vocês são oficialmente namorados ❤️</p>
                <p>Para finalizar olhe para sua esquerda e fale:</p>
                <p style={{ margin: 10, fontSize: 20, fontWeight: 'bold' }}>ALEXA, HOJE TEM</p>
            </Modal>


        </div>
    )

}