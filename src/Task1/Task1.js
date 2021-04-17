import React, { useState } from "react";
import { Button, Container, Table, Row, Col } from "react-bootstrap";
import "./Task1.css";

const Task1 = () => {
  const [datas, setDatas] = useState([
    {
      id: 1,
      username: "john",
      lastname: "123",
    },
    {
      id: 2,
      username: "arun",
      lastname: "1234",
    },
  ]);
  const initialState = {
    id: "",
    username: "",
    lastname: "",
  };
  const [inputValues, setInputValues] = useState({
    id: "",
    username: "",
    lastname: "",
  });

  const textinputchange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const AddData = () => {
    setDatas((datas) => [...datas, inputValues]);
    clearState();
  };

  const clearState = () => {
    setInputValues(initialState);
  };

  const handletoRemove = (id) => {
    const newList = datas.filter((item) => item.id !== id);
    setDatas(newList);
  };
  const handletoEdit = (id) => {
    setInputValues(id);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={12}>
            <div className="header_title">
              <h1 className="Task_heading">Task Management</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 2 }} className="form_wrap">
              <div className="form_table_container">

              <Row>

           
          
          
                  <Col md={3} xs={12}>
                  <input
                  type="text"
                  name="id"
                  placeholder="id"
                  value={inputValues.id}
                  onChange={textinputchange}
                />
                  </Col>
                  <Col md={3} xs={12}>
                  <input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={inputValues.username}
                  onChange={textinputchange}
                />
                  </Col>
                  <Col md={3} xs={12}>
                         
                <input
                  type="text"
                  name="lastname"
                  placeholder="lastname"
                  value={inputValues.lastname}
                  onChange={textinputchange}
                />
                      </Col>
                      <Col md={3} xs={12}>
                      
                <Button
                  variant="primary"
                  className="Add-button"
                  onClick={AddData}
                >
                  Add
                </Button>
                      </Col>
              
               
             
            
                      </Row>
              </div>

          
           
          </Col>
        </Row>

        <Row>
        <Col md={{ span: 8, offset: 2 }}>
            <Row>
            {
                datas.length ===0 ?
                <div className="Record_notFound">
                    <p>Data Records Not Found</p>
                </div>:
           
            <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          
          {datas.map((newdata, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{newdata.username}</td>
                <td>{newdata.lastname}</td>
                <td>
                  <i
                    className="fa fa-pencil-square"
                    aria-hidden="true"
                    onClick={() => handletoEdit(newdata)}
                  ></i>
                </td>
                <td>
                  <i
                    className="fa fa-trash"
                    aria-hidden="true"
                    onClick={() => handletoRemove(newdata.id)}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
       }
    
            </Row>
            </Col>
        </Row>
      </Container>

      
    </div>
  );
};

export default Task1;
