function UserSkeleton() {
  return (
    <div style={skeletonStyle}>
      <div style={lineStyle}></div>
      <div style={smallLineStyle}></div>
      <div style={smallLineStyle}></div>
    </div>
  );
}

const skeletonStyle = {
  border: "1px solid #ddd",
  padding: "16px",
  marginBottom: "12px",
  borderRadius: "8px",
  background: "#f2f2f2"
};

const lineStyle = {
  height: "16px",
  width: "60%",
  background: "#ddd",
  marginBottom: "10px"
};

const smallLineStyle = {
  height: "12px",
  width: "40%",
  background: "#ddd",
  marginBottom: "8px"
};

export default UserSkeleton;
