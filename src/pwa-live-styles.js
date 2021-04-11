import { css } from "lit-element";

export const styles = css`
    :host {
        display: block;
        padding: 15px;
        --dile-tab-selected-background-color: Transparent;
        --dile-tab-selected-text-color: red;
        background-color: #f9f9f9;
    }
    dile-tabs {
        border-bottom: 1px solid #ddd;
        margin-bottom: 15px;
    }
    dile-pages {
        padding: 10 10px 10px;
    }
`;