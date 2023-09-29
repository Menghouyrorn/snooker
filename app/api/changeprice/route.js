import { query } from "@/lib/db";

// export async function GET(request) {
//   const dataprice = await query({
//     query: "SELECT price FROM `orderitem`",
//     values: [],
//   });

//   let data = JSON.stringify(dataprice);
//   return new Response(data, {
//     status: 200,
//   });
// }

export async function PUT(request) {
  try {
    const { id, price } = await request.json();
    const updateprice = await query({
      query: "UPDATE `orderitem` SET price=? WHERE id=?",
      values: [price, id],
    });
    let message = "";
    if (updateprice) {
      message = "success";
    } else {
      message = "error";
    }
    const product = {
      price: price,
      id: id,
    };
    return new Response(
      JSON.stringify({
        message: message,
        status: 200,
        product: product,
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: 500,
        data: res,
      })
    );
  }
}
