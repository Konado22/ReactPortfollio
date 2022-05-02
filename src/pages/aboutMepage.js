import AboutMe from "../components/AboutMe/AboutMe";
const githubStats = "https://github-readme-stats.vercel.app/api?username=Konado22"
const langStats = "https://github-readme-stats.vercel.app/api/top-langs/?username=Konado22"
const summaryStats = "https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Konado22&theme=vue"
const herokuStats = 'https://activity-graph.herokuapp.com/graph?username=jessedraper2@gmail.com&theme=minimal'
function AboutMePage() {
  return (
    <div style={{background: "linear-gradient(to right, #e66465, #9198e5)", height: '100%'}}>
      <AboutMe />
      <div style={{display: "flex", "justifyContent":"space-evenly","paddingTop": "20px", "flexWrap": "wrap", paddingBottom: "20px" }}>
      <img src={githubStats} alt=""/>
      <img src={langStats} alt="" />
      <img src={summaryStats} alt="" />
      {/* <img src={herokuStats} alt="" /> */}

      </div>
    </div>
  );
}
export default AboutMePage;
