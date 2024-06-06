import '../App.css';

const Headers = () => {
    return (
        <body class="container">
        <header class='flex'>
            <nav>
                <ul class='nav-list' >
                    <li><a style={{color: "white", textDecoration: "none"}} href="/aboutme">&lt;aboutme/&gt;</a></li>
                    <li><a style={{color: "white", textDecoration: "none"}} href="/skills">&lt;skills/&gt;</a></li>
                    <li><a style={{color: "white", textDecoration: "none"}} href="/portfolio">&lt;portfolio/&gt;</a></li>
                    <li><a style={{color: "white", textDecoration: "none"}} href="/contact">&lt;contactme/&gt;</a></li>
                </ul>
            </nav>
        </header>
        <main class='main'>
            <h1 style={{color: "white", letterSpacing: "0.05px"}}>Hello there, my name is Ang Siok Cheng.</h1>
            <h2 style={{color: "white", lineHeight: "35px"}}>I am a front end engineer</h2>
            <button style={{color: "white"}}>Download the CV</button>
        </main>
        </body>
    )
}

export default Headers;