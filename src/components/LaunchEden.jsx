import React from "react";
import { Stack } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, Typography } from "@mui/material";
import { theme } from "../theme";

export const LaunchEden = (props) => {
  const { displayName } = props;

  return (
    <Stack spacing={2} alignItems="center">
      <CheckCircleIcon
        sx={{ color: `${theme.palette.primary.main}`, fontSize: "50px" }}
      />
      <Typography variant="h5" fontWeight={600}>
        Congratulations, {displayName}
      </Typography>
      <Button
        variant="contained"
        sx={{
          background: `${theme.palette.primary.main}`,
          width: "350px",
          textTransform: "none",
        }}
        disableElevation
      >
        Launch Eden
      </Button>
    </Stack>
  );
};
