import { Card, Fab, IconButton } from "@mui/material";
import styled from "styled-components";
import { ExpandMore, ExpandLess, Delete } from "@mui/icons-material";

const Item = ({ label, price, category, index, className, votes, vote }) => {
    return (
        <Card className={className}>
            <IconButton onClick={() => vote(index, 1)}>
                <ExpandLess />
            </IconButton>
            <p>{votes}</p>
            <IconButton onClick={() => vote(index, -1)}>
                <ExpandMore />
            </IconButton>
            <p>{label}</p>
            <p>{price}</p>
            <p>{category}</p>
            <IconButton color="error">
                <Delete />
            </IconButton>
        </Card>
    );
};

const StyledItem = styled(Item)`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 15px;
`;

export default StyledItem;
