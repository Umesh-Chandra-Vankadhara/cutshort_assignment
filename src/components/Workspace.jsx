import React from "react";
import { Button, OutlinedInput, Stack, Typography } from "@mui/material";
import { getFieldTitle, getInfo } from "./Welcome";
import { theme } from "../theme";

export const Workspace = (props) => {
  const { workspaceState, setActiveStep, setWorkspaceState } = props;
  const { workspaceName, workspaceUrl } = workspaceState;
  const handleOnChange = (event) => {
    const { value, name } = event.target;
    if (name === "workspaceName")
      setWorkspaceState({ ...workspaceState, workspaceName: value });
    if (name === "workspaceUrl")
      setWorkspaceState({ ...workspaceState, workspaceUrl: value });
  };
  return (
    <Stack spacing={2} alignItems="center">
      {getInfo(
        "Let's set up a home for all you work",
        " You can always create another workspace later."
      )}
      <Stack>
      {getFieldTitle('Workspace Name')}
        <OutlinedInput
          autoComplete="off"
          value={workspaceState?.workspaceName}
          name="workspaceName"
          onChange={handleOnChange}
          size="small"
          sx={{
            minWidth: "350px",
          }}
          placeholder="Enter Workspace Name "
        />
      </Stack>
      <Stack>
        <Stack direction="row">
        {getFieldTitle('Workspace Url')}
          <Typography component="span" sx={{ color: "#4E4E4E", opacity: 0.5 }} fontSize="14px">
            (optional)
          </Typography>
        </Stack>
        <Stack direction="row">
          <Typography sx={{ background: "#F8F9FC", opacity: 0.8, p: 1}}>
            www.eden.com/
          </Typography>
          <OutlinedInput
            autoComplete="off"
            value={workspaceState.workspaceUrl}
            name="workspaceUrl"
            onChange={handleOnChange}
            size="small"
            sx={{
              width: "190px",
            }}
            placeholder="Enter Url"
          />
        </Stack>
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
        disabled={workspaceName?.length === 0 || workspaceUrl?.length === 0}
      >
        Create Workspace
      </Button>
    </Stack>
  );
};
