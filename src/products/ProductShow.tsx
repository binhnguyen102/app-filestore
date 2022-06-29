import { Box, Grid, Typography , Stack} from "@mui/material";
import ThumbnailField from "./ThumbnailField";
import {
    ImageField,
    Show,
    Tab,
    TabbedShowLayout,
    TextField,
    
} from "react-admin";
import Poster from "./Poster";
import SegmentsField from "./SegmentsField";


const ProductShow = () => (
  <Show>
    <TabbedShowLayout>
      <Tab label="Detail">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            
            {/* <ImageField    fullWidth source="path" label="Image"/> */}
            {/* <ThumbnailField source="thumbnail" label="" /> */}
            <Poster/>
            <Stack spacing={1} alignItems="center" margin={"20px"}>
                                <Stack direction="row" spacing={1}>
                                    <Typography
                                        fontWeight={600}
                                        variant="subtitle2"
                                        component="div"
                                        children="Tags"
                                        margin={"auto"}
                                        fontSize={18}
                                        marginRight={2}
                                    />
                                    <SegmentsField source='tagName' />
                                </Stack>
                            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} style={{fontSize:"20px"}}>
            <Box  display="flex"> 
            <Grid item  xs={3}>
              <Typography
                variant="subtitle2"
                width={90}
            
                gutterBottom
                component="div"
                children=" Name"
                mr={2}
                style={{fontSize: "20px", }}
              />
              </Grid>
              <Grid item  xs={9}> 
              <TextField  style={{fontSize: "17px",color: "#525456"}} source="name" fullWidth />
              </Grid>
            </Box>

            <Box display="flex">
            <Grid item  xs={3}>
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                children="originalName "
                mr={1}
                style={{fontSize: "20px"}} 
              />
              </Grid>
               <Grid item  xs={9}> 
              <TextField style={{fontSize: "17px",color: "#525456"}} source="originalName" fullWidth />
              </Grid>
            </Box>
            <Box display="flex">
            <Grid item  xs={3}> 
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                children="Name "
                mr={1}
                style={{fontSize: "20px"}}
              />
              </Grid>
               <Grid item  xs={9}> 
              <TextField style={{fontSize: "17px",color: "#525456"}} source="size" fullWidth />
              </Grid>
            </Box>
            <Box display="flex">
            <Grid item  xs={3}>
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                children="Type "
                mr={1}
                style={{fontSize: "20px"}}
              />
                  </Grid>
               <Grid item  xs={9}> 
              <TextField style={{fontSize: "17px",color: "#525456"}} source="type" fullWidth />
              </Grid>
            </Box>
            <Box display="flex">
            <Grid item  xs={3}>
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                children="status "
                mr={1}
                style={{fontSize: "20px"}}
              />
                  </Grid>
               <Grid item  xs={9}> 
              <TextField style={{fontSize: "17px",color: "#525456"}} source="status" fullWidth />
              </Grid>
            </Box>
            <Box display="flex">

            <Grid item  xs={3}>
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                children="Created_at "
                mr={1}
                style={{fontSize: "20px"}}
              />
                  </Grid>
               <Grid item  xs={9}> 
              <TextField style={{fontSize: "17px",color: "#525456"}} source="created_at" fullWidth />
              </Grid>
            </Box>  
            <Box display="flex">
            
            <Grid item  xs={3}>
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                children="download_time "
                mr={1}
                style={{fontSize: "20px"}}
              />
                  </Grid>
               <Grid item  xs={9}> 
              <TextField style={{fontSize: "17px",color: "#525456"}} source="download_time" fullWidth />
              </Grid>
            </Box>
            <Box  display="flex">
            <Grid item  xs={3}>
              <Typography
                variant="subtitle2" 
                gutterBottom
                component="div"
                children="Download_total "
                mr={1}
                style={{fontSize: "20px"}}
              />
                  </Grid>
              
               <Grid item  xs={9}> 
              <TextField style={{fontSize: "17px",color: "#525456"}} source="download_total" fullWidth />
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Tab>
    </TabbedShowLayout>
  </Show>
);

export default ProductShow;
