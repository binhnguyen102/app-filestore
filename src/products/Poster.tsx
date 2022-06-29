import * as React from 'react';
import { Card, CardMedia } from '@mui/material';
import { useRecordContext } from 'react-admin';
import { Product } from '../types';

const Poster = () => {
    const record = useRecordContext<Product>();
    if (!record) return null;
    return (
        <Card sx={{ display: 'inline-block', width: "100%", maxHeight: "100%" }}>
            <CardMedia
                component="img"
                image={record.path}
                alt=""
            />
        </Card>
    );
};

export default Poster;