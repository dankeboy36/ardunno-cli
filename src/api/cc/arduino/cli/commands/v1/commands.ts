/* eslint-disable */
import Long from 'long';
import type { CallContext, CallOptions } from 'nice-grpc-common';
import _m0 from 'protobufjs/minimal';
import { Status } from '../../../../../google/rpc/status';
import {
    BoardDetailsRequest,
    BoardDetailsResponse,
    BoardIdentifyRequest,
    BoardIdentifyResponse,
    BoardListAllRequest,
    BoardListAllResponse,
    BoardListRequest,
    BoardListResponse,
    BoardListWatchRequest,
    BoardListWatchResponse,
    BoardSearchRequest,
    BoardSearchResponse,
} from './board';
import {
    DownloadProgress,
    Instance,
    Sketch,
    SketchProfile,
    TaskProgress,
} from './common';
import { CompileRequest, CompileResponse } from './compile';
import {
    PlatformDownloadRequest,
    PlatformDownloadResponse,
    PlatformInstallRequest,
    PlatformInstallResponse,
    PlatformSearchRequest,
    PlatformSearchResponse,
    PlatformUninstallRequest,
    PlatformUninstallResponse,
    PlatformUpgradeRequest,
    PlatformUpgradeResponse,
} from './core';
import {
    DebugRequest,
    DebugResponse,
    GetDebugConfigRequest,
    GetDebugConfigResponse,
    IsDebugSupportedRequest,
    IsDebugSupportedResponse,
} from './debug';
import {
    GitLibraryInstallRequest,
    GitLibraryInstallResponse,
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
} from './lib';
import {
    EnumerateMonitorPortSettingsRequest,
    EnumerateMonitorPortSettingsResponse,
    MonitorRequest,
    MonitorResponse,
} from './monitor';
import {
    ConfigurationGetRequest,
    ConfigurationGetResponse,
    ConfigurationOpenRequest,
    ConfigurationOpenResponse,
    ConfigurationSaveRequest,
    ConfigurationSaveResponse,
    SettingsEnumerateRequest,
    SettingsEnumerateResponse,
    SettingsGetValueRequest,
    SettingsGetValueResponse,
    SettingsSetValueRequest,
    SettingsSetValueResponse,
} from './settings';
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
} from './upload';

/** Represent the reason why an instance initialization failed. */
export enum FailedInstanceInitReason {
    /** FAILED_INSTANCE_INIT_REASON_UNSPECIFIED - FAILED_INSTANCE_INIT_REASON_UNSPECIFIED the error reason is not specialized. */
    FAILED_INSTANCE_INIT_REASON_UNSPECIFIED = 0,
    /** FAILED_INSTANCE_INIT_REASON_INVALID_INDEX_URL - INVALID_INDEX_URL a package index url is malformed. */
    FAILED_INSTANCE_INIT_REASON_INVALID_INDEX_URL = 1,
    /**
     * FAILED_INSTANCE_INIT_REASON_INDEX_LOAD_ERROR - FAILED_INSTANCE_INIT_REASON_INDEX_LOAD_ERROR failure encountered while
     * loading an index.
     */
    FAILED_INSTANCE_INIT_REASON_INDEX_LOAD_ERROR = 2,
    /**
     * FAILED_INSTANCE_INIT_REASON_TOOL_LOAD_ERROR - FAILED_INSTANCE_INIT_REASON_TOOL_LOAD_ERROR failure encountered while
     * loading a tool.
     */
    FAILED_INSTANCE_INIT_REASON_TOOL_LOAD_ERROR = 3,
    /**
     * FAILED_INSTANCE_INIT_REASON_INDEX_DOWNLOAD_ERROR - FAILED_INSTANCE_INIT_REASON_INDEX_DOWNLOAD_ERROR failure encountered while
     * downloading an index.
     */
    FAILED_INSTANCE_INIT_REASON_INDEX_DOWNLOAD_ERROR = 4,
    UNRECOGNIZED = -1,
}

export function failedInstanceInitReasonFromJSON(
    object: any
): FailedInstanceInitReason {
    switch (object) {
        case 0:
        case 'FAILED_INSTANCE_INIT_REASON_UNSPECIFIED':
            return FailedInstanceInitReason.FAILED_INSTANCE_INIT_REASON_UNSPECIFIED;
        case 1:
        case 'FAILED_INSTANCE_INIT_REASON_INVALID_INDEX_URL':
            return FailedInstanceInitReason.FAILED_INSTANCE_INIT_REASON_INVALID_INDEX_URL;
        case 2:
        case 'FAILED_INSTANCE_INIT_REASON_INDEX_LOAD_ERROR':
            return FailedInstanceInitReason.FAILED_INSTANCE_INIT_REASON_INDEX_LOAD_ERROR;
        case 3:
        case 'FAILED_INSTANCE_INIT_REASON_TOOL_LOAD_ERROR':
            return FailedInstanceInitReason.FAILED_INSTANCE_INIT_REASON_TOOL_LOAD_ERROR;
        case 4:
        case 'FAILED_INSTANCE_INIT_REASON_INDEX_DOWNLOAD_ERROR':
            return FailedInstanceInitReason.FAILED_INSTANCE_INIT_REASON_INDEX_DOWNLOAD_ERROR;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return FailedInstanceInitReason.UNRECOGNIZED;
    }
}

