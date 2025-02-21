import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import CardItem from "@/components/CardItem";
import { getDate } from "@/requests";
import { IDataCovid } from "@/types";
import ButtonReturnHome from "@/components/ButtonReturnHome";
import { Template } from "@/components/Template";

//Busca por data, quando não há resposta, devolve um aviso

export default function DatePage() {
  const [date, setDate] = React.useState("");
  const [data, setData] = React.useState<IDataCovid[]>([]);
  const [statusSearch, setStatusSearch] = React.useState<
    "INITIAL" | "ISSEARCHED"
  >("INITIAL");

  const fetchData = async () => {
    const formattedDate = date.replace(/-/g, "");

    try {
      const { data: dataResponse, status } = await getDate(formattedDate);
      setStatusSearch("ISSEARCHED");
      if ([200, 201].includes(status)) {
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
        <Typography variant="h4">Status da COVID-19 por Data</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "40px",
            margin: "15px 0",
          }}
        >
          <TextField type="date" onChange={(e) => setDate(e.target.value)} />
          <Button onClick={fetchData} variant="contained">
            Buscar
          </Button>
        </Box>
        {data.length > 0 &&
          data.map((item: IDataCovid, index: number) => {
            return <CardItem data={item} key={`IDX${index}`} />;
          })}

        {data.length === 0 && statusSearch !== "INITIAL" && (
          <Alert severity="info">Data não encontrada</Alert>
        )}

        <ButtonReturnHome />
      </Container>
    </Template>
  );
}
