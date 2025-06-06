import PollockPreview from "./components/PollockPreview";
import MemePortalRoot from "./root/PolockRoot";
import MemeShowcase from "./components/PollockShowcase";
import UploadBox from "./components/PollockBox";
import HomePanel from "./pages/HomePanel";
import PolockRoot from "./root/PolockRoot";
import RegisterPage from "./pages/RegisterPage";




customElements.define("register-page", RegisterPage);
customElements.define("meme-preview", PollockPreview);
customElements.define("upload-box", UploadBox);
customElements.define('meme-showcase', MemeShowcase);
customElements.define("polock-portal", PolockRoot);
customElements.define("home-panel", HomePanel);


