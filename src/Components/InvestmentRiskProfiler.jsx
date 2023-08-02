import React from 'react'

export default function InvestmentRiskProfiler(props) {
    return (
        <div>

            {/* Investment Details for start */}
            <div className="container row ms-5">
                <div className="col-12 text-light bgcolor mt-3">
                    <p className='pt-2 fw-bold'>Investment Risk Profiler</p>
                </div>

                <div className="row text-center mt-3">
                    <div className="col-12">
                        <h6 className=''>Welcome to <span className='text-success'>Risk Profiler</span></h6>
                    </div>
                    <div className="col-12">
                        <p>Your Investment is utmost as important as understanding your emotional risk appetite</p>
                    </div>

                </div>

                <div className="col-12 pt-2">
                    <div className='row'>

                        <div className='col-4'>
                            <p>Investment Experience:</p>
                        </div>


                        <div className='col-8'>
                            <div class="row">
                                <div className='col-3'>
                                    <div class="form-check">
                                        <input class="form-check-input" onChange={props.handleChange} type="radio" name="investmentExperience" value='0-3' id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            0-3 yr
                                        </label>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div class="form-check">
                                        <input class="form-check-input" onChange={props.handleChange} type="radio" name="investmentExperience" value='3-5' id="flexRadioDefault2" />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            3-5 yr
                                        </label>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div class="form-check">
                                        <input class="form-check-input" onChange={props.handleChange} type="radio" name="investmentExperience" value='5-7' id="flexRadioDefault3" />
                                        <label class="form-check-label" for="flexRadioDefault3">
                                            5-7 yr
                                        </label>
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div class="form-check">
                                        <input class="form-check-input" onChange={props.handleChange} type="radio" name="investmentExperience" value='>7' id="flexRadioDefault4" />
                                        <label class="form-check-label" for="flexRadioDefault4">
                                        &#62;7 yr
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='row'>

                        <div className='col-4'>
                            <p>Investment Style:</p>
                        </div>

                        <div className='col-4'>

                            <div className='row'>
                                <div className='col-6'>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" onChange={props.handleChange} value="Active" name="investmentStyle" id="flexRadioDefault5" />
                                        <label class="form-check-label" for="flexRadioDefault5">
                                            Active
                                        </label>
                                    </div>
                                </div>

                                <div className='col-6'>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" onChange={props.handleChange} value="Passive" name="investmentStyle" id="flexRadioDefault6" />
                                        <label class="form-check-label" for="flexRadioDefault6">
                                            Passive
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='row'>

                        <div className='col-4'>
                            <p>How would you react if well diversified portfolio fells below 10%:</p>
                        </div>

                        <div className='col-4'>

                            <div className='row'>
                                <div className='col-6'>
                                    <div class="form-check">
                                        <input class="form-check-input" onChange={props.handleChange} type="radio" value="Accumulate" name="rateOfDiversifiedPortfolio" id="flexRadioDefault7" />
                                        <label class="form-check-label" for="flexRadioDefault7">
                                            Accumulate
                                        </label>
                                    </div>
                                </div>

                                <div className='col-6'>
                                    <div class="form-check">
                                        <input class="form-check-input" onChange={props.handleChange} type="radio" value="Hold" name="rateOfDiversifiedPortfolio" id="flexRadioDefault8" />
                                        <label class="form-check-label" for="flexRadioDefault8">
                                            Hold
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div> 
                        <div className='col-4'>

                            <div className='row'>
                                <div className='col-6'>
                                    <div class="form-check">
                                        <input class="form-check-input" onChange={props.handleChange} type="radio" value="Reduce" name="rateOfDiversifiedPortfolio" id="flexRadioDefault9" />
                                        <label class="form-check-label" for="flexRadioDefault9">
                                            Reduce
                                        </label>
                                    </div>
                                </div>

                                <div className='col-6'>
                                    <div class="form-check">
                                        <input class="form-check-input" onChange={props.handleChange} type="radio" value="Exit" name="rateOfDiversifiedPortfolio" id="flexRadioDefault10" />
                                        <label class="form-check-label" for="flexRadioDefault10">
                                            Exit
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='row'>

                        <div className='col-4'>
                            <p>Investment Objective</p>
                        </div>

                        <div className='col-8'>
                            <div class="input-group mb-3">
                                <select id="cars" onChange={props.handleChange} name="investmentObjective" form="carform" class="form-control" >
                                    <option>Select</option>
                                    <option value="Capital Appreciation">Capital Appreciation</option>
                                    <option value="Current Income">Current Income</option>
                                    <option value="Capital Preservation">Capital Preservation</option>
                                    <option value="Speculation">Speculation</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className='row'>

                        <div className='col-4'>
                            <p>Risk Tolerance</p>
                        </div>

                        <div className='col-8'>
                            <div class="input-group mb-3">
                                <div class="input-group mb-3">
                                    <select id="cars" onChange={props.handleChange} name="riskTolerance" form="carform" class="form-control" >
                                        <option>Select</option>
                                        <option value="Credit Risk">Credit Risk</option>
                                        <option value="Liquidity Risk">Liquidity Risk</option>
                                        <option value="Operational Risk">Operational Risk</option>
                                        <option value="Supplier Risk">Supplier Risk</option>
                                        <option value="Conduct Risk">Conduct Risk</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='row'>

                        <div className='col-4'>
                            <p>Investment Horizon:</p>
                        </div>

                        <div className='col-4'>

                            <div className='row'>
                                <div className='col-6'>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" onChange={props.handleChange} value="<3" name="investmentHorizon" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                        &#60;3 yr
                                        </label>
                                    </div>
                                </div>

                                <div className='col-6'>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" onChange={props.handleChange} value="3-5" name="investmentHorizon" id="flexRadioDefault2" />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            3-5 yr
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div> 
                        <div className='col-4'>

                            <div className='row'>
                                <div className='col-6'>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" onChange={props.handleChange} value="5-7" name="investmentHorizon" id="flexRadioDefault3" />
                                        <label class="form-check-label" for="flexRadioDefault3">
                                            5-7 yr
                                        </label>
                                    </div>
                                </div>

                                <div className='col-6'>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" onChange={props.handleChange} value=">10" name="investmentHorizon" id="flexRadioDefault4" />
                                        <label class="form-check-label" for="flexRadioDefault4">
                                        &#62;10yr
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

            </div>

            {/* Investment Details for end */}

        </div>
    )
}
