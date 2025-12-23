import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

import Modal from "../components/Modal";
import UserSkeleton from "../components/userSkeleton";

function Dashboard() {
  // SEARCH
  const [search, setSearch] = useState("");

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  // DATA + UI STATES
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // MODAL
  const [selectedUser, setSelectedUser] = useState(null);
  const handleClose = () => setSelectedUser(null);

  // FETCH USERS
  useEffect(() => {
    getUsers()
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  // RESET PAGE WHEN SEARCH CHANGES
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // LOADING STATE (SKELETON)
  if (loading) {
    return (
      <div
  style={{
    maxWidth: "900px",
    margin: "40px auto",
    padding: "24px",
    backgroundColor: "#f5f7fb",
    borderRadius: "12px"
  }}
  />

    );
  }

  // ERROR / EMPTY STATES
  if (error) return <p>Error fetching users!</p>;
  if (users.length === 0) return <p>No users found.</p>;

  // SEARCH FILTER
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // PAGINATION LOGIC
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const currentUsers = filteredUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const paginationBtnStyle = (disabled) => ({
  padding: "8px 14px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: disabled ? "#e5e7eb" : "#2563eb",
  color: disabled ? "#9ca3af" : "#ffffff",
  cursor: disabled ? "not-allowed" : "pointer",
  fontWeight: "600"
});


  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h2
  style={{
    marginBottom: "20px",
    fontSize: "26px",
    fontWeight: "600",
    color: "#1f2937"
  }}
>
  👥 User Dashboard
</h2>


      {/* SEARCH INPUT */}
      <input
  type="text"
  placeholder="🔍 Search by name..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{
    padding: "12px 14px",
    width: "100%",
    marginBottom: "24px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    outline: "none"
  }}
/>

      {/* USER CARDS */}
      {currentUsers.map(user => {
        const isActive = Math.random() > 0.5 ? "Active" : "Inactive";

        return (
          <div
  key={user.id}
  onClick={() => setSelectedUser(user)}
  style={{
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "18px",
    marginBottom: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease"
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.08)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.06)";
  }}
>

            <p style={{ fontSize: "16px", fontWeight: "600", marginBottom: "4px" }}>
  {user.name}
</p>

<p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "10px" }}>
  {user.email}
</p>

            <p>
              Status:
              <span
  style={{
    padding: "5px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600",
    backgroundColor: isActive === "Active" ? "#dcfce7" : "#fee2e2",
    color: isActive === "Active" ? "#166534" : "#991b1b"
  }}
>
  {isActive}
</span>

            </p>
          </div>
        );
      })}

      {/* PAGINATION BUTTONS */}
      <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    marginTop: "30px"
  }}
>
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(prev => prev - 1)}
    style={paginationBtnStyle(currentPage === 1)}
  >
    ← Previous
  </button>

  <span style={{ fontWeight: "600", color: "#374151" }}>
    Page {currentPage}
  </span>

  <button
    disabled={indexOfLastUser >= filteredUsers.length}
    onClick={() => setCurrentPage(prev => prev + 1)}
    style={paginationBtnStyle(indexOfLastUser >= filteredUsers.length)}
  >
    Next →
  </button>
</div>

      {/* MODAL */}
      <Modal user={selectedUser} onClose={handleClose} />
    </div>
  );
}

export default Dashboard;
