import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField label="Small" variant="outlined" size="small" />
        <TextField label="Color" variant="filled" color="secondary" />
        <TextField
          label="Medium Color"
          variant="standard"
          size="medium"
          color="error"
        />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Amout"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">KG</InputAdornment>,
          }}
        />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Required"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Do not show your Password"}
        />
      </Stack>
    </Stack>
  );
};
