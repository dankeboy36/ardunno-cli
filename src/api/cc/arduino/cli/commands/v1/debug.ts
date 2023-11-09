/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Any } from '../../../../../google/protobuf/any';
import { Instance } from './common';
import { Port } from './port';

/**
 * The top-level message sent by the client for the `Debug` method.
 * Multiple `DebugRequest` messages can be sent but the first message
 * must contain a `GetDebugConfigRequest` message to initialize the debug
 * session. All subsequent messages must contain bytes to be sent to the debug
 * session and must not contain a `GetDebugConfigRequest` message.
 */
export interface DebugRequest {
    /**
     * Provides information to the debug that specifies which is the target.
     * The first `DebugRequest` message must contain a `GetDebugConfigRequest`
     * message.
     */
    debugRequest: GetDebugConfigRequest | undefined;
    /** The data to be sent to the target being monitored. */
    data: Uint8Array;
    /** Set this to true to send and Interrupt signal to the debugger process */
    sendInterrupt: boolean;
}

export interface GetDebugConfigRequest {
    /** Arduino Core Service instance from the `Init` response. */
    instance: Instance | undefined;
    /**
     * Fully qualified board name of the board in use
     * (e.g., `arduino:samd:mkr1000`). If this is omitted, the FQBN attached to
     * the sketch will be used.
     */
    fqbn: string;
    /**
     * Path to the sketch that is running on the board. The compiled executable
     * is expected to be located under this path.
     */
    sketchPath: string;
    /** Port of the debugger (optional). */
    port: Port | undefined;
    /** Which GDB command interpreter to use. */
    interpreter: string;
    /**
     * Directory containing the compiled executable. If `import_dir` is not
     * specified, the executable is assumed to be in
     * `{sketch_path}/build/{fqbn}/`.
     */
    importDir: string;
    /** The programmer to use for debugging. */
    programmer: string;
}

/**  */
export interface DebugResponse {
    /** Incoming data from the debugger tool. */
    data: Uint8Array;
    /** Incoming error output from the debugger tool. */
    error: string;
}

export interface GetDebugConfigResponse {
    /** The executable binary to debug */
    executable: string;
    /** The toolchain type used for the build (for example "gcc") */
    toolchain: string;
    /** The toolchain directory */
    toolchainPath: string;
    /** The toolchain architecture prefix (for example "arm-none-eabi-") */
    toolchainPrefix: string;
    /**
     * The GDB server type used to connect to the programmer/board (for example
     * "openocd")
     */
    server: string;
    /** The GDB server directory */
    serverPath: string;
    /** Extra configuration parameters wrt toolchain */
    toolchainConfiguration: Any | undefined;
    /** Extra configuration parameters wrt GDB server */
    serverConfiguration: Any | undefined;
    /**
     * Custom debugger configurations (not handled directly by Arduino CLI but
     * provided for 3rd party plugins/debuggers). The map keys identifies which
     * 3rd party plugin/debugger is referred, the map string values contains a
     * JSON configuration for it.
     */
    customConfigs: { [key: string]: string };
    /** the SVD file to use */
    svdFile: string;
    /** The programmer specified in the request */
    programmer: string;
}

export interface GetDebugConfigResponse_CustomConfigsEntry {
    key: string;
    value: string;
}

/** Configurations specific for the 'gcc' toolchain */
export interface DebugGCCToolchainConfiguration {}

/** Configuration specific for the 'openocd` server */
export interface DebugOpenOCDServerConfiguration {
    /** path to openocd */
    path: string;
    /** path to openocd scripts */
    scriptsDir: string;
    /** list of scripts to execute by openocd */
    scripts: string[];
}

function createBaseDebugRequest(): DebugRequest {
    return {
        debugRequest: undefined,
        data: new Uint8Array(0),
        sendInterrupt: false,
    };
}

