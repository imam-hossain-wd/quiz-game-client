import { Space, Spin } from 'antd';

const Loading = () => (
  <div className="flex justify-center items-center h-screen -mt-36">
    <Space size="middle">
    <div className='flex justify-center items-center'>
    <Spin size="large" />
    </div>
  </Space>
  </div>
);

export default Loading;