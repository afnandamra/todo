import { Toast, Badge } from 'react-bootstrap';

const TodoList = (props) => {
  return (
    <>
      {props.list.map((item) => (
        <Toast
          key={item._id}
          style={{ maxWidth: '100%' }}
          onClose={async () => {await props.handleDelete(item); await props.fetch();}}
        >
          <Toast.Header>
            <Badge
              pill
              variant={item.complete ? 'success' : 'warning'}
              onClick={async () => {await props.handleComplete(item); await props.fetch();}}
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
