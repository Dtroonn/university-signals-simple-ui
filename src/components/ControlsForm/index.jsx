import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import PowerIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsIcon from "@mui/icons-material/Settings";
import VolumeUp from "@mui/icons-material/VolumeUp";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { amplifications, filters, modulations } from "./ControlsForm.constants";
import InputLabel from "@mui/material/InputLabel";

export const ControlsForm = () => {
    return (
        <Box sx={{ flex: "0 1 600px" }}>
            <Paper
                elevation={3}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: 2,
                }}>
                <div>
                    <IconButton size="large">
                        <PowerIcon fontSize="large" color="error" />
                    </IconButton>
                </div>
                <Grid container spacing={2} alignItems="flex-end">
                    <Grid item>
                        <IconButton sx={{ marginBottom: "2px" }}>
                            <SettingsIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs>
                        <Typography gutterBottom>Звук</Typography>
                        <Grid item container spacing={3} alignItems="center">
                            <Grid item>
                                <VolumeUp />
                            </Grid>
                            <Grid item xs>
                                <Slider valueLabelDisplay="auto" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <div>
                    <Typography gutterBottom>Частота</Typography>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item>
                            <SignalCellularAltIcon />
                        </Grid>
                        <Grid item xs>
                            <Slider />
                        </Grid>
                    </Grid>
                </div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography>Модуляции</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                margin: "0 -4px",
                                flexWrap: "wrap",
                            }}>
                            {modulations.map((modulation) => (
                                <div key={modulation} style={{ flex: "0 0 25%", padding: "0 4px" }}>
                                    <FormControlLabel
                                        value={modulation}
                                        control={<Radio />}
                                        label={modulation}
                                    />
                                </div>
                            ))}
                        </div>
                    </AccordionDetails>
                </Accordion>
                <FormControl fullWidth>
                    <InputLabel id="select-filter">Фильтр</InputLabel>
                    <Select
                        labelId="select-filter"
                        id="filter"
                        // value={age}
                        label="Фильтр"
                        // onChange={handleChange}
                    >
                        {filters.map((filter) => (
                            <MenuItem key={filter} value={filter}>
                                {filter}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <div>
                    <Typography gutterBottom>Усиление</Typography>
                    <Grid container justifyContent="center" spacing={1}>
                        {amplifications.map((amplification) => (
                            <Grid item>
                                <FormControlLabel
                                    value={amplification}
                                    control={<Radio />}
                                    label={`${amplification} дБ`}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>

                <Button fullWidth variant="contained" size="large">
                    Очистить
                </Button>
            </Paper>
        </Box>
    );
};
