/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import { Instance, MonitorPortConfiguration } from './common';
import { Port } from './port';

export interface MonitorRequest {
    message?:
        | { $case: 'openRequest'; openRequest: MonitorPortOpenRequest }
        | { $case: 'txData'; txData: Uint8Array }
        | {
              $case: 'updatedConfiguration';
              updatedConfiguration: MonitorPortConfiguration;
          }
        | { $case: 'close'; close: boolean }
        | undefined;
}

export interface MonitorPortOpenRequest {
    /** Arduino Core Service instance from the `Init` response. */
    instance: Instance | undefined;
    /** Port to open, must be filled only on the first request. */
    port: Port | undefined;
    /**
     * The board FQBN we are trying to connect to. This is optional, and  it's
     * needed to disambiguate if more than one platform provides the pluggable
     * monitor for a given port protocol.
     */
    fqbn: string;
    /** Port configuration, optional, contains settings of the port to be applied. */
    portConfiguration: MonitorPortConfiguration | undefined;
}

export interface MonitorResponse {
    message?:
        | { $case: 'error'; error: string }
        | { $case: 'rxData'; rxData: Uint8Array }
        | {
              $case: 'appliedSettings';
              appliedSettings: MonitorPortConfiguration;
          }
        | { $case: 'success'; success: boolean }
        | undefined;
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
    /** The setting identifier. */
    settingId: string;
    /** A human-readable label of the setting (to be displayed on the GUI). */
    label: string;
    /** The setting type (at the moment only "enum" is avaiable). */
    type: string;
    /** The values allowed on "enum" types. */
    enumValues: string[];
    /** The selected or default value. */
    value: string;
}

function createBaseMonitorRequest(): MonitorRequest {
    return { message: undefined };
}

