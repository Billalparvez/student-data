const TableRow = ({ headings }) => {
  return (
    <tr className="bg-white/5">
      <td
        className="p-3 text-white text-sm md:text-xl bg-[#186149]"
        colSpan="4"
      >
        {headings}
      </td>
    </tr>
  );
};

export default TableRow;
