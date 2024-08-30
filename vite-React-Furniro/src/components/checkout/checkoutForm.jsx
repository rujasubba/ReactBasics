import React from "react";
import { Box } from "@mui/material";
import {TextField, Grid, Container, Typography,
    MenuItem, Button
  }

from "@mui/material";



function CheckoutForm(){
    return(
        
        <Box mt={5}>
          <Typography variant="h5" gutterBottom>
            Billing details
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <TextField
                  label="First Name"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  label="Last Name"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Company Name (Optional)"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Country / Region"
                  fullWidth
                  variant="outlined"
                  select
                >
                  <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                  <MenuItem value="Nepal">Nepal</MenuItem>
                  <MenuItem value="India">India</MenuItem>
                  <MenuItem value="Australia">Australia</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Street address"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Town / City"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Province"
                  fullWidth
                  variant="outlined"
                  select
                >
                  <MenuItem value="Western Province">Western Province</MenuItem>
                  <MenuItem value="SA">SA</MenuItem>
                  <MenuItem value="NSW">NSW</MenuItem>
                  <MenuItem value="VIC">VIC</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="ZIP code"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email address"
                  fullWidth
                  variant="outlined"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Additional Information"
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Grid>
              
              <Grid item>
                 <div>First Name</div>
              </Grid>
              <Grid item>
                 <div>
                    <TextField />
                 </div>
              </Grid>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              <TextField id="filled-basic" label="Filled" variant="filled" />
              <TextField id="standard-basic" label="Standard" variant="standard" />
            </Grid>
          </form>
      </Box>
    )
}

export default CheckoutForm;