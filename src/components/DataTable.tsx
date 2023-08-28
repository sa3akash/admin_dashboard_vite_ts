import { Link } from "react-router-dom";
import "./styles/dataGrid.scss";

import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { FC } from "react";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable: FC<Props> = (props) => {
  const handleDelete = (id: number) => {
    console.log(id);
    //delete the item
    // mutation.mutate(id)
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/images/view.svg" alt="edit" />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src="/images/delete.svg" alt="delete" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
