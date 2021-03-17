import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import {deleteItem, getEmpRequest} from '../redux/actions/empAction'
import {Table,Button,Space,Popconfirm,Spin } from 'antd'
import 'antd/dist/antd.css';


function EmployeeList(props) {
    const {employees} = useSelector(state => state.employee);
    let {isLoading} = useSelector(state => state.employee);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getEmpRequest())
    },[])
   
    const columns = [
        {
            title : 'Id',
            dataIndex : 'id',
            key : 'id'
        },{
            title: 'FirstName',
            dataIndex : 'firstName',
            key : 'firstName'
        },{
            title : 'LastName',
            dataIndex : 'lastName',
            key : 'lastName'
        },{
            title : 'Code',
            dataIndex : 'code',
            key : 'code'
        },{
            title : 'Action',
            dataIndex : 'Action',
            render : (text,record) => (
                <Space>
                    <Popconfirm title="Sure to delete ?" onConfirm={() => handleDeleteEmp(record.id) }>
                        <Button key={record.id} type="danger">Delete</Button>
                    </Popconfirm>
                    <Button key={record.id}  >Edit</Button>
                </Space>
            )
        }
    ]
    function handleDeleteEmp(id){
        dispatch(deleteItem(id));
    }
 
    return (
        <div className="container">
            <h1>Employee List</h1> 
            <Spin spinning={isLoading}>
                <Table columns={columns} dataSource={ 
                    employees && employees.length > 0 ? employees : null
                } size="middle"/>
            </Spin>
        </div>
    );
}

export default EmployeeList;