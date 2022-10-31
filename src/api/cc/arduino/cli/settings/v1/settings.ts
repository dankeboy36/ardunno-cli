/* eslint-disable */
import { CallContext, CallOptions } from 'nice-grpc-common';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'cc.arduino.cli.settings.v1';

export interface GetAllResponse {
    /** The settings, in JSON format. */
    jsonData: string;
}

export interface MergeRequest {
    /** The settings, in JSON format. */
    jsonData: string;
}

export interface GetValueResponse {
    /** The key of the setting. */
    key: string;
    /** The setting, in JSON format. */
    jsonData: string;
}

export interface SetValueRequest {
    /** The key of the setting. */
    key: string;
    /** The setting, in JSON format. */
    jsonData: string;
}

export interface GetAllRequest {}

export interface GetValueRequest {
    /** The key of the setting. */
    key: string;
}

export interface MergeResponse {}

export interface SetValueResponse {}

export interface WriteRequest {
    /** Path to settings file (e.g. /path/to/arduino-cli.yaml) */
    filePath: string;
}

export interface WriteResponse {}

function createBaseGetAllResponse(): GetAllResponse {
    return { jsonData: '' };
}

export const GetAllResponse = {
    encode(message: GetAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.jsonData !== '') {
            writer.uint32(10).string(message.jsonData);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetAllResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAllResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.jsonData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetAllResponse {
        return { jsonData: isSet(object.jsonData) ? String(object.jsonData) : '' };
    },

    toJSON(message: GetAllResponse): unknown {
        const obj: any = {};
        message.jsonData !== undefined && (obj.jsonData = message.jsonData);
        return obj;
    },

    fromPartial(object: DeepPartial<GetAllResponse>): GetAllResponse {
        const message = createBaseGetAllResponse();
        message.jsonData = object.jsonData ?? '';
        return message;
    },
};

function createBaseMergeRequest(): MergeRequest {
    return { jsonData: '' };
}

export const MergeRequest = {
    encode(message: MergeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.jsonData !== '') {
            writer.uint32(10).string(message.jsonData);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MergeRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMergeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.jsonData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MergeRequest {
        return { jsonData: isSet(object.jsonData) ? String(object.jsonData) : '' };
    },

    toJSON(message: MergeRequest): unknown {
        const obj: any = {};
        message.jsonData !== undefined && (obj.jsonData = message.jsonData);
        return obj;
    },

    fromPartial(object: DeepPartial<MergeRequest>): MergeRequest {
        const message = createBaseMergeRequest();
        message.jsonData = object.jsonData ?? '';
        return message;
    },
};

function createBaseGetValueResponse(): GetValueResponse {
    return { key: '', jsonData: '' };
}

export const GetValueResponse = {
    encode(message: GetValueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.jsonData !== '') {
            writer.uint32(18).string(message.jsonData);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetValueResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.jsonData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetValueResponse {
        return {
            key: isSet(object.key) ? String(object.key) : '',
            jsonData: isSet(object.jsonData) ? String(object.jsonData) : '',
        };
    },

    toJSON(message: GetValueResponse): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.jsonData !== undefined && (obj.jsonData = message.jsonData);
        return obj;
    },

    fromPartial(object: DeepPartial<GetValueResponse>): GetValueResponse {
        const message = createBaseGetValueResponse();
        message.key = object.key ?? '';
        message.jsonData = object.jsonData ?? '';
        return message;
    },
};

function createBaseSetValueRequest(): SetValueRequest {
    return { key: '', jsonData: '' };
}

export const SetValueRequest = {
    encode(message: SetValueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.jsonData !== '') {
            writer.uint32(18).string(message.jsonData);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetValueRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetValueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.jsonData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SetValueRequest {
        return {
            key: isSet(object.key) ? String(object.key) : '',
            jsonData: isSet(object.jsonData) ? String(object.jsonData) : '',
        };
    },

    toJSON(message: SetValueRequest): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.jsonData !== undefined && (obj.jsonData = message.jsonData);
        return obj;
    },

    fromPartial(object: DeepPartial<SetValueRequest>): SetValueRequest {
        const message = createBaseSetValueRequest();
        message.key = object.key ?? '';
        message.jsonData = object.jsonData ?? '';
        return message;
    },
};

function createBaseGetAllRequest(): GetAllRequest {
    return {};
}

export const GetAllRequest = {
    encode(_: GetAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetAllRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAllRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): GetAllRequest {
        return {};
    },

    toJSON(_: GetAllRequest): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<GetAllRequest>): GetAllRequest {
        const message = createBaseGetAllRequest();
        return message;
    },
};

function createBaseGetValueRequest(): GetValueRequest {
    return { key: '' };
}

export const GetValueRequest = {
    encode(message: GetValueRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): GetValueRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GetValueRequest {
        return { key: isSet(object.key) ? String(object.key) : '' };
    },

    toJSON(message: GetValueRequest): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },

    fromPartial(object: DeepPartial<GetValueRequest>): GetValueRequest {
        const message = createBaseGetValueRequest();
        message.key = object.key ?? '';
        return message;
    },
};

