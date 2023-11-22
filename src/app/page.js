"use client";
import { useState } from "react";
import { Label, TextInput, Button } from "keep-react";
import { Envelope } from "phosphor-react";
import { EyeSlash, Lock } from "phosphor-react";
import UserData from "./data"
import App from "./App"



export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let username = UserData.username
  let password = UserData.password
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  // const [inputUsername , setInputUserName] = useState("")
  const handelUserInputChange = event => {
    setInputUsername(event.target.value)

  }
  const handelPassInputChange = event => {
    setInputPassword(event.target.value)

  }
  // setInputUserName()
  const handelLogin = () => {
    if (inputUsername == username && inputPassword == password) {
      setIsLoggedIn(true);
      
    }
    else {
      console.log("Incoree")
    }
    
  }


  return (
    <div id="appBody">
      {!isLoggedIn ? (
      <div className="formHolder">
      <img src="./Logo XL Dark.png" width="120px" alt="" srcset="" />
      <br />
      <h1>Welcome Back, Devyani</h1>
      <br />
      <Label value="Username" />
      <TextInput
        id="#id-9"
        placeholder="example@synergy.com"
        color="gray"
        sizing="md"
        addon={<Envelope size={20} color="#5E718D" />}
        addonPosition="left"
        handleOnChange={handelUserInputChange}
      />
      <br />
      <Label value="Password" />
      <TextInput
        id="#id-10"
        placeholder="Password"
        color="gray"
        sizing="md"
        type="password"
        addon={<Lock size={20} color="#5E718D" />}
        addonPosition="left"
        icon={<EyeSlash size={20} color="#5E718D" />}
        iconPosition="right"
        handleOnChange={handelPassInputChange}

      />
      <br />
      <div className="submit-btn-holder">
        <Button onClick={handelLogin} size="md" type="primary">Log In</Button>

      </div>

    </div>
    ) : (
      <App />
    )}
    </div>
    
  )
}
