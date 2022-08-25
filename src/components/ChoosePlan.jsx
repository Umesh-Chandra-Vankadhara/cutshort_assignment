import React from "react";
import { Button, Paper, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import { theme } from "../theme";
import { getInfo } from "./Welcome";

export const ChoosePlan = (props) => {
  const { setSelectedPlan, selectedPlan, setActiveStep } = props;
  const handlePlan = (plan) => {
    if (plan === "self")
      setSelectedPlan({
        ...selectedPlan,
        self: !selectedPlan.self,
        team: selectedPlan.self,
      });
    if (plan === "team")
      setSelectedPlan({
        ...selectedPlan,
        team: !selectedPlan.team,
        self: selectedPlan.team,
      });
  };
  return (
    <Stack spacing={2} alignItems="center">
      {getInfo(
        "How are you planning to use Eden",
        "we'll streamline your setup experience accordingly."
      )}
      <Stack direction="row" spacing={3}>
        <Paper
          sx={{
            p: 2,
            border: selectedPlan.self
              ? `1px solid ${theme.palette.primary.main}`
              : "",
          }}
          onClick={() => handlePlan("self")}
        >
          <Stack spacing={2}>
            <PersonIcon
              sx={{
                color: selectedPlan.self ? theme.palette.primary.main : "",
              }}
            />
            <Typography fontSize="15px" fontWeight={600}>
              For myself
            </Typography>
            <Typography sx={{ width: "150px" }} fontSize="15px">
              Write better.Think more clearly.Stay organized
            </Typography>
          </Stack>
        </Paper>
        <Paper
          sx={{
            p: 2,
            border: selectedPlan.team
              ? `1px solid ${theme.palette.primary.main}`
              : "",
          }}
          onClick={() => handlePlan("team")}
        >
          <Stack spacing={2}>
            <GroupsIcon
              sx={{
                color: selectedPlan.team ? theme.palette.primary.main : "",
              }}
            />
            <Typography fontSize="15px" fontWeight={600}>
              With my team
            </Typography>
            <Typography sx={{ width: "150px" }} fontSize="15px">
              Wikis,docs,tasks & projects better,all in one place
            </Typography>
          </Stack>
        </Paper>
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
        disabled={(selectedPlan.self || selectedPlan.team) === false}
      >
        Create Workspace
      </Button>
    </Stack>
  );
};
