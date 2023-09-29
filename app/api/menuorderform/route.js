import { query } from "@/lib/db";

export async function GET(request) {
  const users = await query({
    query: "SELECT * from `category`",
    values: [],
  });
  let data = JSON.stringify(users);
  return new Response(data, {
    status: 200,
  });
}

export async function POST(request) {
  try {
    const { title, created_at } = await request.json();
    const updateUsers = await query({
      query:
        "INSERT INTO `category` (`title`,`created_at`) VALUES (?,?)",
      values: [title, created_at],
    });
    const result = updateUsers.affectedRows;
    let message = "";
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    const product = {
      name: name,
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
        data: request,
      })
    );
  }
}

export async function PUT(request) {
  try {
    const { id, title, updated_at } = await request.json();
    const updateSnooker = await query({
      query: "UPDATE `category` SET `title`=?,`updated_at`=? WHERE id=?",
      values: [title, updated_at, id],
    });
    const result = updateSnooker.affectedRows;
    let message = "";
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    const product = {
      name: name,
      updated_at: updated_at,
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

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    const updateSnooker = await query({
      query: "DELETE FROM `category` WHERE id=?",
      values: [id],
    });
    const result = updateSnooker.affectedRows;
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
        status: 500,
        data: res,
      })
    );
  }
}
