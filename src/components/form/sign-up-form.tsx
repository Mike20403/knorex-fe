import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid, Typography } from '@mui/material';

function SignUpFormDialog(props: any) {
  const { open, setOpenSignUp, handleAddUser } = props;

  // State for form data
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleAddUser({
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      password: formData.password,
    });
  };

  // Open dialog
  const handleClickOpen = () => {
    setOpenSignUp(true);
  };

  // Close dialog
  const handleClose = () => {
    setOpenSignUp(false);
  };

  return (
    <div>
      {/* Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>SIGN UP FORM</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
            Fill in the form below to sign up a new user.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Re-type password"
                  name="confirmPassword"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            CANCEL
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            SIGN UP
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SignUpFormDialog;
