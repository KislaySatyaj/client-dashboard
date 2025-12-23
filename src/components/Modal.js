function Modal({ user, onClose }) {
  if (!user) return null; // do not render if no user selected

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.container}>
        <h3>User Details</h3>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Company:</strong> {user.company?.name}</p>

        <button onClick={onClose} style={modalStyles.button}>
          Close
        </button>
      </div>
    </div>
  );
}

const modalStyles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
 container: {
  background: "#fff",
  borderRadius: "12px",
  padding: "24px",
  width: "90%",
  maxWidth: "420px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
},
  button: {
    marginTop: 20,
    padding: "6px 12px",
  }
};

export default Modal;

