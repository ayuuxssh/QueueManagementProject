import { useState } from "react"
import {FaUserPlus} from "react-icons/fa"
export default function QueueForm({onAdd})
{
    const [name,setName] = useState("");
    const [service ,setService] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault()
        //Validations
        if(!name.trim() || !service.trim())
            return
        onAdd({name,service})
        setName("");
        setService('');
    }
return (
    <>
   <form className="queue-form"  
   onSubmit={handleSubmit}
   >
<h2>Add to Queue</h2>
<div className="form-group">
<input
placeholder="Customer name"
value ={name}
onChange={(e)=>setName(e.target.value)}
type ="text"
></input>
</div>
<div className="form-group">
<select
onChange={(e)=>setService(e.target.value)}
value={service}
>
    <option value="">Select Service</option>
<option value="Consultant">Consultation</option>
<option value="Payment">Payment</option>
<option value="Support">Support</option>
</select>
</div>
<button type="submit">
 <FaUserPlus/> Add Customer
</button>
   </form>
    </>
)
}