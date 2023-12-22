import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const useAccessToken = (accessToken: string | null) => {
  const router = useRouter()

  useEffect(() => {
    if (!accessToken) {
      router.push('/login');
    }
  }, [accessToken, router]);

  return accessToken;
};

export default useAccessToken;