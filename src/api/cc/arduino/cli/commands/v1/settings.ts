/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

/**
 * Configuration to apply to the given instance.
 * Any missing field will be kept at the default value.
 */
export interface Configuration {
    directories: Configuration_Directories | undefined;
    network: Configuration_Network | undefined;
    sketch: Configuration_Sketch | undefined;
    buildCache: Configuration_BuildCache | undefined;
    boardManager: Configuration_BoardManager | undefined;
    daemon: Configuration_Daemon | undefined;
    output: Configuration_Output | undefined;
    logging: Configuration_Logging | undefined;
    library: Configuration_Library | undefined;
    updater: Configuration_Updater | undefined;
    locale?: string | undefined;
}

export interface Configuration_Directories {
    /** Data directory */
    data: string;
    /** User directory */
    user: string;
    /** Downloads directory */
    downloads: string;
    /** The directory where the built-in resources are installed */
    builtin?: Configuration_Directories_Builtin | undefined;
}

export interface Configuration_Directories_Builtin {
    /** The directory where the built-in libraries are installed */
    libraries?: string | undefined;
}

export interface Configuration_Network {
    /** Extra user-agent information to be appended in network requests */
    extraUserAgent?: string | undefined;
    /** The proxy to use for network requests */
    proxy?: string | undefined;
}

export interface Configuration_Sketch {
    /** Set to true to always export binaries to the sketch directory */
    alwaysExportBinaries: boolean;
}

export interface Configuration_BuildCache {
    /** The minimum number of compilations before the cache is purged */
    compilationsBeforePurge: number;
    /** Time to live of the cache in seconds */
    ttlSecs: number;
}

export interface Configuration_BoardManager {
    /** Additional URLs to be used for the board manager */
    additionalUrls: string[];
}

export interface Configuration_Daemon {
    /** The TCP port of the daemon */
    port: string;
}

export interface Configuration_Output {
    /** Set to true to disable coloring of the output */
    noColor: boolean;
}

export interface Configuration_Logging {
    /** The logging level */
    level: string;
    /** The logging format */
    format: string;
    /** The logging file */
    file?: string | undefined;
}

export interface Configuration_Library {
    /**
     * Set to true to enable library installation from zip archives or git
     * repositories
     */
    enableUnsafeInstall: boolean;
}

export interface Configuration_Updater {
    /** Set to true to enable notifications for updates */
    enableNotification: boolean;
}

export interface ConfigurationGetRequest {}

export interface ConfigurationGetResponse {
    /** The current configuration */
    configuration: Configuration | undefined;
}

export interface ConfigurationSaveRequest {
    /** The format of the encoded settings, allowed values are "json" and "yaml" */
    settingsFormat: string;
}

export interface ConfigurationSaveResponse {
    /** The encoded settings */
    encodedSettings: string;
}

export interface ConfigurationOpenRequest {
    /** The encoded settings */
    encodedSettings: string;
    /** The format of the encoded settings, allowed values are "json" and "yaml" */
    settingsFormat: string;
}

export interface ConfigurationOpenResponse {
    /**
     * Warnings that occurred while opening the configuration (e.g. unknown keys,
     * or invalid values)
     */
    warnings: string[];
}

export interface SettingsGetValueRequest {
    /** The key to get */
    key: string;
    /**
     * The format of the encoded_value (default is "json", allowed values are
     * "json" and "yaml)
     */
    valueFormat: string;
}

export interface SettingsGetValueResponse {
    /** The value of the key (encoded) */
    encodedValue: string;
}

export interface SettingsSetValueRequest {
    /** The key to change */
    key: string;
    /**
     * The new value (encoded), no objects, only scalar or array of scalars are
     * allowed.
     */
    encodedValue: string;
    /**
     * The format of the encoded_value (default is "json", allowed values are
     * "json", "yaml" and "cli")
     */
    valueFormat: string;
}

export interface SettingsSetValueResponse {}

export interface SettingsEnumerateRequest {}

export interface SettingsEnumerateResponse {
    /** The list of key/value pairs */
    entries: SettingsEnumerateResponse_Entry[];
}

export interface SettingsEnumerateResponse_Entry {
    /** The key */
    key: string;
    /** The key type */
    type: string;
}

function createBaseConfiguration(): Configuration {
    return {
        directories: undefined,
        network: undefined,
        sketch: undefined,
        buildCache: undefined,
        boardManager: undefined,
        daemon: undefined,
        output: undefined,
        logging: undefined,
        library: undefined,
        updater: undefined,
        locale: undefined,
    };
}

