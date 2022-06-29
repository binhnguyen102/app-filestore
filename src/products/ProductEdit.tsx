import { Grid, Autocomplete } from "@mui/material";
import * as React from "react";
import {
  Edit,
  FormTab,
  required,
  TabbedForm,
  TextField,
  TextInput,
  useRecordContext,
  SelectArrayInput,
  ReferenceArrayInput,
  AutocompleteArrayInput
} from "react-admin";

import { Product } from "../types";
import Poster from "./Poster";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import TextFil from "@mui/material/TextField";
import { Typography } from "@mui/material";

const ProductTitle = () => {
  const record = useRecordContext<Product>();
  return record ? <span>image "{record.name}"</span> : null;
};

const ProductEdit = () => (
  <Edit title={<ProductTitle />}>
    <TabbedForm>
      <FormTab label="image">
        <Grid container spacing={3}>
          <Grid item sm={6} xs={12}>
            <Poster />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Grid item sm={12} xs={12}>
              <Grid container spacing={1}>
                <Grid
                  item
                  sm={2}
                  sx={{ display: "flex", alignItems: "center", p: 0 }}
                >
                  <Typography variant="subtitle2" children="ID" />
                </Grid>
                <Grid item sm={10}>
                  <TextField source="id" />
                </Grid>
                <Grid
                  item
                  sm={2}
                  sx={{ display: "flex", alignItems: "center", p: 0 }}
                >
                  <Typography variant="subtitle2" children="Type" />
                </Grid>
                <Grid item sm={10}>
                  <TextField source="type" />
                </Grid>
                <Grid
                  item
                  sm={2}
                  sx={{ display: "flex", alignItems: "center", p: 0 }}
                >
                  <Typography variant="subtitle2" children="Name" />
                </Grid>
                <Grid item sm={10}>
                  <TextInput
                    source="name"
                    variant="standard"
                    label={false}
                    fullWidth
                    validate={req}
                  />
                </Grid>
                <Grid
                  item
                  sm={2}
                  sx={{ display: "flex", alignItems: "center", p: 0 }}
                >
                  <Typography variant="subtitle2" children="FileUrl" />
                </Grid>
                <Grid item sm={10}>
                  <TextField source="fileUrl" />
                </Grid>
                <Grid
                  item
                  sm={2}
                  sx={{ display: "flex", alignItems: "center", p: 0 }}
                >
                  <Typography variant="subtitle2" children="created_at" />
                </Grid>
                <Grid item sm={10}>
                  <TextField source="created_at" />
                </Grid>
                <Grid
                  item
                  sm={2}
                  sx={{ display: "flex", alignItems: "center", p: 0 }}
                >
                  <Typography variant="subtitle2" children="Download_time" />
                </Grid>
                <Grid item sm={10}>
                  <TextField source="download_time" />
                </Grid>
                <Grid
                  item
                  sm={2}
                  sx={{ display: "flex", alignItems: "center", p: 0 }}
                >
                  <Typography variant="subtitle2" children="Download_total" />
                </Grid>
                <Grid item sm={10}>
                  <TextField source="download_total" />
                </Grid>

                <Grid item sm={12}>
                  <Stack spacing={3} sx={{ width: 500 }}>
                    <ReferenceArrayInput source="tagName" reference="tags">
                      <AutocompleteArrayInput
                        fullWidth
                        label={false}
                        source="tags"
                        optionText="tagName"
                        optionValue="tagName"
                      />
                    </ReferenceArrayInput>
                    {/* <Autocomplete
                  multiple
                  id="tags-filled"
                  options={tags.map((option) => option.tagName)}
                  // defaultValue={[top100Films.title]}
                  freeSolo
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                    ))
                  }
                  renderInput={(params) => (
                    <TextFil
                      {...params}
                      variant="standard"
                      label="Tags "
                    />
                    
                  )}
                /> */}
                  </Stack>
                </Grid>

                {/* <SelectArrayInput label="Tags"  source="categories" choices={[
    { id: 'music', name: 'Music' },
    { id: 'photography', name : 'Photo' },
    { id: 'programming', name: 'Code' },
    { id: 'tech', name: 'Technology' },
    { id: 'sport', name: 'Sport' },
]} /> */}
                {/* <ReferenceArrayInput source="tag_ids" reference="tags">
    <SelectArrayInput optionText="id" />
</ReferenceArrayInput> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </FormTab>
    </TabbedForm>
  </Edit>
);

const req = [required()];

export default ProductEdit;
