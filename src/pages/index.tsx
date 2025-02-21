import { Template } from "@/components/Template";
import { Container, Box, Button, Typography, Paper } from "@mui/material";
import { useRouter } from "next/router";

//Home que direciona para as telas

export default function Home() {
  const router = useRouter();

  return (
    <Template>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        maxWidth="xl"
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            textAlign: "center",
            maxWidth: 400,
            width: "100%",
          }}
        >
          <Typography variant="h4" gutterBottom>
            COVID-19 Dashboard
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <Button variant="contained" onClick={() => router.push("/states")}>
              Consultar por Estado
            </Button>
            <Button variant="contained" onClick={() => router.push("/date")}>
              Consultar por Data
            </Button>
            <Button
              variant="contained"
              onClick={() => router.push("/countries")}
            >
              Consultar por País
            </Button>
            <Button variant="contained" onClick={() => router.push("/form")}>
              Preencher Formulário
            </Button>
          </Box>
        </Paper>
      </Container>
    </Template>
  );
}
