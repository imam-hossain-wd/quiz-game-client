import Account from "@/components/view/dashboard/account/Account";
import { useGetUserQuery } from "@/redux/api/userApi";


const AdminAccount = () => {
    const { data: userData, error, isLoading } = useGetUserQuery('123');
    return <Account />
};

export default AdminAccount;