import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./joinUs.css"


function JoinUs() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };

    const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbzRvNGqCoEq9rqO6Ehy_etrXr3Uf6v4jJ9HS4XS7l1J-P8UIcvOSqaHgnVng7tIfjKUhQ/exec"
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(scriptUrl, {
            method: 'POST',
            body: new FormData(document.getElementById("formsData"))
        })
            .then(response => {
                formRef.current.reset();
                alert("Thank you for taking the time to fill out the form to join the college club. We are excited to have you become part of the club and look forward to working with you.",
                    "We will get back to you soon. Please check your email for further details.",
                    {
                        buttons: {
                                label: "OK",
                                onClick: () => navigate('/')
                            
                        },
                    }
                )
                navigate('/');
            }
                )
            .catch(error => console.error('Error!', error.message))
    }

    return (
        <section className='white-bg'>
            <section className="fixed-bg sm-display-none" style={{
                backgroundImage: "url(https://ik.imagekit.io/invincible/college_PcjkZfseo)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                marginTop:"-60px"
            }}>
                <div className="overlay-bg"></div>
                <div className="container-fluid view-height-100vh relative md-height-600px sm-height-700px xs-height-450px">
                    <div className="simple-content-slider text-center">
                        <div className="simple-content-slider-text">
                            <div className="simple-content-text-inner">
                                <div className="row">
                                    <div className="col-md-8 centerize-col col-xs-12">
                                        <div className="text-center all-padding-40">
                                            <h1 className="font-700 font-80px line-height-100 white-color xs-font-30px xs-line-height-30">IEEE Student Branch of NSAKCET</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="xl-display white-bg" style={{
                marginTop: "-60px",
            }} >
                <div style={{
                    width: "100%",
                }}>
                    <div className="row">
                        <div style={{
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                        }}>
                            <img
                                className='xl-display'
                                src={"https://ik.imagekit.io/invincible/tr:w-1000,h-500/ieee_group_photo_ut6ryLhep"}
                                style={{
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    width: "100%",
                                }}
                                alt="SB"
                            />
                            <div style={{
                            }}>
                                <div className="col-sm-8 section-heading hii">
                                    <h5 className="mt-0 text-uppercase primary-h5 font-italic play-font pt-20 mb-0">IEEE Student Branch of NSAKCET</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>  
            <section className="white-bg" style={{
                marginTop: "-60px",
                marginBottom: "-140px",
            }}>
                <div className="container white-bg">
                    <div className="col-md-12 col-sm-8 section-heading" style={{
                        marginTop:"-50px",
                    }}>
                        <h5 className="font-italic italic-h5 pb-20" style={{
                            color: "#000000",
                            fontSize: "30px",
                        }}>Join Us</h5>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <form className="contact-form-style-01" id='formsData' ref={formRef} onSubmit={(e) => handleSubmit(e)} name="google-sheet">
                                <div className="messages"></div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="First name">First name</label>
                                            <input type="text" name="First name" className="md-input" id="name" placeholder="First Name *" required data-error="Your Name is Required"/>
                                                <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="First name">Last name</label>
                                            <input type="text" name="Last name" className="md-input" id="name" placeholder="Last name *" required data-error="Your Name is Required"/>
                                                <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="Date of Birth">Date of Birth</label>
                                            <input type="date" name="Date of Birth" className="md-input" id="subject-2" placeholder="Date of Birth "required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="Email Address">Email</label>
                                            <input type="email" name="Email Address" className="md-input" id="email" placeholder="Email*" required data-error="Please Enter Valid Email"/>
                                                <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="College/University Name">College/University Name</label>
                                            <select name="College/University Name" className="md-input" required>
                                                <option value="Nawab Shah Alam Khan College of Engineering and Technology" defaultValue="Nawab Shah Alam Khan College of Engineering and Technology">Nawab Shah Alam Khan College of Engineering and Technology</option>
                                            </select> 
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6 col-sm-6 form-group">
                                        <select name="Degree Being Pursued" className="md-input" required>
                                            <option disabled={true} value="" selected >Select Degree</option>
                                            <option value="Bachelor of Engineering(B.E)" >Bachelor of Engineering(B.E)</option>
                                            <option value="Diploma">Diploma</option>
                                        </select> 
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <select name="Branch" className="md-input" required >
                                            <option disabled={true} value="" selected >Select Course</option>
                                            <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                                            <option value="Computer Science and Engineering AI/ML">Computer Science and Engineering AI/ML</option>
                                            <option value="Computer Science and Engineering DS">Computer Science and Engineering DS</option>
                                            <option value="Computer Science and Engineering (IOT, CS and BCT)">Computer Science and Engineering (IOT, CS and BCT)</option>
                                            <option value="Information Technology">Information Technology</option>
                                            <option value="Electronics and Communications Engineering">Electronics and Communications Engineering</option>
                                            <option value="Civil Engineering">Civil Engineering</option>
                                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                                        </select> 
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className='form-group' >
                                            <select className="md-input" name="Year" required >
                                            <option disabled={true} value="" selected >Select your studying year</option>
                                            <option value="I">I</option>
                                            <option value="II">II</option>
                                            <option value="II">II</option>
                                            <option value="IV">IV</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="College Roll no.">College Roll Number</label>
                                            <input type="text" name="College Roll no." className="md-input" id="name" placeholder="College Roll number*" required data-error="Your College Roll no. is Required" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="Expected Graduation Year">Expected Graduation Year</label>
                                            <input type="number" name="Expected Graduation Year" className="md-input" id="name" placeholder="Expected Graduation Year *" required data-error="Your College Roll no. is Required" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="Mobile number">Mobile number</label>
                                            <input type="number" name="Mobile number" className="md-input" id="name" placeholder="Mobile number *" required data-error="Your Mobile number is Required" />
                                            <div className="help-block with-errors"></div>
                                    </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className='form-group' >
                                            <label className="sr-only" htmlFor="Which Society/Affinity group do you want to join?">Which Society/Affinity group do you want to join?</label>
                                            <select className="md-input" name="Which Society/Affinity group do you want to join?" required>
                                                <option disabled={true} value="" selected >Which Society/Affinity group do you want to join?</option>
                                                <option value="Computer Society">Computer Society</option>
                                                <option value="Robotics and Automation Society">Robotics and Automation Society</option>
                                                <option value="Women in Engineering Affinity Group (Recommended to Girls)">Women in Engineering Affinity Group (Recommended to Girls)</option>
                                                <option value="Circuits and System Society">Circuits and System Society</option>
                                                <option value="Signal Processing Society">Signal Processing Society</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className='form-group' >
                                            <label className="sr-only" htmlFor="Which Operating Team do you think is best for you to join?">Which Operating Team do you think is best for you to join?</label>
                                            <select className="md-input" name="Which Operating Team do you think is best for you to join?" required>
                                                <option disabled={true} value="" selected >Which Operating Team do you think is best for you to join?</option>
                                                <option value="Publicity Team">Publicity Team</option>
                                                <option value="Tech Team">Tech Team</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <label style={{
                                                color: "black",
                                                fontSize: "1.50rem",
                                                fontWeight: "20",
                                                fontFamily: "Poppins",
                                                paddingTop: "1.8rem",
                                                paddingBottom: "1.0rem",
                                                paddingLeft: "2.5rem",

                                            }} htmlFor="Why do you feel this Team fits you the best and how can you volunteer for it?">Why do you feel this Team fits you the best and how can you volunteer for it?</label>
                                            <textarea name="Why do you feel this Team fits you the best and how can you volunteer for it?" className="md-textarea" id="message" rows="7" placeholder="Answer" required data-error="Please, write a reason"></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="LinkedIn account link">LinkedIn account link</label>
                                            <input type="url" name="LinkedIn account link" className="md-input" id="name" placeholder="LinkedIn account link" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="Instagram account link">Instagram account link</label>
                                            <input type="url" name="Instagram account link" className="md-input" id="name" placeholder="Instagram account link"  />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className='form-group' >
                                            <label className="sr-only" htmlFor="Mode of Payment Transaction ">Mode of Payment Transaction</label>
                                            <select className="md-input" name="Mode of Payment Transaction " required>
                                                <option disabled={true} value="" selected >Mode of Payment Transaction</option>
                                                <option value="Cash">Cash</option>
                                                <option value="GooglePay">GooglePay</option>
                                                <option value="PhonePe">PhonePe</option>
                                                <option value="PayTM">PayTM</option>
                                            </select>
                                        </div>
                                    </div>
                                    <input type="hidden" name="Timestamp" value={new Date()} />
                                            <div className="col-md-12 col-sm-12">
                                                <div className="text-left mt-20">
                                            <button type="submit" className="submitBtn">Submit</button>
                                                </div>
                                            </div>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>  
            <p onClick={scrollToTop} id="return-to-top"><i className="icofont icofont-arrow-up pointer"> <ArrowUpwardIcon/> </i></p>
        </section>
  )
}

export default JoinUs