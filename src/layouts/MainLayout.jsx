import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Outlet />
    </div>
  );
}