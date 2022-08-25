import React from "react";
import { Stack } from "@mui/system";
import { Button, OutlinedInput, Typography } from "@mui/material";
import { theme } from "../theme";

export const getInfo = (mainHeader, subHeader) => {
  return (
    <>
      <Typography variant="h5" fontWeight={600}>
        {mainHeader}
      </Typography>
      <Typography
        fontSize="15px"
        sx={{ color: "#4E4E4E", opacity: 0.5 }}
        fontWeight={600}
      >
        {subHeader}
      </Typography>
    </>
  );
};

export const getFieldTitle = (val) => {
  return (
    <Typography fontWeight={500} component="span" fontSize="14px">
      {val}
    </Typography>
  );
};
export const Welcome = (props) => {
  const { userState, setUserState, setActiveStep } = props;

  const handleOnChange = (event) => {
    const { value, name } = event.target;
    if (name === "fullName") setUserState({ ...userState, fullName: value });
    if (name === "displayName")
      setUserState({ ...userState, displayName: value });
  };

  return (
    <Stack spacing={2} alignItems="center">
      {getInfo(
        "Welcome! First things first...",
        "You can always change them later."
      )}
      <Stack>
        {getFieldTitle('Full Name')}
        <OutlinedInput
          autoComplete="off"
          value={userState?.fullName}
          name="fullName"
          onChange={handleOnChange}
          size="small"
          sx={{
            minWidth: "350px",
          }}
          placeholder="Enter Full Name "
        />
      </Stack>
      <Stack>
      {getFieldTitle('Display Name')}
        <OutlinedInput
          autoComplete="off"
          value={userState?.displayName}
          name="displayName"
          onChange={handleOnChange}
          size="small"
          sx={{
            minWidth: "350px",
          }}
          placeholder="Enter Display Name"
        />
      </Stack>
      <Button
        variant="contained"
        sx={{
          minWidth: "350px",
          textTransform: "none",
          background: `${theme.palette.primary.main}`,
        }}
        disableElevation
        onClick={() => setActiveStep((prev) => prev + 1)}
        disabled={
          userState?.fullName?.length === 0 ||
          userState?.displayName?.length === 0
        }
      >
        Create Workspace
      </Button>
    </Stack>
  );
};
