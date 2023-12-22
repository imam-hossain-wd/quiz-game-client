import HomePage from '@/components/view/home/Home';
import { useAppDispatch } from '@/redux/hooks';
import { setAccessToken } from '@/redux/slice/authSlice';
import { authKey } from '@/utils/auth.services';
import { getFromLocalStorage } from '@/utils/localStorage';
import { Button } from 'antd'


export default function Home() {
  return <HomePage />
}
