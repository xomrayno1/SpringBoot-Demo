import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import {deleteItem, getEmpRequest,updateEmp,addRowEmp,addEmp} from '../redux/actions/empAction'
import {Table,Button,Space,Popconfirm,Spin,Input,Form, message } from 'antd'
 

import 'antd/dist/antd.css';

function validateLength(newValue,min,max){
  if(!(newValue.length >= min && newValue.length <= max)){
    throw new Error(`Character ${min} - ${max} !`);
  }
}

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    //const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
                name={dataIndex}
                style={{
                margin: 0,
                }} 
                
                rules={[{ //field required
                      required : true,
                      whitespace : true,
                      message : `Please Input ${title}`
                    },
                    dataIndex !== 'code' && { // field diff code length 4- 12
                      transform : (value) => {
                        return value.trim()
                      },
                      min: 4,
                      max : 12,
                      message: 'Character 4 - 12',
                      whitespace : true,
                    },
                    // validate code
                    (
                      dataIndex === 'code' && ({ /// code invalid
                        validator: async (rule, value) => {
                          const newValue  = value.trim();
                          if(newValue === '1755238'){
                            throw new Error('Code Invalid!');
                          }
                        },
                        validateTrigger : true
                       },{ /// code incorrect length
                        transform : (value) => {
                          return value.trim()
                        },
                        min: 8,
                        max : 16,
                        message: 'Character 8 - 16',
                       }
                      )
                    ),
                     
                ]}
              
            >
            <Input value=""/>
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };
function EmployeeList(props) {
    const {employees} = useSelector(state => state.employee);
    let   {isLoading} = useSelector(state => state.employee);
    const dispatch = useDispatch();
    const [editingKey, setEditingKey] = useState('');
    const [adding,setAdding] = useState(false);

    const isEditing = (record) => record.id === editingKey;
    const [form] = Form.useForm()

    useEffect(()=>{
 
        dispatch(getEmpRequest())
    },[])
 
    const columns = [
        {
            title : 'Id',
            dataIndex : 'id',
            key : 'id',
        },{
            title: 'FirstName',
            dataIndex : 'firstName',
            key : 'firstName',
            editable : true,
           
        },{
            title : 'LastName',
            dataIndex : 'lastName',
            key : 'lastName',
            editable : true,
             
        },{
            title : 'Code',
            dataIndex : 'code',
            key : 'code',
            editable: true,
            
        },{
            title : 'Action',
            dataIndex : 'Action',
            render : (_,record) =>  {
                const editable = isEditing(record);
              
                return editable ? (
                    <span>
                        <a href="javascript:;" 
                            style={{
                            marginRight: 8,
                        }}
                         onClick={() => save(record)}
                         >Save</a>
                        <Popconfirm title="Sure to cancel" onConfirm={editCancel}>
                            <a href="javascript:;">Cancel</a>
                        </Popconfirm>
                    </span>
                ) :  (
                    <Space>
                        <Popconfirm title="Sure to delete ?" onConfirm={() => handleDeleteEmp(record.id) }>
                            <Button key={record.id} type="danger">Delete</Button>
                        </Popconfirm>
                        <Button disabled={editingKey !== '' } 
                                key={record.id} onClick={()=> editRecord(record)} 
                            >
                                Edit
                        </Button>
                    </Space>
                )
 
            }
        }
    ]
    function editRecord(record){
        // setFieldsValue sẽ set InitalValue Cho Form
        form.setFieldsValue({
            ...record,
          });
        setEditingKey(record.id);
    }
    function editCancel(){
        setEditingKey('');
       
    }
    function handleDeleteEmp(id){
        dispatch(deleteItem(id));
    }
    const save = async (record) => {
        const row = await form.validateFields();
        if(record.id){
            row.id = record.id;
            dispatch(updateEmp(row))
        }else{
            dispatch(addEmp(row));
        }
        setEditingKey('');
    }
    const mergedColumns = columns.map((col) => { 
        if (!col.editable) {
          return col;
        }
        return {
          ...col,
          onCell: (record) => ({
            record,
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record),
          }),
        };
      });
    function handleAdd(){
        const newData = {
            id : '',
            firstName : '',
            lastName : '',
            code : ''
        }
      //create action add row 
      form.setFieldsValue({
        id : '',
        firstName : '',
        lastName : '',
        code : ''
      });
      dispatch(addRowEmp(newData));
      setAdding(true)
    }
     
    
    return (
        <div className="container">
            <h1>Employee List</h1> 
            <Button 
                type="primary"
                onClick={handleAdd}
                disabled={editingKey !== ''}
                >
                Add
            </Button>
            <Spin spinning={isLoading}>
                <Form form={form} component={false}  
                  // validateTrigger={true} //submit mới xác thực
                  >   
                    <Table 
                      columns={mergedColumns}     
                      components={{body : {
                          cell : EditableCell
                      }}}
                      
                      
                      dataSource={ 
                          employees && employees.length > 0 ? employees : null
                      }
                        size="middle"
                    />            
                </Form>
            </Spin>
        </div>
    );
}

export default EmployeeList;