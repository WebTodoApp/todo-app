import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
    
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // TODO: Handle form submission
    };
    
    return (
      <Box sx={{ maxWidth: 400, mx: 'auto', pt: 20}}>
        <Typography variant="h4" gutterBottom>
          Se connecter
        </Typography>
        <form className="loginForm" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            required
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            sx={{ mt: 2 }}
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <div>
          <label>Pas encore de compte ?</label> <a href="/register">S'enregistrer</a>
          </div>
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Connexion
          </Button>
        </form>
      </Box>
    );
  }

  export default LoginForm
  