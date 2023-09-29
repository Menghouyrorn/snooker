import { query } from "@/lib/db";


export async function POST(request) {
  try {
    const { snookertable_id, order_id, start, created_at } =
      await request.json();
    const updatemenuorder = query({
      query:
        "INSERT INTO `orderplay`(`snookertable_id`, `order_id`, `start`, `created_at`) VALUES (?,?,?,?)",
      values: [snookertable_id, order_id, start, created_at],
    });
    const result = updatemenuorder.affectedRows;
    let message = "";
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    const product = {
      snookertable_id: snookertable_id,
      order_id: order_id,
      start: start,
      created_at: created_at,
    };
    return new Response(
      JSON.stringify({
        message: message,
        status: 200,
        product: product,
      })
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        status: 500,
        data: res,
      })
    );
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const deleteorderplay = await query({
      query: "DELETE `orderplay` WHERE id=?",
      values: [id],
    });
    const result = deleteorderplay.affectedRows;
    let message = "";
    if (result) {
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
        status:500,
        data:res
      })
    )
  }
}
