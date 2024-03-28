import Link from 'next/link';
import NewsletterForm from '@/app/ui/common/NewsletterForm/NewsletterForm';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark_blue text-white pb-8">
            {/* Top - Social Media Icons */}
            <div className="container mx-auto flex justify-between lg:px-20 px-8 py-12 border-b-2 border-transparent_orange">
                <p className="text-white">
                    Speak to our expert at <a href="tel:1-800-453-6744">1-800-453-6744</a>
                </p>

                <a href="https://www.facebook.com" target="_blank">Follow Us</a>
            </div>

            <div className="container mx-auto flex flex-col lg:flex-row justify-between px-8 pt-8">
                {/* Left Side - Navigation */}
                <div className="pb-12">
                    <h2 className="text-2xl font-bold mb-6">Contact</h2>

                    <p className="pb-4">328 Queensberry Street, North Melbourne VIC3051,
                        Australia.</p>
                    <a href="mailto:hi@wltours.com">hi@wltours.com</a>
                </div>

                <div className="pb-12">
                    <h2 className="text-2xl font-bold mb-6">Company</h2>

                    <nav className="text-white flex flex-col justify-items-start gap-4">
                        <Link href="/" passHref>
                            Home
                        </Link>
                        <Link href="/tours" passHref>
                            Tour
                        </Link>
                        <Link href="/tours" passHref>
                            Destination
                        </Link>
                        <Link href="/contact" passHref>
                            Contact
                        </Link>
                    </nav>
                </div>

                {/* Right Side - Newsletter Form */}
                <NewsletterForm />
            </div>

            {/* Bottom - Copyright */}
            <div className="text-left mt-4 container mx-auto px-8">
                <p className="text-sm">&copy; {new Date().getFullYear()} Your Website. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
