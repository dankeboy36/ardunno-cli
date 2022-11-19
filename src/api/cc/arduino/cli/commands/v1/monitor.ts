/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Instance } from './common';
import { Port } from './port';

export const protobufPackage = 'cc.arduino.cli.commands.v1';

export interface MonitorRequest {
    /** Arduino Core Service instance from the `Init` response. */
    instance: Instance | undefined;
    /** Port to open, must be filled only on the first request */
    port: Port | undefined;
    /**
     * The board FQBN we are trying to connect to. This is optional, and  it's
     * needed to disambiguate if more than one platform provides the pluggable
     * monitor for a given port protocol.
     */
    fqbn: string;
    /** Data to send to the port */
    txData: Uint8Array;
    /** Port configuration, optional, contains settings of the port to be applied */
    portConfiguration: MonitorPortConfiguration | undefined;
}

export interface MonitorPortConfiguration {
    /** The port configuration parameters to configure */
    settings: MonitorPortSetting[];
}

export interface MonitorResponse {
    /** Eventual errors dealing with monitor port */
    error: string;
    /** Data received from the port */
    rxData: Uint8Array;
    /**
     * Settings applied to the port, may be returned after a port is opened (to
     * report the default settings) or after a new port_configuration is sent
     * (to report the new settings applied)
     */
    appliedSettings: MonitorPortSetting[];
    /**
     * A message with this field set to true is sent as soon as the port is
     * succesfully opened
     */
    success: boolean;
}

export interface MonitorPortSetting {
    settingId: string;
    value: string;
}

export interface EnumerateMonitorPortSettingsRequest {
    /** Arduino Core Service instance from the `Init` response. */
    instance: Instance | undefined;
    /** The port protocol to enumerate settings. */
    portProtocol: string;
    /**
     * The board FQBN we are trying to connect to. This is optional, and it's
     * needed to disambiguate if more than one platform provides the pluggable
     * monitor for a given port protocol.
     */
    fqbn: string;
}

export interface EnumerateMonitorPortSettingsResponse {
    /**
     * A list of descriptors of the settings that may be changed for the monitor
     * port.
     */
    settings: MonitorPortSettingDescriptor[];
}

export interface MonitorPortSettingDescriptor {
    /** The setting identifier */
    settingId: string;
    /** A human-readable label of the setting (to be displayed on the GUI) */
    label: string;
    /** The setting type (at the moment only "enum" is avaiable) */
    type: string;
    /** The values allowed on "enum" types */
    enumValues: string[];
    /** The selected or default value */
    value: string;
}

function createBaseMonitorRequest(): MonitorRequest {
    return {
        instance: undefined,
        port: undefined,
        fqbn: '',
        txData: new Uint8Array(),
        portConfiguration: undefined,
    };
}

