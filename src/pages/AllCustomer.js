//Program to demonstrate HTTP get request
import React,{useMemo,useState,useEffect} from 'react'

import axios from 'axios' //import axios library
import Table from '../components/Table';

function Allcustomer(){
    const columns = useMemo(
        () => [
          {
            // First group columns
            Header: "customer Details",
            columns: [
              {
                Header: "ID",
                accessor: "id",
              },
              {
                Header: "Name",
                accessor: "name",
              },
              {
                Header: "Order_id",
                accessor: "order_id",
              },
              {
                Header: "Phone",
                accessor: "phone",
              },
              {
                Header: "Email",
                accessor: "email",
              },
            ],
          },
        ],
        []
      );
    // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:8082/Customer");
      setData(result.data);
    })();
  }, []);

    return (
        <div className="App">
          <h1>LIST OF CUSTOMER</h1>
          <Table columns={columns} data={data} />
        </div>
      );

}
export default Allcustomer;