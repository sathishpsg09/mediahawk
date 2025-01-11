// app/components/Auth.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Auth = ({ setUser }: { setUser: (user: any) => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async () => {
    // Handle user authentication
    // Securely store user credentials
  };

  return (
    <div className="space-y-4">
      <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      <Button onClick={handleAuth}>{isLogin ? 'Login' : 'Sign Up'}</Button>
      <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
      </Button>
    </div>
  );
};

export default Auth;