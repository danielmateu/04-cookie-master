import NextLink from 'next/link';


import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import {MenuOutlined} from '@mui/icons-material';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <AppBar position='sticky' elevation={0}>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'>
                        <MenuOutlined/>
                </IconButton>

                <NextLink href='/' passHref>
                    <Link href={'/'} >
                        <Typography variant='h6' color='white'>Cookie-Master</Typography>
                    </Link>
                </NextLink>
                <div style={{flex: 1}}></div>
                <NextLink href='/theme-changer' passHref>
                    <Link href={'/theme-changer'}>
                        <Typography variant='h6' color='white'>Cambiar tema</Typography>
                    </Link>
                </NextLink>
            </Toolbar>

        </AppBar>
    )
}
