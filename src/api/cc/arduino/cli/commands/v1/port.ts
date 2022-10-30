/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'cc.arduino.cli.commands.v1';

/** Port represents a board port that may be used to upload or to monitor a board */
export interface Port {
    /** Address of the port (e.g., `/dev/ttyACM0`). */
    address: string;
    /** The port label to show on the GUI (e.g. "ttyACM0") */
    label: string;
    /** Protocol of the port (e.g., `serial`, `network`, ...). */
    protocol: string;
    /** A human friendly description of the protocol (e.g., "Serial Port (USB)"). */
    protocolLabel: string;
    /** A set of properties of the port */
    properties: { [key: string]: string };
}

export interface Port_PropertiesEntry {
    key: string;
    value: string;
}

function createBasePort(): Port {
    return { address: '', label: '', protocol: '', protocolLabel: '', properties: {} };
}

export const Port = {
    encode(message: Port, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.address !== '') {
            writer.uint32(10).string(message.address);
        }
        if (message.label !== '') {
            writer.uint32(18).string(message.label);
        }
        if (message.protocol !== '') {
            writer.uint32(26).string(message.protocol);
        }
        if (message.protocolLabel !== '') {
            writer.uint32(34).string(message.protocolLabel);
        }
        Object.entries(message.properties).forEach(([key, value]) => {
            Port_PropertiesEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Port {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePort();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.label = reader.string();
                    break;
                case 3:
                    message.protocol = reader.string();
                    break;
                case 4:
                    message.protocolLabel = reader.string();
                    break;
                case 5:
                    const entry5 = Port_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.properties[entry5.key] = entry5.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Port {
        return {
            address: isSet(object.address) ? String(object.address) : '',
            label: isSet(object.label) ? String(object.label) : '',
            protocol: isSet(object.protocol) ? String(object.protocol) : '',
            protocolLabel: isSet(object.protocolLabel) ? String(object.protocolLabel) : '',
            properties: isObject(object.properties)
                ? Object.entries(object.properties).reduce<{ [key: string]: string }>((acc, [key, value]) => {
                      acc[key] = String(value);
                      return acc;
                  }, {})
                : {},
        };
    },

    toJSON(message: Port): unknown {
        const obj: any = {};
        message.address !== undefined && (obj.address = message.address);
        message.label !== undefined && (obj.label = message.label);
        message.protocol !== undefined && (obj.protocol = message.protocol);
        message.protocolLabel !== undefined && (obj.protocolLabel = message.protocolLabel);
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        return obj;
    },

    fromPartial(object: DeepPartial<Port>): Port {
        const message = createBasePort();
        message.address = object.address ?? '';
        message.label = object.label ?? '';
        message.protocol = object.protocol ?? '';
        message.protocolLabel = object.protocolLabel ?? '';
        message.properties = Object.entries(object.properties ?? {}).reduce<{ [key: string]: string }>(
            (acc, [key, value]) => {
                if (value !== undefined) {
                    acc[key] = String(value);
                }
                return acc;
            },
            {}
        );
        return message;
    },
};

function createBasePort_PropertiesEntry(): Port_PropertiesEntry {
    return { key: '', value: '' };
}

export const Port_PropertiesEntry = {
    encode(message: Port_PropertiesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== '') {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Port_PropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePort_PropertiesEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
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

    fromJSON(object: any): Port_PropertiesEntry {
        return {
            key: isSet(object.key) ? String(object.key) : '',
            value: isSet(object.value) ? String(object.value) : '',
        };
    },

    toJSON(message: Port_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(object: DeepPartial<Port_PropertiesEntry>): Port_PropertiesEntry {
        const message = createBasePort_PropertiesEntry();
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

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

function isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
}

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
