import { useEffect, useState } from "react";
import { getUserRole, removeToken } from "../utils/auth";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [role, setRole] = useState("");
  const router = useRouter();

  useEffect(() => {
    setRole(getUserRole());
  }, []);

  return (
    <div>
      <h2>Dashboard - {role}</h2>
      <button onClick={() => { removeToken(); router.push("/login"); }}>Logout</button>
    </div>
  );
}
