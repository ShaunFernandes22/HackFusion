import { Input, InputRightElement, Button, InputGroup } from "@chakra-ui/react";
import React from "react";
export function PasswordBox({ label, placeholder, onChange, type = "text" }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <InputGroup size="md">
        <Input
          placeholder={placeholder}
          className="w-full px-1 py-1 border rounded border-slate-200"
          onChange={onChange}
          type={showPassword ? "text" : type}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleTogglePassword}>
            {showPassword ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
}
