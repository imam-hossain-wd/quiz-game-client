"use client"

import QZTable from "@/components/ui/QzTable/QZTable";
import Loading from "@/components/view/loading/Loading";
import { useGetUserQuery } from "@/redux/api/userApi";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";

const Perfomer = () => {
  //@ts-ignore
const {data, isLoading, isError}= useGetUserQuery(undefined);
  
  //@ts-ignore
const users = data?.data;
console.log(users, 'useradmin');
  
  if(isLoading){
    return <Loading />
  }
  if(isError){
    console.error(isError)
  }
  
  const columns = [
    {
      title: "Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    }, 
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/super_admin/admin/details/${data.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/super_admin/admin/edit/${data?.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data?.id)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button onClick={() => console.log(data)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];
  


  

    return (
        <div>
            <QZTable
        loading={isLoading}
        columns={columns}
        dataSource={users}
        // showSizeChanger={true}
   
    
        // showPagination={true}
      />
        </div>
    );
};

export default Perfomer;