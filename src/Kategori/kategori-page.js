import React, { Component } from 'react'; //import dari react biasa
import { Link } from 'react-router-dom';
import KategoriComponent from './kategori-component';
import {Button, Modal, message } from 'antd';
import { 
  EditOutlined,
  DeleteOutlined
 } from '@ant-design/icons';
 import axios from 'axios';

 const { confirm } = Modal;

class KategoriPage extends Component {
  state = {
    kategori_buku : [],
  }

  componentDidMount(){
    this.getKategori();
  }

  //function kategori
  getKategori = () => {
    let headers = {};
    
    let config = {
      headers : headers,
    }

    headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODYwNDQzMiwiZXhwIjoxNTg4NjA4MDMyLCJuYmYiOjE1ODg2MDQ0MzIsImp0aSI6IlhpdDJoNkowRzF6VnA4bkEiLCJzdWIiOjEwLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.DS41WYhp8T0enaJaCaDoq51v5xW0vA-Sv8KxoEmiN3A`;

    axios.get(`http://127.0.0.1:8000/api/kategori_buku`, config)
    .then(res => {
      console.log('ini data asli',res)
      console.log('ini array',res.data.data)
      this.setState({ kategori_buku : res.data.data.kategori_buku });
    })
  }

  //delete kategori
  deleteKategori = (id) => {
    console.log('id_kategori',id)
    let headers = {};
    
    let config = {
      headers : headers,
    }

    headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODYwNDQzMiwiZXhwIjoxNTg4NjA4MDMyLCJuYmYiOjE1ODg2MDQ0MzIsImp0aSI6IlhpdDJoNkowRzF6VnA4bkEiLCJzdWIiOjEwLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.DS41WYhp8T0enaJaCaDoq51v5xW0vA-Sv8KxoEmiN3A`;

    axios.delete(`http://127.0.0.1:8000/api/hapus-kategori_buku/${id}`, config)
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
            this.deleteKategori(id)
        },
        onCancel(){
            console.log('Cancel')
        }
    });
  }

  EditKategori = (id_kategori) => {
    localStorage.setItem('id_kategori', id_kategori)
  }

  render(){
    const columns = [
        {
          title: 'ID Kategori',
          dataIndex: 'id_kategori',
          key: 'id_kategori',
        },
        {
          title: 'Nama Kategori',
          dataIndex: 'nama_kategori',
          key: 'nama_kategori',
        },
        {
          title: 'Action',
          key: 'action',
          render: (data) => (
            <span>
               <Link to={{pathname:"/editkategori"}}>
                  <Button type="primary" icon={<EditOutlined />} size={5} onClick={() => this.EditKategori(data.id_kategori)}>
                   
                  </Button>
                </Link>
               
                  <Button type="primary" danger icon={<DeleteOutlined />} size={5} onClick={() => this.showDeleteConfirm(data.id_kategori)} >
                    
                  </Button>
            </span>
          ),
        },
      ];
      
      //membuat map atau fungsi
      const data =  this.state.kategori_buku.map( data => ({
        id_kategori : data.id_kategori,
        nama_kategori : data.nama_kategori,
    }))

      return(
        <KategoriComponent
          columns={columns} 
          data={data} 
        />
      );

    }
    
  }

  export default KategoriPage;