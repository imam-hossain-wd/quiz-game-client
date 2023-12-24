import Account from "@/components/view/dashboard/account/Account";
import { useGetSingleUserQuery, useGetUserQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/utils/auth.services";


const AdminAccount = () => {

    return <Account />
};

export default AdminAccount;