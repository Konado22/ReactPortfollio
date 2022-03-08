const ContactMe = () => {
  return (
    <div style={{ "width": "100%"}}>
      <h5 className="bigger" id="moveContact">
        Contact Info
      </h5>
      <div style={{"display":"flex","flexDirection": "column", "justifyContent":"center", "alignItems":"center"}}>
        <h6 id="footerstuff">Email: jessedraper2@gmail.com</h6>
        <a href="https://github.com/Konado22" target="_blank" rel="noreferrer">
          <h6>Github</h6>
        </a>
        <a
          href="https://www.linkedin.com/in/jesse-draper-2b5466217/"
          target="_blank"
          rel="noreferrer"
        >
          <h6>Linkedin</h6>
        </a>
      </div>
    </div>
  );
};
export default ContactMe;
