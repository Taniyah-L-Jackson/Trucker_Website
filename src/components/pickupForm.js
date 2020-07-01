import React, {useState} from 'react'

function Pickup() {

    const [companyInfo, setCompanyInfo] = useState({
        F_name: '',
        L_name: '',
        Title: '',
        Email: '',
        CompanyName: '',
        CompanyNumber: '',
        City_town: '',
        State: '',
        ContactTime: '',
    })

    const handleChange = (e) => {
        const [ name, value ] = e.target //target the current box being used
        setCompanyInfo(prevState => {return {...prevState, [name] : value}}) //constantly update value

    }

    return (    

        <form>
            <div className="row">

                <div className="col-md-6">

                    <h4>Name</h4>
                    <div className="row">
                        
                        <div className="col-sm-5">
                            <input type="text"
                            placeholder='First Name'
                            name='F_Name'
                            value={companyInfo.F_name}
                            onChange={handleChange}/>
                        </div>
                        <br/>

                        <div className="col-sm-5">
                            <input type="text"
                            placeholder='Last Name'
                            name='L_Name'
                            value={companyInfo.L_name}
                            onChange={handleChange}/>
                        </div>
                        <br/>

                        <div className="col-sm-2">
                            <select
                                name='Title'
                                value={companyInfo.Title}
                                onChange={handleChange}>

                                <option value='Mr.'>Mr. </option>
                                <option value='Ms.'>Ms. </option>
                                <option value='Mrs.'>Mrs. </option>
                            </select>
                        </div>
                        <br/>
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

                </div>
                
                <div className="col-md-6">

                </div>
            </div>
        </form>
    
    )
}

export default Pickup

//Send info to main company email 
                               
{/* <h2>Entered information:</h2> */}
{/* <p>Contacter Name: {firstName} {lastName}</p> */}
{/* <p>Name of Contacter's Company: {companyName}</p> */}
{/* <p>Company's Email: {companyEmail}</p> */}
{/* <p>Company's Number: {companyNumber}</p> */}
{/* <p>Company's Address: {companyLocation} {companyState}</p> */}
{/* <p>Best time to Contact: {ContactTime}</p> */}
