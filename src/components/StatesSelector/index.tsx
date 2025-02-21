import React from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import api from "@/services/api";

//Componentização do select de estado para reaproveitamento

const StateSelector = ({ onSelect }: { onSelect: (uf: string) => void }) => {
  const [states, setStates] = React.useState<{ uf: string; state: string }[]>(
    []
  );

  React.useEffect(() => {
    api.get("/").then((response) => {
      setStates(response.data.data);
    });
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel>Selecione um Estado</InputLabel>
      <Select onChange={(e) => onSelect(String(e.target.value))}>
        {states.map((s) => (
          <MenuItem key={s.uf} value={s.uf}>
            {s.state}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StateSelector;
