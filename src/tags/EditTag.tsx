import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
} from 'react-admin';


export const TagEdit = () => (
    <Edit>
        <SimpleForm>
            {/* <TextInput disabled source="id" />   */}
            <TextInput source="tagName" />
        </SimpleForm>
    </Edit>
);