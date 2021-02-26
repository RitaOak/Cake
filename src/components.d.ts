/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "name": string;
    }
    interface AppRoot {
    }
    interface HomeNav {
        "image": string;
    }
    interface HomeSearch {
    }
    interface OaeHomepage {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLHomeNavElement extends Components.HomeNav, HTMLStencilElement {
    }
    var HTMLHomeNavElement: {
        prototype: HTMLHomeNavElement;
        new (): HTMLHomeNavElement;
    };
    interface HTMLHomeSearchElement extends Components.HomeSearch, HTMLStencilElement {
    }
    var HTMLHomeSearchElement: {
        prototype: HTMLHomeSearchElement;
        new (): HTMLHomeSearchElement;
    };
    interface HTMLOaeHomepageElement extends Components.OaeHomepage, HTMLStencilElement {
    }
    var HTMLOaeHomepageElement: {
        prototype: HTMLOaeHomepageElement;
        new (): HTMLOaeHomepageElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "home-nav": HTMLHomeNavElement;
        "home-search": HTMLHomeSearchElement;
        "oae-homepage": HTMLOaeHomepageElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface HomeNav {
        "image"?: string;
    }
    interface HomeSearch {
    }
    interface OaeHomepage {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "home-nav": HomeNav;
        "home-search": HomeSearch;
        "oae-homepage": OaeHomepage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "home-nav": LocalJSX.HomeNav & JSXBase.HTMLAttributes<HTMLHomeNavElement>;
            "home-search": LocalJSX.HomeSearch & JSXBase.HTMLAttributes<HTMLHomeSearchElement>;
            "oae-homepage": LocalJSX.OaeHomepage & JSXBase.HTMLAttributes<HTMLOaeHomepageElement>;
        }
    }
}