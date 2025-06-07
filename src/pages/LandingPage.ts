import Navigate from "../utils/Navigate";

class LandingPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot!.innerHTML = `
            <style>
            h1 {
                color: white;
                text-align: center;
                margin-top: 50vh;
                transform: translateY(-50%);
                font-family: Arial, sans-serif;
            }
            button {
                background-color: #fff;
                color: black;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
                display: block;
                margin: 20px auto;
            }
            </style>
            <h1>Landing page</h1>
            <button id="login" navigate-to="/dashboard/supabase">Llevame a supabase</button>
            <input type="file" id="fileInput" />
            <button id="uploadButton">Subir</button>
            <button id="passwordReset" >Llevame a password reset</button>
        `;

        this.shadowRoot!.querySelectorAll('button').forEach((button) => {
            button.addEventListener('click', () => {
                const path = button.getAttribute('navigate-to');
                if (path) {
                    Navigate(path);
                }
            });
        });

        const fileInput = this.shadowRoot!.getElementById('fileInput') as HTMLInputElement;
        const uploadButton = this.shadowRoot!.getElementById('uploadButton') as HTMLButtonElement;



    }
}

export default LandingPage;