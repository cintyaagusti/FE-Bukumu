import React, {Component} from 'react';
import axios from 'axios';
import { message } from 'antd';
import TambahKategoriComponent from "../Kategori/tambah-kategori-component"


class TambahKategori extends Component {
  state = {
      nama_kategori : "",
  }

  /*handleKategori = (input, option) => {
    console.log('input', input, 'option', option);
    this.setState({ id_kategori: input })  
  }*/

  handleChange = (e) => {
    let target = e.target.name;
    let value = e.target.value;
    this.setState({
        [target]: value
    })
}

  handleSubmit = () => {
    console.log(this.state.nama_kategori)
    let headers = {};
    
    let config = {
      headers : headers,
    }

    headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODYwNDQzMiwiZXhwIjoxNTg4NjA4MDMyLCJuYmYiOjE1ODg2MDQ0MzIsImp0aSI6IlhpdDJoNkowRzF6VnA4bkEiLCJzdWIiOjEwLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.DS41WYhp8T0enaJaCaDoq51v5xW0vA-Sv8KxoEmiN3A`;
    
    const params = new FormData();
    params.set('nama_kategori', this.state.nama_kategori)

    axios.post(`http://127.0.0.1:8000/api/create-kategori_buku`, params,config)
    .then(res => {
      console.log('data',res)
      if(res.status === 200){
        message.success('Data Berhasil ditambah');
        
      }
    })
    
  }
    render () {
      return (

        <TambahKategoriComponent
            initialData = {this.state}
            handleChanger = {this.handleChange}
            handleSubmit = {this.handleSubmit}
            //handleKategori = {this.handleKategori}
        />
        
      )
    }

}

export default TambahKategori;