import MenuItem from "./menu-items/sidebar-menu-item";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { SiSparkpost } from "react-icons/si";

export default function Sidebar() {
  return (
    <aside className="border min-h-screen w-2/12 relative top-14 left-0 bottom-0 flex">
      <div className="mb-10">
        <Link href="/">
          <a>
            <Image
              src="/static/icons/icon.svg"
              alt="Site Icon"
              className="hover:scale-90"
              height="75"
              width="75"
              priority
            />
          </a>
        </Link>
      </div>
      <div className="mb-2.5 xl:items-start">
        <MenuItem text="Home" Icon={AiOutlineHome} src="/" />
        <MenuItem text="Explore" Icon={SiSparkpost} src="/" />
      </div>
    </aside>
  );
}
