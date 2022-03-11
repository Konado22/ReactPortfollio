
function Footer() {
  const emailBadge =
    "https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white";
  const githubBadge =
    "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white";
  const linkedInBadge =
    "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white";

  return (
    <>
      <div style={{ "display": "flex", "justifyContent": "space-evenly", "paddingTop": "15px"}}>
        <a href="https://github.com/Konado22"><img src={githubBadge} href="https://github.com/Konado22" alt="" /></a>
        < a href="https://www.linkedin.com/in/jesse-draper-2b5466217/" alt=""><img src={linkedInBadge}/></a>
        <a href="mailto:jessedraper2@gmail.com"><img src={emailBadge} alt="" /></a>
      </div>
    </>
  );
}
export default Footer;
