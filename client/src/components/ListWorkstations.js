import React, {Fragment, useState, useEffect} from "react";

const ListWorkstations = () => {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const response = await fetch("http://localhost:5000/thode");
        const items = await response.json();

        console.log(items);
        setItems(items);
    }

    return (
        <Fragment>
            <h1>ListWorkstations</h1>

            {items.map(item => (
                <div>
                    <h1 key={item.workstation_id}>{item.host_name}</h1>
                    <h1 key={item.workstation_id}>{item.student_name}</h1>
                    <h1 key={item.workstation_id}>{item.status}</h1>
                </div>
            ))}

        </Fragment>
    );
};

export default ListWorkstations;

//<h1>{items.host_name}</h1>

/*
{items.map(item => {
    <h1>{item.item.}</h1>
})}
*/