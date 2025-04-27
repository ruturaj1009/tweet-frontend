import { FC, Fragment } from "react";
import { Route } from "react-router-dom";
import { Feed } from "../components/Feed";

const Router: FC = () => {
  return (<Fragment>
        <Route path="/">
            <Route element={<Feed/>} />
        </Route>
  </Fragment>);
};

export default Router;
