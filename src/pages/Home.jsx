import "./home.scss";

const Home = () => {
    return (
        <div className="background">
            <div className="title">
                Tom Lawrie
            </div>
            <div className="subtitle">
                I'm a sound engineer turned developer
            </div>
            <div className="para">
                Here, you can see some of the projects I've worked on, and view and download my CV
            </div>
            <div className="reach">
                Interested in working together? Reach out at <a href="mailto:tom@tomlawrie.com">tom@tomlawrie.com</a>
            </div>
            <div className="links">
                <a href="https://github.com/tl5038">Github: tl5038</a> <a href="https://linkedin.com/in/tl5038">LinkedIn: tl5038</a>
            </div>
        </div>
    );
}

export default Home;