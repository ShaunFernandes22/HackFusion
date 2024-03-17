import { BottomWarning } from "../../components/BottomWarning";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { InputBox } from "../../components/InputBox";
import { SubHeading } from "../../components/SubHeading";
import { SelectBox } from "../../components/SelectBox";
import { PasswordBox } from "../../components/PasswordBox";
import { useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../main";
import { useContext } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const { setToken } = useContext(AuthContext);
  const { setUser } = useContext(AuthContext);
  const toast = useToast();
  const navigate = useNavigate();
  const handleSignup = async () => {
    const loadingToast = toast({
      title: "Loading",
      description: "Signing in...",
      status: "info",
      duration: 2000,
      isClosable: true,
    });

    setTimeout(async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/user/signup",
          {
            name: name,
            email: email,
            password: password,
            role: role,
          }
        );

        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        setUser(response.data.user);
        toast.close(loadingToast);
        toast({
          title: "Signed in",
          description: "You have successfully signed up!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        navigate("/");
      } catch (error) {
        toast.close(loadingToast);
        toast({
          title: "Error",
          description: "Please enter valid inputs (check email)",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }, 2000);
  };

  return (
    <div className="bg-black h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            placeholder="John Doe"
            label={"Your Name"}
            onChange={(e) => setName(e.target.value)}
          />

          <InputBox
            placeholder="johndoe@gmail.com"
            label={"Email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordBox
            placeholder="123456"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <SelectBox
            placeholder="Select role"
            label="Role"
            options={[
              { value: "student", label: "Student" },
              { value: "teacher", label: "Teacher" },
              { value: "admin", label: "Admin" },
            ]}
            onChange={(e) => setRole(e.target.value)}
          />

          <div className="pt-4">
            <Button label={"Sign up"} onClick={handleSignup} />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
