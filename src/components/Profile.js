import React, { useState, useEffect } from 'react';  
import firebaseDb from "../firebase";  
import AddOrEditProfile from './setProfile';  
  
const ProfileInfo= () => {  
  
    var [currentId, setCurrentId] = useState('');  
    var [ProfileObjects, setProfileObjects] = useState({})  

    useEffect(() => {  
        firebaseDb.child('Profile').on('value', snapshot => {  
            if (snapshot.val() != null) {  
                setProfileObjects({  
                    ...snapshot.val()  
                });  
            }  else{
               setProfileObjects({});
            }
        })  
    }, [])  
  
  
    const addOrEdit = (obj) => {  
        if (currentId === '')  
            firebaseDb.child('Profile').push(  
                obj,  
                err => {  
                    if (err)  
                        console.log(err)  
                    else  
                        setCurrentId('')  
                })  
        else  
            firebaseDb.child(`Profile/${currentId}`).set(  
                obj,  
                err => {  
                    if (err)  
                        console.log(err)  
                    else  
                        setCurrentId('')  
                })  
    }  
  
    const onDelete = id => {  
        if (window.confirm('Are you sure to delete this record?')) {  
            firebaseDb.child(`Profile/${id}`).remove(  
                err => {  
                    if (err)  
                        console.log(err)  
                    else  
                        setCurrentId('')  
                })  
        }  
    }  
  
    return (  
        <div className="card">  
            <div className="card-body pb-0">  
                <div className="card">  
                    <div className="card-header main-search dash-search">  
                        <h3>  
                            Profile Details  
                    </h3>  
                    </div>  
                </div>  
                <div className="row">  
                    <AddOrEditProfile {...({ currentId, ProfileObjects, addOrEdit })}></AddOrEditProfile>
                    <div className="col-12 col-md-12">  
                        <div className="card">  
                            <div className="card-header">Profile</div>  
                            <div className="card-body position-relative">  
                                <div className="table-responsive cnstr-record product-tbl">  
                                    <table className="table table-bordered heading-hvr">  
                                        <thead>  
                                            <tr>  
                                                <th className="active">Name</th>  
                                                <th>Age</th>  
                                                <th>Phoneno</th>  
                                                <th width="60"> </th>  
                                                <th width="60"> </th>  
                                            </tr>  
                                        </thead>  
                                        <tbody>  
                                            {  
                                                Object.keys(ProfileObjects).map((key) => (  
                                                    <tr key={key}>  
                                                        <td>{ProfileObjects[key].Name}</td>  
                                                        <td>{ProfileObjects[key].Age}</td>  
                                                        <td>{ProfileObjects[key].Phoneno}</td>  
                                          
  
                                                        <td className="case-record">  
                                                            <button type="button" className="btn btn-info"  
                                                                onClick={() => { setCurrentId(key) }}>Edit</button>  
  
                                                        </td>  
                                                        <td> <button type="button" className="btn btn-danger"  
                                                            onClick={() => { onDelete(key) }}>Delete</button></td>  
                                                    </tr>  
                                                ))  
                                            }  
                                        </tbody>  
                                    </table>  
                                </div>  
                            </div>  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </div>  
    );  
}  
  
export default ProfileInfo;