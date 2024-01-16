/* eslint-disable react/prop-types */
const ClassSixTable = ({ data }) => {
  return (
    <tbody>
      {/* <tr>
        <th>{data.id}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src="/tailwind-css-component-profile-2@56w.png"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{data.name}</div>
            </div>
          </div>
        </td>
        <td>{data.scores}</td>
        <td className="text-center">{data.percentage}</td>
      </tr> */}

      <tr className="bg-white/5">
        {/* <td className="p-5 text-sm md:text-xl" colSpan="4">
          Class One
        </td> */}
      </tr>
      <tr className="border-b border-[#7ECEB529]">
        <td className="p-5 text-sm md:text-xl">{data.id}</td>
        <td className="p-5 text-sm md:text-xl">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 h-8"
              src="./assets/avatar.png"
              width="32"
              height="32"
              alt="John Smith"
            />
            <span className="whitespace-nowrap">{data.name}</span>
          </div>
        </td>
        <td className="p-5 text-sm md:text-xl text-center">{data.scores}</td>
        <td className="p-5 text-sm md:text-xl text-center">
          {data.percentage}
        </td>
      </tr>
    </tbody>
  );
};

export default ClassSixTable;
