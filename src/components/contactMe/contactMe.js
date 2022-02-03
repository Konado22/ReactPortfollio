const ContactMe = () => {
  return (
    <div className="card bg-dark" id="Contact-Me" style={{ width: "100%" }}>
      <div className="card-body3 ">
        <a href="#Contact-Me" className="card-link">
          <h5 className="title text-light bigger" id="moveContact">
            Contact Info
          </h5>
        </a>
        <h6 className="card-subtitle mb-2 text-light" id="footerstuff">
          Email: jessedraper2@gmail.com
        </h6>
        <a href="https://github.com/Konado22" target="_blank" rel="noreferrer">
          <h6 className="card-subtitle mb-2 text-light">Github</h6>
        </a>
        <a
          href="https://www.linkedin.com/in/jesse-draper-2b5466217/"
          target="_blank"
          rel="noreferrer"
        >
          <h6 className="card-subtitle mb-2 text-light">Linkedin</h6>
        </a>
      </div>
    </div>
  );
};
export default ContactMe;
