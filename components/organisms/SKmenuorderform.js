"use client";
import React from "react";
import { SKButtonMenu, SKButtonItem } from "../atoms";
import { ScrollShadow } from "@nextui-org/react";
import { useRouter } from "next/navigation";

function SKmenuorderform(props) {
  const [active, setActive] = React.useState(1);
  const [menuItem, setMenuItem] = React.useState([]);
  const [menuOrderForm, setMenuOrderForm] = React.useState([]);
  const [price, setPrice] = React.useState();
  const [name, setName] = React.useState();
  const [itemsid, setItemid] = React.useState([]);
  const [iditem, setIditem] = React.useState();
  const [iddefault, setIddefault] = React.useState();
  const [idfororder, setIdfororder] = React.useState();
  const rounter = useRouter();
  const handleClick = (value) => {
    setActive(value);
  };

  React.useEffect(() => {
    fetch(`http://localhost:3000/api/orderpage`)
      .then((res) => res.json())
      .then((data) => {
        setMenuItem(data);
      });
  }, []);

  React.useEffect(() => {
    fetch(`http://localhost:3000/api/menuorderform`)
      .then((res) => res.json())
      .then((data) => {
        setMenuOrderForm(data);
      });
  }, []);
  React.useEffect(() => {
    fetch(`http://localhost:3000/api/order`)
      .then((res) => res.json())
      .then((data) => {
        let dataorder = Object.assign(
          data["orderplay"].concat(data["orderitem"])
        );
        setItemid(dataorder);
      });
  }, []);

  async function updateQty(id, qty) {
    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        qty: qty + 1,
        item_id: id,
      }),
    };
    const res = await fetch(`http://localhost:3000/api/orderitem`, postData);
    const response = await res.json();
    console.log(response);
    console.log(response["message"]);
  }
  async function Check() {
    console.log(iditem);
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_id: iditem,
        order_id: 1,
        price: price,
        created_at: "2023-09-21 04:22:55",
      }),
    };
    const res = await fetch(`http://localhost:3000/api/orderitem`, postData);
    const response = await res.json();
    console.log(response);
    console.log(response["message"]);
  }
  function Itemcart(item_id) {
    {
      menuItem.map((item) => {
        if (item.id == item_id) {
          setPrice(item.price);
          setName(item.name);
          setIditem(item_id);
        }
      });
    }
  }
  function AddItem(item_id) {
    {
      itemsid.map((item) => {
        if (item.item_id == item_id) {
          var qty = item.qty;
          updateQty(item_id, qty);
          setIddefault(item.item_id);
          setIdfororder(item_id);
          console.log(item.item_id);
        } else {
          setIddefault(item.item_id);
          setIdfororder(item_id);
          Itemcart(item_id);
        }
      });
    }
  }
  console.log(iddefault);
  console.log(idfororder);
  if (iddefault != idfororder) {
    console.log(price);
    console.log(name);
    Check();
  }
  return (
    <div className="flex gap-x-3 mr-2 h-[585px]">
      <div
        className="lg:h-[99%] md:h-[99%] sm:h-[99%] max-sm:h-[99%] shadow-md "
        style={{ width: "265px" }}
      >
        <div className="flex flex-col items-center gap-y-2">
          {menuOrderForm.map((value, index) => {
            return (
              <SKButtonMenu
                key={index}
                onChange={handleClick}
                disabled={active}
                title={value.title}
                test={value.id}
              />
            );
          })}
        </div>
      </div>
      <ScrollShadow
        orientation="horizontal"
        hideScrollBar
        className="lg:h-[96%] md:h-[96%] sm:h-[96%] max-sm:h-[96%] w-[100%]"
      >
        <div class="grid grid-cols-3 gap-3 ml-1 p-0 m-0 h-2">
          {menuItem.map((item, index) => {
            if (item.category_id == active) {
              return (
                <div key={index}>
                  <SKButtonItem
                    name={item.name}
                    onChange={() => AddItem(item.id)}
                    id={item.id}
                  />
                </div>
              );
            }
          })}
        </div>
      </ScrollShadow>
    </div>
  );
}

export default SKmenuorderform;
