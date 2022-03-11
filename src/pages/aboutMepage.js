import AboutMe from "../components/AboutMe/AboutMe";
const githubStats = "https://github-readme-stats.vercel.app/api?username=Konado22"
const langStats = "https://github-readme-stats.vercel.app/api/top-langs/?username=Konado22"
const summaryStats = "https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Konado22&theme=vue"
const herokuStats = 'https://activity-graph.herokuapp.com/graph?username=jessedraper2@gmail.com&theme=minimal'
function AboutMePage() {
  return (
    <>
      <AboutMe />
      <div style={{"display": "flex", "justifyContent":"space-evenly","paddingTop": "20px"}}>
      <img src={githubStats} alt=""/>
      <img src={langStats} alt="" />
      <img src={summaryStats} alt="" />
      {/* <img src={herokuStats} alt="" /> */}

      </div>
    </>
  );
}
export default AboutMePage;
