import icon from "../Images/icon.png"
const Footer = () => {
    return (
        <html class="w-full h-screen">
            <main class='pl-20 pr-20 pt-32 md:pt-60 md:pl-40'>
            <h1 class='text-6xl text-black font-prim font-bold tracking-wider mb-20 md:mb-10'>Contact Me</h1>
            <span class="md:flex gap-10">
                <span>
                <span class= "flex items-center gap-2 mt-10">
                    <img src={icon} class="h-[35px]"></img>
                    <h3 class="font-secon text-[18px] font-semibold ">Email</h3>
                </span>
                    <h3 class="font-secon text-[18px]">angsc0605@gmail.com</h3>
                </span>
            <span>
                <span class= "flex items-center gap-2 mt-10">
                    <img src={icon} class="h-[35px]"></img>
                    <h3 class="font-secon text-[18px] font-semibold ">Telephone</h3>
                </span>
                <h3 class="font-secon text-[18px]">012-2017182</h3>
            </span>

            <span>
                <span class= "flex items-center gap-2 mt-10">
                    <img src={icon} class="h-[35px]"></img>
                    <h3 class="font-secon text-[18px] font-semibold ">Social Media</h3>
                </span>
                <span class="flex gap-5">
                    <img src={icon} class="h-[35px] mt-5"></img>
                    <img src={icon} class="h-[35px] mt-5"></img>
                    <img src={icon} class="h-[35px] mt-5"></img>
                </span>
            </span>

            </span>
            </main>
        </html>
    )
}

export default Footer;