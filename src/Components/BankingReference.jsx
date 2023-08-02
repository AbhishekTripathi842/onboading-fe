import React, { useEffect, useState } from 'react'

export default function BankingReference(props) {

    let [selectNomineeNumber, setSelectNomineeNumber] = useState([])

    useEffect(() => {
        let finalArray = []
        for (let i = 1; i <= props.nomineeDetails; i++) {
            finalArray.push(i)
        }
        setSelectNomineeNumber(finalArray)
    }, [props.nomineeDetails])


    return (
        <div>
            {/* BankingReference form start */}
            <div className="container row ms-5">
                <div className="col-12 mt-3">
                    <div class="row">
                        <div class="col-md-3 text-light bgcolor">
                            <p className='pt-2 text-light fw-bold bgcolor'>Banking Reference</p>
                        </div>
                        <div class="col-md-8 offset-md-1">
                            <div className='row'>
                                <div class="col-3">
                                    <input type="checkbox" class="form-check-input me-2" id="check1" name="option1" value="something" disabled />
                                    <label class="form-check-label" for="check1">Cancelled Cheque</label>
                                </div>
                                <div class="col-3">
                                    <input type="checkbox" class="form-check-input me-2" id="check1" name="option1" value="something" checked />
                                    <label class="form-check-label" for="check1">Bank Details</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 pt-2">

                    <div class="row">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-8 offset-md-1">
                            <input type="text" onChange={props.handleChange} name="bankName" class="form-control" placeholder="Bank Name" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-8 offset-md-1">
                            <input type="number" onChange={props.handleChange} name="accountNumber" class="form-control" placeholder="Account No." aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-8 offset-md-1">
                            <input type="text" onChange={props.handleChange} name="accountTitle" class="form-control" placeholder="Account Title" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-8 offset-md-1">
                            <input type="text" onChange={props.handleChange} name="bankIfscCode" class="form-control" placeholder="Bank IFCS Code" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>


                    <div className="col-12 mt-3">
                        <div class="row">
                            <div class="col-md-3 text-light bgcolor">
                                <p className='pt-2 text-light fw-bold bgcolor'>Nominee Details</p>
                            </div>
                            <div class="col-md-8 offset-md-1">
                                <div class="input-group mb-3">
                                    <select onChange={props.handleChange} id="cars" name="nomineeDetails" form="carform" class="form-control" >
                                        <option>Select Number of Nominees</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>

                    {

                        selectNomineeNumber.map((data, index) => {
                            return (
                                <div>

                                    <div class="row mt-3">
                                        <div class="col-md-3">
                                        </div>
                                        <div class="col-md-8 offset-md-1">
                                            <input type="text" onChange={props.handleChange} name={`nomineeName${data}`} class="form-control"  placeholder={`Nominee Name ${data}`} aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-3">
                                        </div>
                                        <div class="col-md-8 offset-md-1">
                                            <input type="text" onChange={props.handleChange} name={`nomineePan${data}`} class="form-control" placeholder={`Nominee Pan ${data}`} aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-3">
                                        </div>
                                        <div class="col-md-8 offset-md-1">
                                            <input type="text" onChange={props.handleChange} name={`nomineeEmailId${data}`} class="form-control" placeholder={`Nominee Email id. ${data}`} aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-3">
                                        </div>
                                        <div class="col-md-8 offset-md-1">
                                            <input type="number" onChange={props.handleChange} name={`nomineeContactNumber${data}`} class="form-control" placeholder={`Nominee Contact No. ${data}`} aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-3">
                                        </div>
                                        <div class="col-md-8 offset-md-1">
                                            <label for="exampleInputEmail1" class="form-label">Date Of Birth</label>
                                            <input type="text" onChange={props.handleChange} name={`nomineeDateOfBirth${data}`} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-3">
                                        </div>
                                        <div class="col-md-8 offset-md-1">
                                            <input type="text" onChange={props.handleChange} name={`nomineeRelationshipWithApplicant${data}`} class="form-control" placeholder={`Nominee Relationship with ${data}  Applicant`}aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-3">
                                        </div>
                                        <div class="col-md-8 offset-md-1">
                                            <input type="number" onChange={props.handleChange} name={`nomineeOfPercent${data}`} class="form-control" placeholder={`Nominee(%) ${data}`} aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }



                </div>
            </div>

            {/* BankingReference form end */}

        </div>
    )
}
