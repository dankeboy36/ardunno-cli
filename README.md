## ardunno-cli

[`nice-grpc`](https://github.com/deeplay-io/nice-grpc) API for the [Arduino CLI](https://github.com/arduino/arduino-cli).

The CLI API code in this repository is generated from the [`.proto` files](https://github.com/arduino/arduino-cli/tree/master/rpc) of the Arduino CLI. The API is compatible with [Arduino CLI `v0.35.0-rc.2`](https://github.com/arduino/arduino-cli/releases/tag/v0.35.0-rc.2). This project uses [`ardunno-cli-gen`](https://github.com/dankeboy36/ardunno-cli-gen/) for the API generation.

## Installing

```
npm i ardunno-cli --save
```

## Usage

### TypeScript:

```ts
import { createChannel, createClient } from 'nice-grpc';
import { ArduinoCoreServiceDefinition } from 'ardunno-cli';
```

### JavaScript:

```js
const { createChannel, createClient } = require('nice-grpc');
const { ArduinoCoreServiceDefinition } = require('ardunno-cli');
```

### Create a gRPC client:

Requires a running Arduino CLI daemon to connect to.

```sh
% ./arduino-cli daemon --port 50051 --format json
{
  "IP": "127.0.0.1",
  "Port": "50051"
}
```

```ts
const channel = createChannel('localhost:50051');
const client = createClient(ArduinoCoreServiceDefinition, channel);
```

### Create:

Creates a new Arduino Core instance.

```ts
const { instance } = await client.create({});
```

### Initialize:

Initializes an existing Arduino Core instance by loading platforms and libraries.

```ts
for await (const { message } of client.init({ instance })) {
    switch (message.$case) {
        case 'error':
            throw new Error(message.error);
    }
}
```

### Search platforms:

```ts
const { searchOutput } = await client.platformSearch({
    instance,
    searchArgs: 'SAMD',
});
searchOutput.forEach(({ id, latest }) => console.log(`${id}@${latest}`));

// arduino:samd@1.8.13
// Arrow:samd@2.1.0
// industruino:samd@1.0.1
```

## Configuration

The API contains typing and a JSON schema for the [Arduino CLI configuration](https://arduino.github.io/arduino-cli/latest/configuration/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
