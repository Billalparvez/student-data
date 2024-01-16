import ClassSixTable from "./ClassSixTable";
import TableHead from "./TableHead";
import TableRow from "./tableRow";

const Student = ({ six, seven, eight }) => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      {/*students table */}
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* table head */}
          <TableHead></TableHead>

          <TableRow headings={"Class Six"}></TableRow>
          {/* cls six data */}
          {six.map((data) => (
            <ClassSixTable key={data.id} data={data}></ClassSixTable>
          ))}

          {/* row */}
          <TableRow headings={"Class Seven"}></TableRow>

          {/* cls seven data */}
          {seven.map((data) => (
            <ClassSixTable key={data.id} data={data}></ClassSixTable>
          ))}

          {/* row */}
          <TableRow headings={"Class Eight"}></TableRow>
          {/* cls eight data */}

          {eight.map((data) => (
            <ClassSixTable key={data.id} data={data}></ClassSixTable>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Student;
