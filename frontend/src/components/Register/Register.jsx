import { useState } from "react";
import {
  Container,
  Logo,
  Form,
  Input,
  Button,
  SignUpLink,
  ErrorMessage,
} from "./Register.styles";
import instagram from "../../assets/images/instagram-logo.png";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e, key) => {
    let obj = { ...formData, [key]: e.target.value };
    setFormData(obj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
    const unFilledFields = Object.keys(formData).filter(
      (key) => !formData[key]
    );
    console.log("unFilledFields", unFilledFields);
    if (unFilledFields.length > 0) {
      setError(`${unFilledFields.join(" ")} are required!`);
      return;
    }
    console.log("ready to register");
    navigate("/home");
  };
  return (
    <Container>
      <Logo src={instagram} alt="Instagram" />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) => handleChange(e, "fullName")}
        />
        <Input
          type="text"
          placeholder="Mobile Number or Email"
          value={formData.email}
          onChange={(e) => handleChange(e, "email")}
        />
        <Input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => handleChange(e, "username")}
        />
        <Input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => handleChange(e, "password")}
        />
        <Button type="submit">Sign Up</Button>
      </Form>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <SignUpLink>
        Already have an account? <Link to="/login">Log in</Link>
      </SignUpLink>
    </Container>
  );
};

export default Register;
