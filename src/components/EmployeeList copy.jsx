// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux'; 
// import {deleteItem, getEmpRequest,updateEmp} from '../redux/actions/empAction'
// import {Table,Button,Space,Popconfirm,Spin,Input, InputNumber,Form } from 'antd'
 
// import 'antd/dist/antd.css';
 
// const EditableCell = ({
//     editing,
//     dataIndex,
//     title,
//     inputType,
//     record,
//     index,
//     children,
//     ...restProps
//   }) => {
//     //const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
//     return (
//       <td {...restProps}>
//         {editing ? (
//           <Form.Item
//             name={dataIndex}
//             style={{
//               margin: 0,
//             }}
//             rules={[
//               {
//                 required: true,
//                 message: `Please Input ${title}!`,
//               },
//             ]}
//           >
//             <Input />
//           </Form.Item>
//         ) : (
//           children
//         )}
//       </td>
//     );
//   };
// function EmployeeList(props) {
//     const {employees} = useSelector(state => state.employee);
//     let {isLoading} = useSelector(state => state.employee);
//     const dispatch = useDispatch();
//     const [editingKey, setEditingKey] = useState('');

//     const isEditing = (record) => record.id === editingKey;
//     const [form] = Form.useForm()
//     useEffect(()=>{
//         dispatch(getEmpRequest())
//     },[])
   
//     const columns = [
//         {
//             title : 'Id',
//             dataIndex : 'id',
//             key : 'id'
//         },{
//             title: 'FirstName',
//             dataIndex : 'firstName',
//             key : 'firstName',
//             editable : true
//         },{
//             title : 'LastName',
//             dataIndex : 'lastName',
//             key : 'lastName',
//             editable : true
//         },{
//             title : 'Code',
//             dataIndex : 'code',
//             key : 'code',
//             editable: true
//         },{
//             title : 'Action',
//             dataIndex : 'Action',
//             render : (_,record) =>  {
//                 const editable = isEditing(record);
              
//                 return editable ? (
//                     <span>
//                         <a href="javascript:;" 
//                             style={{
//                             marginRight: 8,
//                         }}
//                          onClick={() => saveEdit(record)}
//                          >Save</a>
//                         <Popconfirm title="Sure to cancel" onConfirm={ editCancel}>
//                             <a href="javascript:;">Cancel</a>
//                         </Popconfirm>
//                     </span>
//                 ) :  (
//                     <Space>
//                         <Popconfirm title="Sure to delete ?" onConfirm={() => handleDeleteEmp(record.id) }>
//                             <Button key={record.id} type="danger">Delete</Button>
//                         </Popconfirm>
//                         <Button disabled={editingKey !== ''} key={record.id} onClick={()=> editRecord(record)} >Edit</Button>
//                     </Space>
//                 )
 
//             }
//         }
//     ]
//     function editRecord(record){
//         form.setFieldsValue({
//             id: 0, 
//             firstName : '',
//             lastName :'',
//             code : '',
//             ...record,
//           });
//         setEditingKey(record.id);
//     }
//     function editCancel(){
//         setEditingKey('')
//     }
//     function handleDeleteEmp(id){
//         dispatch(deleteItem(id));
//     }
//     const saveEdit = async (record) => {
//         const row = await form.validateFields();
//         row.id = record.id;
//         dispatch(updateEmp(row))
//         setEditingKey('');
//     }
//     const mergedColumns = columns.map((col) => {
//         if (!col.editable) {
//           return col;
//         }
//         return {
//           ...col,
//           onCell: (record) => ({
//             record,
//             dataIndex: col.dataIndex,
//             title: col.title,
//             editing: isEditing(record),
//           }),
//         };
//       });
//     return (
//         <div className="container">
//             <h1>Employee List</h1> 
//             <Spin spinning={isLoading}>
//                 <Form form={form} component={false}>
//                     <Table 
//                     columns={mergedColumns} 
//                     components={{body : {
//                         cell : EditableCell
//                     }}}
//                     dataSource={ 
//                         employees && employees.length > 0 ? employees : null
//                     }
//                     size="middle"
//                     />
//                 </Form>
//             </Spin>
//         </div>
//     );
// }

// export default EmployeeList;