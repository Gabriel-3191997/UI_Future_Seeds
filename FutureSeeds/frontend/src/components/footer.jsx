import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className="bg-white rounded-none border-none font-serif m-4">
                    <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <span className="text-sm text-body text-center md:text-left">
                            © 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                        </span>
                        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm sm:text-lg font-medium text-body md:justify-end">
                            <li>
                                <a href="#" className="hover:underline">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer;
