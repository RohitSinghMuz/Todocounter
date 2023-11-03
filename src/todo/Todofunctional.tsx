import React, { useState } from "react";

const Todofunctional = () => {
  const [textdata, settextdata] = useState<string>("");
  const [isEditItem, setisEditItem] = useState<any>(null);
  const [data, setdata] = useState<any[]>([]);
  const newadddata = () => {
    const newdata = {
      textdata,
    };
    setdata([...data, newdata]);
    settextdata("");
  };
  const deleteitem = (index: number) => {
    const Alldata = [...data];
    const deletetext = Alldata.filter((item, idx) => {
      return index !== idx;
    });
    setdata(deletetext);
  };

  //   start edititem
  const Edititem = (obj: any, idx: number) => {
    setisEditItem(idx);
    settextdata(obj.textdata);
  };

  const Editdatadata = () => {
    let Tempdata = [...data];
    Tempdata[isEditItem].textdata = textdata;
    setdata(Tempdata);
  };
  console.log(textdata);
  return (
    <>
      <div style={{ width: "50%", margin: " 10px auto" }}>
        <input
          type="text"
          placeholder="Enter your Text"
          onChange={(e) => settextdata(e.target.value)}
          style={{ width: "200px", height: "50px" }}
        />
        <button
          onClick={newadddata}
          style={{ padding: "10px 20px ", margin: "10px" }}
        >
          Adddata
        </button>
        <button
          onClick={Editdatadata}
          style={{ padding: "10px 20px ", margin: "10px" }}
        >
          EditSubmittdata
        </button>

        {data?.map((item, index) => {
          return (
            <div key={index}>
              <div style={{ display: "flex" }}>
                <h2
                  style={{ margin: "10px" }}
                  onClick={() => deleteitem(index)}
                >
                  Delete
                </h2>
                <h2 style={{ margin: "10px" }}>{item.textdata}</h2>
                <h2
                  style={{ margin: "10px" }}
                  onClick={() => Edititem(item, index)}
                >
                  Edit
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todofunctional;
