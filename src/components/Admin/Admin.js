import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {API_MERCH} from "../../Adress";

const Admin = () => {
    let history = useHistory();
    let [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('currentUser')));
    let [merch, loadMerch] = useState([]);

    let [modal, setModal] = useState(false);

    let [merchEdit, setMerchEdit] = useState({});
    let [merchId, setMerchId] = useState('');

    let [addModal, setAddModal] = useState(false);
    let [newMerch, setNewMerch] = useState({});

    function getMerchs(){
        axios.get(API_MERCH).then(res => loadMerch(res.data));
    }

    useEffect( () => {
        if(admin && admin.Admin){
            getMerchs();
            return;
        }
        return history.push('/')
    },[]);

    function itemToEditModal(item){
        setMerchId(item.id);
        setMerchEdit(item);
        setModal(true);
    }

    async function deleteMerch(id){
        await axios.delete(`${API_MERCH}/${id}`);
        getMerchs();
    }

    function onChangeInp(e){
        let obj = {
            ...merchEdit,
            [e.target.name]: e.target.value
        };
        setMerchEdit(obj);
    }

    async function saveChanges(){
        await axios.patch(`${API_MERCH}/${merchId}`, merchEdit);
        setModal(false);
        getMerchs();
    }

    function handleAddInp(e){
        let obj = {
            ...newMerch,
            [e.target.name]: e.target.value,
            id: Date.now()
        };
        setNewMerch(obj)
    }

    async function addMerch(){
        await axios.post(API_MERCH, newMerch);
        getMerchs();
        setAddModal(false)
    }

    return (
        <div>
            <Header/>
            <h3>ADMIN CONTROL PAGE</h3>

            <h4>Add new merch</h4>

            {
                addModal ?
                    <div>
                        NAME:
                        <input name={'name'} onChange={handleAddInp} />
                        PRICE:
                        <input name={'price'} onChange={handleAddInp} />
                        IMG URL:
                        <input name={'img'} onChange={handleAddInp} />
                        <img className={'img-fluid'} src={newMerch.img} />
                        <button onClick={addMerch} >Add</button>
                        <button onClick={() => setAddModal(false)} >Close</button>
                    </div>
                    : <button onClick={() => setAddModal(true)} >Add New Merch</button>
            }


            <div className={'d-flex flex-wrap'} >
                {merch.map(item => (
                        <div className={'col-6 col-md-3'} style={{border: '1px solid'}} key={item.id} >
                            <p>{item.name}</p>
                            <img className={'img-fluid'} src={item.img} />
                            <p>price: {item.price}$</p>
                            <button onClick={() => itemToEditModal(item)} >Edit</button>
                            <button onClick={() => deleteMerch(item.id)} >Delete</button>
                        </div>
                    )
                )}
            </div>

            {
                modal ?
                    <div className={'col-6 col-md-3'} >
                        <input onChange={onChangeInp} name={'name'} required value={merchEdit.name} />
                        <input onChange={onChangeInp} name={'price'} required value={merchEdit.price} />
                        <input onChange={onChangeInp} name={'img'} required value={merchEdit.img} />
                        <img className={'img-fluid'} src={merchEdit.img} />
                        <button onClick={saveChanges}>Save</button>
                        <button onClick={() => setModal(false)} >Close</button>
                    </div>
                    : null
            }
        </div>
    );
};

export default Admin;
