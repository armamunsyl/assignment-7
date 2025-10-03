import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


export default function FooterPart() {
    return (
        <footer className="bg-neutral text-neutral-content mt-10">
            <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-1 md:grid-cols-5 gap-6">
                <div>
                    <h2 className="footer-title text-lg font-semibold">CS — Ticket System</h2>
                    <p className="text-sm mt-2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s.
                    </p>
                </div>
                <div>
                    <h6 className="footer-title">Company</h6>
                    <ul className="flex flex-col space-y-2">
                        <li><a className="link link-hover">About Us</a></li>
                        <li><a className="link link-hover">Our Mission</a></li>
                        <li><a className="link link-hover">Contact Sales</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className="footer-title">Services</h6>
                    <ul className="flex flex-col space-y-2">
                        <li><a className="link link-hover">Products & Services</a></li>
                        <li><a className="link link-hover">Customer Stories</a></li>
                        <li><a className="link link-hover">Download Apps</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className="footer-title">Information</h6>
                    <ul className="flex flex-col space-y-2">
                        <li><a className="link link-hover">Privacy Policy</a></li>
                        <li><a className="link link-hover">Terms & Conditions</a></li>
                        <li><a className="link link-hover">Join Us</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className="footer-title">Social Links</h6>
                    <a className="link link-hover flex items-center gap-2"><FontAwesomeIcon icon={faGlobe} /> @CS — Ticket System</a>
                    <a className="link link-hover flex items-center gap-2"><FontAwesomeIcon icon={faBriefcase} /> @CS — Ticket System</a>
                    <a className="link link-hover flex items-center gap-2"><FontAwesomeIcon icon={faFacebook} /> @CS — Ticket System</a>
                    <a className="link link-hover flex items-center gap-2"><FontAwesomeIcon icon={faEnvelope} /> support@csT.com</a>
                </div>
            </div>
            <div className=" text-center py-4 mt-6 text-sm">
                © 2025 CS — Ticket System. All rights reserved.
            </div>
        </footer>
    );
}
