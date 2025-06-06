import PollockPreview from "./PollockPreview";
import { getpollockss, pollocks } from "../services/Supabase/StoreService";

class PollocksShowcase extends HTMLElement {
  private pollockItems: pollocks[] = [];
  private fetchIssue = false;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    await this.loadContent();
    this.displayContent();
  }

  public addPollock(newPollock: pollocks) {
    this.pollockItems.unshift(newPollock);
    this.displayContent();
  }

  private async loadContent() {
    try {
      this.pollockItems = await getpollockss();
    } catch (e) {
      console.warn("Error cargando pollocks:", e);
      this.fetchIssue = true;
    }
  }

  private displayContent() {
    if (!this.shadowRoot) return;

    const hasItems = this.pollockItems.length > 0;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 1.5rem;
          background: #121212;
          color: #f4f4f4;
          font-family: 'Segoe UI', sans-serif;
        }

        .warning {
          background: #d32f2f;
          color: #fff;
          padding: 1rem;
          border-radius: 8px;
          font-weight: bold;
          margin-bottom: 1rem;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        .pollock-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .nothing-here {
          text-align: center;
          padding: 2rem;
          background: #1e1e1e;
          border-radius: 10px;
          font-size: 1.1rem;
          color: #f0c674;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .nothing-here span {
          font-size: 2rem;
        }
      </style>

      ${this.fetchIssue
        ? `<div class="warning" role="alert">⚠️ Error al obtener los pollock. Intenta más tarde.</div>`
        : ""
      }

      ${
        hasItems
          ? `<div class="pollock-grid" id="pollocks-container"></div>`
          : `<div class="nothing-here"><span>🕸️</span> No hay pollocks aún. ¡Sé el primero en subir uno!</div>`
      }
    `;

    if (hasItems) {
      const grid = this.shadowRoot!.getElementById("pollocks-container");
      if (grid) {
        const fragment = document.createDocumentFragment();
        this.pollockItems.forEach((pollock) => {
          const item = document.createElement("pollocks-preview") as PollockPreview;
          item.data = { url: pollock.url, type: pollock.type };
          fragment.appendChild(item);
        });
        grid.appendChild(fragment);
      }
    }
  }
}


export default PollocksShowcase;
