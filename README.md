<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/787614691/24.1.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1230389)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# DataGrid for DevExtreme - Shadow DOM Support

[Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM) represents one of three Web Components specifications, complemented by [HTML templates](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots) and [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements). Shadow DOM allows you to attach a DOM subtree to an element and hide the internals of this tree from JavaScript and CSS running on the page. Shadow DOM is instrumental in building scalable, conflict-free web applications (making developing complex, component-based web interfaces easier). 

This example sets up a Shadow DOM host and adds a DevExtreme DataGrid component to it. You can use similar code with other components.

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
<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=devextreme-datagrid-in-shadow-dom&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=devextreme-datagrid-in-shadow-dom&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
