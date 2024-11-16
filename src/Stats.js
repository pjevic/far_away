/** @format */

export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percetangePacked = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percetangePacked === 100
          ? "You have everything! Rady to go ✈️"
          : `💼 You have ${numItems} item on your list, and you already packed
        ${numPackedItems} (${percetangePacked}%)`}
      </em>
    </footer>
  );
}
