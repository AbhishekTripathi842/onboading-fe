import React, { useState } from 'react'
import Template from './Template';
import InvestmentDetails from './InvestmentDetailsForm';
import ApplicantDetails from './ApplicantDetails';
import BankingReference from './BankingReference';
import InvestmentRiskProfiler from './InvestmentRiskProfiler'
import Captcha from './Captcha';
// import axios from 'axios';


export default function Main() {

    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState({
        accountType: "",
        PortfolioStrategyName: "",
        fundFeesCategory: "",
        investmentCategory: "",
        communicationAddress: "",
        countryOfTaxResidency: "",
        numberOfAccountHolders: "",
        quantumOfInvestment: "",
        investmentMode: "",
        applicationName: "",
        contactNumber: "",
        email: "",
        panNumber: "",
        dateOfBirth: "",
        bankName: "",
        accountNumber: "",
        accountTitle: "",
        bankIfscCode: "",
        nomineeDetails: "",
        nomineeName1: "",
        nomineePan1: "",
        nomineeEmailId1: "",
        nomineeContactNumber1: "",
        nomineeDateOfBirth1: "",
        nomineeRelationshipWithApplicant1: "",
        nomineeOfPercent1: "",
        nomineeName2: "",
        nomineePan2: "",
        nomineeEmailId2: "",
        nomineeContactNumber2: "",
        nomineeDateOfBirth2: "",
        nomineeRelationshipWithApplicant2: "",
        nomineeOfPercent2: "",
        nomineeName3: "",
        nomineePan3: "",
        nomineeEmailId3: "",
        nomineeContactNumber3: "",
        nomineeDateOfBirth3: "",
        nomineeRelationshipWithApplicant3: "",
        nomineeOfPercent3: "",
        investmentObjective: "",
        riskTolerance: "",
        investmentExperience: "",
        investmentStyle: "",
        rateOfDiversifiedPortfolio: "",
        // panCardPic:"",
        // aadharCardPic:""
    });

    const [file, setFile] = useState({
        panCardPic: "",
        aadharCardPic: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }))
    }

    const handleFileChange = (event) => {
        const { name } = event.target;
        const file = event.target.files[0];
        setFile(prevState => ({ ...prevState, [name]: file }))
    };

    const handleFileUploadPanCard = () => {
        const filedataa = file?.panCardPic

        if (filedataa) {
            let formData = new FormData();
            formData.append('file', filedataa);

            formData.forEach((value,i)=>{return console.log("value",value)})

            fetch('http://localhost:8000/panCardUploadImage', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("error is data :-", data)
                    // Handle the response data
                })
                .catch((error) => {
                    console.log("error is here :-", error)
                    // Handle errors
                });

        }




    }

    const handleFileUploadAadharCard = () => {
        const filedataa = file?.aadharCardPic

        if (filedataa) {
            let formData = new FormData();
            formData.append('file', filedataa);

            formData.forEach((value,i)=>{return console.log("value",value)})

            fetch('http://localhost:8000/aadharCardUploadImage', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("error is data :-", data)
                    // Handle the response data
                })
                .catch((error) => {
                    console.log("error is here :-", error)
                    // Handle errors
                });

        }

    }

    const handleCaptchaVerify = () => {
        setIsCaptchaVerified(true);
    };

    const handleSubmit = () => {
        setLoading(true)
        fetch(`http://localhost:8000/onBoardingForm`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(state),
        })
            .then(res => res.json())
            .then((state) => {
                if (state) {
                    setLoading(false)
                }
            })
    }

    return (
        <div className='border border-primary'>
            <Template />
            <div className='form-bg-clr'>
                <InvestmentDetails handleChange={handleChange} />
                <ApplicantDetails handleChange={handleChange} handleFileChange={handleFileChange} handleFileUploadPanCard={handleFileUploadPanCard} handleFileUploadAadharCard={handleFileUploadAadharCard} />
                <BankingReference handleChange={handleChange} nomineeDetails={parseInt(state.nomineeDetails)} />
                <InvestmentRiskProfiler handleChange={handleChange} />
                <Captcha loading={loading} handleCaptchaVerify={handleCaptchaVerify} isCaptchaVerified={isCaptchaVerified} handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}
