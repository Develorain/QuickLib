import React, {Fragment, useState, useEffect} from "react";

const LibraryInnis = () => {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const response = await fetch("http://localhost:5000/innis");
        const items = await response.json();

        console.log(items);
        setItems(items);
    }

    return (
        <Fragment>
            <h1>Innis Workstations</h1>

            {items.map(item => (
                <div>
                    <h4 key={item.workstation_id}>{item.host_name} {item.student_name} {item.status}</h4>
                </div>
            ))}

        </Fragment>
    );
};

export default LibraryInnis;