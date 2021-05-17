import { useEffect } from 'react';
import useAjax from '../../hooks/useAjax.js';
import TodoForm from './form.js';
import TodoList from './list.js';
import TopSection from './progress.js';
import { Container, Col, Row } from 'react-bootstrap';

import './todo.scss';

const ToDo = () => {
  const [list, _addItem, _toggleComplete, _getTodoItems, _deleteItem] =
    useAjax();

  useEffect(
    () =>
      (document.title = `To Do List: ${
        list.filter((item) => !item.complete).length
      }`)
  );

  useEffect(_getTodoItems, [_getTodoItems]);

  return (
    <Container>
      <Row className="mt-5 mb-4">
        <Col>
          <TopSection list={list} />
        </Col>
      </Row>

      <Row>
        <Col md="4">
          <TodoForm handleSubmit={_addItem} />
        </Col>
        <Col md="8">
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            handleDelete={_deleteItem}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ToDo;
