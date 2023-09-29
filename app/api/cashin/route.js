import { query } from "@/lib/db";
import mysql, { escape } from "mysql2/promise";

export async function GET(request) {
  const cashin = await query({
    query: "SELECT * FROM `caseflow` where type='1' ",
    values: [],
  });
  let data = JSON.stringify(cashin);
  return new Response(data, {
    status: 200,
  });
}

export async function POST(request) {
  try {
    const { amount_kh, amount_us, created_at } = await request.json();
    const insertCashin = await query({
      query:
        "INSERT INTO `caseflow` (`type`, `amount_kh`, `amount_us`, `created_at`) VALUES ('1',?,?,?)",
      values: [ amount_kh, amount_us, created_at],
    });
    let message = "";
    if (insertCashin) {
      message = "success";
    } else {
      message = "error";
    }

    const product = {
      amount_kh: amount_kh,
      amount_us: amount_us,
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
        message:error,
        status: 500,
        data: request,
      })
    );
  }
}
