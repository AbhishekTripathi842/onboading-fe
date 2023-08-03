import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Captcha(props) {
    return (
        <div>


            {/* Investment Details for start */}
            <div className="container row ms-5">

                <div className="row text-center mt-5">

                    <div className="col-12">
                        <p className='text-start fn-color'>I / We understand, the above informatio provided is correct to the best of my knowledge / belief, and understand the adversities / risk tolerance arising from mis - placement of information / data in any manner</p>
                    </div>

                </div>


                <div className="row text-center mt-2 mb-3">
                    <div className="col-1">
                        <ReCAPTCHA sitekey="6LcUyXknAAAAAGuQh5lUxxRlwVT3mbUnC8R9XAjE" onChange={props.handleCaptchaVerify} />
                    </div>
                </div>

                <div className="row text-center mb-3">
                    <div className="col-1">
                        <button type="button" class="btn btn-success btn-lg" onClick={props.handleSubmit} style={{ width: "400%" }} disabled={props.isCaptchaVerified===false}>{props.loading?"Submiting data..":"Submit"}</button>
                    </div>
                </div>

            </div>

            {/* Investment Details for end */}

        </div>
    )
}
