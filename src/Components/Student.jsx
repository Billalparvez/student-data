import ClassSixTable from "./ClassSixTable";
import TableHead from "./TableHead";

const Student = ({ six, seven, eight }) => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      {/*students table */}
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* table head */}
          <TableHead></TableHead>
          <tr className="bg-white/5">
            <td
              className="p-3 text-white text-sm md:text-xl bg-[#186149]"
              colSpan="4"
            >
              Class Six
            </td>
          </tr>
          {/* <TableRow headings={"Class Six"}></TableRow> */}
          {/* cls six data */}
          {six.map((data) => (
            <ClassSixTable key={data.id} data={data}></ClassSixTable>
          ))}

          {/* row */}
          {/* <TableRow headings={"Class Seven"}></TableRow> */}
          <tr className="bg-white/5">
            <td
              className="p-3 text-white text-sm md:text-xl bg-[#186149]"
              colSpan="4"
            >
              Class Seven
            </td>
          </tr>

          {/* cls seven data */}
          {seven.map((data) => (
            <ClassSixTable key={data.id} data={data}></ClassSixTable>
          ))}

          {/* row */}
          {/* <TableRow headings={"Class Eight"}></TableRow> */}
          {/* cls eight data */}
          <tr className="bg-white/5">
            <td
              className="p-3 text-white text-sm md:text-xl bg-[#186149]"
              colSpan="4"
            >
              Class Eight
            </td>
          </tr>

          {eight.map((data) => (
            <ClassSixTable key={data.id} data={data}></ClassSixTable>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Student;
