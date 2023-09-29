import { query } from "@/lib/db";

export async function GET(request) {
  const users = await query({
    query:
      "SELECT * FROM `user`",
    values: [],
  });
  let data = JSON.stringify(users);
  return new Response(data, {
    status: 200,
  });
}

export async function POST(request) {
  try {
    const { username, password, created_at } = await request.json();
    const updateUsers = await query({
      query:
        "INSERT INTO `user`(`username`, `password`, `created_at`) VALUES (?,?,?,?)",
      values: [username, password, created_at],
    });
    const result = updateUsers.affectedRows;
    let message = "";
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    const product = {
      username: username,
      password: password,
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
    const { id, username, password, updated_at } = await request.json();
    const updateSnooker = await query({
      query:
        "UPDATE `user` SET `username`=?,`password`=?,`updated_at`=? WHERE id=?",
      values: [username, password, updated_at, id],
    });
    const result = updateSnooker.affectedRows;
    let message = "";
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    const product = {
      username: username,
      password: password,
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
      query: "DELETE FROM `user` WHERE id=?",
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
