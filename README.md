# ng-universal-storage (in development)

## Installation

To install this library, run:

```bash
$ npm install ng-universal-storage --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ng-universal-storage
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgUniversalStorageModule } from 'ng-universal-storage';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Import NgUniversalStorageModule module
    NgUniversalStorage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Eduard Deza Castellano](mailto:edezacas@gmail.com)
