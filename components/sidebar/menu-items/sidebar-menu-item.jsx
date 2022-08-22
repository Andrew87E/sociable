import Link from "next/link";

export default function MenuItem({ text, Icon, src }) {
  return (
    <Link href={src}>
      <a>
        <button className="hover:scale-105 flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3">
          <Icon className="h-7 w-16 align-middle" />
          <span className="-ml-3 align-middle">{text}</span>
        </button>
      </a>
    </Link>
  );
}

