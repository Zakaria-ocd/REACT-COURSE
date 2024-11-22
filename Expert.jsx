import { useParams } from "react-router-dom";
export default function Expert() {
    const{id}=useParams()
  return (
    <div>
     Expert {id}
    </div>
  );
}
