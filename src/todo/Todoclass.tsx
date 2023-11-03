import React, { Component, ChangeEvent } from "react";

interface TodoData {
  textdata: string;
}

interface State {
  textdata: string;
  isEditItem: number | null;
  data: TodoData[];
}

class Todoclass extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      textdata: "",
      isEditItem: null,
      data: [],
    };
  }

  newadddata = () => {
    const { data, textdata } = this.state;
    const newdata: TodoData = {
      textdata: textdata,
    };
    this.setState({
      data: [...data, newdata],
      textdata: "",
    });
  };

  deleteitem = (index: number) => {
    const { data } = this.state;
    const Alldata = [...data];
    const deletetext = Alldata.filter((item, idx) => {
      return index !== idx;
    });
    this.setState({
      data: deletetext,
    });
  };

  // start edititem
  Edititem = (obj: TodoData, idx: number) => {
    this.setState({
      isEditItem: idx,
      textdata: obj.textdata,
    });
  };

  Editdatadata = () => {
    const { data, isEditItem, textdata } = this.state;
    let Tempdata = [...data];
    if (isEditItem !== null) {
      Tempdata[isEditItem].textdata = textdata;
      this.setState({
        data: Tempdata,
      });
    }
  };

  render() {
    const { textdata, data } = this.state;
    return (
      <>
        <div style={{ width: "50%", margin: " 10px auto" }}>
          <input
            type="text"
            placeholder="Enter your Text"
            value={textdata}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              this.setState({ textdata: e.target.value })
            }
            style={{ width: "200px", height: "50px" }}
          />
          <button
            onClick={this.newadddata}
            style={{ padding: "10px 20px ", margin: "10px" }}
          >
            Adddata
          </button>
          <button
            onClick={this.Editdatadata}
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
                    onClick={() => this.deleteitem(index)}
                  >
                    Delete
                  </h2>
                  <h2 style={{ margin: "10px" }}>{item.textdata}</h2>
                  <h2
                    style={{ margin: "10px" }}
                    onClick={() => this.Edititem(item, index)}
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
  }
}

export default Todoclass;
