import * as React from "react";
import ThumbnailField from "./ThumbnailField";
import {
  Datagrid,
  EditButton,
  List,
  NumberField,
  TextField,
  TextInput,
  DateInput,
  ShowButton,
  ReferenceInput,
  AutocompleteInput

} from "react-admin";
import IconEvent from "@mui/icons-material/Event";
import { Tag } from "../types"
const postFilters = [
  <TextInput label="Search" source="q" alwaysOn />,
  <ReferenceInput source="tags" reference="tags">
        <AutocompleteInput
            optionText={(choice?: Tag) =>
                choice?.id 
                    ? `${choice.tagName} `
                    : ''
            }
        />
    </ReferenceInput>,
  <DateInput label = "create at " source = "created_at"/>,
  <DateInput label = "download time " source = "download_time"/>,
  <DateInput label = "download total " source = "download_total"/>

]

export const ProductList = () => (
  <List perPage={5} filters={postFilters}>
    <Datagrid rowClick="show">
      <ThumbnailField source="thumbnail" label="" />
      {/* <ImageField source="path" sx={{ width: 160 }} label="Image" textAlign="center"/> */}
      <TextField source="id" textAlign="center" />
      <TextField source="name" textAlign="center" />
      <TextField source="created_at" textAlign="center" />
      <TextField source="download_time" textAlign="center" />
      <NumberField source="download_total" textAlign="center" />
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);
