import "./navbar.css"

//background image for banner?
const navbar = () => {
    return (
        <nav class="bannerstuff bg-dark mb-0">
        <h1 class="bigger  mtb-3 text-light">Jesse Draper<br></br></h1>
        <h3 class="bigger  mtb-3 text-light" id="subheading"> Web Developer</h3><br></br>
        <img src="./assets/profile pic small.jpg" id="profile-pic" alt="profile picture"></img>

        <ul class="navbar mb-0">
            <li id="yep"> <a class="nav-link text-light" href="#About-Me"> About Me</a></li>
            <li id="yep"> <a class="nav-link text-light" href="#Work">Work</a></li>
            <li id="yep"> <a class="nav-link text-light" href="#Contact-Me">Contact Me</a></li>
        </ul>
    </nav>

    )
}
export default navbar