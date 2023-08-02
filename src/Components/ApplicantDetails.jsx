import React from 'react'

export default function ApplicantDetails(props) {
    return (
        <div>
            {/* Application Details for start */}
            <div className="container row ms-5">
                <div className="col-12 mt-3">
                    <div class="row">
                        <div class="col-md-3 text-light bgcolor">
                            <p className='pt-2 text-light fw-bold bgcolor '>Application Details</p>
                        </div>
                        <div class="col-md-8 offset-md-1  text-light bgcolor">
                            <p className='pt-2 text-light fw-bold bgcolor'>1st Account Holder Details</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 pt-2">

                    <div class="row">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-8 offset-md-1">
                            <input type="text" onChange={props.handleChange} class="form-control" name="applicationName" placeholder="Application Name" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-8 offset-md-1">
                            <div className='row'>
                                <div className='col-md-9'>
                                    <input type="number" onChange={props.handleChange} class="form-control" name="contactNumber" placeholder="Contact No." aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn btn-outline-success">Sent OTP</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-8 offset-md-1">
                            <div className='row'>
                                <div className='col-6'>
                                    <input type="text" onChange={props.handleChange} class="form-control" placeholder="Enter OTP" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="col-3">
                                    <button type="button" class="btn btn-success">Verify</button>
                                </div>

                                <div class="col-3">
                                    <button type="button" class="btn btn-outline-success">Re-Send OTP</button>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div class="row mt-3">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-8 offset-md-1">
                            <div className='row'>
                                <div className='col-md-9'>
                                    <input type="text" onChange={props.handleChange} class="form-control" name="email" placeholder="Email id" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn btn-outline-success">Sent OTP</button>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div class="row mt-3">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-8 offset-md-1">
                            <div className='row'>
                                <div className='col-6'>
                                    <input type="text" onChange={props.handleChange} class="form-control" placeholder="Enter OTP" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div class="col-3">
                                    <button type="button" class="btn btn-success">Verify</button>
                                </div>

                                <div class="col-3">
                                    <button type="button" class="btn btn-outline-success">Re-Send OTP</button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-8 offset-md-1">
                            <input type="text" onChange={props.handleChange} class="form-control" name="panNumber" placeholder="PAN No." aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-8 offset-md-1">
                            <label for="exampleInputEmail1" class="form-label">Date Of Birth</label>
                            <input type="text" onChange={props.handleChange} class="form-control" name="dateOfBirth" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>


                    <div class="row mt-3">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-8 offset-md-1">
                            <div className='row'>
                                <div className='col-6'>
                                    <label for="exampleInputEmail1" class="form-label">Upload scanned copy of PAN card</label>
                                </div>
                                <div class="col-3">
                                    <input type="file" id="myfile" onChange={props.handleFileChange} name="panCardPic" />
                                </div>

                                <div class="col-2 ms-5">
                                    <button type="button" class="btn btn-success" onClick={props.handleFileUploadPanCard}>Upload</button>
                                </div>

                            </div>
                        </div>
                    </div>



                    <div class="row mt-3">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-8 offset-md-1">
                            <div className='row'>
                                <div className='col-6'>
                                    <label for="exampleInputEmail1" class="form-label">Upload scanned copy of Aadhar card</label>
                                </div>
                                <div class="col-3">
                                    <input type="file" id="myfile" onChange={props.handleFileChange} name="aadharCardPic" multiple />
                                </div>

                                <div class="col-2 ms-5">
                                    <button type="button" class="btn btn-success" onClick={props.handleFileUploadAadharCard}>Upload</button>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {/* Application Details for end */}

        </div>
    )
}
