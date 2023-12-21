import { useAppDispatch } from '@/redux/hooks';
import { setAccessToken } from '@/redux/slice/authSlice';
import { authKey } from '@/utils/auth.services';
import { getFromLocalStorage } from '@/utils/localStorage';
import { Button } from 'antd'


export default function Home() {
  const token = getFromLocalStorage(authKey)
  const dispatch = useAppDispatch()
  dispatch(setAccessToken(token as string));
  return (
  <div>
    <h1>Next Quiz Game Application</h1>
    <Button type="dashed">Dashed Button</Button>
  </div>
  )
}