export const DebugRequest = {
    encode(
        message: DebugRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.debugRequest !== undefined) {
            GetDebugConfigRequest.encode(
                message.debugRequest,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.sendInterrupt === true) {
            writer.uint32(24).bool(message.sendInterrupt);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DebugRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDebugRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.debugRequest = GetDebugConfigRequest.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.data = reader.bytes();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.sendInterrupt = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): DebugRequest {
        return {
            debugRequest: isSet(object.debugRequest)
                ? GetDebugConfigRequest.fromJSON(object.debugRequest)
                : undefined,
            data: isSet(object.data)
                ? bytesFromBase64(object.data)
                : new Uint8Array(0),
            sendInterrupt: isSet(object.sendInterrupt)
                ? Boolean(object.sendInterrupt)
                : false,
        };
    },

    toJSON(message: DebugRequest): unknown {
        const obj: any = {};
        message.debugRequest !== undefined &&
            (obj.debugRequest = message.debugRequest
                ? GetDebugConfigRequest.toJSON(message.debugRequest)
                : undefined);
        message.data !== undefined &&
            (obj.data = base64FromBytes(
                message.data !== undefined ? message.data : new Uint8Array(0)
            ));
        message.sendInterrupt !== undefined &&
            (obj.sendInterrupt = message.sendInterrupt);
        return obj;
    },

    create(base?: DeepPartial<DebugRequest>): DebugRequest {
        return DebugRequest.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<DebugRequest>): DebugRequest {
        const message = createBaseDebugRequest();
        message.debugRequest =
            object.debugRequest !== undefined && object.debugRequest !== null
                ? GetDebugConfigRequest.fromPartial(object.debugRequest)
                : undefined;
        message.data = object.data ?? new Uint8Array(0);
        message.sendInterrupt = object.sendInterrupt ?? false;
        return message;
    },
};

function createBaseGetDebugConfigRequest(): GetDebugConfigRequest {
    return {
        instance: undefined,
        fqbn: '',
        sketchPath: '',
        port: undefined,
        interpreter: '',
        importDir: '',
        programmer: '',
    };
}

export const GetDebugConfigRequest = {
    encode(
        message: GetDebugConfigRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(
                message.instance,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.fqbn !== '') {
            writer.uint32(18).string(message.fqbn);
        }
        if (message.sketchPath !== '') {
            writer.uint32(26).string(message.sketchPath);
        }
        if (message.port !== undefined) {
            Port.encode(message.port, writer.uint32(34).fork()).ldelim();
        }
        if (message.interpreter !== '') {
            writer.uint32(42).string(message.interpreter);
        }
        if (message.importDir !== '') {
            writer.uint32(66).string(message.importDir);
        }
        if (message.programmer !== '') {
            writer.uint32(74).string(message.programmer);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetDebugConfigRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetDebugConfigRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.instance = Instance.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.fqbn = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.sketchPath = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.port = Port.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.interpreter = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.importDir = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }

                    message.programmer = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): GetDebugConfigRequest {
        return {
            instance: isSet(object.instance)
                ? Instance.fromJSON(object.instance)
                : undefined,
            fqbn: isSet(object.fqbn) ? String(object.fqbn) : '',
            sketchPath: isSet(object.sketchPath)
                ? String(object.sketchPath)
                : '',
            port: isSet(object.port) ? Port.fromJSON(object.port) : undefined,
            interpreter: isSet(object.interpreter)
                ? String(object.interpreter)
                : '',
            importDir: isSet(object.importDir) ? String(object.importDir) : '',
            programmer: isSet(object.programmer)
                ? String(object.programmer)
                : '',
        };
    },

    toJSON(message: GetDebugConfigRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance
                ? Instance.toJSON(message.instance)
                : undefined);
        message.fqbn !== undefined && (obj.fqbn = message.fqbn);
        message.sketchPath !== undefined &&
            (obj.sketchPath = message.sketchPath);
        message.port !== undefined &&
            (obj.port = message.port ? Port.toJSON(message.port) : undefined);
        message.interpreter !== undefined &&
            (obj.interpreter = message.interpreter);
        message.importDir !== undefined && (obj.importDir = message.importDir);
        message.programmer !== undefined &&
            (obj.programmer = message.programmer);
        return obj;
    },

    create(base?: DeepPartial<GetDebugConfigRequest>): GetDebugConfigRequest {
        return GetDebugConfigRequest.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<GetDebugConfigRequest>
    ): GetDebugConfigRequest {
        const message = createBaseGetDebugConfigRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.fqbn = object.fqbn ?? '';
        message.sketchPath = object.sketchPath ?? '';
        message.port =
            object.port !== undefined && object.port !== null
                ? Port.fromPartial(object.port)
                : undefined;
        message.interpreter = object.interpreter ?? '';
        message.importDir = object.importDir ?? '';
        message.programmer = object.programmer ?? '';
        return message;
    },
};

