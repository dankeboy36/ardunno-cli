/* This file was automatically generated. DO NOT MODIFY IT BY HAND. **/

/**
 * Describe the parameters available for the Arduino CLI configuration file.
 * This schema should be considered unstable at this moment, it is not used by
 * the CLI to validate input configuration
 */
export interface ArduinoCLIConfigurationSchema {
  board_manager?: {
    /**
     * The URLs to any additional Boards Manager package index files needed for
     * your boards platforms.
     */
    additional_urls?: string[]
    /**
     * Set to `true` to allow installation of packages that do not pass the
     * checksum test. This is considered an unsafe installation method and
     * should be used only for development purposes.
     */
    enable_unsafe_install?: boolean
  }
  /** Configuration options related to the compilation cache */
  build_cache?: {
    /** The path to the build cache, default is `$TMP/arduino`. */
    path?: string
    /**
     * A list of paths to look for precompiled artifacts if not found on
     * `build_cache.path` setting.
     */
    extra_paths?: string[]
    /**
     * Interval, in number of compilations, at which the cache is purged,
     * defaults to `10`. When `0` the cache is never purged.
     */
    compilations_before_purge?: number
    /**
     * Cache expiration time of build folders. If the cache is hit by a
     * compilation the corresponding build files lifetime is renewed. The value
     * format must be a valid input for time.ParseDuration(), defaults to `720h`
     * (30 days)
     */
    ttl?: string
  }
  /** Options related to running Arduino CLI as a [gRPC] server. */
  daemon?: {
    /** TCP port used for gRPC client connections. */
    port?: string
  }
  /** Directories used by Arduino CLI. */
  directories?: {
    builtin?: {
      /**
       * The libraries in this directory will be available to all platforms
       * without the need for the user to install them, but with the lowest
       * priority over other installed libraries with the same name, it's the
       * equivalent of the Arduino IDE's bundled libraries directory.
       */
      libraries?: string
      /**
       * It's a list of directories of tools that will be available to all
       * platforms without the need for the user to install them, it's the
       * equivalent of the Arduino IDE 1.x bundled tools directory.
       */
      tools?: string[]
    }
    /**
     * Directory used to store Boards/Library Manager index files and Boards
     * Manager platform installations.
     */
    data?: string
    /**
     * Directory used to stage downloaded archives during Boards/Library Manager
     * installations.
     */
    downloads?: string
    /**
     * The equivalent of the Arduino IDE's ["sketchbook" directory][sketchbook
     * directory]. Library Manager installations are made to the `libraries`
     * subdirectory of the user directory.
     */
    user?: string
  }
  /** Configuration options relating to Arduino libraries. */
  library?: {
    /**
     * Set to `true` to enable the use of the `--git-url` and `--zip-file` flags
     * with [`arduino-cli lib install`][arduino cli lib install]. These are
     * considered "unsafe" installation methods because they allow installing
     * files that have not passed through the Library Manager submission
     * process.
     */
    enable_unsafe_install?: boolean
  }
  /**
   * The language used by Arduino CLI to communicate to the user, the parameter
   * is the language identifier in the standard POSIX format
   * `<language>[_<TERRITORY>[.<encoding>]]` (for example `it` or `it_IT`, or
   * `it_IT.UTF-8`).
   */
  locale?: string
  /** Configuration options for Arduino CLI's logs. */
  logging?: {
    /** Path to the file where logs will be written. */
    file?: string
    /** Output format for the logs. Allowed values are `text` or `json`. */
    format?: 'text' | 'json'
    /**
     * Messages with this level and above will be logged. Valid levels are:
     * `trace`, `debug`, `info`, `warn`, `error`, `fatal`, `panic`.
     */
    level?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal' | 'panic'
  }
  /**
   * Settings related to the collection of data used for continued improvement
   * of Arduino CLI.
   */
  metrics?: {
    /** TCP port used for metrics communication. */
    addr?: string
    /** Controls the use of metrics. */
    enabled?: boolean
  }
  /** Settings related to network connections. */
  network?: {
    /** Proxy settings for network connections. */
    proxy?: string
    /** Extra string to append to the user agent string in HTTP requests. */
    user_agent_ext?: string
    /** Timeout for network connections, defaults to '30s' */
    connection_timeout?: string
    /** Settings related to the Arduino Cloud API. */
    cloud_api?: {
      /** Do not call the Arduino Cloud API to detect an unknown board */
      skip_board_detection_calls?: boolean
    }
  }
  /** Settings related to text output. */
  output?: {
    /**
     * ANSI color escape codes are added by default to the output. Set to `true`
     * to disable colored text output.
     */
    no_color?: boolean
  }
  /** Configuration options relating to [Arduino sketches][sketch specification]. */
  sketch?: {
    /**
     * Set to `true` to make [`arduino-cli compile`][arduino-cli compile] always
     * save binaries to the sketch folder. This is the equivalent of using the
     * [`--export-binaries`][arduino-cli compile options] flag.
     */
    always_export_binaries?: boolean
  }
  /** Configuration options related to Arduino CLI updates */
  updater?: {
    /**
     * Set to `false` to disable notifications of new Arduino CLI releases,
     * defaults to `true`
     */
    enable_notification?: boolean
  }
}
