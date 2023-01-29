import React, { useEffect, useState } from "react";
import CardList from "components/CardList";
import SearchBox from "components/SearchBox";
import "./App.scss";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  const filter = query.toLowerCase();
  const filteredUsers = users.filter(
    (item) =>
      item.name.toLowerCase().includes(filter) ||
      item.email.toLowerCase().includes(filter)
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        if (users !== null) {
          setUsers(users);
        }
      });
  }, []);

  const isLoading = users.length === 0;

  return (
    <div className="tc">
      <header>
        <h1 className="f1">Cat Friends</h1>
        {isLoading ? null : <SearchBox onChange={setQuery} />}
      </header>
      {isLoading ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <ErrorBoundary
          fallbackRender={() => {
            return (
              <div className="error-fallback">"Ooops, I did it again 🙄"</div>
            );
          }}
        >
          <CardList filter={query} items={filteredUsers} />
        </ErrorBoundary>
      )}
    </div>
  );
};

export default App;