function createBaseDebugResponse(): DebugResponse {
    return { data: new Uint8Array(0), error: '' };
}

export const DebugResponse = {
    encode(
        message: DebugResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.error !== '') {
            writer.uint32(18).string(message.error);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DebugResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDebugResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.data = reader.bytes();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.error = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): DebugResponse {
        return {
            data: isSet(object.data)
                ? bytesFromBase64(object.data)
                : new Uint8Array(0),
            error: isSet(object.error) ? String(object.error) : '',
        };
    },

    toJSON(message: DebugResponse): unknown {
        const obj: any = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(
                message.data !== undefined ? message.data : new Uint8Array(0)
            ));
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },

    create(base?: DeepPartial<DebugResponse>): DebugResponse {
        return DebugResponse.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<DebugResponse>): DebugResponse {
        const message = createBaseDebugResponse();
        message.data = object.data ?? new Uint8Array(0);
        message.error = object.error ?? '';
        return message;
    },
};

function createBaseGetDebugConfigResponse(): GetDebugConfigResponse {
    return {
        executable: '',
        toolchain: '',
        toolchainPath: '',
        toolchainPrefix: '',
        server: '',
        serverPath: '',
        toolchainConfiguration: undefined,
        serverConfiguration: undefined,
        customConfigs: {},
        svdFile: '',
        programmer: '',
    };
}

