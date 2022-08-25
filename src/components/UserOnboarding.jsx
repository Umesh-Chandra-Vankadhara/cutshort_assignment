import React, { useState } from "react";
import { Paper, Typography } from "@mui/material";
import { Stack, Button } from "@mui/material";
import Stepper from "react-stepper-horizontal/lib/Stepper";
import { Welcome } from "./Welcome";
import { Workspace } from "./Workspace";
import { LaunchEden } from "./LaunchEden";
import { ChoosePlan } from "./ChoosePlan";
import { theme } from "../theme";

export const UserOnboarding = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [userState, setUserState] = useState({
    fullName: "",
    displayName: "",
  });
  const [workspaceState, setWorkspaceState] = useState({
    workspaceName: "",
    workspaceUrl: "",
  });
  const [selectedPlan, setSelectedPlan] = useState({
    self: false,
    team: false,
  });

  const headerAndFooter = (
    <Stack>
      <Paper sx={{ height: "4rem" }} />
    </Stack>
  );

  const userProps = {
    userState,
    setUserState,
    setActiveStep,
  };
  const workspaceProps = {
    workspaceState,
    setWorkspaceState,
    setActiveStep,
  };
  const planProps = {
    selectedPlan,
    setSelectedPlan,
    setActiveStep,
  };

  return (
    <Stack sx={{ height: "100vh" }}>
      {headerAndFooter}
      <Stack justifyContent="center" flexGrow={1} sx={{ p: 8 }}>
        <Paper sx={{ width: "-webkit-fill-available" }}>
          <Button
            variant="outlined"
            onClick={() => setActiveStep((prev) => prev >= 0 && prev - 1)}
            sx={{ width: "fit-content", float: "right", m: 2 }}
            disabled={activeStep < 1}
          >
            Back
          </Button>
          <Stack spacing={3} sx={{ p: 4 }} alignItems="center">
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              alignItems="center"
            >
              <img
                src="/assets/eden.png"
                alt="logo"
                style={{ marginBottom: "4px" }}
              />
              <Typography variant="h4">Eden</Typography>
            </Stack>
            <Stepper
              steps={[1, 2, 3, 4]}
              activeStep={activeStep}
              activeColor={theme.palette.primary.main}
              completeColor={theme.palette.primary.main}
            />
            {activeStep === 0 && <Welcome {...userProps} />}
            {activeStep === 1 && <Workspace {...workspaceProps} />}
            {activeStep === 2 && <ChoosePlan {...planProps} />}
            {activeStep === 3 && (
              <LaunchEden displayName={userState.displayName} />
            )}
          </Stack>
        </Paper>
      </Stack>
      {headerAndFooter}
    </Stack>
  );
};