export const MonitorRequest = {
    encode(
        message: MonitorRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        switch (message.message?.$case) {
            case 'openRequest':
                MonitorPortOpenRequest.encode(
                    message.message.openRequest,
                    writer.uint32(10).fork()
                ).ldelim();
                break;
            case 'txData':
                writer.uint32(18).bytes(message.message.txData);
                break;
            case 'updatedConfiguration':
                MonitorPortConfiguration.encode(
                    message.message.updatedConfiguration,
                    writer.uint32(26).fork()
                ).ldelim();
                break;
            case 'close':
                writer.uint32(32).bool(message.message.close);
                break;
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MonitorRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMonitorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.message = {
                        $case: 'openRequest',
                        openRequest: MonitorPortOpenRequest.decode(
                            reader,
                            reader.uint32()
                        ),
                    };
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.message = {
                        $case: 'txData',
                        txData: reader.bytes(),
                    };
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.message = {
                        $case: 'updatedConfiguration',
                        updatedConfiguration: MonitorPortConfiguration.decode(
                            reader,
                            reader.uint32()
                        ),
                    };
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.message = { $case: 'close', close: reader.bool() };
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MonitorRequest {
        return {
            message: isSet(object.openRequest)
                ? {
                      $case: 'openRequest',
                      openRequest: MonitorPortOpenRequest.fromJSON(
                          object.openRequest
                      ),
                  }
                : isSet(object.txData)
                ? { $case: 'txData', txData: bytesFromBase64(object.txData) }
                : isSet(object.updatedConfiguration)
                ? {
                      $case: 'updatedConfiguration',
                      updatedConfiguration: MonitorPortConfiguration.fromJSON(
                          object.updatedConfiguration
                      ),
                  }
                : isSet(object.close)
                ? { $case: 'close', close: Boolean(object.close) }
                : undefined,
        };
    },

    toJSON(message: MonitorRequest): unknown {
        const obj: any = {};
        message.message?.$case === 'openRequest' &&
            (obj.openRequest = message.message?.openRequest
                ? MonitorPortOpenRequest.toJSON(message.message?.openRequest)
                : undefined);
        message.message?.$case === 'txData' &&
            (obj.txData =
                message.message?.txData !== undefined
                    ? base64FromBytes(message.message?.txData)
                    : undefined);
        message.message?.$case === 'updatedConfiguration' &&
            (obj.updatedConfiguration = message.message?.updatedConfiguration
                ? MonitorPortConfiguration.toJSON(
                      message.message?.updatedConfiguration
                  )
                : undefined);
        message.message?.$case === 'close' &&
            (obj.close = message.message?.close);
        return obj;
    },

    create(base?: DeepPartial<MonitorRequest>): MonitorRequest {
        return MonitorRequest.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<MonitorRequest>): MonitorRequest {
        const message = createBaseMonitorRequest();
        if (
            object.message?.$case === 'openRequest' &&
            object.message?.openRequest !== undefined &&
            object.message?.openRequest !== null
        ) {
            message.message = {
                $case: 'openRequest',
                openRequest: MonitorPortOpenRequest.fromPartial(
                    object.message.openRequest
                ),
            };
        }
        if (
            object.message?.$case === 'txData' &&
            object.message?.txData !== undefined &&
            object.message?.txData !== null
        ) {
            message.message = {
                $case: 'txData',
                txData: object.message.txData,
            };
        }
        if (
            object.message?.$case === 'updatedConfiguration' &&
            object.message?.updatedConfiguration !== undefined &&
            object.message?.updatedConfiguration !== null
        ) {
            message.message = {
                $case: 'updatedConfiguration',
                updatedConfiguration: MonitorPortConfiguration.fromPartial(
                    object.message.updatedConfiguration
                ),
            };
        }
        if (
            object.message?.$case === 'close' &&
            object.message?.close !== undefined &&
            object.message?.close !== null
        ) {
            message.message = { $case: 'close', close: object.message.close };
        }
        return message;
    },
};

function createBaseMonitorPortOpenRequest(): MonitorPortOpenRequest {
    return {
        instance: undefined,
        port: undefined,
        fqbn: '',
        portConfiguration: undefined,
    };
}

export const MonitorPortOpenRequest = {
    encode(
        message: MonitorPortOpenRequest,
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
        if (message.portConfiguration !== undefined) {
            MonitorPortConfiguration.encode(
                message.portConfiguration,
                writer.uint32(34).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MonitorPortOpenRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMonitorPortOpenRequest();
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

                    message.port = Port.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.fqbn = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.portConfiguration = MonitorPortConfiguration.decode(
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

    fromJSON(object: any): MonitorPortOpenRequest {
        return {
            instance: isSet(object.instance)
                ? Instance.fromJSON(object.instance)
                : undefined,
            port: isSet(object.port) ? Port.fromJSON(object.port) : undefined,
            fqbn: isSet(object.fqbn) ? String(object.fqbn) : '',
            portConfiguration: isSet(object.portConfiguration)
                ? MonitorPortConfiguration.fromJSON(object.portConfiguration)
                : undefined,
        };
    },

    toJSON(message: MonitorPortOpenRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance
                ? Instance.toJSON(message.instance)
                : undefined);
        message.port !== undefined &&
            (obj.port = message.port ? Port.toJSON(message.port) : undefined);
        message.fqbn !== undefined && (obj.fqbn = message.fqbn);
        message.portConfiguration !== undefined &&
            (obj.portConfiguration = message.portConfiguration
                ? MonitorPortConfiguration.toJSON(message.portConfiguration)
                : undefined);
        return obj;
    },

    create(base?: DeepPartial<MonitorPortOpenRequest>): MonitorPortOpenRequest {
        return MonitorPortOpenRequest.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<MonitorPortOpenRequest>
    ): MonitorPortOpenRequest {
        const message = createBaseMonitorPortOpenRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.port =
            object.port !== undefined && object.port !== null
                ? Port.fromPartial(object.port)
                : undefined;
        message.fqbn = object.fqbn ?? '';
        message.portConfiguration =
            object.portConfiguration !== undefined &&
            object.portConfiguration !== null
                ? MonitorPortConfiguration.fromPartial(object.portConfiguration)
                : undefined;
        return message;
    },
};

function createBaseMonitorResponse(): MonitorResponse {
    return { message: undefined };
}

export const MonitorResponse = {
    encode(
        message: MonitorResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        switch (message.message?.$case) {
            case 'error':
                writer.uint32(10).string(message.message.error);
                break;
            case 'rxData':
                writer.uint32(18).bytes(message.message.rxData);
                break;
            case 'appliedSettings':
                MonitorPortConfiguration.encode(
                    message.message.appliedSettings,
                    writer.uint32(26).fork()
                ).ldelim();
                break;
            case 'success':
                writer.uint32(32).bool(message.message.success);
                break;
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): MonitorResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMonitorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.message = {
                        $case: 'error',
                        error: reader.string(),
                    };
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.message = {
                        $case: 'rxData',
                        rxData: reader.bytes(),
                    };
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.message = {
                        $case: 'appliedSettings',
                        appliedSettings: MonitorPortConfiguration.decode(
                            reader,
                            reader.uint32()
                        ),
                    };
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.message = {
                        $case: 'success',
                        success: reader.bool(),
                    };
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): MonitorResponse {
        return {
            message: isSet(object.error)
                ? { $case: 'error', error: String(object.error) }
                : isSet(object.rxData)
                ? { $case: 'rxData', rxData: bytesFromBase64(object.rxData) }
                : isSet(object.appliedSettings)
                ? {
                      $case: 'appliedSettings',
                      appliedSettings: MonitorPortConfiguration.fromJSON(
                          object.appliedSettings
                      ),
                  }
                : isSet(object.success)
                ? { $case: 'success', success: Boolean(object.success) }
                : undefined,
        };
    },

    toJSON(message: MonitorResponse): unknown {
        const obj: any = {};
        message.message?.$case === 'error' &&
            (obj.error = message.message?.error);
        message.message?.$case === 'rxData' &&
            (obj.rxData =
                message.message?.rxData !== undefined
                    ? base64FromBytes(message.message?.rxData)
                    : undefined);
        message.message?.$case === 'appliedSettings' &&
            (obj.appliedSettings = message.message?.appliedSettings
                ? MonitorPortConfiguration.toJSON(
                      message.message?.appliedSettings
                  )
                : undefined);
        message.message?.$case === 'success' &&
            (obj.success = message.message?.success);
        return obj;
    },

    create(base?: DeepPartial<MonitorResponse>): MonitorResponse {
        return MonitorResponse.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<MonitorResponse>): MonitorResponse {
        const message = createBaseMonitorResponse();
        if (
            object.message?.$case === 'error' &&
            object.message?.error !== undefined &&
            object.message?.error !== null
        ) {
            message.message = { $case: 'error', error: object.message.error };
        }
        if (
            object.message?.$case === 'rxData' &&
            object.message?.rxData !== undefined &&
            object.message?.rxData !== null
        ) {
            message.message = {
                $case: 'rxData',
                rxData: object.message.rxData,
            };
        }
        if (
            object.message?.$case === 'appliedSettings' &&
            object.message?.appliedSettings !== undefined &&
            object.message?.appliedSettings !== null
        ) {
            message.message = {
                $case: 'appliedSettings',
                appliedSettings: MonitorPortConfiguration.fromPartial(
                    object.message.appliedSettings
                ),
            };
        }
        if (
            object.message?.$case === 'success' &&
            object.message?.success !== undefined &&
            object.message?.success !== null
        ) {
            message.message = {
                $case: 'success',
                success: object.message.success,
            };
        }
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
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumerateMonitorPortSettingsRequest();
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

                    message.portProtocol = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.fqbn = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
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

    create(
        base?: DeepPartial<EnumerateMonitorPortSettingsRequest>
    ): EnumerateMonitorPortSettingsRequest {
        return EnumerateMonitorPortSettingsRequest.fromPartial(base ?? {});
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
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumerateMonitorPortSettingsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.settings.push(
                        MonitorPortSettingDescriptor.decode(
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

    create(
        base?: DeepPartial<EnumerateMonitorPortSettingsResponse>
    ): EnumerateMonitorPortSettingsResponse {
        return EnumerateMonitorPortSettingsResponse.fromPartial(base ?? {});
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
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMonitorPortSettingDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.settingId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.label = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.type = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.enumValues.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
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

    create(
        base?: DeepPartial<MonitorPortSettingDescriptor>
    ): MonitorPortSettingDescriptor {
        return MonitorPortSettingDescriptor.fromPartial(base ?? {});
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

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
