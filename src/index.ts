import PollockPreview from "./components/PollockPreview";
import UploadBox from "./components/PollockBox";
import HomePanel from "./pages/HomePanel";
import PolockRoot from "./root/PolockRoot";
import RegisterPage from "./pages/RegisterPage";
import PollocksShowcase from "./components/PollockShowcase";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";


customElements.define("login-page", LoginPage);
customElements.define("register-page", RegisterPage);
customElements.define("polock-preview", PollockPreview);
customElements.define("upload-box", UploadBox);
customElements.define('polock-showcase', PollocksShowcase);
customElements.define("polock-portal", PolockRoot);
customElements.define("home-panel", HomePanel);


