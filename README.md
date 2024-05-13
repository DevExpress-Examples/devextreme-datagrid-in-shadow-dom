<!-- default badges list -->
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1230389)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# DataGrid for DevExtreme - Shadow DOM Support

[Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) represents one of three Web Components specifications, complemented by [HTML templates](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots) and [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements). Shadow DOM allows you to attach a DOM subtree to an element and have the internals of this tree hidden from JavaScript and CSS running in the page. Thereby, Shadow DOM is instrumental in building scalable, conflict-free web applications, making it easier to develop complex, component-based web interfaces. 

This example sets up a Shadow DOM host and puts a DevExtreme DataGrid component into it. You can use similar code with other components.

![DataGrid in Shadow DOM](/datagrid-shadow-dom.png)

To attach a Shadow DOM tree, follow the instructions for each framework:

- [Angular](https://angular.io/guide/view-encapsulation#shadow-dom-encapsulation)    
    ```
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
        // ...
        encapsulation: ViewEncapsulation.ShadowDom,
    })
    export class AppComponent {
        // ...
    }
    ```

- Vue    
    ```
    const app = createApp(App);
    const shadowHost = document.getElementById("app") as HTMLElement;
    const shadowRoot = shadowHost.attachShadow({ mode: "open" }) as any;

    app.mount(shadowRoot);
    ```

- React    
    ```
    const shadowHost = document.getElementById('root') as HTMLElement;
    const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
    const root = ReactDOM.createRoot(shadowRoot);

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
    ```


## Files to Review

- **Angular**
    - [app.component.html](Angular/src/app/app.component.html)
    - [app.component.ts](Angular/src/app/app.component.ts)
- **Vue**
    - [Home.vue](Vue/src/components/HomeContent.vue)
- **React**
    - [App.tsx](React/src/App.tsx)
