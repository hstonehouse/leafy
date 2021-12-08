import { BrowserRouter, Link, Routes, Route } from "react-router-dom";


export function Home() {
    return (
        <div >
          <h1>Leafy</h1>
              <a href="/login"><Link to="/login">Log in</Link></a>
              <a href="/register">Create account</a>
        </div>
      );
}