/** @format */

export default function Item({
  id,
  description,
  quantity,
  packed,
  onDeleteItem,
  onUpdateItem,
}) {
  return (
    <li className="">
      <input type="checkbox" value={packed} onChange={() => onUpdateItem(id)} />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}