function createBaseMergeResponse(): MergeResponse {
    return {};
}

export const MergeResponse = {
    encode(_: MergeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MergeResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMergeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): MergeResponse {
        return {};
    },

    toJSON(_: MergeResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<MergeResponse>): MergeResponse {
        const message = createBaseMergeResponse();
        return message;
    },
};

function createBaseSetValueResponse(): SetValueResponse {
    return {};
}

export const SetValueResponse = {
    encode(_: SetValueResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SetValueResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetValueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): SetValueResponse {
        return {};
    },

    toJSON(_: SetValueResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<SetValueResponse>): SetValueResponse {
        const message = createBaseSetValueResponse();
        return message;
    },
};

function createBaseWriteRequest(): WriteRequest {
    return { filePath: '' };
}

export const WriteRequest = {
    encode(message: WriteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.filePath !== '') {
            writer.uint32(10).string(message.filePath);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WriteRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWriteRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filePath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): WriteRequest {
        return { filePath: isSet(object.filePath) ? String(object.filePath) : '' };
    },

    toJSON(message: WriteRequest): unknown {
        const obj: any = {};
        message.filePath !== undefined && (obj.filePath = message.filePath);
        return obj;
    },

    fromPartial(object: DeepPartial<WriteRequest>): WriteRequest {
        const message = createBaseWriteRequest();
        message.filePath = object.filePath ?? '';
        return message;
    },
};

function createBaseWriteResponse(): WriteResponse {
    return {};
}

export const WriteResponse = {
    encode(_: WriteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): WriteResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWriteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(_: any): WriteResponse {
        return {};
    },

    toJSON(_: WriteResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<WriteResponse>): WriteResponse {
        const message = createBaseWriteResponse();
        return message;
    },
};

/**
 * The SettingsService provides an interface to Arduino CLI configuration
 * options
 */
export type SettingsServiceDefinition = typeof SettingsServiceDefinition;
export const SettingsServiceDefinition = {
    name: 'SettingsService',
    fullName: 'cc.arduino.cli.settings.v1.SettingsService',
    methods: {
        /** List all the settings. */
        getAll: {
            name: 'GetAll',
            requestType: GetAllRequest,
            requestStream: false,
            responseType: GetAllResponse,
            responseStream: false,
            options: {},
        },
        /** Set multiple settings values at once. */
        merge: {
            name: 'Merge',
            requestType: MergeRequest,
            requestStream: false,
            responseType: MergeResponse,
            responseStream: false,
            options: {},
        },
        /** Get the value of a specific setting. */
        getValue: {
            name: 'GetValue',
            requestType: GetValueRequest,
            requestStream: false,
            responseType: GetValueResponse,
            responseStream: false,
            options: {},
        },
        /** Set the value of a specific setting. */
        setValue: {
            name: 'SetValue',
            requestType: SetValueRequest,
            requestStream: false,
            responseType: SetValueResponse,
            responseStream: false,
            options: {},
        },
        /** Writes to file settings currently stored in memory */
        write: {
            name: 'Write',
            requestType: WriteRequest,
            requestStream: false,
            responseType: WriteResponse,
            responseStream: false,
            options: {},
        },
    },
} as const;

export interface SettingsServiceServiceImplementation<CallContextExt = {}> {
    /** List all the settings. */
    getAll(request: GetAllRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetAllResponse>>;
    /** Set multiple settings values at once. */
    merge(request: MergeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<MergeResponse>>;
    /** Get the value of a specific setting. */
    getValue(request: GetValueRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetValueResponse>>;
    /** Set the value of a specific setting. */
    setValue(request: SetValueRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetValueResponse>>;
    /** Writes to file settings currently stored in memory */
    write(request: WriteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<WriteResponse>>;
}

export interface SettingsServiceClient<CallOptionsExt = {}> {
    /** List all the settings. */
    getAll(request: DeepPartial<GetAllRequest>, options?: CallOptions & CallOptionsExt): Promise<GetAllResponse>;
    /** Set multiple settings values at once. */
    merge(request: DeepPartial<MergeRequest>, options?: CallOptions & CallOptionsExt): Promise<MergeResponse>;
    /** Get the value of a specific setting. */
    getValue(request: DeepPartial<GetValueRequest>, options?: CallOptions & CallOptionsExt): Promise<GetValueResponse>;
    /** Set the value of a specific setting. */
    setValue(request: DeepPartial<SetValueRequest>, options?: CallOptions & CallOptionsExt): Promise<SetValueResponse>;
    /** Writes to file settings currently stored in memory */
    write(request: DeepPartial<WriteRequest>, options?: CallOptions & CallOptionsExt): Promise<WriteResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends { $case: string }
    ? { [K in keyof Omit<T, '$case'>]?: DeepPartial<T[K]> } & { $case: T['$case'] }
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
