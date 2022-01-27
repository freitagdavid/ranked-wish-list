import styled from "styled-components";
import { useState } from "react";
import Item from "../Item";
import { Paper } from "@mui/material";

const StyledItemList = styled.div`
    width: 50%;
    flex: 1;
`;

const ItemList = () => {
    const [items, setItems] = useState([
        { label: "Item 1", price: 100, category: "entertainment", votes: 0 },
        { label: "Item 2", price: 100, category: "entertainment", votes: 0 },
        { label: "Item 3", price: 100, category: "entertainment", votes: 0 },
    ]);

    const vote = (index, vote) => {
        setItems((prevItems) => {
            if (prevItems[index].votes <= 0) {
                return prevItems;
            }
            const newItems = [...prevItems];
            newItems[index].votes += vote;
            newItems.sort((a, b) => b.votes - a.votes);
            return newItems;
        });
    };

    return (
        <StyledItemList>
            <Paper style={{ height: "100%" }}>
                {items.map((item, index) => (
                    <Item key={index} index={index} {...item} vote={vote}>
                        {JSON.stringify(item)}
                    </Item>
                ))}
            </Paper>
        </StyledItemList>
    );
};

export default ItemList;
