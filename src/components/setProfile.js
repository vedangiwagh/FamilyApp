import React, { useState, useEffect } from 'react';  
// import firebaseDb from "../firebase";  

const AddOrEditProfile= (props) => {  
    const initialFieldValues = {  
        Name: '',
        Age:'' ,
        Phoneno:''
        // RollNo: '',  
        // Age: '',  
        // Class: ''  
    }  
  
    var [values, setValues] = useState(initialFieldValues)  

    useEffect(() => {  
        if (props.currentId === '')  
            setValues({ ...initialFieldValues })  
        else  
            setValues({  
                ...props.ProfileObjects[props.currentId]  
            })  
    }, [props.currentId, props.ProfileObjects])  
  
    const handleInputChange = e => {  
        var { name, value } = e.target;  
        setValues({  
            ...values,  
            [name]: value  
        })  
    }  
  
    const handleFormSubmit = e => {  
        e.preventDefault()  
        props.addOrEdit(values);  
    }  
  
    return (  
        <form autoComplete="off" onChange={handleFormSubmit}>  
            <div className="col-12 col-md-12">  
                <div className="card">  
                    <div className="card-header" >  
                        <input value={props.currentId === "" ? "Add Info" : "Update Info"} />  
                    </div>  
                    <div className="card-body">  
                        <div className="center-form">  
                            <div className="row">  
                                <div className="col-12 col-md-6">  
                                    <div className="form-group">  
                                        <label className="col-form-label">Name<span  
                                            className="mandatoryFieldColor">*</span></label>  
                                        <input value={values.Name}  
                                            onChange={handleInputChange} type="text" className="form-control" name="Name"  
                                        />  
                                    </div>  
                                </div>  
                                <div className="col-12 col-md-6">  
                                    <div className="form-group">  
                                        <label className="col-form-label">Age<span  
                                            className="mandatoryFieldColor">*</span></label>  
                                        <input value={values.Age} onChange={handleInputChange} type="text" className="form-control" name="Age"  
                                        />  
                                    </div>  
                                </div>  
                                <div className="col-12 col-md-6">  
                                    <div className="form-group">  
                                        <label className="col-form-label">Phoneno<span  
                                            className="mandatoryFieldColor">*</span></label>  
                                        <input value={values.Phoneno} onChange={handleInputChange} type="text" className="form-control" name="Phoneno"  
                                        />  
                                    </div>  
                                </div>  
                                <div className="col-12 col-md-12">  
                                    <div className="btn-group mb-3 mt-2 cmn-btn-grp">  
                                        <input type="submit" value={props.currentId === "" ? "Save" : "Update"} className="btn btn-success btn-block" />  
                                    </div>  
                                </div>  
                            </div>  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </form>  
    );  
}  
  
export default AddOrEditProfile;  