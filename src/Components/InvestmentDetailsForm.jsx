import React from 'react'

export default function InvestmentDetails(props) {
  return (
    <div>


      {/* Investment Details for start */}
      <div className="container row ms-5">
        <div className="col-12 text-light bgcolor mt-3">
          <p className='pt-2 fw-bold'>Investment Details</p>
        </div>

        <div className="col-12 pt-2">
          <div className='row'>

            <div className='col-4'>
              <p>Account Type</p>
            </div>

            <div className='col-8'>
              <div class="input-group mb-3">
                <select onChange={props.handleChange} id="cars" name="accountType" form="carform" class="form-control" >
                  <option>Select</option>
                  <option value="Saving account">Saving account</option>
                  <option value="Current account">Current account</option>
                  <option value="Salary account">Salary account</option>
                </select>
              </div>

            </div>
          </div>

          <div className='row'>

            <div className='col-4'>
              <p>Portfolio/Strategy Name</p>
            </div>

            <div className='col-8'>
              <div class="input-group mb-3">
                <select onChange={props.handleChange} name="PortfolioStrategyName" id="cars" form="carform" class="form-control" >
                  <option>Select</option>
                  <option value="Business strategy">Business strategy</option>
                  <option value="Operational strategy">Operational strategy</option>
                  <option value="Transformational strategy">Transformational strategy</option>
                  <option value="Functional strategy">Functional strategy</option>
                </select>
              </div>

            </div>
          </div>

          <div className='row'>

            <div className='col-4'>
              <p>Fund Fees Category</p>
            </div>

            <div className='col-8'>
              <div class="input-group mb-3">
                <select onChange={props.handleChange} name="fundFeesCategory" id="cars" form="carform" class="form-control" >
                  <option>Select</option>
                  <option value="Mutual fund">Mutual fund</option>
                  <option value="SIP">SIP</option>
                  <option value="Treding">Treding</option>
                </select>
              </div>

            </div>
          </div>

          <div className='row'>

            <div className='col-4'>
              <p>Investment Category</p>
            </div>

            <div className='col-8'>
              <div class="input-group mb-3">
                <select id="cars" onChange={props.handleChange} name="investmentCategory" form="carform" class="form-control" >
                  <option>Select</option>
                  <option value="Mutual fund Investment">Mutual fund Investment</option>
                  <option value="Exchange Traded Funds">Exchange Traded Funds</option>
                  <option value="Fixed deposits">Fixed deposits</option>
                  <option value="Retirement planning">Retirement planning</option>
                </select>
              </div>

            </div>
          </div>

          <div className='row'>

            <div className='col-4'>
              <p>Communication Address</p>
            </div>

            <div className='col-8'>
              <div class="input-group mb-3">
                <input type="text" onChange={props.handleChange} name="communicationAddress" class="form-control" placeholder="please enter.." aria-label="Username" aria-describedby="basic-addon1" />
              </div>

            </div>
          </div>


          <div className='row'>

            <div className='col-4'>
              <p>Country of Tax Residency</p>
            </div>

            <div className='col-8'>
              <div class="input-group mb-3">
                <select id="cars" onChange={props.handleChange} name="countryOfTaxResidency" form="carform" class="form-control" >
                  <option value="india">India</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>

            </div>
          </div>


          <div className='row'>

            <div className='col-4'>
              <p>No. of Account Holders</p>
            </div>

            <div className='col-8'>
              <div class="input-group mb-3">
                <select id="cars" onChange={props.handleChange} name="numberOfAccountHolders" form="carform" class="form-control" >
                  <option>Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

            </div>
          </div>

          <div className='row'>

            <div className='col-4'>
              <p>Quantum of Investment</p>
            </div>

            <div className='col-8'>
              <div class="input-group mb-3">
                <input type="text" onChange={props.handleChange} name="quantumOfInvestment" class="form-control" placeholder="please enter.." aria-label="Username" aria-describedby="basic-addon1" />
              </div>

            </div>
          </div>

          <div className='row'>

            <div className='col-4'>
              <p>Investment Mode</p>
            </div>

            <div className='col-8'>
              <div class="input-group mb-3">
                <select id="cars" onChange={props.handleChange} name="investmentMode" form="carform" class="form-control" >
                  <option>Select</option>
                  <option value="Stocks">Stocks</option>
                  <option value="Bonds">Bonds</option>
                  <option value="Index funds">Index funds</option>
                  <option value="Exchange-traded funds">Exchange-traded funds</option>
                </select>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Investment Details for end */}

    </div>
  )
}
