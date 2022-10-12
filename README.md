### ardunno-cli-api

[`nice-grpc`](https://github.com/deeplay-io/nice-grpc) API for the [Arduino CLI](https://github.com/arduino/arduino-cli)

All code in this repository is generated from the [`.proto` files](https://github.com/arduino/arduino-cli/tree/master/rpc) of the Arduino CLI.

## Installation

```
npm i ardunno-cli-api --save
```

## Usage

Create client:

```ts
const { createChannel, createClient } = require('nice-grpc');
const { ArduinoCoreServiceDefinition } = require('ardunno-cli-api');

// Requires a running Arduino CLI. `./arduino-cli daemon --port 50051 --format json`
const channel = createChannel('localhost:50051');
const client = createClient(ArduinoCoreServiceDefinition, channel);
```

ESM is also supported:

```ts
import { createChannel, createClient } from 'nice-grpc';
import { ArduinoCoreServiceDefinition } from 'ardunno-cli-api';
```

Create and initialize instance:

```ts
// Create the core instance
const { instance } = await client.create({});

for await (const { message } of client.init({ instance })) {
    switch (message.$case) {
        case 'error':
            throw new Error(message.error);
    }
}
```

Search platforms:

```ts
const { searchOutput } = await client.platformSearch({ instance, searchArgs: 'SAMD' });
searchOutput.forEach(({ id, latest }) => console.log(`${id}@${latest}`));

// arduino:samd@1.8.13
// Arrow:samd@2.1.0
// industruino:samd@1.0.1
```
