import React from "react";
import "./Contact.css";
import {IoLocationSharp,IoCallSharp,IoMailSharp} from 'react-icons/io5'

const Contact = () => {
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2541114699457!2d72.38272231429379!3d23.595217900605142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c43d54011fe8f%3A0xb3daa09cc22c96a6!2sWELABLE%20PHARMA!5e0!3m2!1sen!2sin!4v1653046537061!5m2!1sen!2sin" width="100%" height="220", style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  return (
    <>
      <div className="contact-main-cont">
        <div className="product-first-subcont">
            <h1>CONTACT US</h1>
        </div>
        <div className="product-sec-subcont">
<div className="contact-row row" style={{margin:'0'}}>
    <div className="contact-col-first col-lg-6 col-md-12 col-sm-12 col-xs-12">
<div className="contact-form">
    <input type="text" placeholder="Company Name" /><br/>
    <input type="text" placeholder="Person Name" /><br/>
    <input type="text" placeholder="Address"  className="contact-address"/><br/>
    <input type="text" placeholder="City" /><br/>
    <input type="text" placeholder="Mobile No." /><br/>
    <input type="text" placeholder="Email" /><br/>
    <input type="text" placeholder="Message" /><br/>
    <button type="button" class="btn btn-primary">SEND</button>

</div>
    </div>
    <div className="contact-col-second col-lg-6 col-md-12 col-sm-12 col-xs-12">
<div className="company-address">
    <h3>WELABLE PHARMA</h3>
    <p><IoLocationSharp className="contact-icon"/>&nbsp;Khodiyar Building, Opp. Surya Complex</p>
    <p>&nbsp;&nbsp;S.T. WorkshopRoad,</p>
    <p>&nbsp;&nbsp;MEHSANA-384002.(Gujarat)</p>
    <p><IoCallSharp className="contact-icon"/>&nbsp;+919879112732, 02762 - 230153,</p>
    <p>&nbsp;&nbsp;Fax: 02762 - 233920</p>
    <p><IoMailSharp className="contact-icon"/>&nbsp; info@welable.com</p>
</div>
<div className="company-location">
<div className="App" dangerouslySetInnerHTML={{__html: iframe}}></div>   
</div>
    </div>

</div>
        </div>
      </div>
    </>
  );
};

export default Contact;
