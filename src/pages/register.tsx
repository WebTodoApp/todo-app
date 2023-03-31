import * as React from 'react';
import { API_URL } from '../../env';
import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setPasswordConfirm] = useState('');
    const [username, setUser] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true); 
    
    
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
    
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
      if (event.target.value !== confirmPassword) {
        setPasswordsMatch(false);
      } else {
        setPasswordsMatch(true);
      }
    };
    
    const handlePasswordConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordConfirm(event.target.value);
      if (event.target.value !== password) {
        setPasswordsMatch(false);
      } else {
        setPasswordsMatch(true);
      }
    };

      const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
      };
    
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = { username, email, password, confirmPassword };
        try {
          const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });
          const json = await response.json();
          console.log('Registration response:', json);
          if (json.success) {
            console.log('Registration successful');
            navigate('/login');
          } else {
            console.log('Registration failed');
          }
        } catch (error) {
          console.error('Registration error:', error);
        }
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
            key="username"
            fullWidth
            required
            value={username}
            onChange={handleUserChange}
          />
          <TextField
            sx={{ mt: 2 }}
            label="Email"
            variant="outlined"
            type="email"
            key="email"
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
            key="password"
            fullWidth
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <TextField
            sx={{ mt: 2 }}
            label="Confirmer le Mot de passe"
            variant="outlined"
            type="password"
            key="confirmPassword"
            fullWidth
            required
            value={confirmPassword}
            onChange={handlePasswordConfirmChange}
            error={!passwordsMatch}
            helperText={!passwordsMatch && "Les mdp ne sont pas identiques"}
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
  