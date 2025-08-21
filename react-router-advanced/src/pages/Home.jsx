import { login, logout, isAuthenticated } from "../auth";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {isAuthenticated() ? (
        <>
          <p>You are logged in.</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are logged out.</p>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
}
