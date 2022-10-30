/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Instance, Platform, Programmer, TaskProgress } from './common';
import { Port } from './port';

export const protobufPackage = 'cc.arduino.cli.commands.v1';

export interface BoardDetailsRequest {
    /** Arduino Core Service instance from the `Init` response. */
    instance: Instance | undefined;
    /**
     * The fully qualified board name of the board you want information about
     * (e.g., `arduino:avr:uno`).
     */
    fqbn: string;
}

export interface BoardDetailsResponse {
    /** The fully qualified board name of the board. */
    fqbn: string;
    /** Name used to identify the board to humans (e.g., Arduino Uno). */
    name: string;
    /** Installed version of the board's platform. */
    version: string;
    /** The board ID component of the FQBN (e.g., `uno`). */
    propertiesId: string;
    /**
     * Board alias that can be used as a more user friendly alternative to the
     * FQBN.
     */
    alias: string;
    /** Whether this is an official or 3rd party board. */
    official: boolean;
    /** URL of the board's pinout documentation. */
    pinout: string;
    /** Data about the package that contains the board's platform. */
    package: Package | undefined;
    /** Data about the board's platform. */
    platform: BoardPlatform | undefined;
    /** Tool dependencies of the board. */
    toolsDependencies: ToolsDependencies[];
    /** The board's custom configuration options. */
    configOptions: ConfigOption[];
    /** List of programmers supported by the board */
    programmers: Programmer[];
    /** Set to true if the board supports debugging */
    debuggingSupported: boolean;
    /** Identifying information for the board (e.g., USB VID/PID). */
    identificationProperties: BoardIdentificationProperties[];
}

export interface BoardIdentificationProperties {
    /** A set of properties that must all be matched to identify the board */
    properties: { [key: string]: string };
}

export interface BoardIdentificationProperties_PropertiesEntry {
    key: string;
    value: string;
}

export interface Package {
    /** Maintainer of the package. */
    maintainer: string;
    /**
     * The URL of the platforms index file
     * (e.g., https://downloads.arduino.cc/packages/package_index.json).
     */
    url: string;
    /** A URL provided by the package author, intended to point to their website. */
    websiteUrl: string;
    /** Email address of the package maintainer. */
    email: string;
    /** Package vendor name. */
    name: string;
    /** Resources for getting help about using the package. */
    help: Help | undefined;
}

export interface Help {
    /** URL for getting online help. */
    online: string;
}

export interface BoardPlatform {
    /** Architecture of the platform (e.g., `avr`). */
    architecture: string;
    /** Category of the platform. Set to `Contributed` for 3rd party platforms. */
    category: string;
    /** Download URL of the platform archive file. */
    url: string;
    /** File name of the platform archive. */
    archiveFilename: string;
    /** Checksum of the platform archive. */
    checksum: string;
    /** File size of the platform archive. */
    size: number;
    /** Name used to identify the platform to humans. */
    name: string;
}

export interface ToolsDependencies {
    /** Vendor name of the package containing the tool definition. */
    packager: string;
    /** Tool name. */
    name: string;
    /** Tool version. */
    version: string;
    /** Data for the operating system-specific builds of the tool. */
    systems: Systems[];
}

export interface Systems {
    /** Checksum of the tool archive. */
    checksum: string;
    /** Operating system identifier. */
    host: string;
    /** File name of the tool archive. */
    archiveFilename: string;
    /** Download URL of the tool archive. */
    url: string;
    /** File size of the tool archive. */
    size: number;
}

export interface ConfigOption {
    /** ID of the configuration option. For identifying the option to machines. */
    option: string;
    /** Name of the configuration option for identifying the option to humans. */
    optionLabel: string;
    /** Possible values of the configuration option. */
    values: ConfigValue[];
}

export interface ConfigValue {
    /** The configuration option value. */
    value: string;
    /** Label to identify the configuration option to humans. */
    valueLabel: string;
    /** Whether the configuration option is selected. */
    selected: boolean;
}

export interface BoardAttachRequest {
    /** Arduino Core Service instance from the `Init` response. */
    instance: Instance | undefined;
    /** The board's URI (e.g., /dev/ttyACM0). */
    boardUri: string;
    /**
     * Path of the sketch to attach the board to. The board attachment
     * metadata will be saved to `{sketch_path}/sketch.json`.
     */
    sketchPath: string;
    /**
     * Duration in seconds to search the given URI for a connected board before
     * timing out. The default value is 5 seconds.
     */
    searchTimeout: string;
}

export interface BoardAttachResponse {
    /** Description of the current stage of the board attachment. */
    taskProgress: TaskProgress | undefined;
}

export interface BoardListRequest {
    /** Arduino Core Service instance from the `Init` response. */
    instance: Instance | undefined;
    /** Search for boards for the given time (in milliseconds) */
    timeout: number;
}

export interface BoardListResponse {
    /** List of ports and the boards detected on those ports. */
    ports: DetectedPort[];
}

export interface DetectedPort {
    /** The possible boards attached to the port. */
    matchingBoards: BoardListItem[];
    /** The port details */
    port: Port | undefined;
}

export interface BoardListAllRequest {
    /** Arduino Core Service instance from the `Init` response. */
    instance: Instance | undefined;
    /** The search query to filter the board list by. */
    searchArgs: string[];
    /** Set to true to get also the boards marked as "hidden" in the platform */
    includeHiddenBoards: boolean;
}

export interface BoardListAllResponse {
    /** List of installed boards. */
    boards: BoardListItem[];
}