export const GetDebugConfigResponse = {
    encode(
        message: GetDebugConfigResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.executable !== '') {
            writer.uint32(10).string(message.executable);
        }
        if (message.toolchain !== '') {
            writer.uint32(18).string(message.toolchain);
        }
        if (message.toolchainPath !== '') {
            writer.uint32(26).string(message.toolchainPath);
        }
        if (message.toolchainPrefix !== '') {
            writer.uint32(34).string(message.toolchainPrefix);
        }
        if (message.server !== '') {
            writer.uint32(42).string(message.server);
        }
        if (message.serverPath !== '') {
            writer.uint32(50).string(message.serverPath);
        }
        if (message.toolchainConfiguration !== undefined) {
            Any.encode(
                message.toolchainConfiguration,
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.serverConfiguration !== undefined) {
            Any.encode(
                message.serverConfiguration,
                writer.uint32(66).fork()
            ).ldelim();
        }
        Object.entries(message.customConfigs).forEach(([key, value]) => {
            GetDebugConfigResponse_CustomConfigsEntry.encode(
                { key: key as any, value },
                writer.uint32(74).fork()
            ).ldelim();
        });
        if (message.svdFile !== '') {
            writer.uint32(82).string(message.svdFile);
        }
        if (message.programmer !== '') {
            writer.uint32(90).string(message.programmer);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetDebugConfigResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetDebugConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.executable = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.toolchain = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.toolchainPath = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.toolchainPrefix = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.server = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.serverPath = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.toolchainConfiguration = Any.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.serverConfiguration = Any.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }

                    const entry9 =
                        GetDebugConfigResponse_CustomConfigsEntry.decode(
                            reader,
                            reader.uint32()
                        );
                    if (entry9.value !== undefined) {
                        message.customConfigs[entry9.key] = entry9.value;
                    }
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }

                    message.svdFile = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }

                    message.programmer = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): GetDebugConfigResponse {
        return {
            executable: isSet(object.executable)
                ? String(object.executable)
                : '',
            toolchain: isSet(object.toolchain) ? String(object.toolchain) : '',
            toolchainPath: isSet(object.toolchainPath)
                ? String(object.toolchainPath)
                : '',
            toolchainPrefix: isSet(object.toolchainPrefix)
                ? String(object.toolchainPrefix)
                : '',
            server: isSet(object.server) ? String(object.server) : '',
            serverPath: isSet(object.serverPath)
                ? String(object.serverPath)
                : '',
            toolchainConfiguration: isSet(object.toolchainConfiguration)
                ? Any.fromJSON(object.toolchainConfiguration)
                : undefined,
            serverConfiguration: isSet(object.serverConfiguration)
                ? Any.fromJSON(object.serverConfiguration)
                : undefined,
            customConfigs: isObject(object.customConfigs)
                ? Object.entries(object.customConfigs).reduce<{
                      [key: string]: string;
                  }>((acc, [key, value]) => {
                      acc[key] = String(value);
                      return acc;
                  }, {})
                : {},
            svdFile: isSet(object.svdFile) ? String(object.svdFile) : '',
            programmer: isSet(object.programmer)
                ? String(object.programmer)
                : '',
        };
    },

    toJSON(message: GetDebugConfigResponse): unknown {
        const obj: any = {};
        message.executable !== undefined &&
            (obj.executable = message.executable);
        message.toolchain !== undefined && (obj.toolchain = message.toolchain);
        message.toolchainPath !== undefined &&
            (obj.toolchainPath = message.toolchainPath);
        message.toolchainPrefix !== undefined &&
            (obj.toolchainPrefix = message.toolchainPrefix);
        message.server !== undefined && (obj.server = message.server);
        message.serverPath !== undefined &&
            (obj.serverPath = message.serverPath);
        message.toolchainConfiguration !== undefined &&
            (obj.toolchainConfiguration = message.toolchainConfiguration
                ? Any.toJSON(message.toolchainConfiguration)
                : undefined);
        message.serverConfiguration !== undefined &&
            (obj.serverConfiguration = message.serverConfiguration
                ? Any.toJSON(message.serverConfiguration)
                : undefined);
        obj.customConfigs = {};
        if (message.customConfigs) {
            Object.entries(message.customConfigs).forEach(([k, v]) => {
                obj.customConfigs[k] = v;
            });
        }
        message.svdFile !== undefined && (obj.svdFile = message.svdFile);
        message.programmer !== undefined &&
            (obj.programmer = message.programmer);
        return obj;
    },

    create(base?: DeepPartial<GetDebugConfigResponse>): GetDebugConfigResponse {
        return GetDebugConfigResponse.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<GetDebugConfigResponse>
    ): GetDebugConfigResponse {
        const message = createBaseGetDebugConfigResponse();
        message.executable = object.executable ?? '';
        message.toolchain = object.toolchain ?? '';
        message.toolchainPath = object.toolchainPath ?? '';
        message.toolchainPrefix = object.toolchainPrefix ?? '';
        message.server = object.server ?? '';
        message.serverPath = object.serverPath ?? '';
        message.toolchainConfiguration =
            object.toolchainConfiguration !== undefined &&
            object.toolchainConfiguration !== null
                ? Any.fromPartial(object.toolchainConfiguration)
                : undefined;
        message.serverConfiguration =
            object.serverConfiguration !== undefined &&
            object.serverConfiguration !== null
                ? Any.fromPartial(object.serverConfiguration)
                : undefined;
        message.customConfigs = Object.entries(
            object.customConfigs ?? {}
        ).reduce<{ [key: string]: string }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.svdFile = object.svdFile ?? '';
        message.programmer = object.programmer ?? '';
        return message;
    },
};

function createBaseGetDebugConfigResponse_CustomConfigsEntry(): GetDebugConfigResponse_CustomConfigsEntry {
    return { key: '', value: '' };
}

