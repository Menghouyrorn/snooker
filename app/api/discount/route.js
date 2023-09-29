import { query } from "@/lib/db";

export async function GET(request) {
  const discount = await query({
    query: "SELECT discount FROM `orderitem`",
    values: [],
  });

  let data = JSON.stringify(discount);
  return new Response(data, {
    status: 200,
  });
}

export async function PUT(request) {
  try {
    const { id, discount } = await request.json();
    const updatediscount = await query({
      query: "UPDATE `orderitem` SET discount=? WHERE id=?",
      values: [discount, id],
    });
    let message = "";
    if (updatediscount) {
      message = "success";
    } else {
      message = "error";
    }
    const product = {
      discount: discount,
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