export function failedInstanceInitReasonToJSON(
    object: FailedInstanceInitReason
): string {
    switch (object) {
        case FailedInstanceInitReason.FAILED_INSTANCE_INIT_REASON_UNSPECIFIED:
            return 'FAILED_INSTANCE_INIT_REASON_UNSPECIFIED';
        case FailedInstanceInitReason.FAILED_INSTANCE_INIT_REASON_INVALID_INDEX_URL:
            return 'FAILED_INSTANCE_INIT_REASON_INVALID_INDEX_URL';
        case FailedInstanceInitReason.FAILED_INSTANCE_INIT_REASON_INDEX_LOAD_ERROR:
            return 'FAILED_INSTANCE_INIT_REASON_INDEX_LOAD_ERROR';
        case FailedInstanceInitReason.FAILED_INSTANCE_INIT_REASON_TOOL_LOAD_ERROR:
            return 'FAILED_INSTANCE_INIT_REASON_TOOL_LOAD_ERROR';
        case FailedInstanceInitReason.FAILED_INSTANCE_INIT_REASON_INDEX_DOWNLOAD_ERROR:
            return 'FAILED_INSTANCE_INIT_REASON_INDEX_DOWNLOAD_ERROR';
        case FailedInstanceInitReason.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}

export interface CreateRequest {}

export interface CreateResponse {
    /** An Arduino Core instance. */
    instance: Instance | undefined;
}

export interface InitRequest {
    /** An Arduino Core instance. */
    instance: Instance | undefined;
    /** Profile to use. */
    profile: string;
    /** The path where the sketch is stored. */
    sketchPath: string;
}

export interface InitResponse {
    message?:
        | { $case: 'initProgress'; initProgress: InitResponse_Progress }
        | { $case: 'error'; error: Status }
        | {
              $case: 'profile';
              profile: SketchProfile;
          }
        | undefined;
}

export interface InitResponse_Progress {
    /** Progress of the downloads of platforms and libraries index files. */
    downloadProgress: DownloadProgress | undefined;
    /** Describes the current stage of the initialization. */
    taskProgress: TaskProgress | undefined;
}

export interface FailedInstanceInitError {
    /** specific cause of the error. */
    reason: FailedInstanceInitReason;
    /** explanation of the error. */
    message: string;
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
    /**
     * Only perform index update if the index file is older than this value in
     * seconds.
     */
    updateIfOlderThanSecs: number;
}

export interface UpdateIndexResponse {
    message?:
        | { $case: 'downloadProgress'; downloadProgress: DownloadProgress }
        | {
              $case: 'result';
              result: UpdateIndexResponse_Result;
          }
        | undefined;
}

export interface UpdateIndexResponse_Result {
    /** The result of the packages index update. */
    updatedIndexes: IndexUpdateReport[];
}

export interface UpdateLibrariesIndexRequest {
    /** Arduino Core Service instance from the Init response. */
    instance: Instance | undefined;
    /**
     * Only perform index update if the index file is older than this value in
     * seconds.
     */
    updateIfOlderThanSecs: number;
}

export interface UpdateLibrariesIndexResponse {
    message?:
        | { $case: 'downloadProgress'; downloadProgress: DownloadProgress }
        | {
              $case: 'result';
              result: UpdateLibrariesIndexResponse_Result;
          }
        | undefined;
}

export interface UpdateLibrariesIndexResponse_Result {
    /** The result of the libraries index update. */
    librariesIndex: IndexUpdateReport | undefined;
}

export interface IndexUpdateReport {
    /** The URL of the index that was updated. */
    indexUrl: string;
    /** The result of the index update. */
    status: IndexUpdateReport_Status;
}

/** The status represents the result of the index update. */
export enum IndexUpdateReport_Status {
    /** STATUS_UNSPECIFIED - The status of the index update is unspecified. */
    STATUS_UNSPECIFIED = 0,
    /** STATUS_UPDATED - The index has been successfully updated. */
    STATUS_UPDATED = 1,
    /** STATUS_ALREADY_UP_TO_DATE - The index was already up to date. */
    STATUS_ALREADY_UP_TO_DATE = 2,
    /** STATUS_FAILED - The index update failed. */
    STATUS_FAILED = 3,
    /** STATUS_SKIPPED - The index update was skipped. */
    STATUS_SKIPPED = 4,
    UNRECOGNIZED = -1,
}

export function indexUpdateReport_StatusFromJSON(
    object: any
): IndexUpdateReport_Status {
    switch (object) {
        case 0:
        case 'STATUS_UNSPECIFIED':
            return IndexUpdateReport_Status.STATUS_UNSPECIFIED;
        case 1:
        case 'STATUS_UPDATED':
            return IndexUpdateReport_Status.STATUS_UPDATED;
        case 2:
        case 'STATUS_ALREADY_UP_TO_DATE':
            return IndexUpdateReport_Status.STATUS_ALREADY_UP_TO_DATE;
        case 3:
        case 'STATUS_FAILED':
            return IndexUpdateReport_Status.STATUS_FAILED;
        case 4:
        case 'STATUS_SKIPPED':
            return IndexUpdateReport_Status.STATUS_SKIPPED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return IndexUpdateReport_Status.UNRECOGNIZED;
    }
}

export function indexUpdateReport_StatusToJSON(
    object: IndexUpdateReport_Status
): string {
    switch (object) {
        case IndexUpdateReport_Status.STATUS_UNSPECIFIED:
            return 'STATUS_UNSPECIFIED';
        case IndexUpdateReport_Status.STATUS_UPDATED:
            return 'STATUS_UPDATED';
        case IndexUpdateReport_Status.STATUS_ALREADY_UP_TO_DATE:
            return 'STATUS_ALREADY_UP_TO_DATE';
        case IndexUpdateReport_Status.STATUS_FAILED:
            return 'STATUS_FAILED';
        case IndexUpdateReport_Status.STATUS_SKIPPED:
            return 'STATUS_SKIPPED';
        case IndexUpdateReport_Status.UNRECOGNIZED:
        default:
            return 'UNRECOGNIZED';
    }
}

export interface VersionRequest {}

export interface VersionResponse {
    /** The version of Arduino CLI in use. */
    version: string;
}

export interface NewSketchRequest {
    /** New sketch name. */
    sketchName: string;
    /**
     * Optional: create a Sketch in this directory
     * (used as "Sketchbook" directory).
     * Default Sketchbook directory "directories.User" is used if sketch_dir is
     * empty.
     */
    sketchDir: string;
    /** Specificies if an existing .ino sketch should be overwritten. */
    overwrite: boolean;
}

export interface NewSketchResponse {
    /** Absolute path to a main sketch file. */
    mainFile: string;
}

export interface LoadSketchRequest {
    /** Absolute path to single sketch file or a sketch folder. */
    sketchPath: string;
}

export interface LoadSketchResponse {
    /** The loaded sketch. */
    sketch: Sketch | undefined;
}

export interface ArchiveSketchRequest {
    /** Absolute path to Sketch file or folder containing Sketch file. */
    sketchPath: string;
    /**
     * Absolute path to archive that will be created or folder that will contain
     * it.
     */
    archivePath: string;
    /** Specifies if build directory should be included in the archive. */
    includeBuildDir: boolean;
    /** Allows to override an already existing archive. */
    overwrite: boolean;
}

export interface ArchiveSketchResponse {}

export interface SetSketchDefaultsRequest {
    /** Absolute path to Sketch file or folder containing Sketch file. */
    sketchPath: string;
    /** The desired value for default_fqbn in project file (sketch.yaml). */
    defaultFqbn: string;
    /** The desired value for default_port in project file (sketch.yaml). */
    defaultPortAddress: string;
    /** The desired value for default_protocol in project file (sketch.yaml). */
    defaultPortProtocol: string;
    /** The desired value for default_programmer in project file (sketch.yaml). */
    defaultProgrammer: string;
}

export interface SetSketchDefaultsResponse {
    /**
     * The value of default_fqnn that has been written in project file
     * (sketch.yaml).
     */
    defaultFqbn: string;
    /**
     * The value of default_port that has been written in project file
     * (sketch.yaml).
     */
    defaultPortAddress: string;
    /**
     * The value of default_protocol that has been written in project file
     * (sketch.yaml).
     */
    defaultPortProtocol: string;
    /**
     * The value of default_programmer that has been written in project file
     * (sketch.yaml).
     */
    defaultProgrammer: string;
}

export interface CheckForArduinoCLIUpdatesRequest {
    /**
     * Force the check, even if the configuration says not to check for
     * updates.
     */
    forceCheck: boolean;
}

export interface CheckForArduinoCLIUpdatesResponse {
    /**
     * The latest version of Arduino CLI available, if bigger than the
     * current version.
     */
    newestVersion: string;
}

export interface CleanDownloadCacheDirectoryRequest {
    /** The Arduino Core Service instance. */
    instance: Instance | undefined;
}

export interface CleanDownloadCacheDirectoryResponse {}

function createBaseCreateRequest(): CreateRequest {
    return {};
}

export const CreateRequest = {
    encode(
        _: CreateRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateRequest();
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

    fromJSON(_: any): CreateRequest {
        return {};
    },

    toJSON(_: CreateRequest): unknown {
        const obj: any = {};
        return obj;
    },

    create(base?: DeepPartial<CreateRequest>): CreateRequest {
        return CreateRequest.fromPartial(base ?? {});
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
    encode(
        message: CreateResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(
                message.instance,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CreateResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.instance = Instance.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CreateResponse {
        return {
            instance: isSet(object.instance)
                ? Instance.fromJSON(object.instance)
                : undefined,
        };
    },

    toJSON(message: CreateResponse): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance
                ? Instance.toJSON(message.instance)
                : undefined);
        return obj;
    },

    create(base?: DeepPartial<CreateResponse>): CreateResponse {
        return CreateResponse.fromPartial(base ?? {});
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
    encode(
        message: InitRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(
                message.instance,
                writer.uint32(10).fork()
            ).ldelim();
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
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitRequest();
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

                    message.profile = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.sketchPath = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): InitRequest {
        return {
            instance: isSet(object.instance)
                ? Instance.fromJSON(object.instance)
                : undefined,
            profile: isSet(object.profile) ? String(object.profile) : '',
            sketchPath: isSet(object.sketchPath)
                ? String(object.sketchPath)
                : '',
        };
    },

    toJSON(message: InitRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance
                ? Instance.toJSON(message.instance)
                : undefined);
        message.profile !== undefined && (obj.profile = message.profile);
        message.sketchPath !== undefined &&
            (obj.sketchPath = message.sketchPath);
        return obj;
    },

    create(base?: DeepPartial<InitRequest>): InitRequest {
        return InitRequest.fromPartial(base ?? {});
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
    encode(
        message: InitResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        switch (message.message?.$case) {
            case 'initProgress':
                InitResponse_Progress.encode(
                    message.message.initProgress,
                    writer.uint32(10).fork()
                ).ldelim();
                break;
            case 'error':
                Status.encode(
                    message.message.error,
                    writer.uint32(18).fork()
                ).ldelim();
                break;
            case 'profile':
                SketchProfile.encode(
                    message.message.profile,
                    writer.uint32(26).fork()
                ).ldelim();
                break;
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): InitResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.message = {
                        $case: 'initProgress',
                        initProgress: InitResponse_Progress.decode(
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
                        $case: 'error',
                        error: Status.decode(reader, reader.uint32()),
                    };
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.message = {
                        $case: 'profile',
                        profile: SketchProfile.decode(reader, reader.uint32()),
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

    fromJSON(object: any): InitResponse {
        return {
            message: isSet(object.initProgress)
                ? {
                      $case: 'initProgress',
                      initProgress: InitResponse_Progress.fromJSON(
                          object.initProgress
                      ),
                  }
                : isSet(object.error)
                ? { $case: 'error', error: Status.fromJSON(object.error) }
                : isSet(object.profile)
                ? {
                      $case: 'profile',
                      profile: SketchProfile.fromJSON(object.profile),
                  }
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
            (obj.error = message.message?.error
                ? Status.toJSON(message.message?.error)
                : undefined);
        message.message?.$case === 'profile' &&
            (obj.profile = message.message?.profile
                ? SketchProfile.toJSON(message.message?.profile)
                : undefined);
        return obj;
    },

    create(base?: DeepPartial<InitResponse>): InitResponse {
        return InitResponse.fromPartial(base ?? {});
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
                initProgress: InitResponse_Progress.fromPartial(
                    object.message.initProgress
                ),
            };
        }
        if (
            object.message?.$case === 'error' &&
            object.message?.error !== undefined &&
            object.message?.error !== null
        ) {
            message.message = {
                $case: 'error',
                error: Status.fromPartial(object.message.error),
            };
        }
        if (
            object.message?.$case === 'profile' &&
            object.message?.profile !== undefined &&
            object.message?.profile !== null
        ) {
            message.message = {
                $case: 'profile',
                profile: SketchProfile.fromPartial(object.message.profile),
            };
        }
        return message;
    },
};

function createBaseInitResponse_Progress(): InitResponse_Progress {
    return { downloadProgress: undefined, taskProgress: undefined };
}

export const InitResponse_Progress = {
    encode(
        message: InitResponse_Progress,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.downloadProgress !== undefined) {
            DownloadProgress.encode(
                message.downloadProgress,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.taskProgress !== undefined) {
            TaskProgress.encode(
                message.taskProgress,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): InitResponse_Progress {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitResponse_Progress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.downloadProgress = DownloadProgress.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.taskProgress = TaskProgress.decode(
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

    fromJSON(object: any): InitResponse_Progress {
        return {
            downloadProgress: isSet(object.downloadProgress)
                ? DownloadProgress.fromJSON(object.downloadProgress)
                : undefined,
            taskProgress: isSet(object.taskProgress)
                ? TaskProgress.fromJSON(object.taskProgress)
                : undefined,
        };
    },

    toJSON(message: InitResponse_Progress): unknown {
        const obj: any = {};
        message.downloadProgress !== undefined &&
            (obj.downloadProgress = message.downloadProgress
                ? DownloadProgress.toJSON(message.downloadProgress)
                : undefined);
        message.taskProgress !== undefined &&
            (obj.taskProgress = message.taskProgress
                ? TaskProgress.toJSON(message.taskProgress)
                : undefined);
        return obj;
    },

    create(base?: DeepPartial<InitResponse_Progress>): InitResponse_Progress {
        return InitResponse_Progress.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<InitResponse_Progress>
    ): InitResponse_Progress {
        const message = createBaseInitResponse_Progress();
        message.downloadProgress =
            object.downloadProgress !== undefined &&
            object.downloadProgress !== null
                ? DownloadProgress.fromPartial(object.downloadProgress)
                : undefined;
        message.taskProgress =
            object.taskProgress !== undefined && object.taskProgress !== null
                ? TaskProgress.fromPartial(object.taskProgress)
                : undefined;
        return message;
    },
};

function createBaseFailedInstanceInitError(): FailedInstanceInitError {
    return { reason: 0, message: '' };
}

export const FailedInstanceInitError = {
    encode(
        message: FailedInstanceInitError,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.reason !== 0) {
            writer.uint32(8).int32(message.reason);
        }
        if (message.message !== '') {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): FailedInstanceInitError {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFailedInstanceInitError();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.reason = reader.int32() as any;
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.message = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): FailedInstanceInitError {
        return {
            reason: isSet(object.reason)
                ? failedInstanceInitReasonFromJSON(object.reason)
                : 0,
            message: isSet(object.message) ? String(object.message) : '',
        };
    },

    toJSON(message: FailedInstanceInitError): unknown {
        const obj: any = {};
        message.reason !== undefined &&
            (obj.reason = failedInstanceInitReasonToJSON(message.reason));
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },

    create(
        base?: DeepPartial<FailedInstanceInitError>
    ): FailedInstanceInitError {
        return FailedInstanceInitError.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<FailedInstanceInitError>
    ): FailedInstanceInitError {
        const message = createBaseFailedInstanceInitError();
        message.reason = object.reason ?? 0;
        message.message = object.message ?? '';
        return message;
    },
};

function createBaseDestroyRequest(): DestroyRequest {
    return { instance: undefined };
}

export const DestroyRequest = {
    encode(
        message: DestroyRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(
                message.instance,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DestroyRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDestroyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.instance = Instance.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): DestroyRequest {
        return {
            instance: isSet(object.instance)
                ? Instance.fromJSON(object.instance)
                : undefined,
        };
    },

    toJSON(message: DestroyRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance
                ? Instance.toJSON(message.instance)
                : undefined);
        return obj;
    },

    create(base?: DeepPartial<DestroyRequest>): DestroyRequest {
        return DestroyRequest.fromPartial(base ?? {});
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
    encode(
        _: DestroyResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DestroyResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDestroyResponse();
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

    fromJSON(_: any): DestroyResponse {
        return {};
    },

    toJSON(_: DestroyResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create(base?: DeepPartial<DestroyResponse>): DestroyResponse {
        return DestroyResponse.fromPartial(base ?? {});
    },

    fromPartial(_: DeepPartial<DestroyResponse>): DestroyResponse {
        const message = createBaseDestroyResponse();
        return message;
    },
};

function createBaseUpdateIndexRequest(): UpdateIndexRequest {
    return {
        instance: undefined,
        ignoreCustomPackageIndexes: false,
        updateIfOlderThanSecs: 0,
    };
}

export const UpdateIndexRequest = {
    encode(
        message: UpdateIndexRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(
                message.instance,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.ignoreCustomPackageIndexes === true) {
            writer.uint32(16).bool(message.ignoreCustomPackageIndexes);
        }
        if (message.updateIfOlderThanSecs !== 0) {
            writer.uint32(24).int64(message.updateIfOlderThanSecs);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateIndexRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateIndexRequest();
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
                    if (tag !== 16) {
                        break;
                    }

                    message.ignoreCustomPackageIndexes = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.updateIfOlderThanSecs = longToNumber(
                        reader.int64() as Long
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

    fromJSON(object: any): UpdateIndexRequest {
        return {
            instance: isSet(object.instance)
                ? Instance.fromJSON(object.instance)
                : undefined,
            ignoreCustomPackageIndexes: isSet(object.ignoreCustomPackageIndexes)
                ? Boolean(object.ignoreCustomPackageIndexes)
                : false,
            updateIfOlderThanSecs: isSet(object.updateIfOlderThanSecs)
                ? Number(object.updateIfOlderThanSecs)
                : 0,
        };
    },

    toJSON(message: UpdateIndexRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance
                ? Instance.toJSON(message.instance)
                : undefined);
        message.ignoreCustomPackageIndexes !== undefined &&
            (obj.ignoreCustomPackageIndexes =
                message.ignoreCustomPackageIndexes);
        message.updateIfOlderThanSecs !== undefined &&
            (obj.updateIfOlderThanSecs = Math.round(
                message.updateIfOlderThanSecs
            ));
        return obj;
    },

    create(base?: DeepPartial<UpdateIndexRequest>): UpdateIndexRequest {
        return UpdateIndexRequest.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<UpdateIndexRequest>): UpdateIndexRequest {
        const message = createBaseUpdateIndexRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.ignoreCustomPackageIndexes =
            object.ignoreCustomPackageIndexes ?? false;
        message.updateIfOlderThanSecs = object.updateIfOlderThanSecs ?? 0;
        return message;
    },
};

function createBaseUpdateIndexResponse(): UpdateIndexResponse {
    return { message: undefined };
}

export const UpdateIndexResponse = {
    encode(
        message: UpdateIndexResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        switch (message.message?.$case) {
            case 'downloadProgress':
                DownloadProgress.encode(
                    message.message.downloadProgress,
                    writer.uint32(10).fork()
                ).ldelim();
                break;
            case 'result':
                UpdateIndexResponse_Result.encode(
                    message.message.result,
                    writer.uint32(18).fork()
                ).ldelim();
                break;
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateIndexResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateIndexResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.message = {
                        $case: 'downloadProgress',
                        downloadProgress: DownloadProgress.decode(
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
                        $case: 'result',
                        result: UpdateIndexResponse_Result.decode(
                            reader,
                            reader.uint32()
                        ),
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

    fromJSON(object: any): UpdateIndexResponse {
        return {
            message: isSet(object.downloadProgress)
                ? {
                      $case: 'downloadProgress',
                      downloadProgress: DownloadProgress.fromJSON(
                          object.downloadProgress
                      ),
                  }
                : isSet(object.result)
                ? {
                      $case: 'result',
                      result: UpdateIndexResponse_Result.fromJSON(
                          object.result
                      ),
                  }
                : undefined,
        };
    },

    toJSON(message: UpdateIndexResponse): unknown {
        const obj: any = {};
        message.message?.$case === 'downloadProgress' &&
            (obj.downloadProgress = message.message?.downloadProgress
                ? DownloadProgress.toJSON(message.message?.downloadProgress)
                : undefined);
        message.message?.$case === 'result' &&
            (obj.result = message.message?.result
                ? UpdateIndexResponse_Result.toJSON(message.message?.result)
                : undefined);
        return obj;
    },

    create(base?: DeepPartial<UpdateIndexResponse>): UpdateIndexResponse {
        return UpdateIndexResponse.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<UpdateIndexResponse>): UpdateIndexResponse {
        const message = createBaseUpdateIndexResponse();
        if (
            object.message?.$case === 'downloadProgress' &&
            object.message?.downloadProgress !== undefined &&
            object.message?.downloadProgress !== null
        ) {
            message.message = {
                $case: 'downloadProgress',
                downloadProgress: DownloadProgress.fromPartial(
                    object.message.downloadProgress
                ),
            };
        }
        if (
            object.message?.$case === 'result' &&
            object.message?.result !== undefined &&
            object.message?.result !== null
        ) {
            message.message = {
                $case: 'result',
                result: UpdateIndexResponse_Result.fromPartial(
                    object.message.result
                ),
            };
        }
        return message;
    },
};

function createBaseUpdateIndexResponse_Result(): UpdateIndexResponse_Result {
    return { updatedIndexes: [] };
}

export const UpdateIndexResponse_Result = {
    encode(
        message: UpdateIndexResponse_Result,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.updatedIndexes) {
            IndexUpdateReport.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateIndexResponse_Result {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateIndexResponse_Result();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.updatedIndexes.push(
                        IndexUpdateReport.decode(reader, reader.uint32())
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

    fromJSON(object: any): UpdateIndexResponse_Result {
        return {
            updatedIndexes: Array.isArray(object?.updatedIndexes)
                ? object.updatedIndexes.map((e: any) =>
                      IndexUpdateReport.fromJSON(e)
                  )
                : [],
        };
    },

    toJSON(message: UpdateIndexResponse_Result): unknown {
        const obj: any = {};
        if (message.updatedIndexes) {
            obj.updatedIndexes = message.updatedIndexes.map((e) =>
                e ? IndexUpdateReport.toJSON(e) : undefined
            );
        } else {
            obj.updatedIndexes = [];
        }
        return obj;
    },

    create(
        base?: DeepPartial<UpdateIndexResponse_Result>
    ): UpdateIndexResponse_Result {
        return UpdateIndexResponse_Result.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<UpdateIndexResponse_Result>
    ): UpdateIndexResponse_Result {
        const message = createBaseUpdateIndexResponse_Result();
        message.updatedIndexes =
            object.updatedIndexes?.map((e) =>
                IndexUpdateReport.fromPartial(e)
            ) || [];
        return message;
    },
};

function createBaseUpdateLibrariesIndexRequest(): UpdateLibrariesIndexRequest {
    return { instance: undefined, updateIfOlderThanSecs: 0 };
}

export const UpdateLibrariesIndexRequest = {
    encode(
        message: UpdateLibrariesIndexRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(
                message.instance,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.updateIfOlderThanSecs !== 0) {
            writer.uint32(16).int64(message.updateIfOlderThanSecs);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateLibrariesIndexRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateLibrariesIndexRequest();
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
                    if (tag !== 16) {
                        break;
                    }

                    message.updateIfOlderThanSecs = longToNumber(
                        reader.int64() as Long
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

    fromJSON(object: any): UpdateLibrariesIndexRequest {
        return {
            instance: isSet(object.instance)
                ? Instance.fromJSON(object.instance)
                : undefined,
            updateIfOlderThanSecs: isSet(object.updateIfOlderThanSecs)
                ? Number(object.updateIfOlderThanSecs)
                : 0,
        };
    },

    toJSON(message: UpdateLibrariesIndexRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance
                ? Instance.toJSON(message.instance)
                : undefined);
        message.updateIfOlderThanSecs !== undefined &&
            (obj.updateIfOlderThanSecs = Math.round(
                message.updateIfOlderThanSecs
            ));
        return obj;
    },

    create(
        base?: DeepPartial<UpdateLibrariesIndexRequest>
    ): UpdateLibrariesIndexRequest {
        return UpdateLibrariesIndexRequest.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<UpdateLibrariesIndexRequest>
    ): UpdateLibrariesIndexRequest {
        const message = createBaseUpdateLibrariesIndexRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.updateIfOlderThanSecs = object.updateIfOlderThanSecs ?? 0;
        return message;
    },
};

function createBaseUpdateLibrariesIndexResponse(): UpdateLibrariesIndexResponse {
    return { message: undefined };
}

export const UpdateLibrariesIndexResponse = {
    encode(
        message: UpdateLibrariesIndexResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        switch (message.message?.$case) {
            case 'downloadProgress':
                DownloadProgress.encode(
                    message.message.downloadProgress,
                    writer.uint32(10).fork()
                ).ldelim();
                break;
            case 'result':
                UpdateLibrariesIndexResponse_Result.encode(
                    message.message.result,
                    writer.uint32(18).fork()
                ).ldelim();
                break;
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateLibrariesIndexResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateLibrariesIndexResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.message = {
                        $case: 'downloadProgress',
                        downloadProgress: DownloadProgress.decode(
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
                        $case: 'result',
                        result: UpdateLibrariesIndexResponse_Result.decode(
                            reader,
                            reader.uint32()
                        ),
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

    fromJSON(object: any): UpdateLibrariesIndexResponse {
        return {
            message: isSet(object.downloadProgress)
                ? {
                      $case: 'downloadProgress',
                      downloadProgress: DownloadProgress.fromJSON(
                          object.downloadProgress
                      ),
                  }
                : isSet(object.result)
                ? {
                      $case: 'result',
                      result: UpdateLibrariesIndexResponse_Result.fromJSON(
                          object.result
                      ),
                  }
                : undefined,
        };
    },

    toJSON(message: UpdateLibrariesIndexResponse): unknown {
        const obj: any = {};
        message.message?.$case === 'downloadProgress' &&
            (obj.downloadProgress = message.message?.downloadProgress
                ? DownloadProgress.toJSON(message.message?.downloadProgress)
                : undefined);
        message.message?.$case === 'result' &&
            (obj.result = message.message?.result
                ? UpdateLibrariesIndexResponse_Result.toJSON(
                      message.message?.result
                  )
                : undefined);
        return obj;
    },

    create(
        base?: DeepPartial<UpdateLibrariesIndexResponse>
    ): UpdateLibrariesIndexResponse {
        return UpdateLibrariesIndexResponse.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<UpdateLibrariesIndexResponse>
    ): UpdateLibrariesIndexResponse {
        const message = createBaseUpdateLibrariesIndexResponse();
        if (
            object.message?.$case === 'downloadProgress' &&
            object.message?.downloadProgress !== undefined &&
            object.message?.downloadProgress !== null
        ) {
            message.message = {
                $case: 'downloadProgress',
                downloadProgress: DownloadProgress.fromPartial(
                    object.message.downloadProgress
                ),
            };
        }
        if (
            object.message?.$case === 'result' &&
            object.message?.result !== undefined &&
            object.message?.result !== null
        ) {
            message.message = {
                $case: 'result',
                result: UpdateLibrariesIndexResponse_Result.fromPartial(
                    object.message.result
                ),
            };
        }
        return message;
    },
};

function createBaseUpdateLibrariesIndexResponse_Result(): UpdateLibrariesIndexResponse_Result {
    return { librariesIndex: undefined };
}

export const UpdateLibrariesIndexResponse_Result = {
    encode(
        message: UpdateLibrariesIndexResponse_Result,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.librariesIndex !== undefined) {
            IndexUpdateReport.encode(
                message.librariesIndex,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): UpdateLibrariesIndexResponse_Result {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateLibrariesIndexResponse_Result();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.librariesIndex = IndexUpdateReport.decode(
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

    fromJSON(object: any): UpdateLibrariesIndexResponse_Result {
        return {
            librariesIndex: isSet(object.librariesIndex)
                ? IndexUpdateReport.fromJSON(object.librariesIndex)
                : undefined,
        };
    },

    toJSON(message: UpdateLibrariesIndexResponse_Result): unknown {
        const obj: any = {};
        message.librariesIndex !== undefined &&
            (obj.librariesIndex = message.librariesIndex
                ? IndexUpdateReport.toJSON(message.librariesIndex)
                : undefined);
        return obj;
    },

    create(
        base?: DeepPartial<UpdateLibrariesIndexResponse_Result>
    ): UpdateLibrariesIndexResponse_Result {
        return UpdateLibrariesIndexResponse_Result.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<UpdateLibrariesIndexResponse_Result>
    ): UpdateLibrariesIndexResponse_Result {
        const message = createBaseUpdateLibrariesIndexResponse_Result();
        message.librariesIndex =
            object.librariesIndex !== undefined &&
            object.librariesIndex !== null
                ? IndexUpdateReport.fromPartial(object.librariesIndex)
                : undefined;
        return message;
    },
};

function createBaseIndexUpdateReport(): IndexUpdateReport {
    return { indexUrl: '', status: 0 };
}

export const IndexUpdateReport = {
    encode(
        message: IndexUpdateReport,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.indexUrl !== '') {
            writer.uint32(10).string(message.indexUrl);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): IndexUpdateReport {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIndexUpdateReport();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.indexUrl = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.status = reader.int32() as any;
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): IndexUpdateReport {
        return {
            indexUrl: isSet(object.indexUrl) ? String(object.indexUrl) : '',
            status: isSet(object.status)
                ? indexUpdateReport_StatusFromJSON(object.status)
                : 0,
        };
    },

    toJSON(message: IndexUpdateReport): unknown {
        const obj: any = {};
        message.indexUrl !== undefined && (obj.indexUrl = message.indexUrl);
        message.status !== undefined &&
            (obj.status = indexUpdateReport_StatusToJSON(message.status));
        return obj;
    },

    create(base?: DeepPartial<IndexUpdateReport>): IndexUpdateReport {
        return IndexUpdateReport.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<IndexUpdateReport>): IndexUpdateReport {
        const message = createBaseIndexUpdateReport();
        message.indexUrl = object.indexUrl ?? '';
        message.status = object.status ?? 0;
        return message;
    },
};

function createBaseVersionRequest(): VersionRequest {
    return {};
}

export const VersionRequest = {
    encode(
        _: VersionRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VersionRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionRequest();
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

    fromJSON(_: any): VersionRequest {
        return {};
    },

    toJSON(_: VersionRequest): unknown {
        const obj: any = {};
        return obj;
    },

    create(base?: DeepPartial<VersionRequest>): VersionRequest {
        return VersionRequest.fromPartial(base ?? {});
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
    encode(
        message: VersionResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.version !== '') {
            writer.uint32(10).string(message.version);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): VersionResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.version = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
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

    create(base?: DeepPartial<VersionResponse>): VersionResponse {
        return VersionResponse.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<VersionResponse>): VersionResponse {
        const message = createBaseVersionResponse();
        message.version = object.version ?? '';
        return message;
    },
};

function createBaseNewSketchRequest(): NewSketchRequest {
    return { sketchName: '', sketchDir: '', overwrite: false };
}

export const NewSketchRequest = {
    encode(
        message: NewSketchRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.sketchName !== '') {
            writer.uint32(18).string(message.sketchName);
        }
        if (message.sketchDir !== '') {
            writer.uint32(26).string(message.sketchDir);
        }
        if (message.overwrite === true) {
            writer.uint32(32).bool(message.overwrite);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NewSketchRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNewSketchRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.sketchName = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.sketchDir = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.overwrite = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): NewSketchRequest {
        return {
            sketchName: isSet(object.sketchName)
                ? String(object.sketchName)
                : '',
            sketchDir: isSet(object.sketchDir) ? String(object.sketchDir) : '',
            overwrite: isSet(object.overwrite)
                ? Boolean(object.overwrite)
                : false,
        };
    },

    toJSON(message: NewSketchRequest): unknown {
        const obj: any = {};
        message.sketchName !== undefined &&
            (obj.sketchName = message.sketchName);
        message.sketchDir !== undefined && (obj.sketchDir = message.sketchDir);
        message.overwrite !== undefined && (obj.overwrite = message.overwrite);
        return obj;
    },

    create(base?: DeepPartial<NewSketchRequest>): NewSketchRequest {
        return NewSketchRequest.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<NewSketchRequest>): NewSketchRequest {
        const message = createBaseNewSketchRequest();
        message.sketchName = object.sketchName ?? '';
        message.sketchDir = object.sketchDir ?? '';
        message.overwrite = object.overwrite ?? false;
        return message;
    },
};

function createBaseNewSketchResponse(): NewSketchResponse {
    return { mainFile: '' };
}

export const NewSketchResponse = {
    encode(
        message: NewSketchResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.mainFile !== '') {
            writer.uint32(10).string(message.mainFile);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): NewSketchResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNewSketchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.mainFile = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): NewSketchResponse {
        return {
            mainFile: isSet(object.mainFile) ? String(object.mainFile) : '',
        };
    },

    toJSON(message: NewSketchResponse): unknown {
        const obj: any = {};
        message.mainFile !== undefined && (obj.mainFile = message.mainFile);
        return obj;
    },

    create(base?: DeepPartial<NewSketchResponse>): NewSketchResponse {
        return NewSketchResponse.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<NewSketchResponse>): NewSketchResponse {
        const message = createBaseNewSketchResponse();
        message.mainFile = object.mainFile ?? '';
        return message;
    },
};

function createBaseLoadSketchRequest(): LoadSketchRequest {
    return { sketchPath: '' };
}

export const LoadSketchRequest = {
    encode(
        message: LoadSketchRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.sketchPath !== '') {
            writer.uint32(18).string(message.sketchPath);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): LoadSketchRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoadSketchRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.sketchPath = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): LoadSketchRequest {
        return {
            sketchPath: isSet(object.sketchPath)
                ? String(object.sketchPath)
                : '',
        };
    },

    toJSON(message: LoadSketchRequest): unknown {
        const obj: any = {};
        message.sketchPath !== undefined &&
            (obj.sketchPath = message.sketchPath);
        return obj;
    },

    create(base?: DeepPartial<LoadSketchRequest>): LoadSketchRequest {
        return LoadSketchRequest.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<LoadSketchRequest>): LoadSketchRequest {
        const message = createBaseLoadSketchRequest();
        message.sketchPath = object.sketchPath ?? '';
        return message;
    },
};

function createBaseLoadSketchResponse(): LoadSketchResponse {
    return { sketch: undefined };
}

export const LoadSketchResponse = {
    encode(
        message: LoadSketchResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.sketch !== undefined) {
            Sketch.encode(message.sketch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): LoadSketchResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoadSketchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.sketch = Sketch.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): LoadSketchResponse {
        return {
            sketch: isSet(object.sketch)
                ? Sketch.fromJSON(object.sketch)
                : undefined,
        };
    },

    toJSON(message: LoadSketchResponse): unknown {
        const obj: any = {};
        message.sketch !== undefined &&
            (obj.sketch = message.sketch
                ? Sketch.toJSON(message.sketch)
                : undefined);
        return obj;
    },

    create(base?: DeepPartial<LoadSketchResponse>): LoadSketchResponse {
        return LoadSketchResponse.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<LoadSketchResponse>): LoadSketchResponse {
        const message = createBaseLoadSketchResponse();
        message.sketch =
            object.sketch !== undefined && object.sketch !== null
                ? Sketch.fromPartial(object.sketch)
                : undefined;
        return message;
    },
};

function createBaseArchiveSketchRequest(): ArchiveSketchRequest {
    return {
        sketchPath: '',
        archivePath: '',
        includeBuildDir: false,
        overwrite: false,
    };
}

export const ArchiveSketchRequest = {
    encode(
        message: ArchiveSketchRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.sketchPath !== '') {
            writer.uint32(10).string(message.sketchPath);
        }
        if (message.archivePath !== '') {
            writer.uint32(18).string(message.archivePath);
        }
        if (message.includeBuildDir === true) {
            writer.uint32(24).bool(message.includeBuildDir);
        }
        if (message.overwrite === true) {
            writer.uint32(32).bool(message.overwrite);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ArchiveSketchRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArchiveSketchRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.sketchPath = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.archivePath = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.includeBuildDir = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.overwrite = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): ArchiveSketchRequest {
        return {
            sketchPath: isSet(object.sketchPath)
                ? String(object.sketchPath)
                : '',
            archivePath: isSet(object.archivePath)
                ? String(object.archivePath)
                : '',
            includeBuildDir: isSet(object.includeBuildDir)
                ? Boolean(object.includeBuildDir)
                : false,
            overwrite: isSet(object.overwrite)
                ? Boolean(object.overwrite)
                : false,
        };
    },

    toJSON(message: ArchiveSketchRequest): unknown {
        const obj: any = {};
        message.sketchPath !== undefined &&
            (obj.sketchPath = message.sketchPath);
        message.archivePath !== undefined &&
            (obj.archivePath = message.archivePath);
        message.includeBuildDir !== undefined &&
            (obj.includeBuildDir = message.includeBuildDir);
        message.overwrite !== undefined && (obj.overwrite = message.overwrite);
        return obj;
    },

    create(base?: DeepPartial<ArchiveSketchRequest>): ArchiveSketchRequest {
        return ArchiveSketchRequest.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<ArchiveSketchRequest>
    ): ArchiveSketchRequest {
        const message = createBaseArchiveSketchRequest();
        message.sketchPath = object.sketchPath ?? '';
        message.archivePath = object.archivePath ?? '';
        message.includeBuildDir = object.includeBuildDir ?? false;
        message.overwrite = object.overwrite ?? false;
        return message;
    },
};

function createBaseArchiveSketchResponse(): ArchiveSketchResponse {
    return {};
}

export const ArchiveSketchResponse = {
    encode(
        _: ArchiveSketchResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ArchiveSketchResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArchiveSketchResponse();
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

    fromJSON(_: any): ArchiveSketchResponse {
        return {};
    },

    toJSON(_: ArchiveSketchResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create(base?: DeepPartial<ArchiveSketchResponse>): ArchiveSketchResponse {
        return ArchiveSketchResponse.fromPartial(base ?? {});
    },

    fromPartial(_: DeepPartial<ArchiveSketchResponse>): ArchiveSketchResponse {
        const message = createBaseArchiveSketchResponse();
        return message;
    },
};

function createBaseSetSketchDefaultsRequest(): SetSketchDefaultsRequest {
    return {
        sketchPath: '',
        defaultFqbn: '',
        defaultPortAddress: '',
        defaultPortProtocol: '',
        defaultProgrammer: '',
    };
}

export const SetSketchDefaultsRequest = {
    encode(
        message: SetSketchDefaultsRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.sketchPath !== '') {
            writer.uint32(10).string(message.sketchPath);
        }
        if (message.defaultFqbn !== '') {
            writer.uint32(18).string(message.defaultFqbn);
        }
        if (message.defaultPortAddress !== '') {
            writer.uint32(26).string(message.defaultPortAddress);
        }
        if (message.defaultPortProtocol !== '') {
            writer.uint32(34).string(message.defaultPortProtocol);
        }
        if (message.defaultProgrammer !== '') {
            writer.uint32(42).string(message.defaultProgrammer);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SetSketchDefaultsRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetSketchDefaultsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.sketchPath = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.defaultFqbn = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.defaultPortAddress = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.defaultPortProtocol = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.defaultProgrammer = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): SetSketchDefaultsRequest {
        return {
            sketchPath: isSet(object.sketchPath)
                ? String(object.sketchPath)
                : '',
            defaultFqbn: isSet(object.defaultFqbn)
                ? String(object.defaultFqbn)
                : '',
            defaultPortAddress: isSet(object.defaultPortAddress)
                ? String(object.defaultPortAddress)
                : '',
            defaultPortProtocol: isSet(object.defaultPortProtocol)
                ? String(object.defaultPortProtocol)
                : '',
            defaultProgrammer: isSet(object.defaultProgrammer)
                ? String(object.defaultProgrammer)
                : '',
        };
    },

    toJSON(message: SetSketchDefaultsRequest): unknown {
        const obj: any = {};
        message.sketchPath !== undefined &&
            (obj.sketchPath = message.sketchPath);
        message.defaultFqbn !== undefined &&
            (obj.defaultFqbn = message.defaultFqbn);
        message.defaultPortAddress !== undefined &&
            (obj.defaultPortAddress = message.defaultPortAddress);
        message.defaultPortProtocol !== undefined &&
            (obj.defaultPortProtocol = message.defaultPortProtocol);
        message.defaultProgrammer !== undefined &&
            (obj.defaultProgrammer = message.defaultProgrammer);
        return obj;
    },

    create(
        base?: DeepPartial<SetSketchDefaultsRequest>
    ): SetSketchDefaultsRequest {
        return SetSketchDefaultsRequest.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<SetSketchDefaultsRequest>
    ): SetSketchDefaultsRequest {
        const message = createBaseSetSketchDefaultsRequest();
        message.sketchPath = object.sketchPath ?? '';
        message.defaultFqbn = object.defaultFqbn ?? '';
        message.defaultPortAddress = object.defaultPortAddress ?? '';
        message.defaultPortProtocol = object.defaultPortProtocol ?? '';
        message.defaultProgrammer = object.defaultProgrammer ?? '';
        return message;
    },
};

function createBaseSetSketchDefaultsResponse(): SetSketchDefaultsResponse {
    return {
        defaultFqbn: '',
        defaultPortAddress: '',
        defaultPortProtocol: '',
        defaultProgrammer: '',
    };
}

export const SetSketchDefaultsResponse = {
    encode(
        message: SetSketchDefaultsResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.defaultFqbn !== '') {
            writer.uint32(10).string(message.defaultFqbn);
        }
        if (message.defaultPortAddress !== '') {
            writer.uint32(18).string(message.defaultPortAddress);
        }
        if (message.defaultPortProtocol !== '') {
            writer.uint32(26).string(message.defaultPortProtocol);
        }
        if (message.defaultProgrammer !== '') {
            writer.uint32(34).string(message.defaultProgrammer);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): SetSketchDefaultsResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetSketchDefaultsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.defaultFqbn = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.defaultPortAddress = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.defaultPortProtocol = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.defaultProgrammer = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): SetSketchDefaultsResponse {
        return {
            defaultFqbn: isSet(object.defaultFqbn)
                ? String(object.defaultFqbn)
                : '',
            defaultPortAddress: isSet(object.defaultPortAddress)
                ? String(object.defaultPortAddress)
                : '',
            defaultPortProtocol: isSet(object.defaultPortProtocol)
                ? String(object.defaultPortProtocol)
                : '',
            defaultProgrammer: isSet(object.defaultProgrammer)
                ? String(object.defaultProgrammer)
                : '',
        };
    },

    toJSON(message: SetSketchDefaultsResponse): unknown {
        const obj: any = {};
        message.defaultFqbn !== undefined &&
            (obj.defaultFqbn = message.defaultFqbn);
        message.defaultPortAddress !== undefined &&
            (obj.defaultPortAddress = message.defaultPortAddress);
        message.defaultPortProtocol !== undefined &&
            (obj.defaultPortProtocol = message.defaultPortProtocol);
        message.defaultProgrammer !== undefined &&
            (obj.defaultProgrammer = message.defaultProgrammer);
        return obj;
    },

    create(
        base?: DeepPartial<SetSketchDefaultsResponse>
    ): SetSketchDefaultsResponse {
        return SetSketchDefaultsResponse.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<SetSketchDefaultsResponse>
    ): SetSketchDefaultsResponse {
        const message = createBaseSetSketchDefaultsResponse();
        message.defaultFqbn = object.defaultFqbn ?? '';
        message.defaultPortAddress = object.defaultPortAddress ?? '';
        message.defaultPortProtocol = object.defaultPortProtocol ?? '';
        message.defaultProgrammer = object.defaultProgrammer ?? '';
        return message;
    },
};

function createBaseCheckForArduinoCLIUpdatesRequest(): CheckForArduinoCLIUpdatesRequest {
    return { forceCheck: false };
}

export const CheckForArduinoCLIUpdatesRequest = {
    encode(
        message: CheckForArduinoCLIUpdatesRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.forceCheck === true) {
            writer.uint32(8).bool(message.forceCheck);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CheckForArduinoCLIUpdatesRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCheckForArduinoCLIUpdatesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.forceCheck = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CheckForArduinoCLIUpdatesRequest {
        return {
            forceCheck: isSet(object.forceCheck)
                ? Boolean(object.forceCheck)
                : false,
        };
    },

    toJSON(message: CheckForArduinoCLIUpdatesRequest): unknown {
        const obj: any = {};
        message.forceCheck !== undefined &&
            (obj.forceCheck = message.forceCheck);
        return obj;
    },

    create(
        base?: DeepPartial<CheckForArduinoCLIUpdatesRequest>
    ): CheckForArduinoCLIUpdatesRequest {
        return CheckForArduinoCLIUpdatesRequest.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<CheckForArduinoCLIUpdatesRequest>
    ): CheckForArduinoCLIUpdatesRequest {
        const message = createBaseCheckForArduinoCLIUpdatesRequest();
        message.forceCheck = object.forceCheck ?? false;
        return message;
    },
};

function createBaseCheckForArduinoCLIUpdatesResponse(): CheckForArduinoCLIUpdatesResponse {
    return { newestVersion: '' };
}

export const CheckForArduinoCLIUpdatesResponse = {
    encode(
        message: CheckForArduinoCLIUpdatesResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.newestVersion !== '') {
            writer.uint32(10).string(message.newestVersion);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CheckForArduinoCLIUpdatesResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCheckForArduinoCLIUpdatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.newestVersion = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CheckForArduinoCLIUpdatesResponse {
        return {
            newestVersion: isSet(object.newestVersion)
                ? String(object.newestVersion)
                : '',
        };
    },

    toJSON(message: CheckForArduinoCLIUpdatesResponse): unknown {
        const obj: any = {};
        message.newestVersion !== undefined &&
            (obj.newestVersion = message.newestVersion);
        return obj;
    },

    create(
        base?: DeepPartial<CheckForArduinoCLIUpdatesResponse>
    ): CheckForArduinoCLIUpdatesResponse {
        return CheckForArduinoCLIUpdatesResponse.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<CheckForArduinoCLIUpdatesResponse>
    ): CheckForArduinoCLIUpdatesResponse {
        const message = createBaseCheckForArduinoCLIUpdatesResponse();
        message.newestVersion = object.newestVersion ?? '';
        return message;
    },
};

function createBaseCleanDownloadCacheDirectoryRequest(): CleanDownloadCacheDirectoryRequest {
    return { instance: undefined };
}

export const CleanDownloadCacheDirectoryRequest = {
    encode(
        message: CleanDownloadCacheDirectoryRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(
                message.instance,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CleanDownloadCacheDirectoryRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCleanDownloadCacheDirectoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.instance = Instance.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CleanDownloadCacheDirectoryRequest {
        return {
            instance: isSet(object.instance)
                ? Instance.fromJSON(object.instance)
                : undefined,
        };
    },

    toJSON(message: CleanDownloadCacheDirectoryRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance
                ? Instance.toJSON(message.instance)
                : undefined);
        return obj;
    },

    create(
        base?: DeepPartial<CleanDownloadCacheDirectoryRequest>
    ): CleanDownloadCacheDirectoryRequest {
        return CleanDownloadCacheDirectoryRequest.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<CleanDownloadCacheDirectoryRequest>
    ): CleanDownloadCacheDirectoryRequest {
        const message = createBaseCleanDownloadCacheDirectoryRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        return message;
    },
};

function createBaseCleanDownloadCacheDirectoryResponse(): CleanDownloadCacheDirectoryResponse {
    return {};
}

export const CleanDownloadCacheDirectoryResponse = {
    encode(
        _: CleanDownloadCacheDirectoryResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CleanDownloadCacheDirectoryResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCleanDownloadCacheDirectoryResponse();
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

    fromJSON(_: any): CleanDownloadCacheDirectoryResponse {
        return {};
    },

    toJSON(_: CleanDownloadCacheDirectoryResponse): unknown {
        const obj: any = {};
        return obj;
    },

    create(
        base?: DeepPartial<CleanDownloadCacheDirectoryResponse>
    ): CleanDownloadCacheDirectoryResponse {
        return CleanDownloadCacheDirectoryResponse.fromPartial(base ?? {});
    },

    fromPartial(
        _: DeepPartial<CleanDownloadCacheDirectoryResponse>
    ): CleanDownloadCacheDirectoryResponse {
        const message = createBaseCleanDownloadCacheDirectoryResponse();
        return message;
    },
};

/** The main Arduino Platform service API. */
export type ArduinoCoreServiceDefinition = typeof ArduinoCoreServiceDefinition;
export const ArduinoCoreServiceDefinition = {
    name: 'ArduinoCoreService',
    fullName: 'cc.arduino.cli.commands.v1.ArduinoCoreService',
    methods: {
        /** Create a new Arduino Core instance. */
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
         * libraries.
         */
        init: {
            name: 'Init',
            requestType: InitRequest,
            requestStream: false,
            responseType: InitResponse,
            responseStream: true,
            options: {},
        },
        /** Destroy an instance of the Arduino Core Service. */
        destroy: {
            name: 'Destroy',
            requestType: DestroyRequest,
            requestStream: false,
            responseType: DestroyResponse,
            responseStream: false,
            options: {},
        },
        /** Update package index of the Arduino Core Service. */
        updateIndex: {
            name: 'UpdateIndex',
            requestType: UpdateIndexRequest,
            requestStream: false,
            responseType: UpdateIndexResponse,
            responseStream: true,
            options: {},
        },
        /** Update libraries index. */
        updateLibrariesIndex: {
            name: 'UpdateLibrariesIndex',
            requestType: UpdateLibrariesIndexRequest,
            requestStream: false,
            responseType: UpdateLibrariesIndexResponse,
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
        /** Create a new Sketch. */
        newSketch: {
            name: 'NewSketch',
            requestType: NewSketchRequest,
            requestStream: false,
            responseType: NewSketchResponse,
            responseStream: false,
            options: {},
        },
        /** Returns all files composing a Sketch. */
        loadSketch: {
            name: 'LoadSketch',
            requestType: LoadSketchRequest,
            requestStream: false,
            responseType: LoadSketchResponse,
            responseStream: false,
            options: {},
        },
        /** Creates a zip file containing all files of specified Sketch. */
        archiveSketch: {
            name: 'ArchiveSketch',
            requestType: ArchiveSketchRequest,
            requestStream: false,
            responseType: ArchiveSketchResponse,
            responseStream: false,
            options: {},
        },
        /**
         * Sets the sketch default FQBN and Port Address/Protocol in
         * the sketch project file (sketch.yaml). These metadata can be retrieved
         * using LoadSketch.
         */
        setSketchDefaults: {
            name: 'SetSketchDefaults',
            requestType: SetSketchDefaultsRequest,
            requestStream: false,
            responseType: SetSketchDefaultsResponse,
            responseStream: false,
            options: {},
        },
        /** Requests details about a board. */
        boardDetails: {
            name: 'BoardDetails',
            requestType: BoardDetailsRequest,
            requestStream: false,
            responseType: BoardDetailsResponse,
            responseStream: false,
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
        /** Identify a board using the given properties. */
        boardIdentify: {
            name: 'BoardIdentify',
            requestType: BoardIdentifyRequest,
            requestStream: false,
            responseType: BoardIdentifyResponse,
            responseStream: false,
            options: {},
        },
        /** List boards connection and disconnected events. */
        boardListWatch: {
            name: 'BoardListWatch',
            requestType: BoardListWatchRequest,
            requestStream: false,
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
        /** Install a library from a Zip File. */
        zipLibraryInstall: {
            name: 'ZipLibraryInstall',
            requestType: ZipLibraryInstallRequest,
            requestStream: false,
            responseType: ZipLibraryInstallResponse,
            responseStream: true,
            options: {},
        },
        /** Download and install a library from a git url. */
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
        /** Open a monitor connection to a board port. */
        monitor: {
            name: 'Monitor',
            requestType: MonitorRequest,
            requestStream: true,
            responseType: MonitorResponse,
            responseStream: true,
            options: {},
        },
        /** Returns the parameters that can be set in the MonitorRequest calls. */
        enumerateMonitorPortSettings: {
            name: 'EnumerateMonitorPortSettings',
            requestType: EnumerateMonitorPortSettingsRequest,
            requestStream: false,
            responseType: EnumerateMonitorPortSettingsResponse,
            responseStream: false,
            options: {},
        },
        /** Start a debug session and communicate with the debugger tool. */
        debug: {
            name: 'Debug',
            requestType: DebugRequest,
            requestStream: true,
            responseType: DebugResponse,
            responseStream: true,
            options: {},
        },
        /** Determine if debugging is suported given a specific configuration. */
        isDebugSupported: {
            name: 'IsDebugSupported',
            requestType: IsDebugSupportedRequest,
            requestStream: false,
            responseType: IsDebugSupportedResponse,
            responseStream: false,
            options: {},
        },
        /** Query the debugger information given a specific configuration. */
        getDebugConfig: {
            name: 'GetDebugConfig',
            requestType: GetDebugConfigRequest,
            requestStream: false,
            responseType: GetDebugConfigResponse,
            responseStream: false,
            options: {},
        },
        /** Check for updates to the Arduino CLI. */
        checkForArduinoCLIUpdates: {
            name: 'CheckForArduinoCLIUpdates',
            requestType: CheckForArduinoCLIUpdatesRequest,
            requestStream: false,
            responseType: CheckForArduinoCLIUpdatesResponse,
            responseStream: false,
            options: {},
        },
        /** Clean the download cache directory (where archives are downloaded). */
        cleanDownloadCacheDirectory: {
            name: 'CleanDownloadCacheDirectory',
            requestType: CleanDownloadCacheDirectoryRequest,
            requestStream: false,
            responseType: CleanDownloadCacheDirectoryResponse,
            responseStream: false,
            options: {},
        },
        /** Writes the settings currently stored in memory in a YAML file. */
        configurationSave: {
            name: 'ConfigurationSave',
            requestType: ConfigurationSaveRequest,
            requestStream: false,
            responseType: ConfigurationSaveResponse,
            responseStream: false,
            options: {},
        },
        /** Read the settings from a YAML file. */
        configurationOpen: {
            name: 'ConfigurationOpen',
            requestType: ConfigurationOpenRequest,
            requestStream: false,
            responseType: ConfigurationOpenResponse,
            responseStream: false,
            options: {},
        },
        /** Get the current configuration. */
        configurationGet: {
            name: 'ConfigurationGet',
            requestType: ConfigurationGetRequest,
            requestStream: false,
            responseType: ConfigurationGetResponse,
            responseStream: false,
            options: {},
        },
        /** Enumerate all the keys/values pairs available in the configuration. */
        settingsEnumerate: {
            name: 'SettingsEnumerate',
            requestType: SettingsEnumerateRequest,
            requestStream: false,
            responseType: SettingsEnumerateResponse,
            responseStream: false,
            options: {},
        },
        /** Get a single configuration value. */
        settingsGetValue: {
            name: 'SettingsGetValue',
            requestType: SettingsGetValueRequest,
            requestStream: false,
            responseType: SettingsGetValueResponse,
            responseStream: false,
            options: {},
        },
        /** Set a single configuration value. */
        settingsSetValue: {
            name: 'SettingsSetValue',
            requestType: SettingsSetValueRequest,
            requestStream: false,
            responseType: SettingsSetValueResponse,
            responseStream: false,
            options: {},
        },
    },
} as const;

export interface ArduinoCoreServiceImplementation<CallContextExt = {}> {
    /** Create a new Arduino Core instance. */
    create(
        request: CreateRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<CreateResponse>>;
    /**
     * Initializes an existing Arduino Core instance by loading platforms and
     * libraries.
     */
    init(
        request: InitRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<InitResponse>>;
    /** Destroy an instance of the Arduino Core Service. */
    destroy(
        request: DestroyRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<DestroyResponse>>;
    /** Update package index of the Arduino Core Service. */
    updateIndex(
        request: UpdateIndexRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<UpdateIndexResponse>>;
    /** Update libraries index. */
    updateLibrariesIndex(
        request: UpdateLibrariesIndexRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<UpdateLibrariesIndexResponse>>;
    /** Get the version of Arduino CLI in use. */
    version(
        request: VersionRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<VersionResponse>>;
    /** Create a new Sketch. */
    newSketch(
        request: NewSketchRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<NewSketchResponse>>;
    /** Returns all files composing a Sketch. */
    loadSketch(
        request: LoadSketchRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<LoadSketchResponse>>;
    /** Creates a zip file containing all files of specified Sketch. */
    archiveSketch(
        request: ArchiveSketchRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<ArchiveSketchResponse>>;
    /**
     * Sets the sketch default FQBN and Port Address/Protocol in
     * the sketch project file (sketch.yaml). These metadata can be retrieved
     * using LoadSketch.
     */
    setSketchDefaults(
        request: SetSketchDefaultsRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<SetSketchDefaultsResponse>>;
    /** Requests details about a board. */
    boardDetails(
        request: BoardDetailsRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<BoardDetailsResponse>>;
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
    /** Identify a board using the given properties. */
    boardIdentify(
        request: BoardIdentifyRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<BoardIdentifyResponse>>;
    /** List boards connection and disconnected events. */
    boardListWatch(
        request: BoardListWatchRequest,
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
    /** Install a library from a Zip File. */
    zipLibraryInstall(
        request: ZipLibraryInstallRequest,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<ZipLibraryInstallResponse>>;
    /** Download and install a library from a git url. */
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
    /** Open a monitor connection to a board port. */
    monitor(
        request: AsyncIterable<MonitorRequest>,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<MonitorResponse>>;
    /** Returns the parameters that can be set in the MonitorRequest calls. */
    enumerateMonitorPortSettings(
        request: EnumerateMonitorPortSettingsRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<EnumerateMonitorPortSettingsResponse>>;
    /** Start a debug session and communicate with the debugger tool. */
    debug(
        request: AsyncIterable<DebugRequest>,
        context: CallContext & CallContextExt
    ): ServerStreamingMethodResult<DeepPartial<DebugResponse>>;
    /** Determine if debugging is suported given a specific configuration. */
    isDebugSupported(
        request: IsDebugSupportedRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<IsDebugSupportedResponse>>;
    /** Query the debugger information given a specific configuration. */
    getDebugConfig(
        request: GetDebugConfigRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<GetDebugConfigResponse>>;
    /** Check for updates to the Arduino CLI. */
    checkForArduinoCLIUpdates(
        request: CheckForArduinoCLIUpdatesRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<CheckForArduinoCLIUpdatesResponse>>;
    /** Clean the download cache directory (where archives are downloaded). */
    cleanDownloadCacheDirectory(
        request: CleanDownloadCacheDirectoryRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<CleanDownloadCacheDirectoryResponse>>;
    /** Writes the settings currently stored in memory in a YAML file. */
    configurationSave(
        request: ConfigurationSaveRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<ConfigurationSaveResponse>>;
    /** Read the settings from a YAML file. */
    configurationOpen(
        request: ConfigurationOpenRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<ConfigurationOpenResponse>>;
    /** Get the current configuration. */
    configurationGet(
        request: ConfigurationGetRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<ConfigurationGetResponse>>;
    /** Enumerate all the keys/values pairs available in the configuration. */
    settingsEnumerate(
        request: SettingsEnumerateRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<SettingsEnumerateResponse>>;
    /** Get a single configuration value. */
    settingsGetValue(
        request: SettingsGetValueRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<SettingsGetValueResponse>>;
    /** Set a single configuration value. */
    settingsSetValue(
        request: SettingsSetValueRequest,
        context: CallContext & CallContextExt
    ): Promise<DeepPartial<SettingsSetValueResponse>>;
}

export interface ArduinoCoreServiceClient<CallOptionsExt = {}> {
    /** Create a new Arduino Core instance. */
    create(
        request: DeepPartial<CreateRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<CreateResponse>;
    /**
     * Initializes an existing Arduino Core instance by loading platforms and
     * libraries.
     */
    init(
        request: DeepPartial<InitRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<InitResponse>;
    /** Destroy an instance of the Arduino Core Service. */
    destroy(
        request: DeepPartial<DestroyRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<DestroyResponse>;
    /** Update package index of the Arduino Core Service. */
    updateIndex(
        request: DeepPartial<UpdateIndexRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<UpdateIndexResponse>;
    /** Update libraries index. */
    updateLibrariesIndex(
        request: DeepPartial<UpdateLibrariesIndexRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<UpdateLibrariesIndexResponse>;
    /** Get the version of Arduino CLI in use. */
    version(
        request: DeepPartial<VersionRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<VersionResponse>;
    /** Create a new Sketch. */
    newSketch(
        request: DeepPartial<NewSketchRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<NewSketchResponse>;
    /** Returns all files composing a Sketch. */
    loadSketch(
        request: DeepPartial<LoadSketchRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<LoadSketchResponse>;
    /** Creates a zip file containing all files of specified Sketch. */
    archiveSketch(
        request: DeepPartial<ArchiveSketchRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<ArchiveSketchResponse>;
    /**
     * Sets the sketch default FQBN and Port Address/Protocol in
     * the sketch project file (sketch.yaml). These metadata can be retrieved
     * using LoadSketch.
     */
    setSketchDefaults(
        request: DeepPartial<SetSketchDefaultsRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<SetSketchDefaultsResponse>;
    /** Requests details about a board. */
    boardDetails(
        request: DeepPartial<BoardDetailsRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<BoardDetailsResponse>;
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
    /** Identify a board using the given properties. */
    boardIdentify(
        request: DeepPartial<BoardIdentifyRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<BoardIdentifyResponse>;
    /** List boards connection and disconnected events. */
    boardListWatch(
        request: DeepPartial<BoardListWatchRequest>,
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
    upload(
        request: DeepPartial<UploadRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<UploadResponse>;
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
    /** Install a library from a Zip File. */
    zipLibraryInstall(
        request: DeepPartial<ZipLibraryInstallRequest>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<ZipLibraryInstallResponse>;
    /** Download and install a library from a git url. */
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
    /** Open a monitor connection to a board port. */
    monitor(
        request: AsyncIterable<DeepPartial<MonitorRequest>>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<MonitorResponse>;
    /** Returns the parameters that can be set in the MonitorRequest calls. */
    enumerateMonitorPortSettings(
        request: DeepPartial<EnumerateMonitorPortSettingsRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<EnumerateMonitorPortSettingsResponse>;
    /** Start a debug session and communicate with the debugger tool. */
    debug(
        request: AsyncIterable<DeepPartial<DebugRequest>>,
        options?: CallOptions & CallOptionsExt
    ): AsyncIterable<DebugResponse>;
    /** Determine if debugging is suported given a specific configuration. */
    isDebugSupported(
        request: DeepPartial<IsDebugSupportedRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<IsDebugSupportedResponse>;
    /** Query the debugger information given a specific configuration. */
    getDebugConfig(
        request: DeepPartial<GetDebugConfigRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<GetDebugConfigResponse>;
    /** Check for updates to the Arduino CLI. */
    checkForArduinoCLIUpdates(
        request: DeepPartial<CheckForArduinoCLIUpdatesRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<CheckForArduinoCLIUpdatesResponse>;
    /** Clean the download cache directory (where archives are downloaded). */
    cleanDownloadCacheDirectory(
        request: DeepPartial<CleanDownloadCacheDirectoryRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<CleanDownloadCacheDirectoryResponse>;
    /** Writes the settings currently stored in memory in a YAML file. */
    configurationSave(
        request: DeepPartial<ConfigurationSaveRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<ConfigurationSaveResponse>;
    /** Read the settings from a YAML file. */
    configurationOpen(
        request: DeepPartial<ConfigurationOpenRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<ConfigurationOpenResponse>;
    /** Get the current configuration. */
    configurationGet(
        request: DeepPartial<ConfigurationGetRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<ConfigurationGetResponse>;
    /** Enumerate all the keys/values pairs available in the configuration. */
    settingsEnumerate(
        request: DeepPartial<SettingsEnumerateRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<SettingsEnumerateResponse>;
    /** Get a single configuration value. */
    settingsGetValue(
        request: DeepPartial<SettingsGetValueRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<SettingsGetValueResponse>;
    /** Set a single configuration value. */
    settingsSetValue(
        request: DeepPartial<SettingsSetValueRequest>,
        options?: CallOptions & CallOptionsExt
    ): Promise<SettingsSetValueResponse>;
}

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

export type ServerStreamingMethodResult<Response> = {
    [Symbol.asyncIterator](): AsyncIterator<Response, void>;
};
