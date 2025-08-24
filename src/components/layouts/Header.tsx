import HomeIcon from "@mui/icons-material/Home";
import MiscellaneousServicesTwoToneIcon from "@mui/icons-material/MiscellaneousServicesTwoTone";
import ArticleTwoToneIcon from "@mui/icons-material/ArticleTwoTone";
import MailOutlineTwoToneIcon from "@mui/icons-material/MailOutlineTwoTone";

const Header = () => {
  return (
    <div>
      <header className="flex justify-around items-center h-23 bg-[#FFF8F0]">
        {/* <div className="hidden sm:flex">Vashista RK</div> */}
        <span className="hidden sm:flex text-3xl font-semibold tracking-widest text-gray-700 font-urvis">
          VASHISTA RK
        </span>

        <nav aria-label="Main Navigation">
          <ul className="sm:flex flex-row space-x-10 hidden font-orbito">
            <li>
              <a href="/" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#skills">Services</a>
            </li>
            <li>
              <a href="#projects">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <ul className="sm:hidden flex flex-row gap-8">
            <li>
              <a href="/" aria-current="page">
                <HomeIcon />
              </a>
            </li>
            <li>
              <a href="#skills">
                <MiscellaneousServicesTwoToneIcon />
              </a>
            </li>
            <li>
              <a href="#projects">
                <ArticleTwoToneIcon />
              </a>
            </li>
            <li>
              <a href="#contact">
                <MailOutlineTwoToneIcon />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
