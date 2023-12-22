
import { Button } from 'antd'; 


type IButton = {
    name:string | any,
    className:string,
    props?:string
}
const MyButton = ({ name, className, ...props }:IButton) => {
  return (
    <Button htmlType='submit'  className={`${className} bg-primary text-white hover:text-primary hover:bg-white border-primary `} {...props}>
      {name}
    </Button>
  );
};

export default MyButton;