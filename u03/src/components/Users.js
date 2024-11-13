import { useLocation, Link } from "react-router-dom";

function Users() {
  let url = useLocation();
  return (
    <>
    <h1>Users</h1>
    <li><Link to={`${url.pathname}/ivanov`}>Ivanov</Link></li>
    <li><Link to={`${url.pathname}/petrov`}>Petrov</Link></li>
    </>
  );
}
export default Users;

