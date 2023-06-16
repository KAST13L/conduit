import {Header} from "./common/components/header/header.component.tsx";
import {Banner} from "./common/components/banner/banner.component.tsx";
import {Article} from "./modules/feed/components/article/article.component.tsx";

export const App = () => {
  return <div>
    <Header/>
    <Banner/>
    <Article/>
  </div>
};
