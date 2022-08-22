import Image from "next/image";
import Link from "next/link";

export const MenuItem = () => {
  return (
    <div className="border">
      <Link
      href="/"
      >
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
  );
};
