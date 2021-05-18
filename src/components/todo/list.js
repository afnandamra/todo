import { useContext, useState } from 'react';
import { Toast, Badge, Pagination, Form, Row, Col } from 'react-bootstrap';
import { PaginationContext } from '../../context/pagenation';

const TodoList = (props) => {
  const context = useContext(PaginationContext);
  const [currentPage, setCurrentPage] = useState(context.startingPage);
  const maxItems = context.itemCount;
  // sorting hard-coded according to difficulty
  const sortedList = props.list.sort((a, b) => a.difficulty - b.difficulty);
  // display completed items first
  let allList = sortedList.sort((a, b) => {
    return a.complete === b.complete ? 0 : a.complete ? 1 : -1;
  });
  // const [list, setList] = useState(allList);

  // logic
  const numOfPages = allList.length / maxItems + 1;
  const indexOfLastItem = currentPage * maxItems;
  const indexOfFirstItem = indexOfLastItem - maxItems;
  const currentList = allList.slice(indexOfFirstItem, indexOfLastItem);
  const nextPage = (num) => setCurrentPage(num);

  const pageNums = [];
  let activePage = currentPage;
  for (let num = 1; num < numOfPages; num++) {
    pageNums.push(
      <Pagination.Item
        key={num}
        className={num === activePage ? 'active' : ''}
        onClick={() => nextPage(num)}
      >
        {num}
      </Pagination.Item>
    );
  }
  return (
    <>
      <Row>
        <Col>
          <Pagination>
            <Pagination.Prev
              disabled={activePage === 1 ? true : false}
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
            />
            {pageNums}
            <Pagination.Next
              disabled={activePage > numOfPages - 1 ? true : false}
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            />
          </Pagination>
        </Col>
        <Col>
          <Form>
            <Form.Control
              as="select"
              onChange={(e) => context.setItemCount(e.target.value)}
            >
              <option value="3">Items per Page</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="7">7</option>
              <option value={allList.length}>All</option>
            </Form.Control>
          </Form>
        </Col>
        {/* <Col>
          <Form>
            <Form.Control
              as="select"
              onChange={(e) => {
                console.log(e.target.value);
                allList.filter(
                  (item) => item.complete === Boolean(e.target.value)
                );
              }}
            >
              <option value="3">Filter by</option>
              <option value={true}>Completed</option>
              <option value={false}>Pending</option>
            </Form.Control>
          </Form>
        </Col> */}
      </Row>
      {currentList.map((item) => (
        <Toast
          key={item._id}
          style={{ maxWidth: '100%' }}
          onClose={async () => {
            await props.handleDelete(item);
            await props.fetch();
          }}
        >
          <Toast.Header>
            <Badge
              pill
              variant={item.complete ? 'success' : 'warning'}
              onClick={async () => {
                await props.handleComplete(item);
                await props.fetch();
              }}
              style={{ cursor: 'pointer' }}
            >
              {item.complete ? 'Complete' : 'Pending...'}
            </Badge>
            <strong className="mr-auto ml-4">{item.assignee}</strong>
          </Toast.Header>
          <Toast.Body>
            <h3
              className={`ml-3 ${
                item.complete ? 'text-muted text-decoration-line-through' : ''
              }`}
            >
              {item.text}
            </h3>
            <br />
            <p className="float-right" style={{ fontSize: '85%' }}>
              Difficulty: {item.difficulty}
            </p>
            <br />
          </Toast.Body>
        </Toast>
      ))}
    </>
  );
};
export default TodoList;
