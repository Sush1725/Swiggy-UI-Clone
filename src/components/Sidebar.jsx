import { useEffect, useState } from "react";

export default function Sidebar() {
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(recentSearch)) || [];
    setRecent(saved);
  }, []);

  const saveRecent = (items) => {
    localStorage.setItem("recentSearches", JSON.stringify(items));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const updated = [query, ...recent.filter((i) => i !== query)].slice(0, 5);
    setRecent(updated);
    saveRecent(updated);
    setQuery("");
  };
  return <div>
    <button className="text-gray"></button>
  </div>;
}