export const GetDebugConfigResponse_CustomConfigsEntry = {
    encode(
        message: GetDebugConfigResponse_CustomConfigsEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): GetDebugConfigResponse_CustomConfigsEntry {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetDebugConfigResponse_CustomConfigsEntry();
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

                    message.value = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): GetDebugConfigResponse_CustomConfigsEntry {
        return {
            key: isSet(object.key) ? String(object.key) : '',
            value: isSet(object.value) ? String(object.value) : '',
        };
    },

    toJSON(message: GetDebugConfigResponse_CustomConfigsEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    create(
        base?: DeepPartial<GetDebugConfigResponse_CustomConfigsEntry>
    ): GetDebugConfigResponse_CustomConfigsEntry {
        return GetDebugConfigResponse_CustomConfigsEntry.fromPartial(
            base ?? {}
        );
    },

    fromPartial(
        object: DeepPartial<GetDebugConfigResponse_CustomConfigsEntry>
    ): GetDebugConfigResponse_CustomConfigsEntry {
        const message = createBaseGetDebugConfigResponse_CustomConfigsEntry();
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

function createBaseDebugGCCToolchainConfiguration(): DebugGCCToolchainConfiguration {
    return {};
}

export const DebugGCCToolchainConfiguration = {
    encode(
        _: DebugGCCToolchainConfiguration,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DebugGCCToolchainConfiguration {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDebugGCCToolchainConfiguration();
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

    fromJSON(_: any): DebugGCCToolchainConfiguration {
        return {};
    },

    toJSON(_: DebugGCCToolchainConfiguration): unknown {
        const obj: any = {};
        return obj;
    },

    create(
        base?: DeepPartial<DebugGCCToolchainConfiguration>
    ): DebugGCCToolchainConfiguration {
        return DebugGCCToolchainConfiguration.fromPartial(base ?? {});
    },

    fromPartial(
        _: DeepPartial<DebugGCCToolchainConfiguration>
    ): DebugGCCToolchainConfiguration {
        const message = createBaseDebugGCCToolchainConfiguration();
        return message;
    },
};

function createBaseDebugOpenOCDServerConfiguration(): DebugOpenOCDServerConfiguration {
    return { path: '', scriptsDir: '', scripts: [] };
}

export const DebugOpenOCDServerConfiguration = {
    encode(
        message: DebugOpenOCDServerConfiguration,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.path !== '') {
            writer.uint32(10).string(message.path);
        }
        if (message.scriptsDir !== '') {
            writer.uint32(18).string(message.scriptsDir);
        }
        for (const v of message.scripts) {
            writer.uint32(26).string(v!);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DebugOpenOCDServerConfiguration {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDebugOpenOCDServerConfiguration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.path = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.scriptsDir = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.scripts.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): DebugOpenOCDServerConfiguration {
        return {
            path: isSet(object.path) ? String(object.path) : '',
            scriptsDir: isSet(object.scriptsDir)
                ? String(object.scriptsDir)
                : '',
            scripts: Array.isArray(object?.scripts)
                ? object.scripts.map((e: any) => String(e))
                : [],
        };
    },

    toJSON(message: DebugOpenOCDServerConfiguration): unknown {
        const obj: any = {};
        message.path !== undefined && (obj.path = message.path);
        message.scriptsDir !== undefined &&
            (obj.scriptsDir = message.scriptsDir);
        if (message.scripts) {
            obj.scripts = message.scripts.map((e) => e);
        } else {
            obj.scripts = [];
        }
        return obj;
    },

    create(
        base?: DeepPartial<DebugOpenOCDServerConfiguration>
    ): DebugOpenOCDServerConfiguration {
        return DebugOpenOCDServerConfiguration.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<DebugOpenOCDServerConfiguration>
    ): DebugOpenOCDServerConfiguration {
        const message = createBaseDebugOpenOCDServerConfiguration();
        message.path = object.path ?? '';
        message.scriptsDir = object.scriptsDir ?? '';
        message.scripts = object.scripts?.map((e) => e) || [];
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

function bytesFromBase64(b64: string): Uint8Array {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, 'base64'));
    } else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}

function base64FromBytes(arr: Uint8Array): string {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString('base64');
    } else {
        const bin: string[] = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(''));
    }
}

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

function isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
}

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