export interface BoardListWatchRequest {
    /** Arduino Core Service instance from the `Init` response. */
    instance: Instance | undefined;
    /** Set this to true to stop the discovery process */
    interrupt: boolean;
}

export interface BoardListWatchResponse {
    /** Event type as received from the serial discovery tool */
    eventType: string;
    /** Information about the port */
    port: DetectedPort | undefined;
    /** Eventual errors when detecting connected boards */
    error: string;
}

export interface BoardListItem {
    /** The name for use when identifying the board to a human. */
    name: string;
    /** The fully qualified board name. Used to identify the board to a machine. */
    fqbn: string;
    /** If the board is marked as "hidden" in the platform */
    isHidden: boolean;
    /** Platform this board belongs to */
    platform: Platform | undefined;
}

export interface BoardSearchRequest {
    /** Arduino Core Service instance from the `Init` response. */
    instance: Instance | undefined;
    /** The search query to filter the board list by. */
    searchArgs: string;
    /**
     * Set to true to get also the boards marked as "hidden" in installed
     * platforms
     */
    includeHiddenBoards: boolean;
}

export interface BoardSearchResponse {
    /** List of installed and installable boards. */
    boards: BoardListItem[];
}

function createBaseBoardDetailsRequest(): BoardDetailsRequest {
    return { instance: undefined, fqbn: '' };
}

export const BoardDetailsRequest = {
    encode(message: BoardDetailsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(message.instance, writer.uint32(10).fork()).ldelim();
        }
        if (message.fqbn !== '') {
            writer.uint32(18).string(message.fqbn);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BoardDetailsRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoardDetailsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.fqbn = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BoardDetailsRequest {
        return {
            instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined,
            fqbn: isSet(object.fqbn) ? String(object.fqbn) : '',
        };
    },

    toJSON(message: BoardDetailsRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance ? Instance.toJSON(message.instance) : undefined);
        message.fqbn !== undefined && (obj.fqbn = message.fqbn);
        return obj;
    },

    fromPartial(object: DeepPartial<BoardDetailsRequest>): BoardDetailsRequest {
        const message = createBaseBoardDetailsRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.fqbn = object.fqbn ?? '';
        return message;
    },
};

function createBaseBoardDetailsResponse(): BoardDetailsResponse {
    return {
        fqbn: '',
        name: '',
        version: '',
        propertiesId: '',
        alias: '',
        official: false,
        pinout: '',
        package: undefined,
        platform: undefined,
        toolsDependencies: [],
        configOptions: [],
        programmers: [],
        debuggingSupported: false,
        identificationProperties: [],
    };
}

