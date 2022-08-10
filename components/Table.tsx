import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
const Table = () => {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly price</td>

          <td className={`tableData && text-[gray]`}>$9.99</td>
          <td className={`tableData && text-[gray]`}>$15.49</td>
          <td className={`tableData && text-[#e50914]`}>$19.99</td>
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video quality</td>

          <td className={`tableData && text-[gray]`}>Good</td>
          <td className={`tableData && text-[gray]`}>Better</td>
          <td className={`tableData && text-[#e50914]`}>Best</td>
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>

          <td className={`tableData && text-[gray]`}>480p</td>
          <td className={`tableData && text-[gray]`}>1080p</td>
          <td className={`tableData && text-[#e50914]`}>4K+HDR</td>
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet{" "}
          </td>

          <td className={`tableData && text-[gray]`}>
            <AiOutlineCheck className="inline-block h-8 w-8"  />
          </td>
          <td className={`tableData && text-[gray]`}>
            <AiOutlineCheck className="inline-block h-8 w-8" />
          </td>
          <td className={`tableData && text-[#e50914]`}>
            <AiOutlineCheck className="inline-block h-8 w-8" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table  