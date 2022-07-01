const SectionHeader = ({ theme, txt }) => {
  return (
    <>
      <div
        style={{
          position: "relative",
          zIndex: 10,
          fontSize: 20,
          fontWeight: 700,
          color: (theme == "light") ? "#111" : "#fff",
          margin: "25px 0 10px 20px",
          cursor: "default",
        }}
      >
        {txt}
      </div>

      <div
        style={{
          marginBottom: 15,
          height: 2,
          width: 50,
          background: "#aa2329",
          marginLeft:"20px"
        }}
      />
    </>
  );
};

export default SectionHeader;
