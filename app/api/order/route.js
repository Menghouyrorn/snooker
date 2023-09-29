import { query } from "@/lib/db";

export async function GET(request) {
  const orderitem = await query({
    query:
      "SELECT orderitem.*,order.staff_id as staff_id,orderitem.price*orderitem.qty as amount,item.name FROM `orderitem` JOIN `order` ON order.id = orderitem.order_id JOIN `item` ON item.id=orderitem.item_id",
    values: [],
  });
  const orderplay = await query({
    query:
      "SELECT orderplay.*,cast(orderplay.start as time) starttime,snookertype.rate as price,snookertype.rate as amount,cast(orderplay.stop as time) stoptime,snookertable.name,order.staff_id as staff_id,DATE_FORMAT(start,'%e %b %Y') startdate,DATE_FORMAT(stop,'%e %b %Y') stopdate FROM `snookertable` JOIN `snookertype` ON snookertable.snookertype_id = snookertype.id JOIN `orderplay` ON orderplay.snookertable_id = snookertable.id JOIN `order` ON orderplay.order_id=order.id",
    values: [],
  });
  return new Response(
    JSON.stringify({
      status: 200,
      orderplay: orderplay,
      orderitem: orderitem,
    })
  );
}
