import { HomeOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Divider, Drawer } from "antd";
import Link from "next/link";
import { useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BsBook } from "react-icons/bs";
import { FcAnswers } from "react-icons/fc";
import { FaWhatsapp } from "react-icons/fa6";



export default function Menu() {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button type="link" onClick={showDrawer}>
                <MenuOutlined style={{ fontSize: '26px', color: '#fff', marginLeft: -10 }} />
            </Button>
            <Drawer
                title="Menu"
                width={220}
                placement={'left'}
                closable={false}
                onClose={onClose}
                open={open}>

                <Link href='/' onClick={onClose}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        <HomeOutlined style={{ fontSize: 18, margin: 10 }} />
                        <span style={{ fontSize: 16 }}>Página inicial</span>

                    </div>
                </Link>

                <Divider style={{ margin: 0 }} />
                <Link href='/historia' onClick={onClose}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        <BsBook style={{ fontSize: 18, margin: 10, color: 'coral' }} />
                        <span style={{ fontSize: 16 }}>História</span>

                    </div>
                </Link>



                <Divider style={{ margin: 0 }} />
                <Link href='/album' onClick={onClose}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        <HiOutlinePhotograph style={{ fontSize: 22, margin: 8, color: 'blue' }} />
                        <span style={{ fontSize: 16 }}>Album</span>

                    </div>
                </Link>
                <Divider style={{ margin: 0 }} />


                <Link href='/questionario' onClick={onClose}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        <FcAnswers style={{ fontSize: 22, margin: 8 }} />
                        <span style={{ fontSize: 16 }}>Questionário</span>

                    </div>
                </Link>
                <Divider style={{ margin: 0 }} />

                <Link
                    target='_blank'
                    href="https://api.whatsapp.com/send?phone=5588996137358&text=Estou com saudades, quero te ver"
                    shape="circle"
                    onClick={onClose}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        <FaWhatsapp style={{ fontSize: 22, margin: 8, color: 'green' }} />
                        <span style={{ fontSize: 16 }}>Quero te ver</span>

                    </div>
                </Link>
                <Divider style={{ margin: 0 }} />

            </Drawer>
        </>

    )
}


