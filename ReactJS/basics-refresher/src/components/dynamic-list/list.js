export default function DynamicList(props) {
  return (
      <li>
        <div>Name: {props.text.name}</div>
        <div>Age: {props.text.age}</div>
        <div>City: {props.text.city}</div>
      </li>
    );
  }