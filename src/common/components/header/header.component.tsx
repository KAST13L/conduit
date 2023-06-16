import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import { Container } from "../container/container.component.tsx";

export const Header: FC = () => {
  const navLinksArray = [
    { href: "/", title: "Home" },
    { href: "/sign-in", title: "Sign In" },
    { href: "/sign-up", title: "Sign Up" },
  ];
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    clsx("py-navItem hover:text-black/60", {
      "text-black/30": !isActive,
      "text-black/80": isActive,
    });

  return (
    <header>
      <nav className={"px-2 py-4"}>
        <Container>
          <div className={"flex justify-between items-center"}>
            <Link
              to={"/"}
              className={"font-titillium text-2xl text-conduit-green"}
            >
              conduit
            </Link>
            <ul className={"pl-0 mb-0 list-none flex"}>
              {navLinksArray.map((el) => (
                <li key={`nav-array-key${el.title}`}>
                  <NavLink
                    to={el.href}
                    className={navLinkClasses}
                    style={{ marginLeft: "15px" }}
                  >
                    {el.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
};
