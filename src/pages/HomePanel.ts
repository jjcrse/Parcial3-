import PollocksShowcase from "../components/PollockShowcase";
import { pollocks } from "../services/Supabase/StoreService";

class HomePanel extends HTMLElement {
  private showcaseRef: PollocksShowcase | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot!.innerHTML = `
      <section>
        <pollock-showcase></-showcase>
        <upload-box></upload-box>
      </section>
    `;

    
    requestAnimationFrame(() => {
      this.showcaseRef = this.shadowRoot!.querySelector("pollock-showcase") as PollocksShowcase | null;
      const uploader = this.shadowRoot!.querySelector("upload-box");

      if (uploader && this.showcaseRef) {
        uploader.addEventListener("media-added", (event: Event) => {
          const detail = (event as CustomEvent).detail;
          const newPollocks: pollocks[] = detail?.files || [];

          newPollocks.forEach((pollocks) => {
            this.showcaseRef!.addPollock(pollocks);
          });
        });
      }
    });
  }
}

export default HomePanel;
