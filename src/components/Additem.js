import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Additem({additem}){
  const [Productname,setProductname]=useState("");
  const [Productprice,setProductprice]=useState(0);
  const navigate = useNavigate();
  const handlechange=(e)=>{
      e.preventDefault(); 
      if(Productname&&Productprice>0){
      additem({ name: Productname, price: parseFloat(Productprice), quantity:1});
      setProductname("");
      setProductprice();
      navigate("/");
      
    }
  }
  return(
    <><form onSubmit={handlechange}>
    <table className="table">
      <thead>
        <tr>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="text" placeholder="Product Name" value={Productname} onChange={(e) => setProductname(e.target.value)}/></td>
          <td><input type="number" placeholder="Unit Price" value={Productprice}onChange={(e) => setProductprice(e.target.value)}/></td>
          <td>1</td>
           <td>
                <button className="btn btn-success" type="submit">Add</button>
              </td>
        </tr>
      </tbody>
    </table>
    </form>
    </>
  );
}
export default Additem;