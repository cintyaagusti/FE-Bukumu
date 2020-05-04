import React, { Component } from 'react'; //import dari react biasa
import { Link } from 'react-router-dom';
import BukuComponent from './buku-component'
import {Button, Modal, message } from 'antd';
import { 
  EditOutlined,
  DeleteOutlined,
 } from '@ant-design/icons';
import axios from 'axios';


const { confirm } = Modal;


class BukuPage extends Component {
  state = {
      buku : [],
  }//buat nampung data

  //fungsi yang akan berjalan setiap halaman refresh/reload
  componentDidMount(){
    this.getBuku(); //bisa dijalankan terus, 
  }

  //get data from Api 
  getBuku = () => {
    let headers = {};
    
    let config = {
      headers : headers,
    }

    headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODYwNDQzMiwiZXhwIjoxNTg4NjA4MDMyLCJuYmYiOjE1ODg2MDQ0MzIsImp0aSI6IlhpdDJoNkowRzF6VnA4bkEiLCJzdWIiOjEwLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.DS41WYhp8T0enaJaCaDoq51v5xW0vA-Sv8KxoEmiN3A`;

    axios.get(`http://127.0.0.1:8000/api/buku`, config)
    .then(res => {
      console.log(res)
      console.log('ini data asli',res)
      console.log('ini array',res.data.data)
      this.setState({ buku : res.data.data.buku });
    })
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

  //delete buku
  deleteBuku = (id) => {
    console.log('id_buku',id)
    let headers = {};
    
    let config = {
      headers : headers,
    }

    headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODYwNDQzMiwiZXhwIjoxNTg4NjA4MDMyLCJuYmYiOjE1ODg2MDQ0MzIsImp0aSI6IlhpdDJoNkowRzF6VnA4bkEiLCJzdWIiOjEwLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.DS41WYhp8T0enaJaCaDoq51v5xW0vA-Sv8KxoEmiN3A`;

    axios.delete(`http://127.0.0.1:8000/api/hapus-buku/${id}`, config)
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
            this.deleteBuku(id)
        },
        onCancel(){
            console.log('Cancel')
        }
    });
  }
  
  EditBuku = (id_buku) => {
    localStorage.setItem('id_buku', id_buku)
  }


  render(){
    
    const columns = [
      {
        title: 'ID Buku',
        dataIndex: 'no',
        key: 'no',
      },
      {
        title: 'Kategori',
        dataIndex: 'namakategori',
        key: 'namakategori',
      },
      {
        title: 'Judul Buku',
        dataIndex: 'judulbuku',
        key: 'judulbuku',
      },
      {
          title: 'Pengarang',
          dataIndex: 'pengarang',
          key: 'pengarang',
        },
        {
          title: 'Penerbit',
          dataIndex: 'penerbit',
          key: 'penerbit',
        },
        {
          title: 'Stok',
          dataIndex: 'stok',
          key: 'stok',
        },
        {
          title: 'Harga',
          dataIndex: 'harga',
          key: 'harga',
        },
        {
          title: 'Action',
          key: 'action',
          render: (data) => (
            <span>
              <Link to={{pathname:"/editbuku"}}>
                <Button type="primary" icon={<EditOutlined />} size={5} onClick={() => this.EditBuku(data.no)}>
                  
                </Button>
              </Link>
            
                <Button type="primary" danger icon={<DeleteOutlined />} size={5} onClick={() => this.showDeleteConfirm(data.no)}>
                  
                </Button>
            </span>
          ),
        },
    ];
    
    // const data = [
    //   {
    //     idbuku: '00001',
    //     judulbuku: 'Glass Sword',
    //     pengarang: 'Victoria Aveyard',
    //     tahunterbit: '2015',
    //     stok: '30',
    //     harga: '90000',
    //   },
    // ];

    const data =  this.state.buku.map( data => ({
      no : data.id_buku,
      judulbuku : data.judul,
      harga : data.harga,
      stok : data.stok,
      pengarang : data.pengarang,
      penerbit : data.id_penerbit,
      namakategori : data.id_kategori,
  }))

    return(
        <BukuComponent
            columns={columns} 
            data={data}
        />
    );

  }

}

export default BukuPage;

