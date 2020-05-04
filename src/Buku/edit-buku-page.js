import React, {Component} from 'react';
import { message } from 'antd';
import EditBukuComponent from '../Buku/edit-buku-component'
import axios from 'axios';



class EditBuku extends Component {
    state = {
      id_kategori : "",
      id_penerbit : "",
      judul : "",
      pengarang : "",
      //penerbit : "",
      stok : "",
      harga : "",
      kategori_buku :[],
      penerbit : [],
    }

    componentDidMount() {
        let id_buku = localStorage.getItem("id_buku");
        this.getBuku(id_buku);
        this.getKategori();
        this.getPenerbit();
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
        this.setState({ kategori_buku : res.data.data.kategori_buku });
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
        this.setState({ penerbit_buku : res.data.data.penerbit });
      })
    }

    getBuku = (id_buku) =>{
      let headers = {};
    
      let config = {
        headers : headers,
      }
  
      headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODYwNDQzMiwiZXhwIjoxNTg4NjA4MDMyLCJuYmYiOjE1ODg2MDQ0MzIsImp0aSI6IlhpdDJoNkowRzF6VnA4bkEiLCJzdWIiOjEwLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.DS41WYhp8T0enaJaCaDoq51v5xW0vA-Sv8KxoEmiN3A"`;
  
      axios.get(`http://127.0.0.1:8000/api/buku/${id_buku}`, config)
      .then(res => {
        console.log('ini data asli',res)
        this.setState({ 
          judul : res.data.data.buku.judul,
          pengarang : res.data.data.buku.pengarang,
          //penerbit : res.data.data.buku.penerbit,
          stok : res.data.data.buku.stok,
          harga : res.data.data.buku.harga,
          id_kategori : res.data.data.buku.id_kategori,
          id_penerbit: res.data.data.buku.id_penerbit,
        })
      })
    }

    handleChange = (e) => {
      let target = e.target.name;
      let value = e.target.value;
      this.setState({
          [target]: value
      })
    }  

    editBuku = (id_buku) => {
      let headers = {};
    
      let config = {
        headers : headers,
      }
  
      headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU4ODYwNDQzMiwiZXhwIjoxNTg4NjA4MDMyLCJuYmYiOjE1ODg2MDQ0MzIsImp0aSI6IlhpdDJoNkowRzF6VnA4bkEiLCJzdWIiOjEwLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.DS41WYhp8T0enaJaCaDoq51v5xW0vA-Sv8KxoEmiN3A`;
  
      const params = new FormData();
      //params.set('judul', this.state.judul)
      params.set('id_kategori', this.state.id_kategori)
      params.set('judul', this.state.judul)
      params.set('pengarang', this.state.pengarang)
      params.set('id_penerbit', this.state.id_penerbit)
      params.set('stok', this.state.stok)
      params.set('harga', this.state.harga)
      params.append('_method','PUT')

      axios.post(`http://127.0.0.1:8000/api/edit-buku/${id_buku}`, params, config)
      .then(res => {
        if(res.status === 200){
          message.success('Data Berhasil diubah');
          localStorage.removeItem('id_buku');
        }
      })
    }

    render () {
      return (
        <EditBukuComponent
            initialData = {this.state}
            handleChanger = {this.handleChange}
            editBuku = {this.editBuku}
            handleChange = {this.handleChange}
        />
      )
    }

}

export default EditBuku;