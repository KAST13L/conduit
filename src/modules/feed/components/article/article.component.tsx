import { FC } from "react";
import { Link } from "react-router-dom";
import { FavoriteButton } from "../favorite-button/favorite-button.component.tsx";
import {TagList} from "../tag-list/tag-list.component.tsx";

export const Article: FC = () => {
  return (
    <article>
      <div className={"border-t border-black/10 py-6 "}>
        <div className={"mb-4 font-light flex"}>
          <Link to={"/@smykdav"}>
            <img
              src={"https://api.realworld.io/images/demo-avatar.png"}
              alt={"smykdav"}
              className={"inline-block h-8 w-8 rounded-full"}
            />
          </Link>
          <div className={"mr-6 ml-0.3 inline-flex flex-col leading-4"}>
            <Link to={"/@smykdav"} className={"font-medium"}>
              Smyk Davyd
            </Link>
            <span className={"text-conduit-gray-1100 text-date"}>
              8 June, 1999
            </span>
          </div>
          <FavoriteButton />
        </div>
        <Link to={"/article/qwert"} className={"hover:no-underline"}>
          <h1 className={"mb-1 font-semibold text-2xl text-black"}>
            Some title Some titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome titleSome title
          </h1>
        </Link>
        <p className={"text-conduit-gray-800 font-light mb-1 "}>
          veriatkas okurok persizxc error and boundary
        </p>
        <div className={"flex justify-between"}>
          <span className={"text-conduit-gray-800 text-date font-light"} >Read more...</span>
          <TagList/>
        </div>
      </div>
    </article>
  );
};
