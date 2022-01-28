import { useState } from "react";
import Item from "../Item";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import ItemInput from "../itemInput";
import { v4 as uuidv4 } from "uuid";

const ItemList = () => {
    const [items, setItems] = useState([
        {
            id: 0,
            label: "Item 1",
            price: 100,
            category: "entertainment",
            votes: 0,
        },
        {
            id: 1,
            label: "Item 2",
            price: 100,
            category: "entertainment",
            votes: 0,
        },
        {
            id: 2,
            label: "Item 3",
            price: 100,
            category: "entertainment",
            votes: 0,
        },
    ]);

    const vote = (index, vote) => {
        setItems((prevItems) => {
            console.log("test");
            if (prevItems[index].votes <= 0 && vote === -1) {
                return prevItems;
            }
            const newItems = [...prevItems];
            newItems[index].votes += vote;
            newItems.sort((a, b) => b.votes - a.votes);
            return newItems;
        });
    };

    const addItem = (label, price, category) => {
        setItems((prevItems) => {
            return [
                ...prevItems,
                {
                    id: uuidv4(),
                    label,
                    price,
                    category,
                    votes: 0,
                },
            ];
        });
    };

    const spring = {
        type: "springt",
        damping: 20,
        stiffness: 300,
    };

    return (
        <Box
            sx={{
                // width: "100%",
                height: "100vh",
                paddingY: 2,
            }}
        >
            <Paper
                sx={{
                    height: "100%",
                    width: "100%",
                    paddingX: 10,
                    paddingY: 5,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
                elevation={2}
            >
                <Box
                    sx={{
                        overflowY: "scroll",
                        height: "100%",
                        marginBottom: 2,
                    }}
                >
                    {items.map((item, index) => (
                        <motion.div key={item.id} layout transition={spring}>
                            <Item index={index} {...item} vote={vote} />
                        </motion.div>
                    ))}
                </Box>
                <Box>
                    <ItemInput addItem={addItem}></ItemInput>
                </Box>
            </Paper>
        </Box>
    );
};

export default ItemList;
