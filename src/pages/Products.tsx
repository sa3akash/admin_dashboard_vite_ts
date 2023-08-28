import { useState } from 'react';
import Add from '../components/Add';
import DataTable from '../components/DataTable';
import './styles/products.scss'
import { products } from '../data';
import { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];


const Products = () => {
  
  const [addOpen,setAddOpen] = useState(false)

  return (
    <div className="users">
      <div className="userInfo">
        <h1>Products</h1>
        <button onClick={()=>setAddOpen(true)}>Add New Product</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />

      {addOpen && <Add setAddOpen={setAddOpen} slug="Product" clumns={columns}/>}
    </div>
  );
}

export default Products