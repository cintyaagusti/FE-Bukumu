import React, { Component } from 'react'; //import dari react biasa
import { Link } from 'react-router-dom';
import PenerbitComponent from './penerbit-component'
import {Button, Modal, message } from 'antd';
import { 
  EditOutlined,
  DeleteOutlined,
 } from '@ant-design/icons';
 import axios from 'axios';

 const { confirm } = Modal;

class PenerbitPage extends Component {
  state = {
    penerbit : [],
  }

  componentDidMount(){
    this.getPenerbit();
  }

  //function penerbit
  getPenerbit = () => {
    let headers = {};
    
    let config = {
      headers : headers,
    }

    headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODYwNDQzMiwiZXhwIjoxNTg4NjA4MDMyLCJuYmYiOjE1ODg2MDQ0MzIsImp0aSI6IlhpdDJoNkowRzF6VnA4bkEiLCJzdWIiOjEwLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.DS41WYhp8T0enaJaCaDoq51v5xW0vA-Sv8KxoEmiN3A`;

    axios.get(`http://127.0.0.1:8000/api/penerbit`, config)
    .then(res => {
      console.log('ini data asli',res)
      console.log('ini array',res.data.data)
      this.setState({ penerbit : res.data.data.penerbit });
    })
  }

  //delete penerbit
  deletePenerbit = (id) => {
    console.log('id_penerbit',id)
    let headers = {};
    
    let config = {
      headers : headers,
    }

    headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODUyMTc0MywiZXhwIjoxNTg4NTI1MzQzLCJuYmYiOjE1ODg1MjE3NDMsImp0aSI6IndqcjJpa1RVdklONThvTTUiLCJzdWIiOjExLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.QbFPJdwuc9j4xIqjuvinyyBM_dwS5VaEbkpgncvQIZQ`;

    axios.delete(`http://127.0.0.1:8000/api/hapus-penerbit/${id}`, config)
    .then(res => {
        if(res.status === 200){
          message.success('Data Berhasil dihapus');
          this.componentDidMount();
        }
    })
  }

  //pop up delete
  showDeleteConfirm = (id) => {
    confirm({
        title: 'Apakah Yakin untuk menghapus Data ?',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk: () => {
            this.deletePenerbit(id)
        },
        onCancel(){
            console.log('Cancel')
        }
    });
  }
  
  EditPenerbit = (id_penerbit) => {
    localStorage.setItem('id_penerbit', id_penerbit)
  }

  render(){
    const columns = [
        {
            title: 'ID Penerbit',
            dataIndex: 'id_penerbit',
            key: 'id_penerbit',
          },
          
        {
          title: 'Nama Penerbit',
          dataIndex: 'nama_penerbit',
          key: 'nama_penerbit',
        },
        {
          title: 'Alamat',
          dataIndex: 'alamat',
          key: 'alamat',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Telepon',
            dataIndex: 'telp',
            key: 'telp',
          },
          {
            title: 'Action',
            key: 'action',
            render: (data) => (
              <span>
                <Link to={{pathname:"/editpenerbit"}}>
                  <Button type="primary" icon={<EditOutlined />} size={5} onClick={() => this.EditPenerbit(data.id_penerbit)}>
                  
                  </Button>
                </Link>
              
                  <Button type="primary" danger icon={<DeleteOutlined />} size={5} onClick={() => this.showDeleteConfirm(data.id_penerbit)}>
                  
                  </Button>
                
              </span>
            ),
          },
      ];
      
      //membuat map atau fungsi
      const data =  this.state.penerbit.map( data => ({
        id_penerbit : data.id_penerbit,
        nama_penerbit : data.nama_penerbit,
        alamat : data.alamat,
        email : data.email,
        telp : data.telp,
      }))

      return(
        <PenerbitComponent
          columns={columns} 
          data={data} 
        />
    );

  }
}

  export default PenerbitPage;