"ues client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  ScrollShadow,
} from "@nextui-org/react";

// eslint-disable-next-line react/display-name
export const ComponentToPrint = React.forwardRef((props, ref) => {
  const [data, setData] = React.useState(props.props);
  const [total, setTotal] = React.useState();

  //   React.useEffect(() => {
  //     fetch(`http://localhost:3000/api/order`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         let dataorder = Object.assign(
  //           data["orderplay"].concat(data["orderitem"])
  //         );
  //         setData(dataorder);
  //       });
  //   }, []);
  //   React.useEffect(() => {
  //     var alltotal = 0;
  //     for (let i = 0; i < props.length; i++) {
  //       alltotal += Number(data[i].amount);
  //     }
  //     setTotal(alltotal);
  //   }, []);
  //   console.log(data);
  const columns = [
    {
      key: "key",
      label: "Item",
    },
    {
      key: "qty",
      label: "បរិមាណ",
    },
    {
      key: "amount",
      label: "Amount",
    },
  ];
  console.log(data[0]);
  return (
    <div ref={ref}>
      {data != null ? (
        <div className="h-[auto] w-[auto]">
            <div className="ml-2 mt-2 flex justify-between mr-20 w-[100%]">
              <p className="w-[50%]">Company</p>
              <p className="w-[50%]">Champoin Snooker</p>
            </div>
            <div className="ml-2 mt-4 flex justify-between mr-20 w-[100%]">
              <p className="w-[50%]">Cashier</p>
              <p className="w-[50%]">Staff 1</p>
            </div>
            <div className="ml-2 mt-4 flex justify-between mr-20 w-[100%]">
              <p className="w-[50%]">Print Date</p>
              <p className="w-[50%]">
                {data[0].stopdate} <span>{data[0].stoptime}</span>
              </p>
            </div>
            <div className="ml-2 mt-4 flex justify-between mr-20 w-[100%]">
              <p className="w-[50%]">Start Time</p>
              <p className="w-[50%]">
                {data[0].startdate} <span>{data[0].starttime}</span>
              </p>
            </div>
            <div className="ml-2 mt-4 mb-4 flex justify-between mr-20 w-[100%]">
              <p className="w-[50%]">End Time</p>
              <p className="w-[50%]">
                {data[0].stopdate} <span>{data[0].stoptime}</span>
              </p>
            </div>

            <Table removeWrapper>
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn key={column.key}>{column.label}</TableColumn>
                )}
              </TableHeader>
              <TableBody items={data}>
                {(item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    {item.qty > 0 ? (
                      <TableCell>{item.qty}</TableCell>
                    ) : (
                      <TableCell>{item.starttime}</TableCell>
                    )}
                    {item.qty > 0 ? (
                      <TableCell className="flex items-center">
                        {(item.price * item.qty).toFixed(3)}
                      </TableCell>
                    ) : (
                      <TableCell>{item.amount}</TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <div className="ml-2 mt-10 flex justify-between mr-20">
              <p>Total for Item</p>
              <p>
                {total} <span className="ml-2">$</span>
              </p>
            </div>
            <div className="ml-2 mt-10 flex justify-between mr-20">
              <p>Total for Invoice</p>
              <p>
                {total} <span className="ml-2">$</span>
              </p>
            </div>
        </div>
      ) : (
        <div>loading ...</div>
      )}
    </div>
  );
});
