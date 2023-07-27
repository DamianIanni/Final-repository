'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';
import style from '../cssModules/appBar.module.css'

import MyDrawer from './Drawer';

import useWindowMeasurement from '../../utils/customHooks/useWindowMeasurement.js'

export default function ButtonAppBar() {

 const WIDTH = useWindowMeasurement()

    const StackData = () => {
        return (
            <Stack direction={'row'} spacing={5} className={style.stackInfo}>
                {WIDTH <= 500 && <Typography>Damian Ianni</Typography>}
                {WIDTH >= 500 &&
                    <React.Fragment>
                        <Typography>Damian Ianni</Typography>
                        <Typography className={style.font}>
                            +549 1159258873
                        </Typography>
                        <Typography className={style.font}>
                            damiangussi@gmail.com
                        </Typography>
                    </React.Fragment>
                }
            </Stack>
        )
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'transparent' }}>
                <Toolbar
                    sx={{ backgroundColor: undefined }}
                    className={style.appBarClass}>
                    <StackData/>
                    <MyDrawer />
                </Toolbar>
            </AppBar>
        </Box>
    );
}