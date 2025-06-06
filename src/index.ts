import PollockPreview from "./components/PollockPreview";
import MemePortalRoot from "./root/PolockRoot";
import MemeShowcase from "./components/PollockShowcase";
import UploadBox from "./components/PollockBox";
import HomePanel from "./pages/HomePanel";
import PolockRoot from "./root/PolockRoot";





customElements.define("meme-preview", PollockPreview);
customElements.define("upload-box", UploadBox);
customElements.define('meme-showcase', MemeShowcase);
customElements.define("meme-portal", MemePortalRoot);
customElements.define("home-panel", HomePanel);


