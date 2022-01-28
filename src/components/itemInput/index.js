import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";

const ItemInput = ({ addItem }) => {
    const [label, setLabel] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const [state, setState] = useState({
        label: "",
        price: "",
        category: "",
    });

    const handleChange = (e) => {
        setState((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
        console.log(state);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(state.label, state.price, state.category);
        setState({ label: "", price: "", category: "" });
    };

    return (
        <Card
            sx={{
                height: 75,
                width: "100%",
                display: "flex",
                alignContent: "center",
            }}
        >
            <FormControl
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Grid container spacing={2}>
                    <Grid
                        item
                        xs={3}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TextField
                            variant="outlined"
                            label="Label"
                            name="label"
                            size="small"
                            value={state.label}
                            onChange={(e) => handleChange(e)}
                        ></TextField>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TextField
                            variant="outlined"
                            label="Price"
                            size="small"
                            name="price"
                            value={state.price}
                            onChange={(e) => handleChange(e)}
                            startAdornment={
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            }
                        ></TextField>
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TextField
                            variant="outlined"
                            label="Category"
                            size="small"
                            name="category"
                            value={state.category}
                            onChange={(e) => handleChange(e)}
                            startAdornment={
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            }
                        ></TextField>
                    </Grid>
                    <Grid
                        item
                        xs={1}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={(e) => handleSubmit(e)}
                            type="submit"
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </FormControl>
        </Card>
    );
};

export default ItemInput;
