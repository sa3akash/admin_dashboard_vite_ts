import { Dispatch, FC, FormEvent, SetStateAction } from "react";
import "./styles/add.scss";
import { GridColDef } from "@mui/x-data-grid";

type Props = {
  setAddOpen: Dispatch<SetStateAction<boolean>>;
  slug: string;
  clumns: GridColDef[];
};

const Add: FC<Props> = (props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // add new item
  };

  return (
    <div className="add">
      <div className="model">
        <h2>Add New {props.slug}</h2>
        <span onClick={() => props.setAddOpen(false)}>X</span>
        <form onSubmit={handleSubmit}>
          {props.clumns
            .filter((i) => i.field !== "id" && i.field !== "img")
            .map((item, index) => (
              <div key={index} className="item">
                <label>{item.headerName}</label>
                <input type={item.type} placeholder={item.field} />
              </div>
            ))}
          <button type="submit">send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
