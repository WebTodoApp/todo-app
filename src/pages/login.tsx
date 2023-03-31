import * as React from 'react';
import { API_URL } from '../../env';
import CustomAlert from '../components/CustomAlert';
import { useState } from 'react';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = { email, password };
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await response.json();
      console.log('login response:', json);
      if (json.success) {
        console.log('login successful');
        navigate('/');
      } else {
        console.log('login failed');
      }
    } catch (error) {
      console.error('login error:', error);
    }
  };

  return (
    <div>
      <CustomAlert />
      <Box sx={{ maxWidth: 400, mx: 'auto', pt: 20 }}>
        <Typography variant="h4" gutterBottom>
          Se connecter
        </Typography>
        <form className="loginForm" onSubmit={handleSubmit}>
          <TextField
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
            label="Password"
            variant="outlined"
            type="password"
            key="password"
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
    </div>
  );
}

export default LoginForm
