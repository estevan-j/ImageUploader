const Button = ({ children, ...props }) => {
  return (
    <button
      style={{
        width: "100%",
        backgroundColor: "#3662e3",
        color: "#fff",
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "13px",
        marginLeft: "5px",
        gap: "5px",
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
