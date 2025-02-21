import React from "react";

import { Card, CardContent, Divider, Typography } from "@mui/material";
import { IDataCovid } from "@/types";

interface IProps {
  data: IDataCovid;
}

//Card do item que retorna, mantendo o padrão

const CardItem: React.FC<IProps> = ({ data }) => {
  return (
    <Card sx={{ width: "100%", margin: "15px 0" }}>
      <CardContent>
        <Typography variant="h6">{data.state || data.country}</Typography>
        <Divider />
        <Typography>
          <b>Casos:</b> {data.cases ? data.cases : "Não informado"}
        </Typography>
        <Typography>
          <b>Mortes:</b> {data.deaths ? data.deaths : "Não informado"}
        </Typography>
        <Typography>
          <b>Suspeitos:</b> {data.suspects ? data.suspects : "Não informado"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
