function Footer() {
    return (
        <footer className="flex flex-col sm:flex-row items-center justify-between w-full h-20 py-3 sm:py-0 px-12 mt-6 bg-[#18202f]">
            <p className="font-SignikaNegative text-sm sm:text-base text-[#8b8d91]">
                © 2025 Savely. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img
                        className="w-4 sm:w-6 "
                        src="./src/assets/twitter.png"
                        alt="twitter icon"
                    />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img
                        className="w-4 sm:w-6"
                        src="./src/assets/facebook.png"
                        alt="facebook icon"
                    />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img
                        className="w-4 sm:w-6"
                        src="./src/assets/instagram.png"
                        alt="instagram icon"
                    />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
