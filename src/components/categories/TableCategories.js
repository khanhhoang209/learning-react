import axios from "axios";
import {Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import {fetchCategories} from "../../services/CategoryService";

const TableCretegories = (props) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //call apis
    getCategories();
  }, []);

  const getCategories = async () => {
    let response = await fetchCategories();

    if (response && response.data && response.data.details) {
      setCategories(response.data.details.data.categories);
    }
  }

  return (<>
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Status</th>
      </tr>
      </thead>
      <tbody>
      {categories && categories.length > 0 && categories.map((item, index) => {
        return (
          <tr key={`categories-${index}`}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.status ? "Available" : "Unavailable"}</td>
          </tr>
        )})
      }
      </tbody>
    </Table>
  </>)
}

export default TableCretegories;