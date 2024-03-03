import "./MainLoader";
function MainLoader() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{ scale: "100%" }}
        className={`spinner-border text-danger`}
      ></div>
    </div>
  );
}

export default MainLoader;
