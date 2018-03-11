import * as angular from "angular";
import "material-components-web";
// import "@material/ripple";

import { AppComponent } from "./app.component";
import { AppSideNavComponent } from "./components/app-side-nav/appSideNav.component";
import { AppShellComponent } from "./components/app-shell/app-shell.component";

angular.module("app", [])
  .component("app", AppComponent)
  .component("appShell", AppShellComponent)
  .component("appSideNav", AppSideNavComponent);