export const MonitorRequest = {
    encode(
        message: MonitorRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(
                message.instance,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.port !== undefined) {
            Port.encode(message.port, writer.uint32(18).fork()).ldelim();
        }
        if (message.fqbn !== '') {
            writer.uint32(26).string(message.fqbn);
        }
        if (message.txData.length !== 0) {
            writer.uint32(34).bytes(message.txData);
        }
        if (message.portConfiguration !== undefined) {
            MonitorPortConfiguration.encode(
                message.portConfiguration,
                writer.uint32(42).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MonitorRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMonitorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.port = Port.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.fqbn = reader.string();
                    break;
                case 4:
                    message.txData = reader.bytes();
                    break;
                case 5:
                    message.portConfiguration = MonitorPortConfiguration.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MonitorRequest {
        return {
            instance: isSet(object.instance)
                ? Instance.fromJSON(object.instance)
                : undefined,
            port: isSet(object.port) ? Port.fromJSON(object.port) : undefined,
            fqbn: isSet(object.fqbn) ? String(object.fqbn) : '',
            txData: isSet(object.txData)
                ? bytesFromBase64(object.txData)
                : new Uint8Array(),
            portConfiguration: isSet(object.portConfiguration)
                ? MonitorPortConfiguration.fromJSON(object.portConfiguration)
                : undefined,
        };
    },

    toJSON(message: MonitorRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance
                ? Instance.toJSON(message.instance)
                : undefined);
        message.port !== undefined &&
            (obj.port = message.port ? Port.toJSON(message.port) : undefined);
        message.fqbn !== undefined && (obj.fqbn = message.fqbn);
        message.txData !== undefined &&
            (obj.txData = base64FromBytes(
                message.txData !== undefined ? message.txData : new Uint8Array()
            ));
        message.portConfiguration !== undefined &&
            (obj.portConfiguration = message.portConfiguration
                ? MonitorPortConfiguration.toJSON(message.portConfiguration)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<MonitorRequest>): MonitorRequest {
        const message = createBaseMonitorRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.port =
            object.port !== undefined && object.port !== null
                ? Port.fromPartial(object.port)
                : undefined;
        message.fqbn = object.fqbn ?? '';
        message.txData = object.txData ?? new Uint8Array();
        message.portConfiguration =
            object.portConfiguration !== undefined &&
            object.portConfiguration !== null
                ? MonitorPortConfiguration.fromPartial(object.portConfiguration)
                : undefined;
        return message;
    },
};

function createBaseMonitorPortConfiguration(): MonitorPortConfiguration {
    return { settings: [] };
}

export const MonitorPortConfiguration = {
    encode(
        message: MonitorPortConfiguration,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.settings) {
            MonitorPortSetting.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MonitorPortConfiguration {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMonitorPortConfiguration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.settings.push(
                        MonitorPortSetting.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MonitorPortConfiguration {
        return {
            settings: Array.isArray(object?.settings)
                ? object.settings.map((e: any) =>
                      MonitorPortSetting.fromJSON(e)
                  )
                : [],
        };
    },

    toJSON(message: MonitorPortConfiguration): unknown {
        const obj: any = {};
        if (message.settings) {
            obj.settings = message.settings.map((e) =>
                e ? MonitorPortSetting.toJSON(e) : undefined
            );
        } else {
            obj.settings = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<MonitorPortConfiguration>
    ): MonitorPortConfiguration {
        const message = createBaseMonitorPortConfiguration();
        message.settings =
            object.settings?.map((e) => MonitorPortSetting.fromPartial(e)) ||
            [];
        return message;
    },
};

function createBaseMonitorResponse(): MonitorResponse {
    return {
        error: '',
        rxData: new Uint8Array(),
        appliedSettings: [],
        success: false,
    };
}

export const MonitorResponse = {
    encode(
        message: MonitorResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.error !== '') {
            writer.uint32(10).string(message.error);
        }
        if (message.rxData.length !== 0) {
            writer.uint32(18).bytes(message.rxData);
        }
        for (const v of message.appliedSettings) {
            MonitorPortSetting.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.success === true) {
            writer.uint32(32).bool(message.success);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MonitorResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMonitorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.error = reader.string();
                    break;
                case 2:
                    message.rxData = reader.bytes();
                    break;
                case 3:
                    message.appliedSettings.push(
                        MonitorPortSetting.decode(reader, reader.uint32())
                    );
                    break;
                case 4:
                    message.success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MonitorResponse {
        return {
            error: isSet(object.error) ? String(object.error) : '',
            rxData: isSet(object.rxData)
                ? bytesFromBase64(object.rxData)
                : new Uint8Array(),
            appliedSettings: Array.isArray(object?.appliedSettings)
                ? object.appliedSettings.map((e: any) =>
                      MonitorPortSetting.fromJSON(e)
                  )
                : [],
            success: isSet(object.success) ? Boolean(object.success) : false,
        };
    },

    toJSON(message: MonitorResponse): unknown {
        const obj: any = {};
        message.error !== undefined && (obj.error = message.error);
        message.rxData !== undefined &&
            (obj.rxData = base64FromBytes(
                message.rxData !== undefined ? message.rxData : new Uint8Array()
            ));
        if (message.appliedSettings) {
            obj.appliedSettings = message.appliedSettings.map((e) =>
                e ? MonitorPortSetting.toJSON(e) : undefined
            );
        } else {
            obj.appliedSettings = [];
        }
        message.success !== undefined && (obj.success = message.success);
        return obj;
    },

    fromPartial(object: DeepPartial<MonitorResponse>): MonitorResponse {
        const message = createBaseMonitorResponse();
        message.error = object.error ?? '';
        message.rxData = object.rxData ?? new Uint8Array();
        message.appliedSettings =
            object.appliedSettings?.map((e) =>
                MonitorPortSetting.fromPartial(e)
            ) || [];
        message.success = object.success ?? false;
        return message;
    },
};

function createBaseMonitorPortSetting(): MonitorPortSetting {
    return { settingId: '', value: '' };
}

export const MonitorPortSetting = {
    encode(
        message: MonitorPortSetting,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.settingId !== '') {
            writer.uint32(10).string(message.settingId);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MonitorPortSetting {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMonitorPortSetting();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.settingId = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MonitorPortSetting {
        return {
            settingId: isSet(object.settingId) ? String(object.settingId) : '',
            value: isSet(object.value) ? String(object.value) : '',
        };
    },

    toJSON(message: MonitorPortSetting): unknown {
        const obj: any = {};
        message.settingId !== undefined && (obj.settingId = message.settingId);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(object: DeepPartial<MonitorPortSetting>): MonitorPortSetting {
        const message = createBaseMonitorPortSetting();
        message.settingId = object.settingId ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

function createBaseEnumerateMonitorPortSettingsRequest(): EnumerateMonitorPortSettingsRequest {
    return { instance: undefined, portProtocol: '', fqbn: '' };
}

export const EnumerateMonitorPortSettingsRequest = {
    encode(
        message: EnumerateMonitorPortSettingsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(
                message.instance,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.portProtocol !== '') {
            writer.uint32(18).string(message.portProtocol);
        }
        if (message.fqbn !== '') {
            writer.uint32(26).string(message.fqbn);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): EnumerateMonitorPortSettingsRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumerateMonitorPortSettingsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.portProtocol = reader.string();
                    break;
                case 3:
                    message.fqbn = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): EnumerateMonitorPortSettingsRequest {
        return {
            instance: isSet(object.instance)
                ? Instance.fromJSON(object.instance)
                : undefined,
            portProtocol: isSet(object.portProtocol)
                ? String(object.portProtocol)
                : '',
            fqbn: isSet(object.fqbn) ? String(object.fqbn) : '',
        };
    },

    toJSON(message: EnumerateMonitorPortSettingsRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance
                ? Instance.toJSON(message.instance)
                : undefined);
        message.portProtocol !== undefined &&
            (obj.portProtocol = message.portProtocol);
        message.fqbn !== undefined && (obj.fqbn = message.fqbn);
        return obj;
    },

    fromPartial(
        object: DeepPartial<EnumerateMonitorPortSettingsRequest>
    ): EnumerateMonitorPortSettingsRequest {
        const message = createBaseEnumerateMonitorPortSettingsRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.portProtocol = object.portProtocol ?? '';
        message.fqbn = object.fqbn ?? '';
        return message;
    },
};

function createBaseEnumerateMonitorPortSettingsResponse(): EnumerateMonitorPortSettingsResponse {
    return { settings: [] };
}

export const EnumerateMonitorPortSettingsResponse = {
    encode(
        message: EnumerateMonitorPortSettingsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.settings) {
            MonitorPortSettingDescriptor.encode(
                v!,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): EnumerateMonitorPortSettingsResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumerateMonitorPortSettingsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.settings.push(
                        MonitorPortSettingDescriptor.decode(
                            reader,
                            reader.uint32()
                        )
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): EnumerateMonitorPortSettingsResponse {
        return {
            settings: Array.isArray(object?.settings)
                ? object.settings.map((e: any) =>
                      MonitorPortSettingDescriptor.fromJSON(e)
                  )
                : [],
        };
    },

    toJSON(message: EnumerateMonitorPortSettingsResponse): unknown {
        const obj: any = {};
        if (message.settings) {
            obj.settings = message.settings.map((e) =>
                e ? MonitorPortSettingDescriptor.toJSON(e) : undefined
            );
        } else {
            obj.settings = [];
        }
        return obj;
    },

    fromPartial(
        object: DeepPartial<EnumerateMonitorPortSettingsResponse>
    ): EnumerateMonitorPortSettingsResponse {
        const message = createBaseEnumerateMonitorPortSettingsResponse();
        message.settings =
            object.settings?.map((e) =>
                MonitorPortSettingDescriptor.fromPartial(e)
            ) || [];
        return message;
    },
};

function createBaseMonitorPortSettingDescriptor(): MonitorPortSettingDescriptor {
    return { settingId: '', label: '', type: '', enumValues: [], value: '' };
}

export const MonitorPortSettingDescriptor = {
    encode(
        message: MonitorPortSettingDescriptor,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.settingId !== '') {
            writer.uint32(10).string(message.settingId);
        }
        if (message.label !== '') {
            writer.uint32(18).string(message.label);
        }
        if (message.type !== '') {
            writer.uint32(26).string(message.type);
        }
        for (const v of message.enumValues) {
            writer.uint32(34).string(v!);
        }
        if (message.value !== '') {
            writer.uint32(42).string(message.value);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MonitorPortSettingDescriptor {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMonitorPortSettingDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.settingId = reader.string();
                    break;
                case 2:
                    message.label = reader.string();
                    break;
                case 3:
                    message.type = reader.string();
                    break;
                case 4:
                    message.enumValues.push(reader.string());
                    break;
                case 5:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): MonitorPortSettingDescriptor {
        return {
            settingId: isSet(object.settingId) ? String(object.settingId) : '',
            label: isSet(object.label) ? String(object.label) : '',
            type: isSet(object.type) ? String(object.type) : '',
            enumValues: Array.isArray(object?.enumValues)
                ? object.enumValues.map((e: any) => String(e))
                : [],
            value: isSet(object.value) ? String(object.value) : '',
        };
    },

    toJSON(message: MonitorPortSettingDescriptor): unknown {
        const obj: any = {};
        message.settingId !== undefined && (obj.settingId = message.settingId);
        message.label !== undefined && (obj.label = message.label);
        message.type !== undefined && (obj.type = message.type);
        if (message.enumValues) {
            obj.enumValues = message.enumValues.map((e) => e);
        } else {
            obj.enumValues = [];
        }
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<MonitorPortSettingDescriptor>
    ): MonitorPortSettingDescriptor {
        const message = createBaseMonitorPortSettingDescriptor();
        message.settingId = object.settingId ?? '';
        message.label = object.label ?? '';
        message.type = object.type ?? '';
        message.enumValues = object.enumValues?.map((e) => e) || [];
        message.value = object.value ?? '';
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
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
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, 'base64'));
    } else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}

function base64FromBytes(arr: Uint8Array): string {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString('base64');
    } else {
        const bin: string[] = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(''));
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

export type DeepPartial<T> = T extends Builtin
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

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
