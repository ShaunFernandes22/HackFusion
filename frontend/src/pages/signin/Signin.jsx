import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { InputBox } from "../../components/InputBox";
import { SubHeading } from "../../components/SubHeading";
import { PasswordBox } from "../../components/PasswordBox";
import { BottomWarning } from "../../components/BottomWarning";
import axios from "axios";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  console.log(email);
  console.log(password);
  const handleSignin = async () => {
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
          "http://localhost:3000/api/v1/user/signin",
          {
            email: email,
            password: password,
          }
        );

        localStorage.setItem("token", response.data.token);
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
          description: "Please enter valid inputs (check email/password)",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }, 2000);
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            placeholder="johndoe@gmail.com"
            label={"Email"}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordBox
            placeholder="123456"
            label={"Password"}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="pt-4">
            <Button label={"Sign in"} onClick={handleSignin} />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
