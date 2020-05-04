import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
//import LayoutBeranda from '../Layout/LayoutBeranda';

import Buku from '../Buku/buku-page';
import TambahBukuPage from '../Buku/tambah-buku-page';
import EditBukuPage from '../Buku/edit-buku-page';

import Penerbit from '../Penerbit/penerbit-page';
import TambahPenerbitPage from '../Penerbit/tambah-penerbit-page'
import EditPenerbitPage from '../Penerbit/edit-penerbit-page';

import Kategori from '../Kategori/kategori-page';
import TambahKategoriPage from '../Kategori/tambah-kategori-page'
import EditKategoriPage from '../Kategori/edit-kategori-page';

class Router extends Component {
    render() {
        return (
            <Switch>
                {/* <Route exact path="/" component={LayoutBeranda}/> */}
                {/* <Route path="/" component={Penerbit}/> */}
                {/* <Route path="/kategori" component={Kategori}/> */}
                <Route path="/buku" component={Buku}/>
                <Route path="/tambahbuku" component={TambahBukuPage}/>
                <Route path="/editbuku" component={EditBukuPage}/>

                <Route path="/penerbit" component={Penerbit}/>
                <Route path="/tambahpenerbit" component={TambahPenerbitPage}/>
                <Route path="/editpenerbit" component={EditPenerbitPage}/>
                

                <Route path="/kategori" component={Kategori}/>
                <Route path="/tambahkategori" component={TambahKategoriPage}/>
                <Route path="/editkategori" component={EditKategoriPage}/>

                {/* <Route path="/login" component={Login}/> */}
            </Switch>
        );
    }
}

export default Router;