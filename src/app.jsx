import { UserForm } from "./components/UserForm";
import { UserTable } from "./components/UserTable";
import "./app.css";

export function App() {
  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-2xl font-semibold leading-7 text-gray-900 mb-6">
        User Management
      </h1>
      <UserForm />
      <UserTable />
    </div>
  );
}
