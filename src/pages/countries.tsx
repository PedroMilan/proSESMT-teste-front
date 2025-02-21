import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import { getCountry } from "@/requests";
import { IDataCovidCountry } from "@/types";
import ButtonReturnHome from "@/components/ButtonReturnHome";
import CardItem from "@/components/CardItem";
import { Template } from "@/components/Template";

//Busca por País, quando não há resposta, devolve um aviso

export default function CountriesPage() {
  const [country, setCountry] = React.useState("");
  const [data, setData] = React.useState<IDataCovidCountry>(
    {} as IDataCovidCountry
  );
  const [statusSearch, setStatusSearch] = React.useState<
    "INITIAL" | "ISSEARCHED"
  >("INITIAL");

  const fetchData = async () => {
    try {
      const { data: dataResponse, status } = await getCountry(country);

      if ([200, 201].includes(status)) {
        setStatusSearch("ISSEARCHED");
        setData(dataResponse.data);
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
          gap: "20px",
        }}
      >
        <Typography variant="h4">Status da COVID-19 por País</Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "40px",
            margin: "15px 0",
          }}
        >
          <TextField
            label="Nome do País"
            onChange={(e) => setCountry(e.target.value)}
          />
          <Button onClick={fetchData} variant="contained">
            Buscar
          </Button>
        </Box>
        {data && data.country && <CardItem data={data} />}
        {statusSearch !== "INITIAL" && data && !data.country && (
          <Alert severity="info">País não encontrado</Alert>
        )}
        <ButtonReturnHome />
      </Container>
    </Template>
  );
}
