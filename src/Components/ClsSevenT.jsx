const ClsSevenT = ({ data }) => {
  return (
    <tbody>
      <tr>
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
      </tr>
    </tbody>
  );
};

export default ClsSevenT;
