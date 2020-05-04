import React, {Component} from 'react';
import { message } from 'antd';
import EditKategoriComponent from '../Kategori/edit-kategori-component'
import axios from 'axios';

let id_kategori = localStorage.getItem("id_kategori");

class EditKategori extends Component {
    state = {
        nama_kategori : "",
    }

    componentDidMount() {
        this.getKategori(id_kategori);
    }

    getKategori = (id_kategori) =>{
      let headers = {};
    
      let config = {
        headers : headers,
      }
  
      headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODYwNDQzMiwiZXhwIjoxNTg4NjA4MDMyLCJuYmYiOjE1ODg2MDQ0MzIsImp0aSI6IlhpdDJoNkowRzF6VnA4bkEiLCJzdWIiOjEwLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.DS41WYhp8T0enaJaCaDoq51v5xW0vA-Sv8KxoEmiN3A`;
  
      axios.get(`http://127.0.0.1:8000/api/kategori_buku/${id_kategori}`, config)
      .then(res => {
        console.log('ini data asli',res.data.data)
        this.setState({ nama_kategori :  res.data.data.kategori_buku}) //ini tadi buku.nama_kategori trus aku ganti
      })
    }

    handleChange = (e) => {
      let target = e.target.npmname;
      let value = e.target.value;
      this.setState({
          [target]: value
      })
   }

   /*handleKategori=(input, option)=>{
      console.log('input', input, 'option', option);
      this.setState({id_kategori: input})
   }*/

    editKategori = (id_kategori) => {
      let headers = {};
    
      let config = {
        headers : headers,
      }
  
      headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODYwNDQzMiwiZXhwIjoxNTg4NjA4MDMyLCJuYmYiOjE1ODg2MDQ0MzIsImp0aSI6IlhpdDJoNkowRzF6VnA4bkEiLCJzdWIiOjEwLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.DS41WYhp8T0enaJaCaDoq51v5xW0vA-Sv8KxoEmiN3A`;
  
      const params = new FormData();
      params.set('nama_kategori', this.state.nama_kategori)
      params.append('_method','PUT')

      axios.post(`http://127.0.0.1:8000/api/edit-kategori_buku/${id_kategori}`, params, config)
      .then(res => {
        if(res.status === 200){
          message.success('Data Berhasil diubah');
          localStorage.removeItem('id_kategori');
        }
      })
    }

    render () {
      return (
        <EditKategoriComponent
            initialData = {this.state}
            handleChanger = {this.handleChange}
            editKategori = {this.editKategori}
            handleChange = {this.handleChange}
        />
      )
    }

}

export default EditKategori;