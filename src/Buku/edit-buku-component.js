import React, { Component } from 'react'; 
import { Layout, Row, Col, Button,Form, Select } from 'antd';
import InputForm from "../component/input/input-form"

const { Content} = Layout;
const { Option } = Select;

let id_buku = localStorage.getItem("id_buku");

class EditBukuComponent extends Component{

  render(){
    // console.log(this.props)
    const {  initialData, editBuku, handleChange } = this.props
      return ( 
        <Content className=" ">
          <Row style={{minHeight: '', marginBottom: '2%', marginTop: '2%',}}> 
            <Col lg={24} md={24} sm={24}>
                <h2>Edit DATA BUKU</h2>
                <p>Silakan melakukan perubahan data buku dengan mengisi formulir dibawah ini.</p>
            </Col>
            <Col lg={24} md={24} sm={24}>
                <Form>
                    <span className="auth-input-label text-white">Kategori</span>
                        <Select
                            placeholder="Pilih kategori buku"
                            optionFilterProp="children"
                            onChange={(input, option)=>handleChange(input, option)}
                            className="input-auth mt-5 mb-20"
                            value={initialData.id_kategori}
                        >
                            {
                                initialData.kategori_buku.map(data =>
                                    <Option
                                    key={data.nama_kategori.toString()}
                                    value={data.id_kategori}
                                    >{data.nama_kategori}</Option>
                                    )
                            }
                        </Select>
                    <span className="auth-input-label text-white">Judul Buku</span>
                        <InputForm
                            name='judul'
                            placeholder="Masukkan judul buku"
                            onChange={handleChange}
                            value={initialData.judul}
                            className="input-auth mt-5 mb-20"
                        />
                      <span className="auth-input-label text-white">Pengarang</span>
                        <InputForm
                            name='pengarang'
                            placeholder="Masukkan nama pengarang"
                            onChange={handleChange}
                            value={initialData.pengarang}
                            className="input-auth mt-5 mb-20"
                        />
                        <span className="auth-input-label text-white">Penerbit</span>
                        <Select
                            placeholder="Pilih penerbit"
                            optionFilterProp="children"
                            onChange={(input, option)=>handleChange(input, option)}
                            className="input-auth mt-5 mb-20"
                            value={initialData.id_penerbit}
                        >
                            {
                                initialData.penerbit.map(data =>
                                    <Option
                                    key={data.nama_penerbit.toString()}
                                    value={data.id_penerbit}
                                    >{data.nama_penerbit}</Option>
                                    )
                            }
                        </Select>
                        <span className="auth-input-label text-white">Stok</span>
                        <InputForm
                            name='stok'
                            placeholder="Masukkan jumlah stok buku"
                            onChange={handleChange}
                            value={initialData.stok}
                            className="input-auth mt-5 mb-20"
                        />
                        <span className="auth-input-label text-white">Harga</span>
                        <InputForm
                            name='harga'
                            placeholder="Masukkan harga buku"
                            onChange={handleChange}
                            value={initialData.harga}
                            className="input-auth mt-5 mb-20"
                        />
                    <Button
                        type="primary"
                        onClick={() => editBuku(id_buku)}
                    >
                        Done
                    </Button>
                    
                </Form>
            </Col>
          </Row>
        </Content>
  );
  }
}

export default EditBukuComponent;