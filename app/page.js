'use client'
import * as React from 'react';
import style from './page.module.css'
import RootLayout from './layout';
import useWindowMeasurement from '@/utils/customHooks/useWindowMeasurement';

import { Typography, Stack } from "@mui/material";

const MainWithName = () => {
const WIDTH = useWindowMeasurement()
    return (
        <RootLayout>
            <Stack 
            direction={WIDTH <= 500 ? 'column' : 'row'} 
            spacing={5} 
            className={style.MainContainerDiv}
            >
                <Stack>
                    <Typography sx={{ color: 'black' }}>
                        Hi, i'm
                    </Typography>
                    <Typography>
                        Damian Ianni
                    </Typography>
                </Stack>
                <Typography>
                    aca soy el mejor del mundo
                </Typography>
            </Stack>
        </RootLayout>
    )
}

export default MainWithName