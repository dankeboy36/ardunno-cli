### ardunno-cli-api

JS/TS API for the [Arduino CLI](https://github.com/arduino/arduino-cli).

EMS example:
```js
import { createChannel, createClient } from 'nice-grpc';
import { ArduinoCoreServiceDefinition } from 'ardunno-cli-api';

// Requires a running Arduino CLI. `./arduino-cli daemon --port 50051 --format json`
const channel = createChannel('localhost:50051');
const client = createClient(ArduinoCoreServiceDefinition, channel);

// Create the core instance
const { instance } = await client.create({});

// Initialize the core instance
for await (const { message } of client.init({ instance })) {
    switch (message.$case) {
        case 'error': throw new Error(message.error);
    }
}

// Search platforms
const { searchOutput } = await client.platformSearch({ instance, searchArgs: 'SAMD' });
searchOutput.forEach(({ id, latest }) => console.log(`${id}@${latest}`));
// arduino:samd@1.8.13
// Arrow:samd@2.1.0
// industruino:samd@1.0.1

// Cleanup
channel.close();
```

CJS example:
```js
const { createChannel, createClient } = require('nice-grpc');
const { ArduinoCoreServiceDefinition } = require('ardunno-cli-api');

(async () => {
    // Requires a running Arduino CLI. `./arduino-cli daemon --port 50051 --format json`
    const channel = createChannel('localhost:50051');
    const client = createClient(ArduinoCoreServiceDefinition, channel);

    // Create the core instance
    const { instance } = await client.create({});

    // Initialize the core instance
    for await (const { message } of client.init({ instance })) {
        switch (message.$case) {
            case 'error': throw new Error(message.error);
        }
    }

    // Search platforms
    const { searchOutput } = await client.platformSearch({ instance, searchArgs: 'SAMD' });
    searchOutput.forEach(({ id, latest }) => console.log(`${id}@${latest}`));
    // arduino:samd@1.8.13
    // Arrow:samd@2.1.0
    // industruino:samd@1.0.1

    // Cleanup
    channel.close();
})();
```