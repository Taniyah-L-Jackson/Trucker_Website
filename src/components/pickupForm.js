import React, {useState} from 'react'

function Pickup() {

    const [companyInfo, setCompanyInfo] = useState({
        F_name: '',
        L_name: '',
        Title: '',
        CompanyEmail: '',
        CompanyName: '',
        CompanyNumber: '',
        City_town: '',
        State: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target //target the current form box being used
        setCompanyInfo(prevState => {
            return{...prevState, [name] : value}}) 
            //constantly update value

    }

    const handleSubmit = (e) =>  {
        
        e.preventDefault(); //prevents reload upon submit

        // Check All Parts Of Num (From Free Code Camp)
        //--Checks if its a US number
        //--Parentheses are allowed
        //--Dashes are allowed
        const numChecker = (/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/)

        // Show Err if format is incorrect
        let err = document.getElementById('error')

        //Check for blank fields (Very Lengthy)
        if (companyInfo.F_name === '' || companyInfo.L_Name === '' || companyInfo.Title === '' || companyInfo.CompanyEmail === '' || companyInfo.CompanyName === '' || companyInfo.CompanyNumber === '' || companyInfo.City_Town === '' || companyInfo.State === '') { 
            alert('No Blank Fields')
            return

        }else { //check company number
            //if Company Number Fails check
            if(!numChecker.test(companyInfo.CompanyNumber)) { 
                err.style.display = 'block'

            }else { //if the number passed
                err.style.display = 'none'
                alert('Form Submitted')
            }  
        }   
    }

    return (    
        <>
            <div className="container">

                {/* Title A */}
                <div className="row formTitle formTitleA">
                    <div className="col-sm-12">
                        <h1>Need A Hand For Your Next Delivery? </h1>
                    </div>
                </div>

                {/* Title B */}
                <div className="row formTitle formTitleB">
                    <div className="col-sm-12">
                        <h1>Just Fill Out the Form Below And We Will Contact You As Swiftly As Possible.</h1>
                    </div>
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="row formClr">

                        <div className="col-md-6">

                            <h4>Name</h4>
                            <div className="row">
                                
                                <div className="col-sm-5">
                                    <input type="text"
                                    placeholder='First Name'
                                    name='F_name'
                                    value={companyInfo.F_name}
                                    onChange={handleChange}/>
                                </div>

                                <div className="col-sm-5">
                                    <input type="text"
                                    placeholder='Last Name'
                                    name='L_name'
                                    value={companyInfo.L_name}
                                    onChange={handleChange}/>
                                </div>

                                <div className="col-sm-2">
                                    <select
                                        name='Title'
                                        value={companyInfo.Title}
                                        onChange={handleChange}>

                                        <option value='Mr.'>Mr. </option>
                                        <option value='Ms.'>Ms. </option>
                                        <option value='Mrs.'>Mrs.</option>
                                    </select>
                                </div>
                            </div>

                            <h4>Name Of Comapny</h4>
                            <div className="row">
                                <div className="col-sm-12">
                                    <input type="text"
                                    placeholder='Company Name'
                                    name='CompanyName'
                                    value={companyInfo.CompanyName}
                                    onChange={handleChange}/>
                                </div>
                            </div>

                            <h4>Location Of Comapny</h4>
                            <div className="row">
                                <div className="col-sm-6">
                                    <input type="text"
                                    placeholder='City/Town'
                                    name='City_town'
                                    value={companyInfo.City_town}
                                    onChange={handleChange}/>
                                </div>

                                <div className="col-sm-6">
                                    {/* State List (Source Below) */}
                                    <select
                                        name='State'
                                        value={companyInfo.State}
                                        onChange={handleChange}>
                                        <option>Select State</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>	
                                </div>
                            </div>

                        </div>
                        
                        <div className="col-md-6">
                            <h4>Company Email</h4>
                            <div className="row">
                                <div className="col-sm-12">
                                    <input type="text"
                                    placeholder='Email'
                                    name='CompanyEmail'
                                    value={companyInfo.CompanyEmail}
                                    onChange={handleChange}/>
                                </div>
                            </div>

                            <h4>Company Number</h4>
                            <div className="row">
                                <div className="col-sm-6">
                                    <input type="text"
                                        placeholder='Company Number'
                                        name='CompanyNumber'
                                        value={companyInfo.CompanyNUmber}
                                        onChange={handleChange}
                                    />
                                    <p className='error' id='error'>Number is incorrectly formatted</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <button>Submit</button>
                        </div>

                    </div>
                </form>
            
            </div>
        </>
    )
}

export default Pickup

//State List Source: https://www.freeformatter.com/usa-state-list-html-select.html 

//Send info to main company email 
                               
// <h2>Entered information:</h2> 
// <p>Contacter Name: {firstName} {lastName}</p>
// <p>Name of Contacter's Company: {companyName}</p>
// <p>Company's Email: {companyEmail}</p>
// <p>Company's Number: {companyNumber}</p>
// <p>Company's Address: {companyLocation} {companyState}</p>
