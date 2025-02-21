import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { useRouter } from "next/router";

//Botão para as subtelas, que retornam para a inicial.

const ButtonReturnHome: React.FC<ButtonProps> = (props) => {
  const router = useRouter();

  return (
    <Button {...props} onClick={() => router.push("/")} variant="contained">
      {props.children || "Voltar"}
    </Button>
  );
};

export default ButtonReturnHome;
