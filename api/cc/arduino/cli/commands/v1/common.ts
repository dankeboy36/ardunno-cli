/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal.js';

export const protobufPackage = 'cc.arduino.cli.commands.v1';

export interface Instance {
    /** The ID of the instance. */
    id: number;
}

export interface DownloadProgress {
    message?:
        | { $case: 'start'; start: DownloadProgressStart }
        | { $case: 'update'; update: DownloadProgressUpdate }
        | {
              $case: 'end';
              end: DownloadProgressEnd;
          };
}

export interface DownloadProgressStart {
    /** URL of the download. */
    url: string;
    /** The label to display on the progress bar. */
    label: string;
}

export interface DownloadProgressUpdate {
    /** Size of the downloaded portion of the file. */
    downloaded: number;
    /** Total size of the file being downloaded. */
    totalSize: number;
}

export interface DownloadProgressEnd {
    /** True if the download is successful */
    success: boolean;
    /**
     * Info or error message, depending on the value of 'success'. Some examples:
     * "File xxx already downloaded" or "Connection timeout"
     */
    message: string;
}

export interface TaskProgress {
    /** Description of the task. */
    name: string;
    /** Additional information about the task. */
    message: string;
    /** Whether the task is complete. */
    completed: boolean;
    /** Amount in percent of the task completion (optional) */
    percent: number;
}

export interface Programmer {
    platform: string;
    id: string;
    name: string;
}

export interface Platform {
    /** Platform ID (e.g., `arduino:avr`). */
    id: string;
    /** Version of the platform. */
    installed: string;
    /** Newest available version of the platform. */
    latest: string;
    /** Name used to identify the platform to humans (e.g., "Arduino AVR Boards"). */
    name: string;
    /** Maintainer of the platform's package. */
    maintainer: string;
    /**
     * A URL provided by the author of the platform's package, intended to point
     * to their website.
     */
    website: string;
    /** Email of the maintainer of the platform's package. */
    email: string;
    /**
     * List of boards provided by the platform. If the platform is installed,
     * this is the boards listed in the platform's boards.txt. If the platform is
     * not installed, this is an arbitrary list of board names provided by the
     * platform author for display and may not match boards.txt.
     */
    boards: Board[];
    /**
     * If true this Platform has been installed manually in the user' sketchbook
     * hardware folder
     */
    manuallyInstalled: boolean;
    /** If true this Platform has been deprecated */
    deprecated: boolean;
    /** Type of the platform. */
    type: string[];
}

export interface InstalledPlatformReference {
    /** Platform ID (e.g., `arduino:avr`). */
    id: string;
    /** Version of the platform. */
    version: string;
    /** Installation directory of the platform */
    installDir: string;
    /** 3rd party platform URL */
    packageUrl: string;
}

export interface Board {
    /** Name used to identify the board to humans. */
    name: string;
    /**
     * Fully qualified board name used to identify the board to machines. The FQBN
     * is only available for installed boards.
     */
    fqbn: string;
}

export interface Profile {
    /** Name used to identify the profile within the sketch. */
    name: string;
    /** FQBN specified in the profile. */
    fqbn: string;
}

function createBaseInstance(): Instance {
    return { id: 0 };
}

