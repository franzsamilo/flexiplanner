import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../useContexts/useAuth';

function AuthWrapper({ children } : any) {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/screens/Login/login");
    }
  },);

  if (!user) {
    return null;
  }

  return children;
}

export default AuthWrapper;