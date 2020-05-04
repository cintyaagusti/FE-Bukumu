import React, {Component} from 'react';
import { message } from 'antd';
import EditPenerbitComponent from '../Penerbit/edit-penerbit-component'
import axios from 'axios';

let id_penerbit = localStorage.getItem("id_penerbit");

class EditPenerbit extends Component {
    state = {
        nama_penerbit : "",
        alamat : "",
        email : "",
        telp : "",
    }

    componentDidMount() {
        this.getPenerbit(id_penerbit);
    }

    getPenerbit = (id_penerbit) =>{
      let headers = {};
    
      let config = {
        headers : headers,
      }
  
      headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODYwNDQzMiwiZXhwIjoxNTg4NjA4MDMyLCJuYmYiOjE1ODg2MDQ0MzIsImp0aSI6IlhpdDJoNkowRzF6VnA4bkEiLCJzdWIiOjEwLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.DS41WYhp8T0enaJaCaDoq51v5xW0vA-Sv8KxoEmiN3A`;
  
      axios.get(`http://127.0.0.1:8000/api/penerbit_buku/${id_penerbit}`, config)
      .then(res => {
        console.log('ini data asli',res.data.data)
        this.setState({ nama_penerbit : res.data.data.penerbit, alamat : res.data.data.alamat, email : res.data.data.email, telp : res.data.data.telp})
      })
    }

    handleChange = (e) => {
      let target = e.target.name;
      let value = e.target.value;
      this.setState({
          [target]: value
      })
   }

    editPenerbit = (id_penerbit) => {
      let headers = {};
    
      let config = {
        headers : headers,
      }
  
      headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODYwNDQzMiwiZXhwIjoxNTg4NjA4MDMyLCJuYmYiOjE1ODg2MDQ0MzIsImp0aSI6IlhpdDJoNkowRzF6VnA4bkEiLCJzdWIiOjEwLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.DS41WYhp8T0enaJaCaDoq51v5xW0vA-Sv8KxoEmiN3A`;
  
      const params = new FormData();
      params.set('nama_penerbit', this.state.nama_penerbit)
      params.set('alamat', this.state.alamat)
      params.set('email', this.state.email)
      params.set('telp', this.state.telp)
      params.append('_method','PUT')

      axios.post(`http://127.0.0.1:8000/api/edit-penerbit/${id_penerbit}`, params, config)
      .then(res => {
        if(res.status === 200){
          message.success('Data Berhasil diubah');
          localStorage.removeItem('id_penerbit');
        }
      })
    }

    render () {
      return (
        <EditPenerbitComponent
            initialData = {this.state}
            handleChanger = {this.handleChange}
            editPenerbit = {this.editPenerbit}
            handleChange = {this.handleChange}
        />
      )
    }

}

export default EditPenerbit;

/*
axios.get(`http://127.0.0.1:8000/api/penerbit_buku/${id_penerbit}`, config)
      .then(res => {
        console.log('ini data asli',res.data.data)
        this.setState({ nama_penerbit : res.data.data.buku.nama_penerbit, alamat_penerbit : res.data.data.buku.alamat_penerbit, email_penerbit : res.data.data.buku.email_penerbit, telpon_penerbit : res.data.data.buku.telpon_penerbit})
      })
    }
*/