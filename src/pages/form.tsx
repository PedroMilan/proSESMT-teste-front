import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import ButtonReturnHome from "@/components/ButtonReturnHome";
import { Template } from "@/components/Template";

// Tipagem dos dados do formulário
interface CovidFormData {
  estado: string;
  casos: number;
  confirmados: number;
  mortos: number;
  recuperados: number;
  data: string;
}

// Schema de validação Yup
const schema = yup.object().shape({
  estado: yup.string().required("O estado é obrigatório"),
  casos: yup
    .number()
    .typeError("Deve ser um número")
    .required("Campo obrigatório"),
  confirmados: yup
    .number()
    .typeError("Deve ser um número")
    .required("Campo obrigatório"),
  mortos: yup
    .number()
    .typeError("Deve ser um número")
    .required("Campo obrigatório"),
  recuperados: yup
    .number()
    .typeError("Deve ser um número")
    .required("Campo obrigatório"),
  data: yup.string().required("A data é obrigatória"),
});

//Formulário feito em React Hook Form e validado em Yup, para coletar dados de usuários.

export default function FormularioCovid() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CovidFormData>({
    resolver: yupResolver(schema),
  });

  const [formData, setFormData] = useState<CovidFormData | null>(null);

  const onSubmit = (data: CovidFormData) => {
    setFormData(data);
    console.log("JSON gerado:", JSON.stringify(data, null, 2));
  };

  return (
    <Template>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
          <Typography variant="h5" gutterBottom>
            Formulário de Cadastro COVID-19
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <Controller
                  name="estado"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Estado"
                      fullWidth
                      error={!!errors.estado}
                      helperText={errors.estado?.message}
                    />
                  )}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  name="casos"
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Casos"
                      fullWidth
                      type="number"
                      error={!!errors.casos}
                      helperText={errors.casos?.message}
                    />
                  )}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  name="confirmados"
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Confirmados"
                      fullWidth
                      type="number"
                      error={!!errors.confirmados}
                      helperText={errors.confirmados?.message}
                    />
                  )}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  name="mortos"
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Mortos"
                      fullWidth
                      type="number"
                      error={!!errors.mortos}
                      helperText={errors.mortos?.message}
                    />
                  )}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Controller
                  name="recuperados"
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Recuperados"
                      fullWidth
                      type="number"
                      error={!!errors.recuperados}
                      helperText={errors.recuperados?.message}
                    />
                  )}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 12 }}>
                <Controller
                  name="data"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Data"
                      fullWidth
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      error={!!errors.data}
                      helperText={errors.data?.message}
                    />
                  )}
                />
              </Grid>

              <Grid
                size={{ xs: 12 }}
                display={"flex"}
                flexDirection={"row"}
                gap={2}
              >
                <ButtonReturnHome sx={{ width: "50%" }} />
                <Button type="submit" variant="contained" sx={{ width: "50%" }}>
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>

          {formData && (
            <Paper elevation={2} sx={{ padding: 2, marginTop: 2 }}>
              <Typography variant="h6">Dados do Formulário:</Typography>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </Paper>
          )}
        </Paper>
      </Container>
    </Template>
  );
}
