import { query } from "@/lib/db";
// export async function GET(request) {
//   const menuorder = await query({
//     query: "SELECT * FROM `orderitem`",
//     values: [],
//   });

//   let data = JSON.stringify(menuorder);
//   return new Response(data, {
//     status: 200,
//   });
// }

export async function POST(request) {
  try {
    const { item_id, order_id, price, created_at } = await request.json();

    const updatemenuorder = query({
      query:
        "INSERT INTO `orderitem` (`item_id`, `order_id`, `price`, `qty`, `created_at`) VALUES (?,?,?,1,?) ",
      values: [item_id, order_id, price, created_at],
    });
    let message = "";
    if (updatemenuorder) {
      message = "success";
    } else {
      message = "scuess 1";
    }
    const product = {
      item_id: item_id,
      order_id: order_id,
      price: price,
      created_at: created_at,
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
export async function PUT(request) {
  try {
    const { item_id,qty } =
      await request.json();
    const updateSnooker = await query({
      query:
        "UPDATE `orderitem` SET `qty`=? WHERE `item_id`=?",
      values: [qty,item_id],
    });
    let message = "";
    if (updateSnooker) {
      message = "success";
    } else {
      message = "error";
    }
    const product = {
      qty:qty,
      item_id:item_id
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
        data: request,
      })
    );
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const deleteorderitem = await query({
      query: "DELETE FROM `orderitem` WHERE id=?",
      values: [id],
    });
    let message = "";
    if (deleteorderitem) {
      message = "success";
    } else {
      message = "error";
    }
    const product = {
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
        data: request,
      })
    );
  }
}
