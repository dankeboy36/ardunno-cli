/* eslint-disable */
import { CallContext, CallOptions } from 'nice-grpc-common';
import _m0 from 'protobufjs/minimal.js';
import { Status } from '../../../../../google/rpc/status.js';
import {
    BoardAttachRequest,
    BoardAttachResponse,
    BoardDetailsRequest,
    BoardDetailsResponse,
    BoardListAllRequest,
    BoardListAllResponse,
    BoardListRequest,
    BoardListResponse,
    BoardListWatchRequest,
    BoardListWatchResponse,
    BoardSearchRequest,
    BoardSearchResponse,
} from './board.js';
import { DownloadProgress, Instance, Platform, Profile, TaskProgress } from './common.js';
import { CompileRequest, CompileResponse } from './compile.js';
import {
    PlatformDownloadRequest,
    PlatformDownloadResponse,
    PlatformInstallRequest,
    PlatformInstallResponse,
    PlatformListRequest,
    PlatformListResponse,
    PlatformSearchRequest,
    PlatformSearchResponse,
    PlatformUninstallRequest,
    PlatformUninstallResponse,
    PlatformUpgradeRequest,
    PlatformUpgradeResponse,
} from './core.js';
import {
    GitLibraryInstallRequest,
    GitLibraryInstallResponse,
    InstalledLibrary,
    LibraryDownloadRequest,
    LibraryDownloadResponse,
    LibraryInstallRequest,
    LibraryInstallResponse,
    LibraryListRequest,
    LibraryListResponse,
    LibraryResolveDependenciesRequest,
    LibraryResolveDependenciesResponse,
    LibrarySearchRequest,
    LibrarySearchResponse,
    LibraryUninstallRequest,
    LibraryUninstallResponse,
    LibraryUpgradeAllRequest,
    LibraryUpgradeAllResponse,
    LibraryUpgradeRequest,
    LibraryUpgradeResponse,
    ZipLibraryInstallRequest,
    ZipLibraryInstallResponse,
} from './lib.js';
import {
    EnumerateMonitorPortSettingsRequest,
    EnumerateMonitorPortSettingsResponse,
    MonitorRequest,
    MonitorResponse,
} from './monitor.js';
import {
    BurnBootloaderRequest,
    BurnBootloaderResponse,
    ListProgrammersAvailableForUploadRequest,
    ListProgrammersAvailableForUploadResponse,
    SupportedUserFieldsRequest,
    SupportedUserFieldsResponse,
    UploadRequest,
    UploadResponse,
    UploadUsingProgrammerRequest,
    UploadUsingProgrammerResponse,
} from './upload.js';

export const protobufPackage = 'cc.arduino.cli.commands.v1';

export interface CreateRequest {}

export interface CreateResponse {
    /** An Arduino Core instance. */
    instance: Instance | undefined;
}

export interface InitRequest {
    /** An Arduino Core instance. */
    instance: Instance | undefined;
    /** Profile to use */
    profile: string;
    /** The path where the sketch is stored */
    sketchPath: string;
}

export interface InitResponse {
    message?:
        | { $case: 'initProgress'; initProgress: InitResponse_Progress }
        | { $case: 'error'; error: Status }
        | {
              $case: 'profile';
              profile: Profile;
          };
}

export interface InitResponse_Progress {
    /** Progress of the downloads of platforms and libraries index files. */
    downloadProgress: DownloadProgress | undefined;
    /** Describes the current stage of the initialization. */
    taskProgress: TaskProgress | undefined;
}

export interface DestroyRequest {
    /** The Arduino Core Service instance to destroy. */
    instance: Instance | undefined;
}

export interface DestroyResponse {}

export interface UpdateIndexRequest {
    /** Arduino Core Service instance from the Init response. */
    instance: Instance | undefined;
    /** If set to true user defined package indexes will not be updated. */
    ignoreCustomPackageIndexes: boolean;
}

export interface UpdateIndexResponse {
    /** Progress of the package index download. */
    downloadProgress: DownloadProgress | undefined;
}

export interface UpdateLibrariesIndexRequest {
    /** Arduino Core Service instance from the Init response. */
    instance: Instance | undefined;
}

export interface UpdateLibrariesIndexResponse {
    /** Progress of the libraries index download. */
    downloadProgress: DownloadProgress | undefined;
}

export interface UpdateCoreLibrariesIndexRequest {
    /** Arduino Core Service instance from the Init response. */
    instance: Instance | undefined;
}

export interface UpdateCoreLibrariesIndexResponse {
    /** Progress of the index download. */
    downloadProgress: DownloadProgress | undefined;
}

export interface OutdatedRequest {
    /** Arduino Core Service instance from the Init response. */
    instance: Instance | undefined;
}

export interface OutdatedResponse {
    /** List of installed libraries that can be updated. */
    outdatedLibraries: InstalledLibrary[];
    /** List of installed cores that can be updated. */
    outdatedPlatforms: Platform[];
}

export interface UpgradeRequest {
    /** Arduino Core Service instance from the Init response. */
    instance: Instance | undefined;
    /** Set to true to not run (eventual) post install scripts */
    skipPostInstall: boolean;
}

export interface UpgradeResponse {
    /** Progress of the downloads of the platforms and libraries files. */
    progress: DownloadProgress | undefined;
    /** Description of the current stage of the upgrade. */
    taskProgress: TaskProgress | undefined;
}

export interface VersionRequest {}

export interface VersionResponse {
    /** The version of Arduino CLI in use. */
    version: string;
}

export interface NewSketchRequest {
    /** Arduino Core Service instance from the Init response. */
    instance: Instance | undefined;
    /** New sketch name */
    sketchName: string;
    /**
     * Optional: create a Sketch in this directory
     * (used as "Sketchbook" directory).
     * Default Sketchbook directory "directories.User" is used if sketch_dir is
     * empty.
     */
    sketchDir: string;
}

export interface NewSketchResponse {
    /** Absolute path to a main sketch file */
    mainFile: string;
}

export interface LoadSketchRequest {
    /** Arduino Core Service instance from the Init response. */
    instance: Instance | undefined;
    /** Absolute path to single sketch file or a sketch folder */
    sketchPath: string;
}

export interface LoadSketchResponse {
    /** Absolute path to a main sketch files */
    mainFile: string;
    /** Absolute path to folder that contains main_file */
    locationPath: string;
    /** List of absolute paths to other sketch files */
    otherSketchFiles: string[];
    /** List of absolute paths to additional sketch files */
    additionalFiles: string[];
    /**
     * List of absolute paths to supported files in the sketch root folder, main
     * file excluded
     */
    rootFolderFiles: string[];
}

export interface ArchiveSketchRequest {
    /** Absolute path to Sketch file or folder containing Sketch file */
    sketchPath: string;
    /**
     * Absolute path to archive that will be created or folder that will contain
     * it
     */
    archivePath: string;
    /** Specifies if build directory should be included in the archive */
    includeBuildDir: boolean;
}

export interface ArchiveSketchResponse {}

function createBaseCreateRequest(): CreateRequest {
    return {};
}

export const CreateRequest = {
    encode(_: CreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateRequest();
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

    fromJSON(_: any): CreateRequest {
        return {};
    },

    toJSON(_: CreateRequest): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<CreateRequest>): CreateRequest {
        const message = createBaseCreateRequest();
        return message;
    },
};

function createBaseCreateResponse(): CreateResponse {
    return { instance: undefined };
}

