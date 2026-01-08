import { Outlet } from "react-router-dom";

export default function PrivateLayout() {
  return (
    <>
      <div className="flex h-screen">
        <div className="bg-deepWalnut w-3xs">teste menu</div>
        <main className="bg-softFawn w-screen items-center justify-center flex">
          <Outlet />
        </main>
      </div>
    </>
  );
}
