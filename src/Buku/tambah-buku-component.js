import React, { Component} from 'react'; 
import {Layout, Row, Col, Button, Form, Select, DatePicker} from 'antd';
import InputForm from "../component/input/input-form";

const { Content} = Layout; // membuat konstanta content 
const { Option } = Select;

class TambahBukuComponent extends Component{

  render(){
    
     const { handleChanger, initialData, handleSubmit, handleKategori, handlePenerbit, onChangeDate } = this.props
    //  console.log(initialData.kategori_buku)
    //  console.log(initialData.penerbit_buku)
      return ( 
        <Content className=" ">
            {/* yang ini minheight nya yg dihapus */}
          <Row style={{minHeight: '', marginBottom: '2%', marginTop: '2%',}}> 
            <Col lg={24} md={24} sm={24}>
                <h2>TAMBAH DATA BUKU</h2>
                <p>Silakan melakukan input data buku dengan mengisi formulir dibawah ini.</p>
            </Col>
            <Col lg={24} md={24} sm={24}>
                <Form>
                    <div>
                    <span className="auth-input-label text-white">Kategori</span>
                    <br></br>
                        <Select
                            placeholder="Pilih kategori buku"
                            optionFilterProp="children"
                            onChange={(input, option)=>handleKategori(input, option)}
                            className="input-auth mt-5 mb-20"
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
                    </div>
                    <div>
                    <span className="auth-input-label text-white">Judul</span>
                        <InputForm
                            name='judul'
                            placeholder="Masukkan judul buku"
                            onChange={handleChanger}
                            value={initialData.judul}
                            className="input-auth mt-5 mb-20"
                        />
                    </div>
                    <div>
                    <span className="auth-input-label text-white">Pengarang</span>
                        <InputForm
                            name='pengarang'
                            placeholder="Masukkan nama pengarang"
                            onChange={handleChanger}
                            value={initialData.pengarang}
                            className="input-auth mt-5 mb-20"
                        />
                    </div>
                    <div>
                    <span className="auth-input-label text-white">Penerbit</span>
                    <br></br>
                        <Select
                            placeholder="Pilih penerbit buku"
                            optionFilterProp="children"
                            onChange={(input, option)=>handlePenerbit(input, option)}
                            className="input-auth mt-5 mb-20"
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
                    </div>
                    <div>
                    <span className="auth-input-label text-white">Stok</span>
                        <InputForm
                            name='stok'
                            placeholder="Masukkan jumlah stok buku"
                            onChange={handleChanger}
                            value={initialData.stok}
                            className="input-auth mt-5 mb-20"
                        />
                    </div>
                    <div>
                    <span className="auth-input-label text-white">Harga</span>
                        <InputForm
                            name='harga'
                            placeholder="Masukkan harga buku"
                            onChange={handleChanger}
                            value={initialData.harga}
                            className="input-auth mt-5 mb-20"
                        />
                    </div>
                      
                        
                       
                    <Button
                        type="primary"
                        onClick={() => handleSubmit()}
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
export default TambahBukuComponent;