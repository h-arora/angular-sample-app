# AngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Running the app

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##What is the difference between imports, declarations, and providers?

`Declarations` is an array of components, directives etc that are defined in our app module. It registers/wires the components to the angular application module.

An angular app usually depends upon one or more modules. `Imports` is an array of modules that our application depends on. Eg: BrowserModule, FormsModule etc

`Providers` is an array of services that are a part of our app module. This is where we register services with the dependency injector of the app module.

##What is the difference between components, directives, models, modules, and services?

`Directives` attach to an element and usually used to manipulate DOM. For instance, ngFor and ngIf are directives which we use very often.

`Models` are classes and interfaces that are used to define the structure of the data or objects we will be using in the app.

`Modules` are logical groupings of components, directives, providers etc into a package. Each angular app is a module also a module can be a dependency in another application.

`Services` are singletons that are managed by angular's dependency injection and hence can be injected and used in various components across the application. We usually write business logic in angular services so that our components are as lean as possible.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
