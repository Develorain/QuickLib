import React, {Fragment, useState, useEffect} from "react";

const LibraryMills = () => {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const response = await fetch("http://localhost:5000/mills");
        const items = await response.json();

        console.log(items);
        setItems(items);
    }

    return (
        <Fragment>
            <h1>Mills Workstations</h1>

            {items.map(item => (
                <div>
                    <h4 key={item.workstation_id}>{item.host_name} {item.student_name} {item.status}</h4>
                </div>
            ))}

        </Fragment>
    );
};

export default LibraryMills;