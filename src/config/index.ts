// Go source: https://github.com/arduino/arduino-cli/blob/4dcf0da6c6361c14c8d3ddc8f64711a10e9f16a0/cli/config/validate.go#L28-L46
/**
 * Configuration for the Arduino CLI. See the [specs](https://arduino.github.io/arduino-cli/latest/configuration/) for more details.
 */
export interface Config {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    board_manager?: BoardManagersConfig;

    /**
     * options related to running Arduino CLI as a [gRPC](https://grpc.io/) server.
     */
    daemon?: DaemonConfig;

    /**
     * directories used by Arduino CLI.
     */
    directories?: DirectoriesConfig;

    /**
     * configuration options relating to Arduino libraries.
     */
    library?: LibraryConfig;

    /**
     * the language used by Arduino CLI to communicate to the user, the parameter is the language identifier
     * in the standard POSIX format `<language>[_<TERRITORY>[.<encoding>]]` (for example `it` or `it_IT`, or `it_IT.UTF-8`).
     */
    locale?: string;

    /**
     * configuration options for Arduino CLI's logs.
     */
    logging?: LoggingConfig;

    /**
     * configuration options relating to [Arduino sketches](https://arduino.github.io/arduino-cli/latest/sketch-specification/).
     */
    sketch?: SketchConfig;

    /**
     * settings related to the collection of data used for continued improvement of Arduino CLI.
     */
    metrics?: MetricsConfig;

    network?: Network;

    output?: Output;

    /**
     * configuration options related to Arduino CLI updates
     */
    updater?: UpdaterConfig;
}

export interface BoardManagersConfig {
    /**
     * the URLs to any additional Boards Manager package index files needed for your boards platforms.
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    additional_urls?: string[];
}

export interface DaemonConfig {
    /**
     * TCP port used for gRPC client connections.
     */
    port?: string;
}

export interface DirectoriesConfig {
    /**
     * directory used to store Boards/Library Manager index files and Boards Manager platform installations.
     */
    data?: string;

    /**
     * directory used to stage downloaded archives during Boards/Library Manager installations.
     */
    downloads?: string;

    /**
     * the equivalent of the Arduino IDE's ["sketchbook" directory](https://arduino.github.io/arduino-cli/latest/sketch-specification/#sketchbook). Library Manager installations are made to the libraries subdirectory of the user directory.
     */
    user?: string;

    builtins?: BuiltinsConfig;
}

export interface BuiltinsConfig {
    /**
     * the libraries in this directory will be available to all platforms without the need for the user to install them, but with the lowest priority over other installed libraries with the same name, it's the equivalent of the Arduino IDE's bundled libraries directory.
     */
    libraries?: string;

    /**
     * it's a list of directories of tools that will be available to all platforms without the need for the user to install them, it's the equivalent of the Arduino IDE 1.x bundled tools directory.
     */
    tools?: string;
}

export interface LibraryConfig {
    /**
     * set to `true` to enable the use of the `--git-url` and `--zip-file` flags with [`arduino-cli lib install`](https://arduino.github.io/arduino-cli/latest/commands/arduino-cli_lib_install/). These are considered "unsafe" installation methods because they allow installing files that have not passed through the Library Manager submission process.
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    enable_unsafe_install?: boolean;
}

export interface LoggingConfig {
    /**
     * path to the file where logs will be written.
     */
    file?: string;

    /**
     * output format for the logs. Allowed values are `text` or `json`.
     */
    format?: 'text' | 'json';

    /**
     * messages with this level and above will be logged. Valid levels are: `trace`, `debug`, `info`, `warn`, `error`, `fatal`, `panic`.
     */
    level?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal' | 'panic';
}

export interface SketchConfig {
    /**
     * set to `true` to make [`arduino-cli compile`](https://arduino.github.io/arduino-cli/latest/commands/arduino-cli_compile/) always save binaries to the sketch folder. This is the equivalent of using the [`--export-binaries`](https://arduino.github.io/arduino-cli/latest/commands/arduino-cli_compile/#options) flag.
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    always_export_binaries?: boolean;
}

export interface MetricsConfig {
    /**
     * TCP port used for metrics communication.
     */
    addr?: string;

    /**
     * controls the use of metrics.
     */
    enabled?: boolean;
}

export interface Network {
    proxy?: string;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    user_agent_ext?: string;
}

export interface Output {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    no_color?: boolean;
}

export interface UpdaterConfig {
    /**
     * set to `false` to disable notifications of new Arduino CLI releases, defaults to `true`
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    enable_notification?: boolean;
}
