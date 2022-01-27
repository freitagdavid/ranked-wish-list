import { Box, Card, Fab, Grid, IconButton } from "@mui/material";
import styled from "styled-components";
import { ExpandMore, ExpandLess, Delete } from "@mui/icons-material";

const Item = ({ label, price, category, index, className, votes, vote }) => (
    <Card className={className} sx={{ height: 50, width: "100%" }}>
        <Grid container spacing={2}>
            <Grid
                item
                xs={1}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <IconButton onClick={() => vote(index, 1)}>
                    <ExpandLess />
                </IconButton>
            </Grid>
            <Grid
                item
                xs={1}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <p>{votes}</p>
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
                <IconButton onClick={() => vote(index, -1)}>
                    <ExpandMore />
                </IconButton>
            </Grid>
            <Grid item xs={5}>
                <p>{label}</p>
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
                <p>{price}</p>
            </Grid>
            <Grid item xs={2}>
                <p>{category}</p>
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
                <IconButton color="error">
                    <Delete />
                </IconButton>
            </Grid>
        </Grid>
    </Card>
);

const StyledItem = styled(Item)`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 15px;
`;

export default StyledItem;
