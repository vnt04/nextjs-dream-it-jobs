import Link from "next/link";
import { FaBars, FaBell } from "react-icons/fa6";
import Image from "next/image";

function Header() {
  const itemsHeader = [
    { path: "/jobs", title: "Việc làm IT" },
    { path: "/profile", title: "Hồ sơ & CV" },
    { path: "/companies", title: "Công ty IT" },
    { path: "/blog", title: "Blog" },
  ];

  return (
    <header className="sticky top-0 z-[1000] bg-white shadow-2xl">
      <div className="mx-auto flex h-20 max-w-[1680px] items-center justify-between px-3 text-base md:px-6 lg:px-8 lg:font-semibold screen4K:max-w-[2048px]">
        {/* Header for mobile  */}
        <div className="block lg:hidden">
          <button>
            <FaBars className="h-6 w-6" />
          </button>
        </div>
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={144}
            height={64}
            className="h-16 w-36 lg:h-20 lg:w-40"
          />
        </Link>
        <nav className="w-[42%] px-2 max-lg:hidden">
          {/* Header for fullscreen desktop */}
          <ul className="flex justify-between">
            {itemsHeader.map(({ path, title }) => (
              <li key={path} className="hover:text-red-500">
                <Link href={path} className="">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* User and language */}
        <div className="items-center lg:flex lg:gap-4">
          {/* {user ? ( */}
          <div className="flex items-center gap-2">
            <FaBell />
            {/* <User /> */}
          </div>
          {/* ) : ( */}
          <div className="flex lg:gap-2">
            <Link href="/signup" className="btn-2 hidden lg:block">
              Đăng ký
            </Link>
            <Link href="/login" className="btn-1">
              Đăng nhập
            </Link>
          </div>
          {/* )} */}
          <div className="hidden lg:block">{/* <SwitchLanguage /> */}</div>
        </div>
        {/* NavItems menu mobile */}
      </div>
    </header>
  );
}

export default Header;
