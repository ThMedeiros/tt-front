'use client'

import styles from '@/styles/nav-bar.module.css'
import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'
import { notification } from 'antd';
import { FaWhatsapp } from "react-icons/fa6";

const key = 'updatable';

export default function NavBar() {

    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        api.open({
            key,
            message: '❤️ Nunca esqueça... ❤️',
        });
        setTimeout(() => {
            api.open({
                key,
                message: '❤️ EU ❤️',
            });
        }, 2000);
        setTimeout(() => {
            api.open({
                key,
                message: '❤️ TE AMO ❤️',
            });
        }, 4000);
    };


    return (


        <div className={styles.NavBarBox}>
            {contextHolder}
            <Menu />
            

            <Link href="/">
                <Button 
                type="dashed" 
                ghost 
                style={{ color: '#ffffff', fontWeight: 'bold', border: '2px solid #fff' }}
                onClick={openNotification}>
                    ❤️
                </Button>
            </Link>


        </div >
    )
}