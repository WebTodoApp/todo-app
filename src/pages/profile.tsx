import { useEffect, useState } from 'react';
import { UserService } from '../api/services/UserService';

function Profil() {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const response = await UserService.getApiUserGetProfile();
        setUsername(response.data.username);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUserProfile();
  }, []);

  return (
    <h1>Bienvenue {username}</h1>
  );
}

export default Profil;
