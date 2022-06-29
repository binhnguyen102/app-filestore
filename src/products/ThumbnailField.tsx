import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useRecordContext } from 'react-admin';
import { Product } from '../types';

const Img = styled('img')({
    width: 300,
    maxWidth: 300,
    maxHeight: 300,
    verticalAlign: 'middle',
});

const ThumbnailField = (props: { source: string; label?: string }) => {
    const record = useRecordContext<Product>();
    if (!record) return null;
    return <Img src={record.path} alt="" />;
};

export default ThumbnailField;  