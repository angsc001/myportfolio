//import '../App.css';

const Headers = () => {
    return (
        <html class="mt-0">
            <head>
            <link href="./output.css" rel='stylesheet'></link>
            </head>
            <body class=" w-full h-screen bg-[url('../Images//background-with-monstera-tree-window-shadow.jpg')]
            bg-cover bg-no-repeat bg-right-bottom">
            <header>
                <nav>
                    <ul class=' flex m-0 p-0 font-secon sm:text-sm md:text-xl text-white flex-wrap
                    gap-4 float-right no-underline font-extrabold lg:pr-40 pr-9 pt-2' >
                        <li><a href="/aboutme">&lt;aboutme/&gt;</a></li>
                        <li><a href="/skills">&lt;skills/&gt;</a></li>
                        <li><a href="/portfolio">&lt;portfolio/&gt;</a></li>
                        <li><a href="/contact">&lt;contactme/&gt;</a></li>
                    </ul>
                </nav>
            </header>
            <main class='pl-20 pr-20 pt-32 md:pt-60 md:pl-40'>
                <h1 class='text-6xl text-white font-prim font-medium tracking-wider mb-20 md:mb-10' >Hello there, my name is Ang Siok Cheng.</h1>
                <h2 class='text-2xl text-white font-secon font-medium md:mb-10 mb-20'>I am a front end engineer</h2>
                <button class='text-1xl text-white font-secon w-btnwidth h-btnhei bg-secon rounded-3xl'>Download the CV</button>
            </main>
            </body>
        </html>
    )
}

export default Headers;