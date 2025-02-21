import React from "react";
import { Alert, Container, Typography } from "@mui/material";
import StateSelector from "@/components/StatesSelector";

import ButtonReturnHome from "@/components/ButtonReturnHome";
import CardItem from "@/components/CardItem";
import { IDataCovid } from "@/types";
import { getState } from "@/requests";
import { Template } from "@/components/Template";

//Busca por estado, quando não há resposta, devolve um aviso

export default function StatesPage() {
  const [data, setData] = React.useState<IDataCovid>({} as IDataCovid);
  const [statusSearch, setStatusSearch] = React.useState<
    "INITIAL" | "ISSEARCHED"
  >("INITIAL");

  const handleSelect = async (uf: string) => {
    try {
      const { data: dataResponse, status } = await getState(uf);

      if ([200, 201].includes(status)) {
        setStatusSearch("ISSEARCHED");

        setData(dataResponse);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Template>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          gap: "30px",
        }}
      >
        <Typography variant="h4">Status da COVID-19 por Estado</Typography>
        <StateSelector onSelect={handleSelect} />

        {data && data.state && <CardItem data={data} />}
        {statusSearch !== "INITIAL" && data && !data.state && (
          <Alert severity="info">Dados não encontrado</Alert>
        )}

        <ButtonReturnHome />
      </Container>
    </Template>
  );
}
