import * as React from "react";
import {
    Create,
    SimpleForm,
    TextInput,
    required
} from 'react-admin';


export const CreateTag = () => (
    <Create> 
        <SimpleForm>
            
            <TextInput source="tagName"  validate={required()} />
        </SimpleForm>
    </Create>
);