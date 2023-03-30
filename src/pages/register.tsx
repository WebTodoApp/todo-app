import * as React from 'react';
import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [user, setUser] = useState('');
    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
    
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };

    const handlePasswordConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirm(event.target.value);
      };

      const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
      };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
    };
    
    return (
      <Box sx={{ maxWidth: 400, mx: 'auto', pt: 10}}>
        <Typography variant="h4" gutterBottom>
          S'enregistrer
        </Typography>
        <form className="loginForm" onSubmit={handleSubmit}>
        <TextField
            label="Utilisateur"
            variant="outlined"
            type="text"
            fullWidth
            required
            value={user}
            onChange={handleUserChange}
          />
          <TextField
            sx={{ mt: 2 }}
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
            label="Mot de passe"
            variant="outlined"
            type="password"
            fullWidth
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <TextField
            sx={{ mt: 2 }}
            label="Mot de passe"
            variant="outlined"
            type="password"
            fullWidth
            required
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
          />
          <div>
          <label>Déjà un compte ?</label> <a href="/login">Se connecter</a>
          </div>
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Confirmer
          </Button>
        </form>
      </Box>
    );
  }

  export default RegisterForm
  