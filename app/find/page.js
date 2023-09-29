// "use client";
// import React from "react";

// function page() {
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [itemdata, setItemdata] = React.useState([]);
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   React.useEffect(() => {
//     fetch(`http://localhost:3000/api/snooker`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setItemdata(data);
//       });
//   },[]);
//   // try {
//   //   const res =  fetch(`http://localhost:3000/api/users`, {
//   //     method: "GET",
//   //     headers: {
//   //       "X-RapidAPI-Key": "your-rapidapi-key",
//   //       "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
//   //     },
//   //   });
//   //   const data = await res.json();
//   //   setItemdata(data);
//   //   console.log(data);
//   // } catch (err) {
//   //   console.log(err);
//   // }
//   //   };
//   console.log(itemdata);
//   return (
//     <div>
//       {/* <button onClick={callAPI}>Make API call</button> */}
//       <h1>Hello</h1>
//       <div>
//         {itemdata.map((value,index)=>{
//             return <p key={index}>{value.name}</p>
//         })}
//       </div>
//     </div>
//   );
// }

// export default page;
"use client";
import React from "react";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = React.useState("");
  // console.log(name)
  async function AddItem() {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    };
    const res = await fetch(`http://localhost:3000/api/default`, postData);
    const response = await res.json();
    console.log(response["message"])
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="input name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="button"
          style={{ border: "1px solid black" }}
          onClick={AddItem}
          value={"submit"}
        />
      </form>
    </div>
  );
}

export default page;
