import React, {useState} from 'react'

const ContactUs = () => {

    const [contactInfo, setContactInfo] = useState({
        name: "",
        phone: "",
        email: "",
        customerMessage: ""
    });

    const [isSubmitted, setIsSubmitted] = useState({
        status: false,
        message: '',
    })

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setContactInfo({ ...contactInfo, [name]: value });
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setIsSubmitted({status: false, message: ""});
            if(contactInfo.name === "" || contactInfo.phone === "" || contactInfo.email === "" || contactInfo.message === "") {
                setIsSubmitted({status: true, message: "Please enter all the information"});
                throw new Error("Please enter all the information");
            }
            const res = await fetch("/help/contact-us", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contactInfo)
            });
    
            const result = await res.json();
    
    
            if(result.status) {
                setIsSubmitted({status: true, message: result.email});
                alert(result.message)
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <section className='bg-section'>
            <div className="container p-2">
                <div className="row d-flex justify-content-center border">
                    <div className="col-12 p-5 border">
                        <div className="d-flex justify-content-center">
                            {isSubmitted.status && <p className="small">{isSubmitted.message}</p>}
                        </div>
                        <form method='post'>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" onChange={handleInputs} />
                                <p className="text-danger m-2 small"></p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="number" className="form-label">Phone:</label>
                                <input type="number" className="form-control" id="name" placeholder="Enter Number" name="phone"  onChange={handleInputs} />
                                <p className="text-danger m-2 small"></p>
                            </div>
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"  onChange={handleInputs} />
                                <p className="text-danger m-2 small"></p>
                            </div>
                            <div className='mb-3 mt-3'>
                                <label htmlFor="comment">Message:</label>
                                <textarea className="form-control" rows="5" id="message" name="message"  onChange={handleInputs} ></textarea>
                            </div>
                            <div className='d-flex flex-row-reverse'>
                                <button className='btn btn-primary'  onClick={handleSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;