export const BoardDetailsResponse = {
    encode(message: BoardDetailsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.fqbn !== '') {
            writer.uint32(10).string(message.fqbn);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.version !== '') {
            writer.uint32(26).string(message.version);
        }
        if (message.propertiesId !== '') {
            writer.uint32(34).string(message.propertiesId);
        }
        if (message.alias !== '') {
            writer.uint32(42).string(message.alias);
        }
        if (message.official === true) {
            writer.uint32(48).bool(message.official);
        }
        if (message.pinout !== '') {
            writer.uint32(58).string(message.pinout);
        }
        if (message.package !== undefined) {
            Package.encode(message.package, writer.uint32(66).fork()).ldelim();
        }
        if (message.platform !== undefined) {
            BoardPlatform.encode(message.platform, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.toolsDependencies) {
            ToolsDependencies.encode(v!, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.configOptions) {
            ConfigOption.encode(v!, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.programmers) {
            Programmer.encode(v!, writer.uint32(106).fork()).ldelim();
        }
        if (message.debuggingSupported === true) {
            writer.uint32(112).bool(message.debuggingSupported);
        }
        for (const v of message.identificationProperties) {
            BoardIdentificationProperties.encode(v!, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BoardDetailsResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoardDetailsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fqbn = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    message.propertiesId = reader.string();
                    break;
                case 5:
                    message.alias = reader.string();
                    break;
                case 6:
                    message.official = reader.bool();
                    break;
                case 7:
                    message.pinout = reader.string();
                    break;
                case 8:
                    message.package = Package.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.platform = BoardPlatform.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.toolsDependencies.push(ToolsDependencies.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.configOptions.push(ConfigOption.decode(reader, reader.uint32()));
                    break;
                case 13:
                    message.programmers.push(Programmer.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.debuggingSupported = reader.bool();
                    break;
                case 15:
                    message.identificationProperties.push(
                        BoardIdentificationProperties.decode(reader, reader.uint32())
                    );
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BoardDetailsResponse {
        return {
            fqbn: isSet(object.fqbn) ? String(object.fqbn) : '',
            name: isSet(object.name) ? String(object.name) : '',
            version: isSet(object.version) ? String(object.version) : '',
            propertiesId: isSet(object.propertiesId) ? String(object.propertiesId) : '',
            alias: isSet(object.alias) ? String(object.alias) : '',
            official: isSet(object.official) ? Boolean(object.official) : false,
            pinout: isSet(object.pinout) ? String(object.pinout) : '',
            package: isSet(object.package) ? Package.fromJSON(object.package) : undefined,
            platform: isSet(object.platform) ? BoardPlatform.fromJSON(object.platform) : undefined,
            toolsDependencies: Array.isArray(object?.toolsDependencies)
                ? object.toolsDependencies.map((e: any) => ToolsDependencies.fromJSON(e))
                : [],
            configOptions: Array.isArray(object?.configOptions)
                ? object.configOptions.map((e: any) => ConfigOption.fromJSON(e))
                : [],
            programmers: Array.isArray(object?.programmers)
                ? object.programmers.map((e: any) => Programmer.fromJSON(e))
                : [],
            debuggingSupported: isSet(object.debuggingSupported) ? Boolean(object.debuggingSupported) : false,
            identificationProperties: Array.isArray(object?.identificationProperties)
                ? object.identificationProperties.map((e: any) => BoardIdentificationProperties.fromJSON(e))
                : [],
        };
    },

    toJSON(message: BoardDetailsResponse): unknown {
        const obj: any = {};
        message.fqbn !== undefined && (obj.fqbn = message.fqbn);
        message.name !== undefined && (obj.name = message.name);
        message.version !== undefined && (obj.version = message.version);
        message.propertiesId !== undefined && (obj.propertiesId = message.propertiesId);
        message.alias !== undefined && (obj.alias = message.alias);
        message.official !== undefined && (obj.official = message.official);
        message.pinout !== undefined && (obj.pinout = message.pinout);
        message.package !== undefined && (obj.package = message.package ? Package.toJSON(message.package) : undefined);
        message.platform !== undefined &&
            (obj.platform = message.platform ? BoardPlatform.toJSON(message.platform) : undefined);
        if (message.toolsDependencies) {
            obj.toolsDependencies = message.toolsDependencies.map((e) => (e ? ToolsDependencies.toJSON(e) : undefined));
        } else {
            obj.toolsDependencies = [];
        }
        if (message.configOptions) {
            obj.configOptions = message.configOptions.map((e) => (e ? ConfigOption.toJSON(e) : undefined));
        } else {
            obj.configOptions = [];
        }
        if (message.programmers) {
            obj.programmers = message.programmers.map((e) => (e ? Programmer.toJSON(e) : undefined));
        } else {
            obj.programmers = [];
        }
        message.debuggingSupported !== undefined && (obj.debuggingSupported = message.debuggingSupported);
        if (message.identificationProperties) {
            obj.identificationProperties = message.identificationProperties.map((e) =>
                e ? BoardIdentificationProperties.toJSON(e) : undefined
            );
        } else {
            obj.identificationProperties = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<BoardDetailsResponse>): BoardDetailsResponse {
        const message = createBaseBoardDetailsResponse();
        message.fqbn = object.fqbn ?? '';
        message.name = object.name ?? '';
        message.version = object.version ?? '';
        message.propertiesId = object.propertiesId ?? '';
        message.alias = object.alias ?? '';
        message.official = object.official ?? false;
        message.pinout = object.pinout ?? '';
        message.package =
            object.package !== undefined && object.package !== null ? Package.fromPartial(object.package) : undefined;
        message.platform =
            object.platform !== undefined && object.platform !== null
                ? BoardPlatform.fromPartial(object.platform)
                : undefined;
        message.toolsDependencies = object.toolsDependencies?.map((e) => ToolsDependencies.fromPartial(e)) || [];
        message.configOptions = object.configOptions?.map((e) => ConfigOption.fromPartial(e)) || [];
        message.programmers = object.programmers?.map((e) => Programmer.fromPartial(e)) || [];
        message.debuggingSupported = object.debuggingSupported ?? false;
        message.identificationProperties =
            object.identificationProperties?.map((e) => BoardIdentificationProperties.fromPartial(e)) || [];
        return message;
    },
};

function createBaseBoardIdentificationProperties(): BoardIdentificationProperties {
    return { properties: {} };
}

export const BoardIdentificationProperties = {
    encode(message: BoardIdentificationProperties, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        Object.entries(message.properties).forEach(([key, value]) => {
            BoardIdentificationProperties_PropertiesEntry.encode(
                { key: key as any, value },
                writer.uint32(10).fork()
            ).ldelim();
        });
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BoardIdentificationProperties {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoardIdentificationProperties();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = BoardIdentificationProperties_PropertiesEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.properties[entry1.key] = entry1.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BoardIdentificationProperties {
        return {
            properties: isObject(object.properties)
                ? Object.entries(object.properties).reduce<{ [key: string]: string }>((acc, [key, value]) => {
                      acc[key] = String(value);
                      return acc;
                  }, {})
                : {},
        };
    },

    toJSON(message: BoardIdentificationProperties): unknown {
        const obj: any = {};
        obj.properties = {};
        if (message.properties) {
            Object.entries(message.properties).forEach(([k, v]) => {
                obj.properties[k] = v;
            });
        }
        return obj;
    },

    fromPartial(object: DeepPartial<BoardIdentificationProperties>): BoardIdentificationProperties {
        const message = createBaseBoardIdentificationProperties();
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

function createBaseBoardIdentificationProperties_PropertiesEntry(): BoardIdentificationProperties_PropertiesEntry {
    return { key: '', value: '' };
}

export const BoardIdentificationProperties_PropertiesEntry = {
    encode(
        message: BoardIdentificationProperties_PropertiesEntry,
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

    decode(input: _m0.Reader | Uint8Array, length?: number): BoardIdentificationProperties_PropertiesEntry {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoardIdentificationProperties_PropertiesEntry();
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

    fromJSON(object: any): BoardIdentificationProperties_PropertiesEntry {
        return {
            key: isSet(object.key) ? String(object.key) : '',
            value: isSet(object.value) ? String(object.value) : '',
        };
    },

    toJSON(message: BoardIdentificationProperties_PropertiesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<BoardIdentificationProperties_PropertiesEntry>
    ): BoardIdentificationProperties_PropertiesEntry {
        const message = createBaseBoardIdentificationProperties_PropertiesEntry();
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

function createBasePackage(): Package {
    return { maintainer: '', url: '', websiteUrl: '', email: '', name: '', help: undefined };
}

export const Package = {
    encode(message: Package, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.maintainer !== '') {
            writer.uint32(10).string(message.maintainer);
        }
        if (message.url !== '') {
            writer.uint32(18).string(message.url);
        }
        if (message.websiteUrl !== '') {
            writer.uint32(26).string(message.websiteUrl);
        }
        if (message.email !== '') {
            writer.uint32(34).string(message.email);
        }
        if (message.name !== '') {
            writer.uint32(42).string(message.name);
        }
        if (message.help !== undefined) {
            Help.encode(message.help, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Package {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePackage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maintainer = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.websiteUrl = reader.string();
                    break;
                case 4:
                    message.email = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.help = Help.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Package {
        return {
            maintainer: isSet(object.maintainer) ? String(object.maintainer) : '',
            url: isSet(object.url) ? String(object.url) : '',
            websiteUrl: isSet(object.websiteUrl) ? String(object.websiteUrl) : '',
            email: isSet(object.email) ? String(object.email) : '',
            name: isSet(object.name) ? String(object.name) : '',
            help: isSet(object.help) ? Help.fromJSON(object.help) : undefined,
        };
    },

    toJSON(message: Package): unknown {
        const obj: any = {};
        message.maintainer !== undefined && (obj.maintainer = message.maintainer);
        message.url !== undefined && (obj.url = message.url);
        message.websiteUrl !== undefined && (obj.websiteUrl = message.websiteUrl);
        message.email !== undefined && (obj.email = message.email);
        message.name !== undefined && (obj.name = message.name);
        message.help !== undefined && (obj.help = message.help ? Help.toJSON(message.help) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<Package>): Package {
        const message = createBasePackage();
        message.maintainer = object.maintainer ?? '';
        message.url = object.url ?? '';
        message.websiteUrl = object.websiteUrl ?? '';
        message.email = object.email ?? '';
        message.name = object.name ?? '';
        message.help = object.help !== undefined && object.help !== null ? Help.fromPartial(object.help) : undefined;
        return message;
    },
};

function createBaseHelp(): Help {
    return { online: '' };
}

export const Help = {
    encode(message: Help, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.online !== '') {
            writer.uint32(10).string(message.online);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Help {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHelp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.online = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Help {
        return { online: isSet(object.online) ? String(object.online) : '' };
    },

    toJSON(message: Help): unknown {
        const obj: any = {};
        message.online !== undefined && (obj.online = message.online);
        return obj;
    },

    fromPartial(object: DeepPartial<Help>): Help {
        const message = createBaseHelp();
        message.online = object.online ?? '';
        return message;
    },
};

function createBaseBoardPlatform(): BoardPlatform {
    return { architecture: '', category: '', url: '', archiveFilename: '', checksum: '', size: 0, name: '' };
}

export const BoardPlatform = {
    encode(message: BoardPlatform, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.architecture !== '') {
            writer.uint32(10).string(message.architecture);
        }
        if (message.category !== '') {
            writer.uint32(18).string(message.category);
        }
        if (message.url !== '') {
            writer.uint32(26).string(message.url);
        }
        if (message.archiveFilename !== '') {
            writer.uint32(34).string(message.archiveFilename);
        }
        if (message.checksum !== '') {
            writer.uint32(42).string(message.checksum);
        }
        if (message.size !== 0) {
            writer.uint32(48).int64(message.size);
        }
        if (message.name !== '') {
            writer.uint32(58).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BoardPlatform {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoardPlatform();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.architecture = reader.string();
                    break;
                case 2:
                    message.category = reader.string();
                    break;
                case 3:
                    message.url = reader.string();
                    break;
                case 4:
                    message.archiveFilename = reader.string();
                    break;
                case 5:
                    message.checksum = reader.string();
                    break;
                case 6:
                    message.size = longToNumber(reader.int64() as Long);
                    break;
                case 7:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BoardPlatform {
        return {
            architecture: isSet(object.architecture) ? String(object.architecture) : '',
            category: isSet(object.category) ? String(object.category) : '',
            url: isSet(object.url) ? String(object.url) : '',
            archiveFilename: isSet(object.archiveFilename) ? String(object.archiveFilename) : '',
            checksum: isSet(object.checksum) ? String(object.checksum) : '',
            size: isSet(object.size) ? Number(object.size) : 0,
            name: isSet(object.name) ? String(object.name) : '',
        };
    },

    toJSON(message: BoardPlatform): unknown {
        const obj: any = {};
        message.architecture !== undefined && (obj.architecture = message.architecture);
        message.category !== undefined && (obj.category = message.category);
        message.url !== undefined && (obj.url = message.url);
        message.archiveFilename !== undefined && (obj.archiveFilename = message.archiveFilename);
        message.checksum !== undefined && (obj.checksum = message.checksum);
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial(object: DeepPartial<BoardPlatform>): BoardPlatform {
        const message = createBaseBoardPlatform();
        message.architecture = object.architecture ?? '';
        message.category = object.category ?? '';
        message.url = object.url ?? '';
        message.archiveFilename = object.archiveFilename ?? '';
        message.checksum = object.checksum ?? '';
        message.size = object.size ?? 0;
        message.name = object.name ?? '';
        return message;
    },
};

function createBaseToolsDependencies(): ToolsDependencies {
    return { packager: '', name: '', version: '', systems: [] };
}

export const ToolsDependencies = {
    encode(message: ToolsDependencies, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.packager !== '') {
            writer.uint32(10).string(message.packager);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.version !== '') {
            writer.uint32(26).string(message.version);
        }
        for (const v of message.systems) {
            Systems.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ToolsDependencies {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseToolsDependencies();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packager = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    message.systems.push(Systems.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ToolsDependencies {
        return {
            packager: isSet(object.packager) ? String(object.packager) : '',
            name: isSet(object.name) ? String(object.name) : '',
            version: isSet(object.version) ? String(object.version) : '',
            systems: Array.isArray(object?.systems) ? object.systems.map((e: any) => Systems.fromJSON(e)) : [],
        };
    },

    toJSON(message: ToolsDependencies): unknown {
        const obj: any = {};
        message.packager !== undefined && (obj.packager = message.packager);
        message.name !== undefined && (obj.name = message.name);
        message.version !== undefined && (obj.version = message.version);
        if (message.systems) {
            obj.systems = message.systems.map((e) => (e ? Systems.toJSON(e) : undefined));
        } else {
            obj.systems = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<ToolsDependencies>): ToolsDependencies {
        const message = createBaseToolsDependencies();
        message.packager = object.packager ?? '';
        message.name = object.name ?? '';
        message.version = object.version ?? '';
        message.systems = object.systems?.map((e) => Systems.fromPartial(e)) || [];
        return message;
    },
};

function createBaseSystems(): Systems {
    return { checksum: '', host: '', archiveFilename: '', url: '', size: 0 };
}

export const Systems = {
    encode(message: Systems, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.checksum !== '') {
            writer.uint32(10).string(message.checksum);
        }
        if (message.host !== '') {
            writer.uint32(18).string(message.host);
        }
        if (message.archiveFilename !== '') {
            writer.uint32(26).string(message.archiveFilename);
        }
        if (message.url !== '') {
            writer.uint32(34).string(message.url);
        }
        if (message.size !== 0) {
            writer.uint32(40).int64(message.size);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Systems {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSystems();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.checksum = reader.string();
                    break;
                case 2:
                    message.host = reader.string();
                    break;
                case 3:
                    message.archiveFilename = reader.string();
                    break;
                case 4:
                    message.url = reader.string();
                    break;
                case 5:
                    message.size = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Systems {
        return {
            checksum: isSet(object.checksum) ? String(object.checksum) : '',
            host: isSet(object.host) ? String(object.host) : '',
            archiveFilename: isSet(object.archiveFilename) ? String(object.archiveFilename) : '',
            url: isSet(object.url) ? String(object.url) : '',
            size: isSet(object.size) ? Number(object.size) : 0,
        };
    },

    toJSON(message: Systems): unknown {
        const obj: any = {};
        message.checksum !== undefined && (obj.checksum = message.checksum);
        message.host !== undefined && (obj.host = message.host);
        message.archiveFilename !== undefined && (obj.archiveFilename = message.archiveFilename);
        message.url !== undefined && (obj.url = message.url);
        message.size !== undefined && (obj.size = Math.round(message.size));
        return obj;
    },

    fromPartial(object: DeepPartial<Systems>): Systems {
        const message = createBaseSystems();
        message.checksum = object.checksum ?? '';
        message.host = object.host ?? '';
        message.archiveFilename = object.archiveFilename ?? '';
        message.url = object.url ?? '';
        message.size = object.size ?? 0;
        return message;
    },
};

function createBaseConfigOption(): ConfigOption {
    return { option: '', optionLabel: '', values: [] };
}

export const ConfigOption = {
    encode(message: ConfigOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.option !== '') {
            writer.uint32(10).string(message.option);
        }
        if (message.optionLabel !== '') {
            writer.uint32(18).string(message.optionLabel);
        }
        for (const v of message.values) {
            ConfigValue.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConfigOption {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.option = reader.string();
                    break;
                case 2:
                    message.optionLabel = reader.string();
                    break;
                case 3:
                    message.values.push(ConfigValue.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConfigOption {
        return {
            option: isSet(object.option) ? String(object.option) : '',
            optionLabel: isSet(object.optionLabel) ? String(object.optionLabel) : '',
            values: Array.isArray(object?.values) ? object.values.map((e: any) => ConfigValue.fromJSON(e)) : [],
        };
    },

    toJSON(message: ConfigOption): unknown {
        const obj: any = {};
        message.option !== undefined && (obj.option = message.option);
        message.optionLabel !== undefined && (obj.optionLabel = message.optionLabel);
        if (message.values) {
            obj.values = message.values.map((e) => (e ? ConfigValue.toJSON(e) : undefined));
        } else {
            obj.values = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<ConfigOption>): ConfigOption {
        const message = createBaseConfigOption();
        message.option = object.option ?? '';
        message.optionLabel = object.optionLabel ?? '';
        message.values = object.values?.map((e) => ConfigValue.fromPartial(e)) || [];
        return message;
    },
};

function createBaseConfigValue(): ConfigValue {
    return { value: '', valueLabel: '', selected: false };
}

export const ConfigValue = {
    encode(message: ConfigValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.value !== '') {
            writer.uint32(10).string(message.value);
        }
        if (message.valueLabel !== '') {
            writer.uint32(18).string(message.valueLabel);
        }
        if (message.selected === true) {
            writer.uint32(24).bool(message.selected);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ConfigValue {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
                    break;
                case 2:
                    message.valueLabel = reader.string();
                    break;
                case 3:
                    message.selected = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ConfigValue {
        return {
            value: isSet(object.value) ? String(object.value) : '',
            valueLabel: isSet(object.valueLabel) ? String(object.valueLabel) : '',
            selected: isSet(object.selected) ? Boolean(object.selected) : false,
        };
    },

    toJSON(message: ConfigValue): unknown {
        const obj: any = {};
        message.value !== undefined && (obj.value = message.value);
        message.valueLabel !== undefined && (obj.valueLabel = message.valueLabel);
        message.selected !== undefined && (obj.selected = message.selected);
        return obj;
    },

    fromPartial(object: DeepPartial<ConfigValue>): ConfigValue {
        const message = createBaseConfigValue();
        message.value = object.value ?? '';
        message.valueLabel = object.valueLabel ?? '';
        message.selected = object.selected ?? false;
        return message;
    },
};

function createBaseBoardAttachRequest(): BoardAttachRequest {
    return { instance: undefined, boardUri: '', sketchPath: '', searchTimeout: '' };
}

export const BoardAttachRequest = {
    encode(message: BoardAttachRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(message.instance, writer.uint32(10).fork()).ldelim();
        }
        if (message.boardUri !== '') {
            writer.uint32(18).string(message.boardUri);
        }
        if (message.sketchPath !== '') {
            writer.uint32(26).string(message.sketchPath);
        }
        if (message.searchTimeout !== '') {
            writer.uint32(34).string(message.searchTimeout);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BoardAttachRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoardAttachRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.boardUri = reader.string();
                    break;
                case 3:
                    message.sketchPath = reader.string();
                    break;
                case 4:
                    message.searchTimeout = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BoardAttachRequest {
        return {
            instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined,
            boardUri: isSet(object.boardUri) ? String(object.boardUri) : '',
            sketchPath: isSet(object.sketchPath) ? String(object.sketchPath) : '',
            searchTimeout: isSet(object.searchTimeout) ? String(object.searchTimeout) : '',
        };
    },

    toJSON(message: BoardAttachRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance ? Instance.toJSON(message.instance) : undefined);
        message.boardUri !== undefined && (obj.boardUri = message.boardUri);
        message.sketchPath !== undefined && (obj.sketchPath = message.sketchPath);
        message.searchTimeout !== undefined && (obj.searchTimeout = message.searchTimeout);
        return obj;
    },

    fromPartial(object: DeepPartial<BoardAttachRequest>): BoardAttachRequest {
        const message = createBaseBoardAttachRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.boardUri = object.boardUri ?? '';
        message.sketchPath = object.sketchPath ?? '';
        message.searchTimeout = object.searchTimeout ?? '';
        return message;
    },
};

function createBaseBoardAttachResponse(): BoardAttachResponse {
    return { taskProgress: undefined };
}

export const BoardAttachResponse = {
    encode(message: BoardAttachResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.taskProgress !== undefined) {
            TaskProgress.encode(message.taskProgress, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BoardAttachResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoardAttachResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.taskProgress = TaskProgress.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BoardAttachResponse {
        return { taskProgress: isSet(object.taskProgress) ? TaskProgress.fromJSON(object.taskProgress) : undefined };
    },

    toJSON(message: BoardAttachResponse): unknown {
        const obj: any = {};
        message.taskProgress !== undefined &&
            (obj.taskProgress = message.taskProgress ? TaskProgress.toJSON(message.taskProgress) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<BoardAttachResponse>): BoardAttachResponse {
        const message = createBaseBoardAttachResponse();
        message.taskProgress =
            object.taskProgress !== undefined && object.taskProgress !== null
                ? TaskProgress.fromPartial(object.taskProgress)
                : undefined;
        return message;
    },
};

function createBaseBoardListRequest(): BoardListRequest {
    return { instance: undefined, timeout: 0 };
}

export const BoardListRequest = {
    encode(message: BoardListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(message.instance, writer.uint32(10).fork()).ldelim();
        }
        if (message.timeout !== 0) {
            writer.uint32(16).int64(message.timeout);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BoardListRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoardListRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.timeout = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BoardListRequest {
        return {
            instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined,
            timeout: isSet(object.timeout) ? Number(object.timeout) : 0,
        };
    },

    toJSON(message: BoardListRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance ? Instance.toJSON(message.instance) : undefined);
        message.timeout !== undefined && (obj.timeout = Math.round(message.timeout));
        return obj;
    },

    fromPartial(object: DeepPartial<BoardListRequest>): BoardListRequest {
        const message = createBaseBoardListRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.timeout = object.timeout ?? 0;
        return message;
    },
};

function createBaseBoardListResponse(): BoardListResponse {
    return { ports: [] };
}

export const BoardListResponse = {
    encode(message: BoardListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.ports) {
            DetectedPort.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BoardListResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoardListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ports.push(DetectedPort.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BoardListResponse {
        return { ports: Array.isArray(object?.ports) ? object.ports.map((e: any) => DetectedPort.fromJSON(e)) : [] };
    },

    toJSON(message: BoardListResponse): unknown {
        const obj: any = {};
        if (message.ports) {
            obj.ports = message.ports.map((e) => (e ? DetectedPort.toJSON(e) : undefined));
        } else {
            obj.ports = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<BoardListResponse>): BoardListResponse {
        const message = createBaseBoardListResponse();
        message.ports = object.ports?.map((e) => DetectedPort.fromPartial(e)) || [];
        return message;
    },
};

function createBaseDetectedPort(): DetectedPort {
    return { matchingBoards: [], port: undefined };
}

export const DetectedPort = {
    encode(message: DetectedPort, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.matchingBoards) {
            BoardListItem.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        if (message.port !== undefined) {
            Port.encode(message.port, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DetectedPort {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDetectedPort();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.matchingBoards.push(BoardListItem.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.port = Port.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DetectedPort {
        return {
            matchingBoards: Array.isArray(object?.matchingBoards)
                ? object.matchingBoards.map((e: any) => BoardListItem.fromJSON(e))
                : [],
            port: isSet(object.port) ? Port.fromJSON(object.port) : undefined,
        };
    },

    toJSON(message: DetectedPort): unknown {
        const obj: any = {};
        if (message.matchingBoards) {
            obj.matchingBoards = message.matchingBoards.map((e) => (e ? BoardListItem.toJSON(e) : undefined));
        } else {
            obj.matchingBoards = [];
        }
        message.port !== undefined && (obj.port = message.port ? Port.toJSON(message.port) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<DetectedPort>): DetectedPort {
        const message = createBaseDetectedPort();
        message.matchingBoards = object.matchingBoards?.map((e) => BoardListItem.fromPartial(e)) || [];
        message.port = object.port !== undefined && object.port !== null ? Port.fromPartial(object.port) : undefined;
        return message;
    },
};

function createBaseBoardListAllRequest(): BoardListAllRequest {
    return { instance: undefined, searchArgs: [], includeHiddenBoards: false };
}

export const BoardListAllRequest = {
    encode(message: BoardListAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(message.instance, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.searchArgs) {
            writer.uint32(18).string(v!);
        }
        if (message.includeHiddenBoards === true) {
            writer.uint32(24).bool(message.includeHiddenBoards);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BoardListAllRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoardListAllRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.searchArgs.push(reader.string());
                    break;
                case 3:
                    message.includeHiddenBoards = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BoardListAllRequest {
        return {
            instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined,
            searchArgs: Array.isArray(object?.searchArgs) ? object.searchArgs.map((e: any) => String(e)) : [],
            includeHiddenBoards: isSet(object.includeHiddenBoards) ? Boolean(object.includeHiddenBoards) : false,
        };
    },

    toJSON(message: BoardListAllRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance ? Instance.toJSON(message.instance) : undefined);
        if (message.searchArgs) {
            obj.searchArgs = message.searchArgs.map((e) => e);
        } else {
            obj.searchArgs = [];
        }
        message.includeHiddenBoards !== undefined && (obj.includeHiddenBoards = message.includeHiddenBoards);
        return obj;
    },

    fromPartial(object: DeepPartial<BoardListAllRequest>): BoardListAllRequest {
        const message = createBaseBoardListAllRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.searchArgs = object.searchArgs?.map((e) => e) || [];
        message.includeHiddenBoards = object.includeHiddenBoards ?? false;
        return message;
    },
};

function createBaseBoardListAllResponse(): BoardListAllResponse {
    return { boards: [] };
}

export const BoardListAllResponse = {
    encode(message: BoardListAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.boards) {
            BoardListItem.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BoardListAllResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoardListAllResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.boards.push(BoardListItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BoardListAllResponse {
        return {
            boards: Array.isArray(object?.boards) ? object.boards.map((e: any) => BoardListItem.fromJSON(e)) : [],
        };
    },

    toJSON(message: BoardListAllResponse): unknown {
        const obj: any = {};
        if (message.boards) {
            obj.boards = message.boards.map((e) => (e ? BoardListItem.toJSON(e) : undefined));
        } else {
            obj.boards = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<BoardListAllResponse>): BoardListAllResponse {
        const message = createBaseBoardListAllResponse();
        message.boards = object.boards?.map((e) => BoardListItem.fromPartial(e)) || [];
        return message;
    },
};

function createBaseBoardListWatchRequest(): BoardListWatchRequest {
    return { instance: undefined, interrupt: false };
}

export const BoardListWatchRequest = {
    encode(message: BoardListWatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(message.instance, writer.uint32(10).fork()).ldelim();
        }
        if (message.interrupt === true) {
            writer.uint32(16).bool(message.interrupt);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BoardListWatchRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoardListWatchRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.interrupt = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BoardListWatchRequest {
        return {
            instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined,
            interrupt: isSet(object.interrupt) ? Boolean(object.interrupt) : false,
        };
    },

    toJSON(message: BoardListWatchRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance ? Instance.toJSON(message.instance) : undefined);
        message.interrupt !== undefined && (obj.interrupt = message.interrupt);
        return obj;
    },

    fromPartial(object: DeepPartial<BoardListWatchRequest>): BoardListWatchRequest {
        const message = createBaseBoardListWatchRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.interrupt = object.interrupt ?? false;
        return message;
    },
};

function createBaseBoardListWatchResponse(): BoardListWatchResponse {
    return { eventType: '', port: undefined, error: '' };
}

export const BoardListWatchResponse = {
    encode(message: BoardListWatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.eventType !== '') {
            writer.uint32(10).string(message.eventType);
        }
        if (message.port !== undefined) {
            DetectedPort.encode(message.port, writer.uint32(18).fork()).ldelim();
        }
        if (message.error !== '') {
            writer.uint32(26).string(message.error);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BoardListWatchResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoardListWatchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.eventType = reader.string();
                    break;
                case 2:
                    message.port = DetectedPort.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.error = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BoardListWatchResponse {
        return {
            eventType: isSet(object.eventType) ? String(object.eventType) : '',
            port: isSet(object.port) ? DetectedPort.fromJSON(object.port) : undefined,
            error: isSet(object.error) ? String(object.error) : '',
        };
    },

    toJSON(message: BoardListWatchResponse): unknown {
        const obj: any = {};
        message.eventType !== undefined && (obj.eventType = message.eventType);
        message.port !== undefined && (obj.port = message.port ? DetectedPort.toJSON(message.port) : undefined);
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },

    fromPartial(object: DeepPartial<BoardListWatchResponse>): BoardListWatchResponse {
        const message = createBaseBoardListWatchResponse();
        message.eventType = object.eventType ?? '';
        message.port =
            object.port !== undefined && object.port !== null ? DetectedPort.fromPartial(object.port) : undefined;
        message.error = object.error ?? '';
        return message;
    },
};

function createBaseBoardListItem(): BoardListItem {
    return { name: '', fqbn: '', isHidden: false, platform: undefined };
}

export const BoardListItem = {
    encode(message: BoardListItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.fqbn !== '') {
            writer.uint32(18).string(message.fqbn);
        }
        if (message.isHidden === true) {
            writer.uint32(24).bool(message.isHidden);
        }
        if (message.platform !== undefined) {
            Platform.encode(message.platform, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BoardListItem {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoardListItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.fqbn = reader.string();
                    break;
                case 3:
                    message.isHidden = reader.bool();
                    break;
                case 6:
                    message.platform = Platform.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BoardListItem {
        return {
            name: isSet(object.name) ? String(object.name) : '',
            fqbn: isSet(object.fqbn) ? String(object.fqbn) : '',
            isHidden: isSet(object.isHidden) ? Boolean(object.isHidden) : false,
            platform: isSet(object.platform) ? Platform.fromJSON(object.platform) : undefined,
        };
    },

    toJSON(message: BoardListItem): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.fqbn !== undefined && (obj.fqbn = message.fqbn);
        message.isHidden !== undefined && (obj.isHidden = message.isHidden);
        message.platform !== undefined &&
            (obj.platform = message.platform ? Platform.toJSON(message.platform) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<BoardListItem>): BoardListItem {
        const message = createBaseBoardListItem();
        message.name = object.name ?? '';
        message.fqbn = object.fqbn ?? '';
        message.isHidden = object.isHidden ?? false;
        message.platform =
            object.platform !== undefined && object.platform !== null
                ? Platform.fromPartial(object.platform)
                : undefined;
        return message;
    },
};

function createBaseBoardSearchRequest(): BoardSearchRequest {
    return { instance: undefined, searchArgs: '', includeHiddenBoards: false };
}

export const BoardSearchRequest = {
    encode(message: BoardSearchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(message.instance, writer.uint32(10).fork()).ldelim();
        }
        if (message.searchArgs !== '') {
            writer.uint32(18).string(message.searchArgs);
        }
        if (message.includeHiddenBoards === true) {
            writer.uint32(24).bool(message.includeHiddenBoards);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BoardSearchRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoardSearchRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.searchArgs = reader.string();
                    break;
                case 3:
                    message.includeHiddenBoards = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BoardSearchRequest {
        return {
            instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined,
            searchArgs: isSet(object.searchArgs) ? String(object.searchArgs) : '',
            includeHiddenBoards: isSet(object.includeHiddenBoards) ? Boolean(object.includeHiddenBoards) : false,
        };
    },

    toJSON(message: BoardSearchRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance ? Instance.toJSON(message.instance) : undefined);
        message.searchArgs !== undefined && (obj.searchArgs = message.searchArgs);
        message.includeHiddenBoards !== undefined && (obj.includeHiddenBoards = message.includeHiddenBoards);
        return obj;
    },

    fromPartial(object: DeepPartial<BoardSearchRequest>): BoardSearchRequest {
        const message = createBaseBoardSearchRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.searchArgs = object.searchArgs ?? '';
        message.includeHiddenBoards = object.includeHiddenBoards ?? false;
        return message;
    },
};

function createBaseBoardSearchResponse(): BoardSearchResponse {
    return { boards: [] };
}

export const BoardSearchResponse = {
    encode(message: BoardSearchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.boards) {
            BoardListItem.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BoardSearchResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoardSearchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.boards.push(BoardListItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): BoardSearchResponse {
        return {
            boards: Array.isArray(object?.boards) ? object.boards.map((e: any) => BoardListItem.fromJSON(e)) : [],
        };
    },

    toJSON(message: BoardSearchResponse): unknown {
        const obj: any = {};
        if (message.boards) {
            obj.boards = message.boards.map((e) => (e ? BoardListItem.toJSON(e) : undefined));
        } else {
            obj.boards = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<BoardSearchResponse>): BoardSearchResponse {
        const message = createBaseBoardSearchResponse();
        message.boards = object.boards?.map((e) => BoardListItem.fromPartial(e)) || [];
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

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}

if (_m0.util.Long !== Long) {
    _m0.util.Long = Long as any;
    _m0.configure();
}

function isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
}

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
