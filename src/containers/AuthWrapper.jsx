import {
  Alert,
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { password } from "../constants";

const AuthWrapper = ({ children }) => {
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState(false);

  return authed ? (
    children
  ) : (
    <>
      <NavBar />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#dc4b44" }}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              if (e.target.password.value === password) {
                setAuthed(true);
              } else {
                setAuthed(false);
                setError(true);
              }
            }}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                background: "#dc4b44",
                "&:hover": { background: "#dc4b44" },
              }}
            >
              Sign In
            </Button>
          </Box>
          {error && <Alert severity="error">Error: Incorrect Details</Alert>}
        </Box>
      </Container>
    </>
  );
};

export default AuthWrapper;
