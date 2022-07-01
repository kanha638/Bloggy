import React from "react";
import "./ContactPage.css";

export const ContactPage = () => {
  return (
    <>
      <div className="contactpage">
        <div className="contactus">
          <div className="contactbar1">
            We Are Here To Help You For Any Kind Of Technical Issue or
            Information Regarding Our Website
          </div>
          <div className="contactbar2">
            <div>
              <h1 className="cb2">ContactUs</h1>
            </div>
            <div>Contact The Help Team</div>
          </div>
          <div className="contactinput">
            <form className="adversary">
              <div className="collectissue">
                <label>What type of help ?</label>
                <input
                  className="inputissue"
                  type="text"
                  placeholder="issue topic"
                ></input>
              </div>
              <div className="collectissue">
                <label>Full Name</label>
                <input
                  className="inputissue"
                  type="text"
                  placeholder="e.g.Aadi Adwaani"
                ></input>
              </div>
              <div className="collectissue">
                <label>Email address if any</label>
                <input
                  className="inputissue"
                  type="text"
                  placeholder="e.g. jay@gmail.com"
                ></input>
              </div>
              <div className="collectissue">
                <label>Describe Here</label>
                <input
                  className="inputissue detail"
                  type="text"
                  placeholder="Write your issue"
                ></input>
              </div>
              <div className="contacbuttom">
                <button className="sendissue">Send</button>
              </div>
            </form>
          </div>
          <div className="contactbar3">
            <div className="devloper1">
              <ui>Contact Details</ui>
              <ui>Name: Kanha Tiwari</ui>
              <ui>Email Id: 20bcs109@iiitdmj.ac.in</ui>
              <ui>Phone No.: 8839257898</ui>
              <ui>Address:IIIT Jabalpur, Madhya Pradesh, india</ui>
            </div>

            <div className="devloper2">
              <ui>Contact Details</ui>
              <ui>Name: Jay Kumar Pandit</ui>
              <ui>Email Id: 20bcs106@iiitdmj.ac.in</ui>
              <ui>Phone No.: 8837045398</ui>
              <ui>Address:IIIT Jabalpur, Madhya Pradesh, india</ui>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