export const CreateResponse = {
    encode(message: CreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(message.instance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CreateResponse {
        return { instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined };
    },

    toJSON(message: CreateResponse): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance ? Instance.toJSON(message.instance) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<CreateResponse>): CreateResponse {
        const message = createBaseCreateResponse();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        return message;
    },
};

function createBaseInitRequest(): InitRequest {
    return { instance: undefined, profile: '', sketchPath: '' };
}

export const InitRequest = {
    encode(message: InitRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(message.instance, writer.uint32(10).fork()).ldelim();
        }
        if (message.profile !== '') {
            writer.uint32(18).string(message.profile);
        }
        if (message.sketchPath !== '') {
            writer.uint32(26).string(message.sketchPath);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): InitRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.profile = reader.string();
                    break;
                case 3:
                    message.sketchPath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): InitRequest {
        return {
            instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined,
            profile: isSet(object.profile) ? String(object.profile) : '',
            sketchPath: isSet(object.sketchPath) ? String(object.sketchPath) : '',
        };
    },

    toJSON(message: InitRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance ? Instance.toJSON(message.instance) : undefined);
        message.profile !== undefined && (obj.profile = message.profile);
        message.sketchPath !== undefined && (obj.sketchPath = message.sketchPath);
        return obj;
    },

    fromPartial(object: DeepPartial<InitRequest>): InitRequest {
        const message = createBaseInitRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.profile = object.profile ?? '';
        message.sketchPath = object.sketchPath ?? '';
        return message;
    },
};

function createBaseInitResponse(): InitResponse {
    return { message: undefined };
}

