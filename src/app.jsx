import { UserForm } from "./components/UserForm";
import { UserTable } from "./components/UserTable";
import "./app.css";

export function App() {
  return (
    <div className="container mx-auto mt-12">
      <UserForm />
      <UserTable />
    </div>
  );
}
