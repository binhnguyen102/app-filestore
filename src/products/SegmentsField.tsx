import * as React from 'react'
import { Stack, Chip } from '@mui/material'
import { FieldProps, useRecordContext } from 'react-admin'
import { Product } from '../types'

const SegmentsField = (props: FieldProps) => {
  const record = useRecordContext<Product>()
  if (!record) {
    return null
  }
  return (
    <Stack direction="row" gap={1} flexWrap="wrap">
    {record.tagName.map((item, index) => (
        <Chip key={index} label={item} />
      ))}
    </Stack>
  )
}

export default SegmentsField;