import React from 'react';
import { TextField,List, Datagrid, EditButton} from 'react-admin';


export const  TagList = ()=> (
    <List>
        <Datagrid   >
        
      <TextField source="tagName" textAlign="center" />
      <EditButton/>
      </Datagrid>
    </List>
);