export const Instance = {
    encode(message: Instance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Instance {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Instance {
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },

    toJSON(message: Instance): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },

    fromPartial(object: DeepPartial<Instance>): Instance {
        const message = createBaseInstance();
        message.id = object.id ?? 0;
        return message;
    },
};

function createBaseDownloadProgress(): DownloadProgress {
    return { message: undefined };
}

export const DownloadProgress = {
    encode(message: DownloadProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.message?.$case === 'start') {
            DownloadProgressStart.encode(message.message.start, writer.uint32(10).fork()).ldelim();
        }
        if (message.message?.$case === 'update') {
            DownloadProgressUpdate.encode(message.message.update, writer.uint32(18).fork()).ldelim();
        }
        if (message.message?.$case === 'end') {
            DownloadProgressEnd.encode(message.message.end, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DownloadProgress {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDownloadProgress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = { $case: 'start', start: DownloadProgressStart.decode(reader, reader.uint32()) };
                    break;
                case 2:
                    message.message = {
                        $case: 'update',
                        update: DownloadProgressUpdate.decode(reader, reader.uint32()),
                    };
                    break;
                case 3:
                    message.message = { $case: 'end', end: DownloadProgressEnd.decode(reader, reader.uint32()) };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DownloadProgress {
        return {
            message: isSet(object.start)
                ? { $case: 'start', start: DownloadProgressStart.fromJSON(object.start) }
                : isSet(object.update)
                ? { $case: 'update', update: DownloadProgressUpdate.fromJSON(object.update) }
                : isSet(object.end)
                ? { $case: 'end', end: DownloadProgressEnd.fromJSON(object.end) }
                : undefined,
        };
    },

    toJSON(message: DownloadProgress): unknown {
        const obj: any = {};
        message.message?.$case === 'start' &&
            (obj.start = message.message?.start ? DownloadProgressStart.toJSON(message.message?.start) : undefined);
        message.message?.$case === 'update' &&
            (obj.update = message.message?.update ? DownloadProgressUpdate.toJSON(message.message?.update) : undefined);
        message.message?.$case === 'end' &&
            (obj.end = message.message?.end ? DownloadProgressEnd.toJSON(message.message?.end) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<DownloadProgress>): DownloadProgress {
        const message = createBaseDownloadProgress();
        if (
            object.message?.$case === 'start' &&
            object.message?.start !== undefined &&
            object.message?.start !== null
        ) {
            message.message = { $case: 'start', start: DownloadProgressStart.fromPartial(object.message.start) };
        }
        if (
            object.message?.$case === 'update' &&
            object.message?.update !== undefined &&
            object.message?.update !== null
        ) {
            message.message = { $case: 'update', update: DownloadProgressUpdate.fromPartial(object.message.update) };
        }
        if (object.message?.$case === 'end' && object.message?.end !== undefined && object.message?.end !== null) {
            message.message = { $case: 'end', end: DownloadProgressEnd.fromPartial(object.message.end) };
        }
        return message;
    },
};

function createBaseDownloadProgressStart(): DownloadProgressStart {
    return { url: '', label: '' };
}

export const DownloadProgressStart = {
    encode(message: DownloadProgressStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        if (message.label !== '') {
            writer.uint32(18).string(message.label);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DownloadProgressStart {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDownloadProgressStart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.label = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DownloadProgressStart {
        return {
            url: isSet(object.url) ? String(object.url) : '',
            label: isSet(object.label) ? String(object.label) : '',
        };
    },

    toJSON(message: DownloadProgressStart): unknown {
        const obj: any = {};
        message.url !== undefined && (obj.url = message.url);
        message.label !== undefined && (obj.label = message.label);
        return obj;
    },

    fromPartial(object: DeepPartial<DownloadProgressStart>): DownloadProgressStart {
        const message = createBaseDownloadProgressStart();
        message.url = object.url ?? '';
        message.label = object.label ?? '';
        return message;
    },
};

function createBaseDownloadProgressUpdate(): DownloadProgressUpdate {
    return { downloaded: 0, totalSize: 0 };
}

export const DownloadProgressUpdate = {
    encode(message: DownloadProgressUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.downloaded !== 0) {
            writer.uint32(8).int64(message.downloaded);
        }
        if (message.totalSize !== 0) {
            writer.uint32(16).int64(message.totalSize);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DownloadProgressUpdate {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDownloadProgressUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.downloaded = longToNumber(reader.int64() as Long);
                    break;
                case 2:
                    message.totalSize = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DownloadProgressUpdate {
        return {
            downloaded: isSet(object.downloaded) ? Number(object.downloaded) : 0,
            totalSize: isSet(object.totalSize) ? Number(object.totalSize) : 0,
        };
    },

    toJSON(message: DownloadProgressUpdate): unknown {
        const obj: any = {};
        message.downloaded !== undefined && (obj.downloaded = Math.round(message.downloaded));
        message.totalSize !== undefined && (obj.totalSize = Math.round(message.totalSize));
        return obj;
    },

    fromPartial(object: DeepPartial<DownloadProgressUpdate>): DownloadProgressUpdate {
        const message = createBaseDownloadProgressUpdate();
        message.downloaded = object.downloaded ?? 0;
        message.totalSize = object.totalSize ?? 0;
        return message;
    },
};

function createBaseDownloadProgressEnd(): DownloadProgressEnd {
    return { success: false, message: '' };
}

export const DownloadProgressEnd = {
    encode(message: DownloadProgressEnd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        if (message.message !== '') {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DownloadProgressEnd {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDownloadProgressEnd();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DownloadProgressEnd {
        return {
            success: isSet(object.success) ? Boolean(object.success) : false,
            message: isSet(object.message) ? String(object.message) : '',
        };
    },

    toJSON(message: DownloadProgressEnd): unknown {
        const obj: any = {};
        message.success !== undefined && (obj.success = message.success);
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },

    fromPartial(object: DeepPartial<DownloadProgressEnd>): DownloadProgressEnd {
        const message = createBaseDownloadProgressEnd();
        message.success = object.success ?? false;
        message.message = object.message ?? '';
        return message;
    },
};

function createBaseTaskProgress(): TaskProgress {
    return { name: '', message: '', completed: false, percent: 0 };
}

export const TaskProgress = {
    encode(message: TaskProgress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.message !== '') {
            writer.uint32(18).string(message.message);
        }
        if (message.completed === true) {
            writer.uint32(24).bool(message.completed);
        }
        if (message.percent !== 0) {
            writer.uint32(37).float(message.percent);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): TaskProgress {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTaskProgress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                case 3:
                    message.completed = reader.bool();
                    break;
                case 4:
                    message.percent = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): TaskProgress {
        return {
            name: isSet(object.name) ? String(object.name) : '',
            message: isSet(object.message) ? String(object.message) : '',
            completed: isSet(object.completed) ? Boolean(object.completed) : false,
            percent: isSet(object.percent) ? Number(object.percent) : 0,
        };
    },

    toJSON(message: TaskProgress): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.message !== undefined && (obj.message = message.message);
        message.completed !== undefined && (obj.completed = message.completed);
        message.percent !== undefined && (obj.percent = message.percent);
        return obj;
    },

    fromPartial(object: DeepPartial<TaskProgress>): TaskProgress {
        const message = createBaseTaskProgress();
        message.name = object.name ?? '';
        message.message = object.message ?? '';
        message.completed = object.completed ?? false;
        message.percent = object.percent ?? 0;
        return message;
    },
};

function createBaseProgrammer(): Programmer {
    return { platform: '', id: '', name: '' };
}

export const Programmer = {
    encode(message: Programmer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.platform !== '') {
            writer.uint32(10).string(message.platform);
        }
        if (message.id !== '') {
            writer.uint32(18).string(message.id);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Programmer {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProgrammer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.platform = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Programmer {
        return {
            platform: isSet(object.platform) ? String(object.platform) : '',
            id: isSet(object.id) ? String(object.id) : '',
            name: isSet(object.name) ? String(object.name) : '',
        };
    },

    toJSON(message: Programmer): unknown {
        const obj: any = {};
        message.platform !== undefined && (obj.platform = message.platform);
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },

    fromPartial(object: DeepPartial<Programmer>): Programmer {
        const message = createBaseProgrammer();
        message.platform = object.platform ?? '';
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        return message;
    },
};

function createBasePlatform(): Platform {
    return {
        id: '',
        installed: '',
        latest: '',
        name: '',
        maintainer: '',
        website: '',
        email: '',
        boards: [],
        manuallyInstalled: false,
        deprecated: false,
        type: [],
    };
}

export const Platform = {
    encode(message: Platform, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.installed !== '') {
            writer.uint32(18).string(message.installed);
        }
        if (message.latest !== '') {
            writer.uint32(26).string(message.latest);
        }
        if (message.name !== '') {
            writer.uint32(34).string(message.name);
        }
        if (message.maintainer !== '') {
            writer.uint32(42).string(message.maintainer);
        }
        if (message.website !== '') {
            writer.uint32(50).string(message.website);
        }
        if (message.email !== '') {
            writer.uint32(58).string(message.email);
        }
        for (const v of message.boards) {
            Board.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        if (message.manuallyInstalled === true) {
            writer.uint32(72).bool(message.manuallyInstalled);
        }
        if (message.deprecated === true) {
            writer.uint32(80).bool(message.deprecated);
        }
        for (const v of message.type) {
            writer.uint32(90).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Platform {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatform();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.installed = reader.string();
                    break;
                case 3:
                    message.latest = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.maintainer = reader.string();
                    break;
                case 6:
                    message.website = reader.string();
                    break;
                case 7:
                    message.email = reader.string();
                    break;
                case 8:
                    message.boards.push(Board.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.manuallyInstalled = reader.bool();
                    break;
                case 10:
                    message.deprecated = reader.bool();
                    break;
                case 11:
                    message.type.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Platform {
        return {
            id: isSet(object.id) ? String(object.id) : '',
            installed: isSet(object.installed) ? String(object.installed) : '',
            latest: isSet(object.latest) ? String(object.latest) : '',
            name: isSet(object.name) ? String(object.name) : '',
            maintainer: isSet(object.maintainer) ? String(object.maintainer) : '',
            website: isSet(object.website) ? String(object.website) : '',
            email: isSet(object.email) ? String(object.email) : '',
            boards: Array.isArray(object?.boards) ? object.boards.map((e: any) => Board.fromJSON(e)) : [],
            manuallyInstalled: isSet(object.manuallyInstalled) ? Boolean(object.manuallyInstalled) : false,
            deprecated: isSet(object.deprecated) ? Boolean(object.deprecated) : false,
            type: Array.isArray(object?.type) ? object.type.map((e: any) => String(e)) : [],
        };
    },

    toJSON(message: Platform): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.installed !== undefined && (obj.installed = message.installed);
        message.latest !== undefined && (obj.latest = message.latest);
        message.name !== undefined && (obj.name = message.name);
        message.maintainer !== undefined && (obj.maintainer = message.maintainer);
        message.website !== undefined && (obj.website = message.website);
        message.email !== undefined && (obj.email = message.email);
        if (message.boards) {
            obj.boards = message.boards.map((e) => (e ? Board.toJSON(e) : undefined));
        } else {
            obj.boards = [];
        }
        message.manuallyInstalled !== undefined && (obj.manuallyInstalled = message.manuallyInstalled);
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.type) {
            obj.type = message.type.map((e) => e);
        } else {
            obj.type = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<Platform>): Platform {
        const message = createBasePlatform();
        message.id = object.id ?? '';
        message.installed = object.installed ?? '';
        message.latest = object.latest ?? '';
        message.name = object.name ?? '';
        message.maintainer = object.maintainer ?? '';
        message.website = object.website ?? '';
        message.email = object.email ?? '';
        message.boards = object.boards?.map((e) => Board.fromPartial(e)) || [];
        message.manuallyInstalled = object.manuallyInstalled ?? false;
        message.deprecated = object.deprecated ?? false;
        message.type = object.type?.map((e) => e) || [];
        return message;
    },
};

function createBaseInstalledPlatformReference(): InstalledPlatformReference {
    return { id: '', version: '', installDir: '', packageUrl: '' };
}

export const InstalledPlatformReference = {
    encode(message: InstalledPlatformReference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.version !== '') {
            writer.uint32(18).string(message.version);
        }
        if (message.installDir !== '') {
            writer.uint32(26).string(message.installDir);
        }
        if (message.packageUrl !== '') {
            writer.uint32(34).string(message.packageUrl);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): InstalledPlatformReference {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstalledPlatformReference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.installDir = reader.string();
                    break;
                case 4:
                    message.packageUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): InstalledPlatformReference {
        return {
            id: isSet(object.id) ? String(object.id) : '',
            version: isSet(object.version) ? String(object.version) : '',
            installDir: isSet(object.installDir) ? String(object.installDir) : '',
            packageUrl: isSet(object.packageUrl) ? String(object.packageUrl) : '',
        };
    },

    toJSON(message: InstalledPlatformReference): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.version !== undefined && (obj.version = message.version);
        message.installDir !== undefined && (obj.installDir = message.installDir);
        message.packageUrl !== undefined && (obj.packageUrl = message.packageUrl);
        return obj;
    },

    fromPartial(object: DeepPartial<InstalledPlatformReference>): InstalledPlatformReference {
        const message = createBaseInstalledPlatformReference();
        message.id = object.id ?? '';
        message.version = object.version ?? '';
        message.installDir = object.installDir ?? '';
        message.packageUrl = object.packageUrl ?? '';
        return message;
    },
};

function createBaseBoard(): Board {
    return { name: '', fqbn: '' };
}

export const Board = {
    encode(message: Board, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.fqbn !== '') {
            writer.uint32(18).string(message.fqbn);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Board {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoard();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
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

    fromJSON(object: any): Board {
        return {
            name: isSet(object.name) ? String(object.name) : '',
            fqbn: isSet(object.fqbn) ? String(object.fqbn) : '',
        };
    },

    toJSON(message: Board): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.fqbn !== undefined && (obj.fqbn = message.fqbn);
        return obj;
    },

    fromPartial(object: DeepPartial<Board>): Board {
        const message = createBaseBoard();
        message.name = object.name ?? '';
        message.fqbn = object.fqbn ?? '';
        return message;
    },
};

function createBaseProfile(): Profile {
    return { name: '', fqbn: '' };
}

export const Profile = {
    encode(message: Profile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.fqbn !== '') {
            writer.uint32(18).string(message.fqbn);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Profile {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProfile();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
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

    fromJSON(object: any): Profile {
        return {
            name: isSet(object.name) ? String(object.name) : '',
            fqbn: isSet(object.fqbn) ? String(object.fqbn) : '',
        };
    },

    toJSON(message: Profile): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.fqbn !== undefined && (obj.fqbn = message.fqbn);
        return obj;
    },

    fromPartial(object: DeepPartial<Profile>): Profile {
        const message = createBaseProfile();
        message.name = object.name ?? '';
        message.fqbn = object.fqbn ?? '';
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

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
