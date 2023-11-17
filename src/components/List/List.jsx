// eslint-disable-next-line react/prop-types
const List = ({ val }) => {
  // eslint-disable-next-line react/prop-types
  const arr = val.map((item, index) => (
    <tr key={index}>
      <td>{item.title}</td>
      <td>{item.completed ? "completed" : "incomplete"}</td>
    </tr>
  ));
  return (
    <table>
      <tr>
        <th>Title</th>
        <th>Status</th>
      </tr>
      {arr}
    </table>
  );
};

export default List;