export const InitResponse = {
    encode(message: InitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.message?.$case === 'initProgress') {
            InitResponse_Progress.encode(message.message.initProgress, writer.uint32(10).fork()).ldelim();
        }
        if (message.message?.$case === 'error') {
            Status.encode(message.message.error, writer.uint32(18).fork()).ldelim();
        }
        if (message.message?.$case === 'profile') {
            Profile.encode(message.message.profile, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): InitResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message = {
                        $case: 'initProgress',
                        initProgress: InitResponse_Progress.decode(reader, reader.uint32()),
                    };
                    break;
                case 2:
                    message.message = { $case: 'error', error: Status.decode(reader, reader.uint32()) };
                    break;
                case 3:
                    message.message = { $case: 'profile', profile: Profile.decode(reader, reader.uint32()) };
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): InitResponse {
        return {
            message: isSet(object.initProgress)
                ? { $case: 'initProgress', initProgress: InitResponse_Progress.fromJSON(object.initProgress) }
                : isSet(object.error)
                ? { $case: 'error', error: Status.fromJSON(object.error) }
                : isSet(object.profile)
                ? { $case: 'profile', profile: Profile.fromJSON(object.profile) }
                : undefined,
        };
    },

    toJSON(message: InitResponse): unknown {
        const obj: any = {};
        message.message?.$case === 'initProgress' &&
            (obj.initProgress = message.message?.initProgress
                ? InitResponse_Progress.toJSON(message.message?.initProgress)
                : undefined);
        message.message?.$case === 'error' &&
            (obj.error = message.message?.error ? Status.toJSON(message.message?.error) : undefined);
        message.message?.$case === 'profile' &&
            (obj.profile = message.message?.profile ? Profile.toJSON(message.message?.profile) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<InitResponse>): InitResponse {
        const message = createBaseInitResponse();
        if (
            object.message?.$case === 'initProgress' &&
            object.message?.initProgress !== undefined &&
            object.message?.initProgress !== null
        ) {
            message.message = {
                $case: 'initProgress',
                initProgress: InitResponse_Progress.fromPartial(object.message.initProgress),
            };
        }
        if (
            object.message?.$case === 'error' &&
            object.message?.error !== undefined &&
            object.message?.error !== null
        ) {
            message.message = { $case: 'error', error: Status.fromPartial(object.message.error) };
        }
        if (
            object.message?.$case === 'profile' &&
            object.message?.profile !== undefined &&
            object.message?.profile !== null
        ) {
            message.message = { $case: 'profile', profile: Profile.fromPartial(object.message.profile) };
        }
        return message;
    },
};

function createBaseInitResponse_Progress(): InitResponse_Progress {
    return { downloadProgress: undefined, taskProgress: undefined };
}

export const InitResponse_Progress = {
    encode(message: InitResponse_Progress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.downloadProgress !== undefined) {
            DownloadProgress.encode(message.downloadProgress, writer.uint32(10).fork()).ldelim();
        }
        if (message.taskProgress !== undefined) {
            TaskProgress.encode(message.taskProgress, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): InitResponse_Progress {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitResponse_Progress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.downloadProgress = DownloadProgress.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.taskProgress = TaskProgress.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): InitResponse_Progress {
        return {
            downloadProgress: isSet(object.downloadProgress)
                ? DownloadProgress.fromJSON(object.downloadProgress)
                : undefined,
            taskProgress: isSet(object.taskProgress) ? TaskProgress.fromJSON(object.taskProgress) : undefined,
        };
    },

    toJSON(message: InitResponse_Progress): unknown {
        const obj: any = {};
        message.downloadProgress !== undefined &&
            (obj.downloadProgress = message.downloadProgress
                ? DownloadProgress.toJSON(message.downloadProgress)
                : undefined);
        message.taskProgress !== undefined &&
            (obj.taskProgress = message.taskProgress ? TaskProgress.toJSON(message.taskProgress) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<InitResponse_Progress>): InitResponse_Progress {
        const message = createBaseInitResponse_Progress();
        message.downloadProgress =
            object.downloadProgress !== undefined && object.downloadProgress !== null
                ? DownloadProgress.fromPartial(object.downloadProgress)
                : undefined;
        message.taskProgress =
            object.taskProgress !== undefined && object.taskProgress !== null
                ? TaskProgress.fromPartial(object.taskProgress)
                : undefined;
        return message;
    },
};

function createBaseDestroyRequest(): DestroyRequest {
    return { instance: undefined };
}

export const DestroyRequest = {
    encode(message: DestroyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(message.instance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DestroyRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDestroyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): DestroyRequest {
        return { instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined };
    },

    toJSON(message: DestroyRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance ? Instance.toJSON(message.instance) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<DestroyRequest>): DestroyRequest {
        const message = createBaseDestroyRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        return message;
    },
};

function createBaseDestroyResponse(): DestroyResponse {
    return {};
}

export const DestroyResponse = {
    encode(_: DestroyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DestroyResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDestroyResponse();
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

    fromJSON(_: any): DestroyResponse {
        return {};
    },

    toJSON(_: DestroyResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<DestroyResponse>): DestroyResponse {
        const message = createBaseDestroyResponse();
        return message;
    },
};

function createBaseUpdateIndexRequest(): UpdateIndexRequest {
    return { instance: undefined, ignoreCustomPackageIndexes: false };
}

export const UpdateIndexRequest = {
    encode(message: UpdateIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(message.instance, writer.uint32(10).fork()).ldelim();
        }
        if (message.ignoreCustomPackageIndexes === true) {
            writer.uint32(16).bool(message.ignoreCustomPackageIndexes);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIndexRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateIndexRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ignoreCustomPackageIndexes = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateIndexRequest {
        return {
            instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined,
            ignoreCustomPackageIndexes: isSet(object.ignoreCustomPackageIndexes)
                ? Boolean(object.ignoreCustomPackageIndexes)
                : false,
        };
    },

    toJSON(message: UpdateIndexRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance ? Instance.toJSON(message.instance) : undefined);
        message.ignoreCustomPackageIndexes !== undefined &&
            (obj.ignoreCustomPackageIndexes = message.ignoreCustomPackageIndexes);
        return obj;
    },

    fromPartial(object: DeepPartial<UpdateIndexRequest>): UpdateIndexRequest {
        const message = createBaseUpdateIndexRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.ignoreCustomPackageIndexes = object.ignoreCustomPackageIndexes ?? false;
        return message;
    },
};

function createBaseUpdateIndexResponse(): UpdateIndexResponse {
    return { downloadProgress: undefined };
}

export const UpdateIndexResponse = {
    encode(message: UpdateIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.downloadProgress !== undefined) {
            DownloadProgress.encode(message.downloadProgress, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateIndexResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateIndexResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.downloadProgress = DownloadProgress.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateIndexResponse {
        return {
            downloadProgress: isSet(object.downloadProgress)
                ? DownloadProgress.fromJSON(object.downloadProgress)
                : undefined,
        };
    },

    toJSON(message: UpdateIndexResponse): unknown {
        const obj: any = {};
        message.downloadProgress !== undefined &&
            (obj.downloadProgress = message.downloadProgress
                ? DownloadProgress.toJSON(message.downloadProgress)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<UpdateIndexResponse>): UpdateIndexResponse {
        const message = createBaseUpdateIndexResponse();
        message.downloadProgress =
            object.downloadProgress !== undefined && object.downloadProgress !== null
                ? DownloadProgress.fromPartial(object.downloadProgress)
                : undefined;
        return message;
    },
};

function createBaseUpdateLibrariesIndexRequest(): UpdateLibrariesIndexRequest {
    return { instance: undefined };
}

export const UpdateLibrariesIndexRequest = {
    encode(message: UpdateLibrariesIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(message.instance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLibrariesIndexRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateLibrariesIndexRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateLibrariesIndexRequest {
        return { instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined };
    },

    toJSON(message: UpdateLibrariesIndexRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance ? Instance.toJSON(message.instance) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<UpdateLibrariesIndexRequest>): UpdateLibrariesIndexRequest {
        const message = createBaseUpdateLibrariesIndexRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        return message;
    },
};

function createBaseUpdateLibrariesIndexResponse(): UpdateLibrariesIndexResponse {
    return { downloadProgress: undefined };
}

export const UpdateLibrariesIndexResponse = {
    encode(message: UpdateLibrariesIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.downloadProgress !== undefined) {
            DownloadProgress.encode(message.downloadProgress, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateLibrariesIndexResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateLibrariesIndexResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.downloadProgress = DownloadProgress.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateLibrariesIndexResponse {
        return {
            downloadProgress: isSet(object.downloadProgress)
                ? DownloadProgress.fromJSON(object.downloadProgress)
                : undefined,
        };
    },

    toJSON(message: UpdateLibrariesIndexResponse): unknown {
        const obj: any = {};
        message.downloadProgress !== undefined &&
            (obj.downloadProgress = message.downloadProgress
                ? DownloadProgress.toJSON(message.downloadProgress)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<UpdateLibrariesIndexResponse>): UpdateLibrariesIndexResponse {
        const message = createBaseUpdateLibrariesIndexResponse();
        message.downloadProgress =
            object.downloadProgress !== undefined && object.downloadProgress !== null
                ? DownloadProgress.fromPartial(object.downloadProgress)
                : undefined;
        return message;
    },
};

function createBaseUpdateCoreLibrariesIndexRequest(): UpdateCoreLibrariesIndexRequest {
    return { instance: undefined };
}

export const UpdateCoreLibrariesIndexRequest = {
    encode(message: UpdateCoreLibrariesIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(message.instance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCoreLibrariesIndexRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateCoreLibrariesIndexRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateCoreLibrariesIndexRequest {
        return { instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined };
    },

    toJSON(message: UpdateCoreLibrariesIndexRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance ? Instance.toJSON(message.instance) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<UpdateCoreLibrariesIndexRequest>): UpdateCoreLibrariesIndexRequest {
        const message = createBaseUpdateCoreLibrariesIndexRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        return message;
    },
};

function createBaseUpdateCoreLibrariesIndexResponse(): UpdateCoreLibrariesIndexResponse {
    return { downloadProgress: undefined };
}

export const UpdateCoreLibrariesIndexResponse = {
    encode(message: UpdateCoreLibrariesIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.downloadProgress !== undefined) {
            DownloadProgress.encode(message.downloadProgress, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCoreLibrariesIndexResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateCoreLibrariesIndexResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.downloadProgress = DownloadProgress.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpdateCoreLibrariesIndexResponse {
        return {
            downloadProgress: isSet(object.downloadProgress)
                ? DownloadProgress.fromJSON(object.downloadProgress)
                : undefined,
        };
    },

    toJSON(message: UpdateCoreLibrariesIndexResponse): unknown {
        const obj: any = {};
        message.downloadProgress !== undefined &&
            (obj.downloadProgress = message.downloadProgress
                ? DownloadProgress.toJSON(message.downloadProgress)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<UpdateCoreLibrariesIndexResponse>): UpdateCoreLibrariesIndexResponse {
        const message = createBaseUpdateCoreLibrariesIndexResponse();
        message.downloadProgress =
            object.downloadProgress !== undefined && object.downloadProgress !== null
                ? DownloadProgress.fromPartial(object.downloadProgress)
                : undefined;
        return message;
    },
};

function createBaseOutdatedRequest(): OutdatedRequest {
    return { instance: undefined };
}

export const OutdatedRequest = {
    encode(message: OutdatedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(message.instance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OutdatedRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutdatedRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OutdatedRequest {
        return { instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined };
    },

    toJSON(message: OutdatedRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance ? Instance.toJSON(message.instance) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<OutdatedRequest>): OutdatedRequest {
        const message = createBaseOutdatedRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        return message;
    },
};

function createBaseOutdatedResponse(): OutdatedResponse {
    return { outdatedLibraries: [], outdatedPlatforms: [] };
}

export const OutdatedResponse = {
    encode(message: OutdatedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        for (const v of message.outdatedLibraries) {
            InstalledLibrary.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.outdatedPlatforms) {
            Platform.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): OutdatedResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOutdatedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.outdatedLibraries.push(InstalledLibrary.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.outdatedPlatforms.push(Platform.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): OutdatedResponse {
        return {
            outdatedLibraries: Array.isArray(object?.outdatedLibraries)
                ? object.outdatedLibraries.map((e: any) => InstalledLibrary.fromJSON(e))
                : [],
            outdatedPlatforms: Array.isArray(object?.outdatedPlatforms)
                ? object.outdatedPlatforms.map((e: any) => Platform.fromJSON(e))
                : [],
        };
    },

    toJSON(message: OutdatedResponse): unknown {
        const obj: any = {};
        if (message.outdatedLibraries) {
            obj.outdatedLibraries = message.outdatedLibraries.map((e) => (e ? InstalledLibrary.toJSON(e) : undefined));
        } else {
            obj.outdatedLibraries = [];
        }
        if (message.outdatedPlatforms) {
            obj.outdatedPlatforms = message.outdatedPlatforms.map((e) => (e ? Platform.toJSON(e) : undefined));
        } else {
            obj.outdatedPlatforms = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<OutdatedResponse>): OutdatedResponse {
        const message = createBaseOutdatedResponse();
        message.outdatedLibraries = object.outdatedLibraries?.map((e) => InstalledLibrary.fromPartial(e)) || [];
        message.outdatedPlatforms = object.outdatedPlatforms?.map((e) => Platform.fromPartial(e)) || [];
        return message;
    },
};

function createBaseUpgradeRequest(): UpgradeRequest {
    return { instance: undefined, skipPostInstall: false };
}

export const UpgradeRequest = {
    encode(message: UpgradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(message.instance, writer.uint32(10).fork()).ldelim();
        }
        if (message.skipPostInstall === true) {
            writer.uint32(16).bool(message.skipPostInstall);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpgradeRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpgradeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.skipPostInstall = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpgradeRequest {
        return {
            instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined,
            skipPostInstall: isSet(object.skipPostInstall) ? Boolean(object.skipPostInstall) : false,
        };
    },

    toJSON(message: UpgradeRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance ? Instance.toJSON(message.instance) : undefined);
        message.skipPostInstall !== undefined && (obj.skipPostInstall = message.skipPostInstall);
        return obj;
    },

    fromPartial(object: DeepPartial<UpgradeRequest>): UpgradeRequest {
        const message = createBaseUpgradeRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.skipPostInstall = object.skipPostInstall ?? false;
        return message;
    },
};

function createBaseUpgradeResponse(): UpgradeResponse {
    return { progress: undefined, taskProgress: undefined };
}

export const UpgradeResponse = {
    encode(message: UpgradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.progress !== undefined) {
            DownloadProgress.encode(message.progress, writer.uint32(10).fork()).ldelim();
        }
        if (message.taskProgress !== undefined) {
            TaskProgress.encode(message.taskProgress, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): UpgradeResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpgradeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.progress = DownloadProgress.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.taskProgress = TaskProgress.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): UpgradeResponse {
        return {
            progress: isSet(object.progress) ? DownloadProgress.fromJSON(object.progress) : undefined,
            taskProgress: isSet(object.taskProgress) ? TaskProgress.fromJSON(object.taskProgress) : undefined,
        };
    },

    toJSON(message: UpgradeResponse): unknown {
        const obj: any = {};
        message.progress !== undefined &&
            (obj.progress = message.progress ? DownloadProgress.toJSON(message.progress) : undefined);
        message.taskProgress !== undefined &&
            (obj.taskProgress = message.taskProgress ? TaskProgress.toJSON(message.taskProgress) : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<UpgradeResponse>): UpgradeResponse {
        const message = createBaseUpgradeResponse();
        message.progress =
            object.progress !== undefined && object.progress !== null
                ? DownloadProgress.fromPartial(object.progress)
                : undefined;
        message.taskProgress =
            object.taskProgress !== undefined && object.taskProgress !== null
                ? TaskProgress.fromPartial(object.taskProgress)
                : undefined;
        return message;
    },
};

function createBaseVersionRequest(): VersionRequest {
    return {};
}

export const VersionRequest = {
    encode(_: VersionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VersionRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionRequest();
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

    fromJSON(_: any): VersionRequest {
        return {};
    },

    toJSON(_: VersionRequest): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<VersionRequest>): VersionRequest {
        const message = createBaseVersionRequest();
        return message;
    },
};

function createBaseVersionResponse(): VersionResponse {
    return { version: '' };
}

export const VersionResponse = {
    encode(message: VersionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.version !== '') {
            writer.uint32(10).string(message.version);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VersionResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): VersionResponse {
        return { version: isSet(object.version) ? String(object.version) : '' };
    },

    toJSON(message: VersionResponse): unknown {
        const obj: any = {};
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },

    fromPartial(object: DeepPartial<VersionResponse>): VersionResponse {
        const message = createBaseVersionResponse();
        message.version = object.version ?? '';
        return message;
    },
};

function createBaseNewSketchRequest(): NewSketchRequest {
    return { instance: undefined, sketchName: '', sketchDir: '' };
}

export const NewSketchRequest = {
    encode(message: NewSketchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(message.instance, writer.uint32(10).fork()).ldelim();
        }
        if (message.sketchName !== '') {
            writer.uint32(18).string(message.sketchName);
        }
        if (message.sketchDir !== '') {
            writer.uint32(26).string(message.sketchDir);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NewSketchRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNewSketchRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.sketchName = reader.string();
                    break;
                case 3:
                    message.sketchDir = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NewSketchRequest {
        return {
            instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined,
            sketchName: isSet(object.sketchName) ? String(object.sketchName) : '',
            sketchDir: isSet(object.sketchDir) ? String(object.sketchDir) : '',
        };
    },

    toJSON(message: NewSketchRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance ? Instance.toJSON(message.instance) : undefined);
        message.sketchName !== undefined && (obj.sketchName = message.sketchName);
        message.sketchDir !== undefined && (obj.sketchDir = message.sketchDir);
        return obj;
    },

    fromPartial(object: DeepPartial<NewSketchRequest>): NewSketchRequest {
        const message = createBaseNewSketchRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.sketchName = object.sketchName ?? '';
        message.sketchDir = object.sketchDir ?? '';
        return message;
    },
};

function createBaseNewSketchResponse(): NewSketchResponse {
    return { mainFile: '' };
}

export const NewSketchResponse = {
    encode(message: NewSketchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mainFile !== '') {
            writer.uint32(10).string(message.mainFile);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NewSketchResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNewSketchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mainFile = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): NewSketchResponse {
        return { mainFile: isSet(object.mainFile) ? String(object.mainFile) : '' };
    },

    toJSON(message: NewSketchResponse): unknown {
        const obj: any = {};
        message.mainFile !== undefined && (obj.mainFile = message.mainFile);
        return obj;
    },

    fromPartial(object: DeepPartial<NewSketchResponse>): NewSketchResponse {
        const message = createBaseNewSketchResponse();
        message.mainFile = object.mainFile ?? '';
        return message;
    },
};

function createBaseLoadSketchRequest(): LoadSketchRequest {
    return { instance: undefined, sketchPath: '' };
}

export const LoadSketchRequest = {
    encode(message: LoadSketchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(message.instance, writer.uint32(10).fork()).ldelim();
        }
        if (message.sketchPath !== '') {
            writer.uint32(18).string(message.sketchPath);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LoadSketchRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoadSketchRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.sketchPath = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LoadSketchRequest {
        return {
            instance: isSet(object.instance) ? Instance.fromJSON(object.instance) : undefined,
            sketchPath: isSet(object.sketchPath) ? String(object.sketchPath) : '',
        };
    },

    toJSON(message: LoadSketchRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance ? Instance.toJSON(message.instance) : undefined);
        message.sketchPath !== undefined && (obj.sketchPath = message.sketchPath);
        return obj;
    },

    fromPartial(object: DeepPartial<LoadSketchRequest>): LoadSketchRequest {
        const message = createBaseLoadSketchRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.sketchPath = object.sketchPath ?? '';
        return message;
    },
};

function createBaseLoadSketchResponse(): LoadSketchResponse {
    return { mainFile: '', locationPath: '', otherSketchFiles: [], additionalFiles: [], rootFolderFiles: [] };
}

export const LoadSketchResponse = {
    encode(message: LoadSketchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.mainFile !== '') {
            writer.uint32(10).string(message.mainFile);
        }
        if (message.locationPath !== '') {
            writer.uint32(18).string(message.locationPath);
        }
        for (const v of message.otherSketchFiles) {
            writer.uint32(26).string(v!);
        }
        for (const v of message.additionalFiles) {
            writer.uint32(34).string(v!);
        }
        for (const v of message.rootFolderFiles) {
            writer.uint32(42).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LoadSketchResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoadSketchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mainFile = reader.string();
                    break;
                case 2:
                    message.locationPath = reader.string();
                    break;
                case 3:
                    message.otherSketchFiles.push(reader.string());
                    break;
                case 4:
                    message.additionalFiles.push(reader.string());
                    break;
                case 5:
                    message.rootFolderFiles.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): LoadSketchResponse {
        return {
            mainFile: isSet(object.mainFile) ? String(object.mainFile) : '',
            locationPath: isSet(object.locationPath) ? String(object.locationPath) : '',
            otherSketchFiles: Array.isArray(object?.otherSketchFiles)
                ? object.otherSketchFiles.map((e: any) => String(e))
                : [],
            additionalFiles: Array.isArray(object?.additionalFiles)
                ? object.additionalFiles.map((e: any) => String(e))
                : [],
            rootFolderFiles: Array.isArray(object?.rootFolderFiles)
                ? object.rootFolderFiles.map((e: any) => String(e))
                : [],
        };
    },

    toJSON(message: LoadSketchResponse): unknown {
        const obj: any = {};
        message.mainFile !== undefined && (obj.mainFile = message.mainFile);
        message.locationPath !== undefined && (obj.locationPath = message.locationPath);
        if (message.otherSketchFiles) {
            obj.otherSketchFiles = message.otherSketchFiles.map((e) => e);
        } else {
            obj.otherSketchFiles = [];
        }
        if (message.additionalFiles) {
            obj.additionalFiles = message.additionalFiles.map((e) => e);
        } else {
            obj.additionalFiles = [];
        }
        if (message.rootFolderFiles) {
            obj.rootFolderFiles = message.rootFolderFiles.map((e) => e);
        } else {
            obj.rootFolderFiles = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<LoadSketchResponse>): LoadSketchResponse {
        const message = createBaseLoadSketchResponse();
        message.mainFile = object.mainFile ?? '';
        message.locationPath = object.locationPath ?? '';
        message.otherSketchFiles = object.otherSketchFiles?.map((e) => e) || [];
        message.additionalFiles = object.additionalFiles?.map((e) => e) || [];
        message.rootFolderFiles = object.rootFolderFiles?.map((e) => e) || [];
        return message;
    },
};

function createBaseArchiveSketchRequest(): ArchiveSketchRequest {
    return { sketchPath: '', archivePath: '', includeBuildDir: false };
}

export const ArchiveSketchRequest = {
    encode(message: ArchiveSketchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        if (message.sketchPath !== '') {
            writer.uint32(10).string(message.sketchPath);
        }
        if (message.archivePath !== '') {
            writer.uint32(18).string(message.archivePath);
        }
        if (message.includeBuildDir === true) {
            writer.uint32(24).bool(message.includeBuildDir);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ArchiveSketchRequest {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArchiveSketchRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sketchPath = reader.string();
                    break;
                case 2:
                    message.archivePath = reader.string();
                    break;
                case 3:
                    message.includeBuildDir = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ArchiveSketchRequest {
        return {
            sketchPath: isSet(object.sketchPath) ? String(object.sketchPath) : '',
            archivePath: isSet(object.archivePath) ? String(object.archivePath) : '',
            includeBuildDir: isSet(object.includeBuildDir) ? Boolean(object.includeBuildDir) : false,
        };
    },

    toJSON(message: ArchiveSketchRequest): unknown {
        const obj: any = {};
        message.sketchPath !== undefined && (obj.sketchPath = message.sketchPath);
        message.archivePath !== undefined && (obj.archivePath = message.archivePath);
        message.includeBuildDir !== undefined && (obj.includeBuildDir = message.includeBuildDir);
        return obj;
    },

    fromPartial(object: DeepPartial<ArchiveSketchRequest>): ArchiveSketchRequest {
        const message = createBaseArchiveSketchRequest();
        message.sketchPath = object.sketchPath ?? '';
        message.archivePath = object.archivePath ?? '';
        message.includeBuildDir = object.includeBuildDir ?? false;
        return message;
    },
};

function createBaseArchiveSketchResponse(): ArchiveSketchResponse {
    return {};
}

export const ArchiveSketchResponse = {
    encode(_: ArchiveSketchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): ArchiveSketchResponse {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArchiveSketchResponse();
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

    fromJSON(_: any): ArchiveSketchResponse {
        return {};
    },

    toJSON(_: ArchiveSketchResponse): unknown {
        const obj: any = {};
        return obj;
    },

    fromPartial(_: DeepPartial<ArchiveSketchResponse>): ArchiveSketchResponse {
        const message = createBaseArchiveSketchResponse();
        return message;
    },
};

/** The main Arduino Platform service API */
export type ArduinoCoreServiceDefinition = typeof ArduinoCoreServiceDefinition;
export const ArduinoCoreServiceDefinition = {
    name: 'ArduinoCoreService',
    fullName: 'cc.arduino.cli.commands.v1.ArduinoCoreService',
    methods: {
        /** Create a new Arduino Core instance */
        create: {
            name: 'Create',
            requestType: CreateRequest,
            requestStream: false,
            responseType: CreateResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Initializes an existing Arduino Core instance by loading platforms and
         * libraries
         */
        init: {
            name: 'Init',
            requestType: InitRequest,
            requestStream: false,
            responseType: InitResponse,
            responseStream: true,
            options: {},
        },
        /** Destroy an instance of the Arduino Core Service */
        destroy: {
            name: 'Destroy',
            requestType: DestroyRequest,
            requestStream: false,
            responseType: DestroyResponse,
            responseStream: false,
            options: {},
        },
        /** Update package index of the Arduino Core Service */
        updateIndex: {
            name: 'UpdateIndex',
            requestType: UpdateIndexRequest,
            requestStream: false,
            responseType: UpdateIndexResponse,
            responseStream: true,
            options: {},
        },
        /** Update libraries index */
        updateLibrariesIndex: {
            name: 'UpdateLibrariesIndex',
            requestType: UpdateLibrariesIndexRequest,
            requestStream: false,
            responseType: UpdateLibrariesIndexResponse,
            responseStream: true,
            options: {},
        },
        /** Update packages indexes for both Cores and Libraries */
        updateCoreLibrariesIndex: {
            name: 'UpdateCoreLibrariesIndex',
            requestType: UpdateCoreLibrariesIndexRequest,
            requestStream: false,
            responseType: UpdateCoreLibrariesIndexResponse,
            responseStream: true,
            options: {},
        },
        /** Outdated returns a message with a list of outdated Cores and Libraries */
        outdated: {
            name: 'Outdated',
            requestType: OutdatedRequest,
            requestStream: false,
            responseType: OutdatedResponse,
            responseStream: false,
            options: {},
        },
        /** Upgrade both Cores and Libraries */
        upgrade: {
            name: 'Upgrade',
            requestType: UpgradeRequest,
            requestStream: false,
            responseType: UpgradeResponse,
            responseStream: true,
            options: {},
        },
        /** Get the version of Arduino CLI in use. */
        version: {
            name: 'Version',
            requestType: VersionRequest,
            requestStream: false,
            responseType: VersionResponse,
            responseStream: false,
            options: {},
        },
        /** Create a new Sketch */
        newSketch: {
            name: 'NewSketch',
            requestType: NewSketchRequest,
            requestStream: false,
            responseType: NewSketchResponse,
            responseStream: false,
            options: {},
        },
        /** Returns all files composing a Sketch */
        loadSketch: {
            name: 'LoadSketch',
            requestType: LoadSketchRequest,
            requestStream: false,
            responseType: LoadSketchResponse,
            responseStream: false,
            options: {},
        },
        /** Creates a zip file containing all files of specified Sketch */
        archiveSketch: {
            name: 'ArchiveSketch',
            requestType: ArchiveSketchRequest,
            requestStream: false,
            responseType: ArchiveSketchResponse,
            responseStream: false,
            options: {},
        },
        /** Requests details about a board */
        boardDetails: {
            name: 'BoardDetails',
            requestType: BoardDetailsRequest,
            requestStream: false,
            responseType: BoardDetailsResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Attach a board to a sketch. When the `fqbn` field of a request is not
         * provided, the FQBN of the attached board will be used.
         */
        boardAttach: {
            name: 'BoardAttach',
            requestType: BoardAttachRequest,
            requestStream: false,
            responseType: BoardAttachResponse,
            responseStream: true,
            options: {},
        },
        /** List the boards currently connected to the computer. */
        boardList: {
            name: 'BoardList',
            requestType: BoardListRequest,
            requestStream: false,
            responseType: BoardListResponse,
            responseStream: false,
            options: {},
        },
        /** List all the boards provided by installed platforms. */
        boardListAll: {
            name: 'BoardListAll',
            requestType: BoardListAllRequest,
            requestStream: false,
            responseType: BoardListAllResponse,
            responseStream: false,
            options: {},
        },
        /** Search boards in installed and not installed Platforms. */
        boardSearch: {
            name: 'BoardSearch',
            requestType: BoardSearchRequest,
            requestStream: false,
            responseType: BoardSearchResponse,
            responseStream: false,
            options: {},
        },
        /** List boards connection and disconnected events. */
        boardListWatch: {
            name: 'BoardListWatch',
            requestType: BoardListWatchRequest,
            requestStream: true,
            responseType: BoardListWatchResponse,
            responseStream: true,
            options: {},
        },
        /** Compile an Arduino sketch. */
        compile: {
            name: 'Compile',
            requestType: CompileRequest,
            requestStream: false,
            responseType: CompileResponse,
            responseStream: true,
            options: {},
        },
        /** Download and install a platform and its tool dependencies. */
        platformInstall: {
            name: 'PlatformInstall',
            requestType: PlatformInstallRequest,
            requestStream: false,
            responseType: PlatformInstallResponse,
            responseStream: true,
            options: {},
        },
        /**
         * Download a platform and its tool dependencies to the `staging/packages`
         * subdirectory of the data directory.
         */
        platformDownload: {
            name: 'PlatformDownload',
            requestType: PlatformDownloadRequest,
            requestStream: false,
            responseType: PlatformDownloadResponse,
            responseStream: true,
            options: {},
        },
        /**
         * Uninstall a platform as well as its tool dependencies that are not used by
         * other installed platforms.
         */
        platformUninstall: {
            name: 'PlatformUninstall',
            requestType: PlatformUninstallRequest,
            requestStream: false,
            responseType: PlatformUninstallResponse,
            responseStream: true,
            options: {},
        },
        /** Upgrade an installed platform to the latest version. */
        platformUpgrade: {
            name: 'PlatformUpgrade',
            requestType: PlatformUpgradeRequest,
            requestStream: false,
            responseType: PlatformUpgradeResponse,
            responseStream: true,
            options: {},
        },
        /** Upload a compiled sketch to a board. */
        upload: {
            name: 'Upload',
            requestType: UploadRequest,
            requestStream: false,
            responseType: UploadResponse,
            responseStream: true,
            options: {},
        },
        /** Upload a compiled sketch to a board using a programmer. */
        uploadUsingProgrammer: {
            name: 'UploadUsingProgrammer',
            requestType: UploadUsingProgrammerRequest,
            requestStream: false,
            responseType: UploadUsingProgrammerResponse,
            responseStream: true,
            options: {},
        },
        /**
         * Returns the list of users fields necessary to upload to that board
         * using the specified protocol.
         */
        supportedUserFields: {
            name: 'SupportedUserFields',
            requestType: SupportedUserFieldsRequest,
            requestStream: false,
            responseType: SupportedUserFieldsResponse,
            responseStream: false,
            options: {},
        },
        /** List programmers available for a board. */
        listProgrammersAvailableForUpload: {
            name: 'ListProgrammersAvailableForUpload',
            requestType: ListProgrammersAvailableForUploadRequest,
            requestStream: false,
            responseType: ListProgrammersAvailableForUploadResponse,
            responseStream: false,
            options: {},
        },
        /** Burn bootloader to a board. */
        burnBootloader: {
            name: 'BurnBootloader',
            requestType: BurnBootloaderRequest,
            requestStream: false,
            responseType: BurnBootloaderResponse,
            responseStream: true,
            options: {},
        },
        /** Search for a platform in the platforms indexes. */
        platformSearch: {
            name: 'PlatformSearch',
            requestType: PlatformSearchRequest,
            requestStream: false,
            responseType: PlatformSearchResponse,
            responseStream: false,
            options: {},
        },
        /** List all installed platforms. */
        platformList: {
            name: 'PlatformList',
            requestType: PlatformListRequest,
            requestStream: false,
            responseType: PlatformListResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Download the archive file of an Arduino library in the libraries index to
         * the staging directory.
         */
        libraryDownload: {
            name: 'LibraryDownload',
            requestType: LibraryDownloadRequest,
            requestStream: false,
            responseType: LibraryDownloadResponse,
            responseStream: true,
            options: {},
        },
        /** Download and install an Arduino library from the libraries index. */
        libraryInstall: {
            name: 'LibraryInstall',
            requestType: LibraryInstallRequest,
            requestStream: false,
            responseType: LibraryInstallResponse,
            responseStream: true,
            options: {},
        },
        /** Upgrade a library to the newest version available. */
        libraryUpgrade: {
            name: 'LibraryUpgrade',
            requestType: LibraryUpgradeRequest,
            requestStream: false,
            responseType: LibraryUpgradeResponse,
            responseStream: true,
            options: {},
        },
        /** Install a library from a Zip File */
        zipLibraryInstall: {
            name: 'ZipLibraryInstall',
            requestType: ZipLibraryInstallRequest,
            requestStream: false,
            responseType: ZipLibraryInstallResponse,
            responseStream: true,
            options: {},
        },
        /** Download and install a library from a git url */
        gitLibraryInstall: {
            name: 'GitLibraryInstall',
            requestType: GitLibraryInstallRequest,
            requestStream: false,
            responseType: GitLibraryInstallResponse,
            responseStream: true,
            options: {},
        },
        /** Uninstall an Arduino library. */
        libraryUninstall: {
            name: 'LibraryUninstall',
            requestType: LibraryUninstallRequest,
            requestStream: false,
            responseType: LibraryUninstallResponse,
            responseStream: true,
            options: {},
        },
        /** Upgrade all installed Arduino libraries to the newest version available. */
        libraryUpgradeAll: {
            name: 'LibraryUpgradeAll',
            requestType: LibraryUpgradeAllRequest,
            requestStream: false,
            responseType: LibraryUpgradeAllResponse,
            responseStream: true,
            options: {},
        },
        /**
         * List the recursive dependencies of a library, as defined by the `depends`
         * field of the library.properties files.
         */
        libraryResolveDependencies: {
            name: 'LibraryResolveDependencies',
            requestType: LibraryResolveDependenciesRequest,
            requestStream: false,
            responseType: LibraryResolveDependenciesResponse,
            responseStream: false,
            options: {},
        },
        /** Search the Arduino libraries index for libraries. */
        librarySearch: {
            name: 'LibrarySearch',
            requestType: LibrarySearchRequest,
            requestStream: false,
            responseType: LibrarySearchResponse,
            responseStream: false,
            options: {},
        },
        /** List the installed libraries. */
        libraryList: {
            name: 'LibraryList',
            requestType: LibraryListRequest,
            requestStream: false,
            responseType: LibraryListResponse,
            responseStream: false,
            options: {},
        },
        /** Open a monitor connection to a board port */
        monitor: {
            name: 'Monitor',
            requestType: MonitorRequest,
            requestStream: true,
            responseType: MonitorResponse,
            responseStream: true,
            options: {},
        },
        /** Returns the parameters that can be set in the MonitorRequest calls */
        enumerateMonitorPortSettings: {
            name: 'EnumerateMonitorPortSettings',
            requestType: EnumerateMonitorPortSettingsRequest,
            requestStream: false,
            responseType: EnumerateMonitorPortSettingsResponse,
            responseStream: false,
            options: {},
        },
    },
} as const;

export interface ArduinoCoreServiceServiceImplementation<CallContextExt = {}> {
    /** Create a new Arduino Core instance */
    create(request: CreateRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateResponse>>;
    /**
     * Initializes an existing Arduino Core instance by loading platforms and
     * libraries
     */
    init(
        request: InitRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<InitResponse>>;
    /** Destroy an instance of the Arduino Core Service */
    destroy(request: DestroyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DestroyResponse>>;
    /** Update package index of the Arduino Core Service */
    updateIndex(
        request: UpdateIndexRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<UpdateIndexResponse>>;
    /** Update libraries index */
    updateLibrariesIndex(
        request: UpdateLibrariesIndexRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<UpdateLibrariesIndexResponse>>;
    /** Update packages indexes for both Cores and Libraries */
    updateCoreLibrariesIndex(
        request: UpdateCoreLibrariesIndexRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<UpdateCoreLibrariesIndexResponse>>;
    /** Outdated returns a message with a list of outdated Cores and Libraries */
    outdated(request: OutdatedRequest, context: CallContext & CallContextExt): Promise<DeepPartial<OutdatedResponse>>;
    /** Upgrade both Cores and Libraries */
    upgrade(
        request: UpgradeRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<UpgradeResponse>>;
    /** Get the version of Arduino CLI in use. */
    version(request: VersionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VersionResponse>>;
    /** Create a new Sketch */
    newSketch(
        request: NewSketchRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<NewSketchResponse>>;
    /** Returns all files composing a Sketch */
    loadSketch(
        request: LoadSketchRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<LoadSketchResponse>>;
    /** Creates a zip file containing all files of specified Sketch */
    archiveSketch(
        request: ArchiveSketchRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<ArchiveSketchResponse>>;
    /** Requests details about a board */
    boardDetails(
        request: BoardDetailsRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<BoardDetailsResponse>>;
    /**
     * Attach a board to a sketch. When the `fqbn` field of a request is not
     * provided, the FQBN of the attached board will be used.
     */
    boardAttach(
        request: BoardAttachRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<BoardAttachResponse>>;
    /** List the boards currently connected to the computer. */
    boardList(
        request: BoardListRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<BoardListResponse>>;
    /** List all the boards provided by installed platforms. */
    boardListAll(
        request: BoardListAllRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<BoardListAllResponse>>;
    /** Search boards in installed and not installed Platforms. */
    boardSearch(
        request: BoardSearchRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<BoardSearchResponse>>;
    /** List boards connection and disconnected events. */
    boardListWatch(
        request: AsyncIterable<BoardListWatchRequest>,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<BoardListWatchResponse>>;
    /** Compile an Arduino sketch. */
    compile(
        request: CompileRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<CompileResponse>>;
    /** Download and install a platform and its tool dependencies. */
    platformInstall(
        request: PlatformInstallRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<PlatformInstallResponse>>;
    /**
     * Download a platform and its tool dependencies to the `staging/packages`
     * subdirectory of the data directory.
     */
    platformDownload(
        request: PlatformDownloadRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<PlatformDownloadResponse>>;
    /**
     * Uninstall a platform as well as its tool dependencies that are not used by
     * other installed platforms.
     */
    platformUninstall(
        request: PlatformUninstallRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<PlatformUninstallResponse>>;
    /** Upgrade an installed platform to the latest version. */
    platformUpgrade(
        request: PlatformUpgradeRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<PlatformUpgradeResponse>>;
    /** Upload a compiled sketch to a board. */
    upload(
        request: UploadRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<UploadResponse>>;
    /** Upload a compiled sketch to a board using a programmer. */
    uploadUsingProgrammer(
        request: UploadUsingProgrammerRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<UploadUsingProgrammerResponse>>;
    /**
     * Returns the list of users fields necessary to upload to that board
     * using the specified protocol.
     */
    supportedUserFields(
        request: SupportedUserFieldsRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<SupportedUserFieldsResponse>>;
    /** List programmers available for a board. */
    listProgrammersAvailableForUpload(
        request: ListProgrammersAvailableForUploadRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<ListProgrammersAvailableForUploadResponse>>;
    /** Burn bootloader to a board. */
    burnBootloader(
        request: BurnBootloaderRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<BurnBootloaderResponse>>;
    /** Search for a platform in the platforms indexes. */
    platformSearch(
        request: PlatformSearchRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<PlatformSearchResponse>>;
    /** List all installed platforms. */
    platformList(
        request: PlatformListRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<PlatformListResponse>>;
    /**
     * Download the archive file of an Arduino library in the libraries index to
     * the staging directory.
     */
    libraryDownload(
        request: LibraryDownloadRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<LibraryDownloadResponse>>;
    /** Download and install an Arduino library from the libraries index. */
    libraryInstall(
        request: LibraryInstallRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<LibraryInstallResponse>>;
    /** Upgrade a library to the newest version available. */
    libraryUpgrade(
        request: LibraryUpgradeRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<LibraryUpgradeResponse>>;
    /** Install a library from a Zip File */
    zipLibraryInstall(
        request: ZipLibraryInstallRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<ZipLibraryInstallResponse>>;
    /** Download and install a library from a git url */
    gitLibraryInstall(
        request: GitLibraryInstallRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<GitLibraryInstallResponse>>;
    /** Uninstall an Arduino library. */
    libraryUninstall(
        request: LibraryUninstallRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<LibraryUninstallResponse>>;
    /** Upgrade all installed Arduino libraries to the newest version available. */
    libraryUpgradeAll(
        request: LibraryUpgradeAllRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<LibraryUpgradeAllResponse>>;
    /**
     * List the recursive dependencies of a library, as defined by the `depends`
     * field of the library.properties files.
     */
    libraryResolveDependencies(
        request: LibraryResolveDependenciesRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<LibraryResolveDependenciesResponse>>;
    /** Search the Arduino libraries index for libraries. */
    librarySearch(
        request: LibrarySearchRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<LibrarySearchResponse>>;
    /** List the installed libraries. */
    libraryList(
        request: LibraryListRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<LibraryListResponse>>;
    /** Open a monitor connection to a board port */
    monitor(
        request: AsyncIterable<MonitorRequest>,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<MonitorResponse>>;
    /** Returns the parameters that can be set in the MonitorRequest calls */
    enumerateMonitorPortSettings(
        request: EnumerateMonitorPortSettingsRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<EnumerateMonitorPortSettingsResponse>>;
}

export interface ArduinoCoreServiceClient<CallOptionsExt = {}> {
    /** Create a new Arduino Core instance */
    create(request: DeepPartial<CreateRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateResponse>;
    /**
     * Initializes an existing Arduino Core instance by loading platforms and
     * libraries
     */
    init(request: DeepPartial<InitRequest>, options?: CallOptions & CallOptionsExt): AsyncIterable<InitResponse>;
    /** Destroy an instance of the Arduino Core Service */
    destroy(request: DeepPartial<DestroyRequest>, options?: CallOptions & CallOptionsExt): Promise<DestroyResponse>;
    /** Update package index of the Arduino Core Service */
    updateIndex(
        request: DeepPartial<UpdateIndexRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<UpdateIndexResponse>;
    /** Update libraries index */
    updateLibrariesIndex(
        request: DeepPartial<UpdateLibrariesIndexRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<UpdateLibrariesIndexResponse>;
    /** Update packages indexes for both Cores and Libraries */
    updateCoreLibrariesIndex(
        request: DeepPartial<UpdateCoreLibrariesIndexRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<UpdateCoreLibrariesIndexResponse>;
    /** Outdated returns a message with a list of outdated Cores and Libraries */
    outdated(request: DeepPartial<OutdatedRequest>, options?: CallOptions & CallOptionsExt): Promise<OutdatedResponse>;
    /** Upgrade both Cores and Libraries */
    upgrade(
        request: DeepPartial<UpgradeRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<UpgradeResponse>;
    /** Get the version of Arduino CLI in use. */
    version(request: DeepPartial<VersionRequest>, options?: CallOptions & CallOptionsExt): Promise<VersionResponse>;
    /** Create a new Sketch */
    newSketch(
        request: DeepPartial<NewSketchRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<NewSketchResponse>;
    /** Returns all files composing a Sketch */
    loadSketch(
        request: DeepPartial<LoadSketchRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<LoadSketchResponse>;
    /** Creates a zip file containing all files of specified Sketch */
    archiveSketch(
        request: DeepPartial<ArchiveSketchRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<ArchiveSketchResponse>;
    /** Requests details about a board */
    boardDetails(
        request: DeepPartial<BoardDetailsRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<BoardDetailsResponse>;
    /**
     * Attach a board to a sketch. When the `fqbn` field of a request is not
     * provided, the FQBN of the attached board will be used.
     */
    boardAttach(
        request: DeepPartial<BoardAttachRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<BoardAttachResponse>;
    /** List the boards currently connected to the computer. */
    boardList(
        request: DeepPartial<BoardListRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<BoardListResponse>;
    /** List all the boards provided by installed platforms. */
    boardListAll(
        request: DeepPartial<BoardListAllRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<BoardListAllResponse>;
    /** Search boards in installed and not installed Platforms. */
    boardSearch(
        request: DeepPartial<BoardSearchRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<BoardSearchResponse>;
    /** List boards connection and disconnected events. */
    boardListWatch(
        request: AsyncIterable<DeepPartial<BoardListWatchRequest>>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<BoardListWatchResponse>;
    /** Compile an Arduino sketch. */
    compile(
        request: DeepPartial<CompileRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<CompileResponse>;
    /** Download and install a platform and its tool dependencies. */
    platformInstall(
        request: DeepPartial<PlatformInstallRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<PlatformInstallResponse>;
    /**
     * Download a platform and its tool dependencies to the `staging/packages`
     * subdirectory of the data directory.
     */
    platformDownload(
        request: DeepPartial<PlatformDownloadRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<PlatformDownloadResponse>;
    /**
     * Uninstall a platform as well as its tool dependencies that are not used by
     * other installed platforms.
     */
    platformUninstall(
        request: DeepPartial<PlatformUninstallRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<PlatformUninstallResponse>;
    /** Upgrade an installed platform to the latest version. */
    platformUpgrade(
        request: DeepPartial<PlatformUpgradeRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<PlatformUpgradeResponse>;
    /** Upload a compiled sketch to a board. */
    upload(request: DeepPartial<UploadRequest>, options?: CallOptions & CallOptionsExt): AsyncIterable<UploadResponse>;
    /** Upload a compiled sketch to a board using a programmer. */
    uploadUsingProgrammer(
        request: DeepPartial<UploadUsingProgrammerRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<UploadUsingProgrammerResponse>;
    /**
     * Returns the list of users fields necessary to upload to that board
     * using the specified protocol.
     */
    supportedUserFields(
        request: DeepPartial<SupportedUserFieldsRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<SupportedUserFieldsResponse>;
    /** List programmers available for a board. */
    listProgrammersAvailableForUpload(
        request: DeepPartial<ListProgrammersAvailableForUploadRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<ListProgrammersAvailableForUploadResponse>;
    /** Burn bootloader to a board. */
    burnBootloader(
        request: DeepPartial<BurnBootloaderRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<BurnBootloaderResponse>;
    /** Search for a platform in the platforms indexes. */
    platformSearch(
        request: DeepPartial<PlatformSearchRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<PlatformSearchResponse>;
    /** List all installed platforms. */
    platformList(
        request: DeepPartial<PlatformListRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<PlatformListResponse>;
    /**
     * Download the archive file of an Arduino library in the libraries index to
     * the staging directory.
     */
    libraryDownload(
        request: DeepPartial<LibraryDownloadRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<LibraryDownloadResponse>;
    /** Download and install an Arduino library from the libraries index. */
    libraryInstall(
        request: DeepPartial<LibraryInstallRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<LibraryInstallResponse>;
    /** Upgrade a library to the newest version available. */
    libraryUpgrade(
        request: DeepPartial<LibraryUpgradeRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<LibraryUpgradeResponse>;
    /** Install a library from a Zip File */
    zipLibraryInstall(
        request: DeepPartial<ZipLibraryInstallRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<ZipLibraryInstallResponse>;
    /** Download and install a library from a git url */
    gitLibraryInstall(
        request: DeepPartial<GitLibraryInstallRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<GitLibraryInstallResponse>;
    /** Uninstall an Arduino library. */
    libraryUninstall(
        request: DeepPartial<LibraryUninstallRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<LibraryUninstallResponse>;
    /** Upgrade all installed Arduino libraries to the newest version available. */
    libraryUpgradeAll(
        request: DeepPartial<LibraryUpgradeAllRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<LibraryUpgradeAllResponse>;
    /**
     * List the recursive dependencies of a library, as defined by the `depends`
     * field of the library.properties files.
     */
    libraryResolveDependencies(
        request: DeepPartial<LibraryResolveDependenciesRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<LibraryResolveDependenciesResponse>;
    /** Search the Arduino libraries index for libraries. */
    librarySearch(
        request: DeepPartial<LibrarySearchRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<LibrarySearchResponse>;
    /** List the installed libraries. */
    libraryList(
        request: DeepPartial<LibraryListRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<LibraryListResponse>;
    /** Open a monitor connection to a board port */
    monitor(
        request: AsyncIterable<DeepPartial<MonitorRequest>>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<MonitorResponse>;
    /** Returns the parameters that can be set in the MonitorRequest calls */
    enumerateMonitorPortSettings(
        request: DeepPartial<EnumerateMonitorPortSettingsRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<EnumerateMonitorPortSettingsResponse>;
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

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
