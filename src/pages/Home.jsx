import Box from "@mui/material/Box";
import React from "react";
import { ControlsForm } from "../components/ControlsForm";

export const HomePage = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}>
            <ControlsForm />
        </Box>
    );
};