export const Configuration = {
    encode(
        message: Configuration,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.directories !== undefined) {
            Configuration_Directories.encode(
                message.directories,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.network !== undefined) {
            Configuration_Network.encode(
                message.network,
                writer.uint32(18).fork()
            ).ldelim();
        }
        if (message.sketch !== undefined) {
            Configuration_Sketch.encode(
                message.sketch,
                writer.uint32(26).fork()
            ).ldelim();
        }
        if (message.buildCache !== undefined) {
            Configuration_BuildCache.encode(
                message.buildCache,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.boardManager !== undefined) {
            Configuration_BoardManager.encode(
                message.boardManager,
                writer.uint32(42).fork()
            ).ldelim();
        }
        if (message.daemon !== undefined) {
            Configuration_Daemon.encode(
                message.daemon,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.output !== undefined) {
            Configuration_Output.encode(
                message.output,
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.logging !== undefined) {
            Configuration_Logging.encode(
                message.logging,
                writer.uint32(66).fork()
            ).ldelim();
        }
        if (message.library !== undefined) {
            Configuration_Library.encode(
                message.library,
                writer.uint32(74).fork()
            ).ldelim();
        }
        if (message.updater !== undefined) {
            Configuration_Updater.encode(
                message.updater,
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.locale !== undefined) {
            writer.uint32(802).string(message.locale);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Configuration {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfiguration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.directories = Configuration_Directories.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.network = Configuration_Network.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.sketch = Configuration_Sketch.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.buildCache = Configuration_BuildCache.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.boardManager = Configuration_BoardManager.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.daemon = Configuration_Daemon.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.output = Configuration_Output.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.logging = Configuration_Logging.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }

                    message.library = Configuration_Library.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }

                    message.updater = Configuration_Updater.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 100:
                    if (tag !== 802) {
                        break;
                    }

                    message.locale = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Configuration {
        return {
            directories: isSet(object.directories)
                ? Configuration_Directories.fromJSON(object.directories)
                : undefined,
            network: isSet(object.network)
                ? Configuration_Network.fromJSON(object.network)
                : undefined,
            sketch: isSet(object.sketch)
                ? Configuration_Sketch.fromJSON(object.sketch)
                : undefined,
            buildCache: isSet(object.buildCache)
                ? Configuration_BuildCache.fromJSON(object.buildCache)
                : undefined,
            boardManager: isSet(object.boardManager)
                ? Configuration_BoardManager.fromJSON(object.boardManager)
                : undefined,
            daemon: isSet(object.daemon)
                ? Configuration_Daemon.fromJSON(object.daemon)
                : undefined,
            output: isSet(object.output)
                ? Configuration_Output.fromJSON(object.output)
                : undefined,
            logging: isSet(object.logging)
                ? Configuration_Logging.fromJSON(object.logging)
                : undefined,
            library: isSet(object.library)
                ? Configuration_Library.fromJSON(object.library)
                : undefined,
            updater: isSet(object.updater)
                ? Configuration_Updater.fromJSON(object.updater)
                : undefined,
            locale: isSet(object.locale) ? String(object.locale) : undefined,
        };
    },

    toJSON(message: Configuration): unknown {
        const obj: any = {};
        message.directories !== undefined &&
            (obj.directories = message.directories
                ? Configuration_Directories.toJSON(message.directories)
                : undefined);
        message.network !== undefined &&
            (obj.network = message.network
                ? Configuration_Network.toJSON(message.network)
                : undefined);
        message.sketch !== undefined &&
            (obj.sketch = message.sketch
                ? Configuration_Sketch.toJSON(message.sketch)
                : undefined);
        message.buildCache !== undefined &&
            (obj.buildCache = message.buildCache
                ? Configuration_BuildCache.toJSON(message.buildCache)
                : undefined);
        message.boardManager !== undefined &&
            (obj.boardManager = message.boardManager
                ? Configuration_BoardManager.toJSON(message.boardManager)
                : undefined);
        message.daemon !== undefined &&
            (obj.daemon = message.daemon
                ? Configuration_Daemon.toJSON(message.daemon)
                : undefined);
        message.output !== undefined &&
            (obj.output = message.output
                ? Configuration_Output.toJSON(message.output)
                : undefined);
        message.logging !== undefined &&
            (obj.logging = message.logging
                ? Configuration_Logging.toJSON(message.logging)
                : undefined);
        message.library !== undefined &&
            (obj.library = message.library
                ? Configuration_Library.toJSON(message.library)
                : undefined);
        message.updater !== undefined &&
            (obj.updater = message.updater
                ? Configuration_Updater.toJSON(message.updater)
                : undefined);
        message.locale !== undefined && (obj.locale = message.locale);
        return obj;
    },

    create(base?: DeepPartial<Configuration>): Configuration {
        return Configuration.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<Configuration>): Configuration {
        const message = createBaseConfiguration();
        message.directories =
            object.directories !== undefined && object.directories !== null
                ? Configuration_Directories.fromPartial(object.directories)
                : undefined;
        message.network =
            object.network !== undefined && object.network !== null
                ? Configuration_Network.fromPartial(object.network)
                : undefined;
        message.sketch =
            object.sketch !== undefined && object.sketch !== null
                ? Configuration_Sketch.fromPartial(object.sketch)
                : undefined;
        message.buildCache =
            object.buildCache !== undefined && object.buildCache !== null
                ? Configuration_BuildCache.fromPartial(object.buildCache)
                : undefined;
        message.boardManager =
            object.boardManager !== undefined && object.boardManager !== null
                ? Configuration_BoardManager.fromPartial(object.boardManager)
                : undefined;
        message.daemon =
            object.daemon !== undefined && object.daemon !== null
                ? Configuration_Daemon.fromPartial(object.daemon)
                : undefined;
        message.output =
            object.output !== undefined && object.output !== null
                ? Configuration_Output.fromPartial(object.output)
                : undefined;
        message.logging =
            object.logging !== undefined && object.logging !== null
                ? Configuration_Logging.fromPartial(object.logging)
                : undefined;
        message.library =
            object.library !== undefined && object.library !== null
                ? Configuration_Library.fromPartial(object.library)
                : undefined;
        message.updater =
            object.updater !== undefined && object.updater !== null
                ? Configuration_Updater.fromPartial(object.updater)
                : undefined;
        message.locale = object.locale ?? undefined;
        return message;
    },
};

function createBaseConfiguration_Directories(): Configuration_Directories {
    return { data: '', user: '', downloads: '', builtin: undefined };
}

export const Configuration_Directories = {
    encode(
        message: Configuration_Directories,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.data !== '') {
            writer.uint32(10).string(message.data);
        }
        if (message.user !== '') {
            writer.uint32(18).string(message.user);
        }
        if (message.downloads !== '') {
            writer.uint32(26).string(message.downloads);
        }
        if (message.builtin !== undefined) {
            Configuration_Directories_Builtin.encode(
                message.builtin,
                writer.uint32(34).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Configuration_Directories {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfiguration_Directories();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.data = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.user = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.downloads = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.builtin = Configuration_Directories_Builtin.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Configuration_Directories {
        return {
            data: isSet(object.data) ? String(object.data) : '',
            user: isSet(object.user) ? String(object.user) : '',
            downloads: isSet(object.downloads) ? String(object.downloads) : '',
            builtin: isSet(object.builtin)
                ? Configuration_Directories_Builtin.fromJSON(object.builtin)
                : undefined,
        };
    },

    toJSON(message: Configuration_Directories): unknown {
        const obj: any = {};
        message.data !== undefined && (obj.data = message.data);
        message.user !== undefined && (obj.user = message.user);
        message.downloads !== undefined && (obj.downloads = message.downloads);
        message.builtin !== undefined &&
            (obj.builtin = message.builtin
                ? Configuration_Directories_Builtin.toJSON(message.builtin)
                : undefined);
        return obj;
    },

    create(
        base?: DeepPartial<Configuration_Directories>
    ): Configuration_Directories {
        return Configuration_Directories.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<Configuration_Directories>
    ): Configuration_Directories {
        const message = createBaseConfiguration_Directories();
        message.data = object.data ?? '';
        message.user = object.user ?? '';
        message.downloads = object.downloads ?? '';
        message.builtin =
            object.builtin !== undefined && object.builtin !== null
                ? Configuration_Directories_Builtin.fromPartial(object.builtin)
                : undefined;
        return message;
    },
};

function createBaseConfiguration_Directories_Builtin(): Configuration_Directories_Builtin {
    return { libraries: undefined };
}

export const Configuration_Directories_Builtin = {
    encode(
        message: Configuration_Directories_Builtin,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.libraries !== undefined) {
            writer.uint32(10).string(message.libraries);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Configuration_Directories_Builtin {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfiguration_Directories_Builtin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.libraries = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Configuration_Directories_Builtin {
        return {
            libraries: isSet(object.libraries)
                ? String(object.libraries)
                : undefined,
        };
    },

    toJSON(message: Configuration_Directories_Builtin): unknown {
        const obj: any = {};
        message.libraries !== undefined && (obj.libraries = message.libraries);
        return obj;
    },

    create(
        base?: DeepPartial<Configuration_Directories_Builtin>
    ): Configuration_Directories_Builtin {
        return Configuration_Directories_Builtin.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<Configuration_Directories_Builtin>
    ): Configuration_Directories_Builtin {
        const message = createBaseConfiguration_Directories_Builtin();
        message.libraries = object.libraries ?? undefined;
        return message;
    },
};

function createBaseConfiguration_Network(): Configuration_Network {
    return { extraUserAgent: undefined, proxy: undefined };
}

export const Configuration_Network = {
    encode(
        message: Configuration_Network,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.extraUserAgent !== undefined) {
            writer.uint32(10).string(message.extraUserAgent);
        }
        if (message.proxy !== undefined) {
            writer.uint32(18).string(message.proxy);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Configuration_Network {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfiguration_Network();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.extraUserAgent = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.proxy = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Configuration_Network {
        return {
            extraUserAgent: isSet(object.extraUserAgent)
                ? String(object.extraUserAgent)
                : undefined,
            proxy: isSet(object.proxy) ? String(object.proxy) : undefined,
        };
    },

    toJSON(message: Configuration_Network): unknown {
        const obj: any = {};
        message.extraUserAgent !== undefined &&
            (obj.extraUserAgent = message.extraUserAgent);
        message.proxy !== undefined && (obj.proxy = message.proxy);
        return obj;
    },

    create(base?: DeepPartial<Configuration_Network>): Configuration_Network {
        return Configuration_Network.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<Configuration_Network>
    ): Configuration_Network {
        const message = createBaseConfiguration_Network();
        message.extraUserAgent = object.extraUserAgent ?? undefined;
        message.proxy = object.proxy ?? undefined;
        return message;
    },
};

function createBaseConfiguration_Sketch(): Configuration_Sketch {
    return { alwaysExportBinaries: false };
}

export const Configuration_Sketch = {
    encode(
        message: Configuration_Sketch,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.alwaysExportBinaries === true) {
            writer.uint32(8).bool(message.alwaysExportBinaries);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Configuration_Sketch {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfiguration_Sketch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.alwaysExportBinaries = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Configuration_Sketch {
        return {
            alwaysExportBinaries: isSet(object.alwaysExportBinaries)
                ? Boolean(object.alwaysExportBinaries)
                : false,
        };
    },

    toJSON(message: Configuration_Sketch): unknown {
        const obj: any = {};
        message.alwaysExportBinaries !== undefined &&
            (obj.alwaysExportBinaries = message.alwaysExportBinaries);
        return obj;
    },

    create(base?: DeepPartial<Configuration_Sketch>): Configuration_Sketch {
        return Configuration_Sketch.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<Configuration_Sketch>
    ): Configuration_Sketch {
        const message = createBaseConfiguration_Sketch();
        message.alwaysExportBinaries = object.alwaysExportBinaries ?? false;
        return message;
    },
};

function createBaseConfiguration_BuildCache(): Configuration_BuildCache {
    return { compilationsBeforePurge: 0, ttlSecs: 0 };
}

export const Configuration_BuildCache = {
    encode(
        message: Configuration_BuildCache,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.compilationsBeforePurge !== 0) {
            writer.uint32(8).uint64(message.compilationsBeforePurge);
        }
        if (message.ttlSecs !== 0) {
            writer.uint32(16).uint64(message.ttlSecs);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Configuration_BuildCache {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfiguration_BuildCache();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.compilationsBeforePurge = longToNumber(
                        reader.uint64() as Long
                    );
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.ttlSecs = longToNumber(reader.uint64() as Long);
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Configuration_BuildCache {
        return {
            compilationsBeforePurge: isSet(object.compilationsBeforePurge)
                ? Number(object.compilationsBeforePurge)
                : 0,
            ttlSecs: isSet(object.ttlSecs) ? Number(object.ttlSecs) : 0,
        };
    },

    toJSON(message: Configuration_BuildCache): unknown {
        const obj: any = {};
        message.compilationsBeforePurge !== undefined &&
            (obj.compilationsBeforePurge = Math.round(
                message.compilationsBeforePurge
            ));
        message.ttlSecs !== undefined &&
            (obj.ttlSecs = Math.round(message.ttlSecs));
        return obj;
    },

    create(
        base?: DeepPartial<Configuration_BuildCache>
    ): Configuration_BuildCache {
        return Configuration_BuildCache.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<Configuration_BuildCache>
    ): Configuration_BuildCache {
        const message = createBaseConfiguration_BuildCache();
        message.compilationsBeforePurge = object.compilationsBeforePurge ?? 0;
        message.ttlSecs = object.ttlSecs ?? 0;
        return message;
    },
};

function createBaseConfiguration_BoardManager(): Configuration_BoardManager {
    return { additionalUrls: [] };
}

export const Configuration_BoardManager = {
    encode(
        message: Configuration_BoardManager,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.additionalUrls) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Configuration_BoardManager {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfiguration_BoardManager();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.additionalUrls.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Configuration_BoardManager {
        return {
            additionalUrls: Array.isArray(object?.additionalUrls)
                ? object.additionalUrls.map((e: any) => String(e))
                : [],
        };
    },

    toJSON(message: Configuration_BoardManager): unknown {
        const obj: any = {};
        if (message.additionalUrls) {
            obj.additionalUrls = message.additionalUrls.map((e) => e);
        } else {
            obj.additionalUrls = [];
        }
        return obj;
    },

    create(
        base?: DeepPartial<Configuration_BoardManager>
    ): Configuration_BoardManager {
        return Configuration_BoardManager.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<Configuration_BoardManager>
    ): Configuration_BoardManager {
        const message = createBaseConfiguration_BoardManager();
        message.additionalUrls = object.additionalUrls?.map((e) => e) || [];
        return message;
    },
};

function createBaseConfiguration_Daemon(): Configuration_Daemon {
    return { port: '' };
}

export const Configuration_Daemon = {
    encode(
        message: Configuration_Daemon,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.port !== '') {
            writer.uint32(10).string(message.port);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Configuration_Daemon {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfiguration_Daemon();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.port = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Configuration_Daemon {
        return { port: isSet(object.port) ? String(object.port) : '' };
    },

    toJSON(message: Configuration_Daemon): unknown {
        const obj: any = {};
        message.port !== undefined && (obj.port = message.port);
        return obj;
    },

    create(base?: DeepPartial<Configuration_Daemon>): Configuration_Daemon {
        return Configuration_Daemon.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<Configuration_Daemon>
    ): Configuration_Daemon {
        const message = createBaseConfiguration_Daemon();
        message.port = object.port ?? '';
        return message;
    },
};

function createBaseConfiguration_Output(): Configuration_Output {
    return { noColor: false };
}

export const Configuration_Output = {
    encode(
        message: Configuration_Output,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.noColor === true) {
            writer.uint32(8).bool(message.noColor);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Configuration_Output {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfiguration_Output();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.noColor = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Configuration_Output {
        return {
            noColor: isSet(object.noColor) ? Boolean(object.noColor) : false,
        };
    },

    toJSON(message: Configuration_Output): unknown {
        const obj: any = {};
        message.noColor !== undefined && (obj.noColor = message.noColor);
        return obj;
    },

    create(base?: DeepPartial<Configuration_Output>): Configuration_Output {
        return Configuration_Output.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<Configuration_Output>
    ): Configuration_Output {
        const message = createBaseConfiguration_Output();
        message.noColor = object.noColor ?? false;
        return message;
    },
};

function createBaseConfiguration_Logging(): Configuration_Logging {
    return { level: '', format: '', file: undefined };
}

export const Configuration_Logging = {
    encode(
        message: Configuration_Logging,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.level !== '') {
            writer.uint32(10).string(message.level);
        }
        if (message.format !== '') {
            writer.uint32(18).string(message.format);
        }
        if (message.file !== undefined) {
            writer.uint32(26).string(message.file);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Configuration_Logging {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfiguration_Logging();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.level = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.format = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.file = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Configuration_Logging {
        return {
            level: isSet(object.level) ? String(object.level) : '',
            format: isSet(object.format) ? String(object.format) : '',
            file: isSet(object.file) ? String(object.file) : undefined,
        };
    },

    toJSON(message: Configuration_Logging): unknown {
        const obj: any = {};
        message.level !== undefined && (obj.level = message.level);
        message.format !== undefined && (obj.format = message.format);
        message.file !== undefined && (obj.file = message.file);
        return obj;
    },

    create(base?: DeepPartial<Configuration_Logging>): Configuration_Logging {
        return Configuration_Logging.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<Configuration_Logging>
    ): Configuration_Logging {
        const message = createBaseConfiguration_Logging();
        message.level = object.level ?? '';
        message.format = object.format ?? '';
        message.file = object.file ?? undefined;
        return message;
    },
};

function createBaseConfiguration_Library(): Configuration_Library {
    return { enableUnsafeInstall: false };
}

export const Configuration_Library = {
    encode(
        message: Configuration_Library,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.enableUnsafeInstall === true) {
            writer.uint32(8).bool(message.enableUnsafeInstall);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Configuration_Library {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfiguration_Library();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.enableUnsafeInstall = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Configuration_Library {
        return {
            enableUnsafeInstall: isSet(object.enableUnsafeInstall)
                ? Boolean(object.enableUnsafeInstall)
                : false,
        };
    },

    toJSON(message: Configuration_Library): unknown {
        const obj: any = {};
        message.enableUnsafeInstall !== undefined &&
            (obj.enableUnsafeInstall = message.enableUnsafeInstall);
        return obj;
    },

    create(base?: DeepPartial<Configuration_Library>): Configuration_Library {
        return Configuration_Library.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<Configuration_Library>
    ): Configuration_Library {
        const message = createBaseConfiguration_Library();
        message.enableUnsafeInstall = object.enableUnsafeInstall ?? false;
        return message;
    },
};

function createBaseConfiguration_Updater(): Configuration_Updater {
    return { enableNotification: false };
}

export const Configuration_Updater = {
    encode(
        message: Configuration_Updater,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.enableNotification === true) {
            writer.uint32(8).bool(message.enableNotification);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): Configuration_Updater {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfiguration_Updater();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.enableNotification = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): Configuration_Updater {
        return {
            enableNotification: isSet(object.enableNotification)
                ? Boolean(object.enableNotification)
                : false,
        };
    },

    toJSON(message: Configuration_Updater): unknown {
        const obj: any = {};
        message.enableNotification !== undefined &&
            (obj.enableNotification = message.enableNotification);
        return obj;
    },

    create(base?: DeepPartial<Configuration_Updater>): Configuration_Updater {
        return Configuration_Updater.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<Configuration_Updater>
    ): Configuration_Updater {
        const message = createBaseConfiguration_Updater();
        message.enableNotification = object.enableNotification ?? false;
        return message;
    },
};

function createBaseConfigurationGetRequest(): ConfigurationGetRequest {
    return {};
}

export const ConfigurationGetRequest = {
    encode(
        _: ConfigurationGetRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ConfigurationGetRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigurationGetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(_: any): ConfigurationGetRequest {
        return {};
    },

    toJSON(_: ConfigurationGetRequest): unknown {
        const obj: any = {};
        return obj;
    },

    create(
        base?: DeepPartial<ConfigurationGetRequest>
    ): ConfigurationGetRequest {
        return ConfigurationGetRequest.fromPartial(base ?? {});
    },

    fromPartial(
        _: DeepPartial<ConfigurationGetRequest>
    ): ConfigurationGetRequest {
        const message = createBaseConfigurationGetRequest();
        return message;
    },
};

function createBaseConfigurationGetResponse(): ConfigurationGetResponse {
    return { configuration: undefined };
}

export const ConfigurationGetResponse = {
    encode(
        message: ConfigurationGetResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.configuration !== undefined) {
            Configuration.encode(
                message.configuration,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ConfigurationGetResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigurationGetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.configuration = Configuration.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ConfigurationGetResponse {
        return {
            configuration: isSet(object.configuration)
                ? Configuration.fromJSON(object.configuration)
                : undefined,
        };
    },

    toJSON(message: ConfigurationGetResponse): unknown {
        const obj: any = {};
        message.configuration !== undefined &&
            (obj.configuration = message.configuration
                ? Configuration.toJSON(message.configuration)
                : undefined);
        return obj;
    },

    create(
        base?: DeepPartial<ConfigurationGetResponse>
    ): ConfigurationGetResponse {
        return ConfigurationGetResponse.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<ConfigurationGetResponse>
    ): ConfigurationGetResponse {
        const message = createBaseConfigurationGetResponse();
        message.configuration =
            object.configuration !== undefined && object.configuration !== null
                ? Configuration.fromPartial(object.configuration)
                : undefined;
        return message;
    },
};

function createBaseConfigurationSaveRequest(): ConfigurationSaveRequest {
    return { settingsFormat: '' };
}

export const ConfigurationSaveRequest = {
    encode(
        message: ConfigurationSaveRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.settingsFormat !== '') {
            writer.uint32(10).string(message.settingsFormat);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ConfigurationSaveRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigurationSaveRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.settingsFormat = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ConfigurationSaveRequest {
        return {
            settingsFormat: isSet(object.settingsFormat)
                ? String(object.settingsFormat)
                : '',
        };
    },

    toJSON(message: ConfigurationSaveRequest): unknown {
        const obj: any = {};
        message.settingsFormat !== undefined &&
            (obj.settingsFormat = message.settingsFormat);
        return obj;
    },

    create(
        base?: DeepPartial<ConfigurationSaveRequest>
    ): ConfigurationSaveRequest {
        return ConfigurationSaveRequest.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<ConfigurationSaveRequest>
    ): ConfigurationSaveRequest {
        const message = createBaseConfigurationSaveRequest();
        message.settingsFormat = object.settingsFormat ?? '';
        return message;
    },
};

function createBaseConfigurationSaveResponse(): ConfigurationSaveResponse {
    return { encodedSettings: '' };
}

export const ConfigurationSaveResponse = {
    encode(
        message: ConfigurationSaveResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.encodedSettings !== '') {
            writer.uint32(10).string(message.encodedSettings);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ConfigurationSaveResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigurationSaveResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.encodedSettings = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ConfigurationSaveResponse {
        return {
            encodedSettings: isSet(object.encodedSettings)
                ? String(object.encodedSettings)
                : '',
        };
    },

    toJSON(message: ConfigurationSaveResponse): unknown {
        const obj: any = {};
        message.encodedSettings !== undefined &&
            (obj.encodedSettings = message.encodedSettings);
        return obj;
    },

    create(
        base?: DeepPartial<ConfigurationSaveResponse>
    ): ConfigurationSaveResponse {
        return ConfigurationSaveResponse.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<ConfigurationSaveResponse>
    ): ConfigurationSaveResponse {
        const message = createBaseConfigurationSaveResponse();
        message.encodedSettings = object.encodedSettings ?? '';
        return message;
    },
};

function createBaseConfigurationOpenRequest(): ConfigurationOpenRequest {
    return { encodedSettings: '', settingsFormat: '' };
}

export const ConfigurationOpenRequest = {
    encode(
        message: ConfigurationOpenRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.encodedSettings !== '') {
            writer.uint32(10).string(message.encodedSettings);
        }
        if (message.settingsFormat !== '') {
            writer.uint32(18).string(message.settingsFormat);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ConfigurationOpenRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigurationOpenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.encodedSettings = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.settingsFormat = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ConfigurationOpenRequest {
        return {
            encodedSettings: isSet(object.encodedSettings)
                ? String(object.encodedSettings)
                : '',
            settingsFormat: isSet(object.settingsFormat)
                ? String(object.settingsFormat)
                : '',
        };
    },

    toJSON(message: ConfigurationOpenRequest): unknown {
        const obj: any = {};
        message.encodedSettings !== undefined &&
            (obj.encodedSettings = message.encodedSettings);
        message.settingsFormat !== undefined &&
            (obj.settingsFormat = message.settingsFormat);
        return obj;
    },

    create(
        base?: DeepPartial<ConfigurationOpenRequest>
    ): ConfigurationOpenRequest {
        return ConfigurationOpenRequest.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<ConfigurationOpenRequest>
    ): ConfigurationOpenRequest {
        const message = createBaseConfigurationOpenRequest();
        message.encodedSettings = object.encodedSettings ?? '';
        message.settingsFormat = object.settingsFormat ?? '';
        return message;
    },
};

function createBaseConfigurationOpenResponse(): ConfigurationOpenResponse {
    return { warnings: [] };
}

export const ConfigurationOpenResponse = {
    encode(
        message: ConfigurationOpenResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.warnings) {
            writer.uint32(10).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ConfigurationOpenResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigurationOpenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.warnings.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ConfigurationOpenResponse {
        return {
            warnings: Array.isArray(object?.warnings)
                ? object.warnings.map((e: any) => String(e))
                : [],
        };
    },

    toJSON(message: ConfigurationOpenResponse): unknown {
        const obj: any = {};
        if (message.warnings) {
            obj.warnings = message.warnings.map((e) => e);
        } else {
            obj.warnings = [];
        }
        return obj;
    },

    create(
        base?: DeepPartial<ConfigurationOpenResponse>
    ): ConfigurationOpenResponse {
        return ConfigurationOpenResponse.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<ConfigurationOpenResponse>
    ): ConfigurationOpenResponse {
        const message = createBaseConfigurationOpenResponse();
        message.warnings = object.warnings?.map((e) => e) || [];
        return message;
    },
};

function createBaseSettingsGetValueRequest(): SettingsGetValueRequest {
    return { key: '', valueFormat: '' };
}

export const SettingsGetValueRequest = {
    encode(
        message: SettingsGetValueRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.valueFormat !== '') {
            writer.uint32(18).string(message.valueFormat);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SettingsGetValueRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSettingsGetValueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.valueFormat = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): SettingsGetValueRequest {
        return {
            key: isSet(object.key) ? String(object.key) : '',
            valueFormat: isSet(object.valueFormat)
                ? String(object.valueFormat)
                : '',
        };
    },

    toJSON(message: SettingsGetValueRequest): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.valueFormat !== undefined &&
            (obj.valueFormat = message.valueFormat);
        return obj;
    },

    create(
        base?: DeepPartial<SettingsGetValueRequest>
    ): SettingsGetValueRequest {
        return SettingsGetValueRequest.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<SettingsGetValueRequest>
    ): SettingsGetValueRequest {
        const message = createBaseSettingsGetValueRequest();
        message.key = object.key ?? '';
        message.valueFormat = object.valueFormat ?? '';
        return message;
    },
};

function createBaseSettingsGetValueResponse(): SettingsGetValueResponse {
    return { encodedValue: '' };
}

export const SettingsGetValueResponse = {
    encode(
        message: SettingsGetValueResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.encodedValue !== '') {
            writer.uint32(10).string(message.encodedValue);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SettingsGetValueResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSettingsGetValueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.encodedValue = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): SettingsGetValueResponse {
        return {
            encodedValue: isSet(object.encodedValue)
                ? String(object.encodedValue)
                : '',
        };
    },

    toJSON(message: SettingsGetValueResponse): unknown {
        const obj: any = {};
        message.encodedValue !== undefined &&
            (obj.encodedValue = message.encodedValue);
        return obj;
    },

    create(
        base?: DeepPartial<SettingsGetValueResponse>
    ): SettingsGetValueResponse {
        return SettingsGetValueResponse.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<SettingsGetValueResponse>
    ): SettingsGetValueResponse {
        const message = createBaseSettingsGetValueResponse();
        message.encodedValue = object.encodedValue ?? '';
        return message;
    },
};

function createBaseSettingsSetValueRequest(): SettingsSetValueRequest {
    return { key: '', encodedValue: '', valueFormat: '' };
}

export const SettingsSetValueRequest = {
    encode(
        message: SettingsSetValueRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.encodedValue !== '') {
            writer.uint32(18).string(message.encodedValue);
        }
        if (message.valueFormat !== '') {
            writer.uint32(26).string(message.valueFormat);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SettingsSetValueRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSettingsSetValueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.encodedValue = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.valueFormat = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): SettingsSetValueRequest {
        return {
            key: isSet(object.key) ? String(object.key) : '',
            encodedValue: isSet(object.encodedValue)
                ? String(object.encodedValue)
                : '',
            valueFormat: isSet(object.valueFormat)
                ? String(object.valueFormat)
                : '',
        };
    },

    toJSON(message: SettingsSetValueRequest): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.encodedValue !== undefined &&
            (obj.encodedValue = message.encodedValue);
        message.valueFormat !== undefined &&
            (obj.valueFormat = message.valueFormat);
        return obj;
    },

    create(
        base?: DeepPartial<SettingsSetValueRequest>
    ): SettingsSetValueRequest {
        return SettingsSetValueRequest.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<SettingsSetValueRequest>
    ): SettingsSetValueRequest {
        const message = createBaseSettingsSetValueRequest();
        message.key = object.key ?? '';
        message.encodedValue = object.encodedValue ?? '';
        message.valueFormat = object.valueFormat ?? '';
        return message;
    },
};

function createBaseSettingsSetValueResponse(): SettingsSetValueResponse {
    return {};
}

export const SettingsSetValueResponse = {
    encode(
        _: SettingsSetValueResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SettingsSetValueResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSettingsSetValueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(_: any): SettingsSetValueResponse {
        return {};
    },

    toJSON(_: SettingsSetValueResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create(
        base?: DeepPartial<SettingsSetValueResponse>
    ): SettingsSetValueResponse {
        return SettingsSetValueResponse.fromPartial(base ?? {});
    },

    fromPartial(
        _: DeepPartial<SettingsSetValueResponse>
    ): SettingsSetValueResponse {
        const message = createBaseSettingsSetValueResponse();
        return message;
    },
};

function createBaseSettingsEnumerateRequest(): SettingsEnumerateRequest {
    return {};
}

export const SettingsEnumerateRequest = {
    encode(
        _: SettingsEnumerateRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SettingsEnumerateRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSettingsEnumerateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(_: any): SettingsEnumerateRequest {
        return {};
    },

    toJSON(_: SettingsEnumerateRequest): unknown {
        const obj: any = {};
        return obj;
    },

    create(
        base?: DeepPartial<SettingsEnumerateRequest>
    ): SettingsEnumerateRequest {
        return SettingsEnumerateRequest.fromPartial(base ?? {});
    },

    fromPartial(
        _: DeepPartial<SettingsEnumerateRequest>
    ): SettingsEnumerateRequest {
        const message = createBaseSettingsEnumerateRequest();
        return message;
    },
};

function createBaseSettingsEnumerateResponse(): SettingsEnumerateResponse {
    return { entries: [] };
}

export const SettingsEnumerateResponse = {
    encode(
        message: SettingsEnumerateResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.entries) {
            SettingsEnumerateResponse_Entry.encode(
                v!,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SettingsEnumerateResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSettingsEnumerateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.entries.push(
                        SettingsEnumerateResponse_Entry.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): SettingsEnumerateResponse {
        return {
            entries: Array.isArray(object?.entries)
                ? object.entries.map((e: any) =>
                      SettingsEnumerateResponse_Entry.fromJSON(e)
                  )
                : [],
        };
    },

    toJSON(message: SettingsEnumerateResponse): unknown {
        const obj: any = {};
        if (message.entries) {
            obj.entries = message.entries.map((e) =>
                e ? SettingsEnumerateResponse_Entry.toJSON(e) : undefined
            );
        } else {
            obj.entries = [];
        }
        return obj;
    },

    create(
        base?: DeepPartial<SettingsEnumerateResponse>
    ): SettingsEnumerateResponse {
        return SettingsEnumerateResponse.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<SettingsEnumerateResponse>
    ): SettingsEnumerateResponse {
        const message = createBaseSettingsEnumerateResponse();
        message.entries =
            object.entries?.map((e) =>
                SettingsEnumerateResponse_Entry.fromPartial(e)
            ) || [];
        return message;
    },
};

function createBaseSettingsEnumerateResponse_Entry(): SettingsEnumerateResponse_Entry {
    return { key: '', type: '' };
}

export const SettingsEnumerateResponse_Entry = {
    encode(
        message: SettingsEnumerateResponse_Entry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.type !== '') {
            writer.uint32(18).string(message.type);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SettingsEnumerateResponse_Entry {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSettingsEnumerateResponse_Entry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.type = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): SettingsEnumerateResponse_Entry {
        return {
            key: isSet(object.key) ? String(object.key) : '',
            type: isSet(object.type) ? String(object.type) : '',
        };
    },

    toJSON(message: SettingsEnumerateResponse_Entry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },

    create(
        base?: DeepPartial<SettingsEnumerateResponse_Entry>
    ): SettingsEnumerateResponse_Entry {
        return SettingsEnumerateResponse_Entry.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<SettingsEnumerateResponse_Entry>
    ): SettingsEnumerateResponse_Entry {
        const message = createBaseSettingsEnumerateResponse_Entry();
        message.key = object.key ?? '';
        message.type = object.type ?? '';
        return message;
    },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
    if (typeof globalThis !== 'undefined') {
        return globalThis;
    }
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    throw 'Unable to locate global object';
})();

type Builtin =
    | Date
    | Function
    | Uint8Array
    | string
    | number
    | boolean
    | undefined;

type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends { $case: string }
    ? { [K in keyof Omit<T, '$case'>]?: DeepPartial<T[K]> } & {
          $case: T['$case'];
      }
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new tsProtoGlobalThis.Error(
            'Value is larger than Number.MAX_SAFE_INTEGER'
        );
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
