import React from "react"
import '../App.css';
import Phone from '../Phone.png'

function Welcome() {
  return (
    <div class='row'>
    <div class="col-lg-8">
      <h1>Welcome to What's Fair</h1>
      <em><p>A unique tool to leave honest fair candid reviews on your latest trip. So that others may know about it</p></em>
      <a href="http://localhost:3000/signup">
      <button className="WelcomeBtn" type="button">Sign Up</button>
      </a>
      <em><p>Already a member<a href="http://localhost:3000/SignIn"> Click Here</a></p></em>
      </div>
      <div class="col-lg-4" >
      <img className="Phone" src={Phone} height={500} alt="iphone-mockup"/>
    </div>
    </div>
  )
}

export default Welcome