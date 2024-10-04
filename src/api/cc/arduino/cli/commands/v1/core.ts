/* eslint-disable */
import _m0 from 'protobufjs/minimal';
import {
    DownloadProgress,
    Instance,
    Platform,
    PlatformSummary,
    TaskProgress,
} from './common';

export interface PlatformInstallRequest {
    /** Arduino Core Service instance from the `Init` response. */
    instance: Instance | undefined;
    /** Vendor name of the platform (e.g., `arduino`). */
    platformPackage: string;
    /** Architecture name of the platform (e.g., `avr`). */
    architecture: string;
    /** Platform version to install. */
    version: string;
    /**
     * Set to true to not run (eventual) post install scripts for trusted
     * platforms
     */
    skipPostInstall: boolean;
    /**
     * Set to true to skip installation if a different version of the platform
     * is already installed.
     */
    noOverwrite: boolean;
    /**
     * Set to true to not run (eventual) pre uninstall scripts for trusted
     * platforms when performing platform upgrades
     */
    skipPreUninstall: boolean;
}

export interface PlatformInstallResponse {
    message?:
        | { $case: 'progress'; progress: DownloadProgress }
        | { $case: 'taskProgress'; taskProgress: TaskProgress }
        | { $case: 'result'; result: PlatformInstallResponse_Result }
        | undefined;
}

/** Empty message, reserved for future expansion. */
export interface PlatformInstallResponse_Result {}

export interface PlatformLoadingError {}

export interface PlatformDownloadRequest {
    /** Arduino Core Service instance from the `Init` response. */
    instance: Instance | undefined;
    platformPackage: string;
    /** Architecture name of the platform (e.g., `avr`). */
    architecture: string;
    /** Platform version to download. */
    version: string;
}

export interface PlatformDownloadResponse {
    message?:
        | { $case: 'progress'; progress: DownloadProgress }
        | {
              $case: 'result';
              result: PlatformDownloadResponse_Result;
          }
        | undefined;
}

/** Empty message, reserved for future expansion. */
export interface PlatformDownloadResponse_Result {}

export interface PlatformUninstallRequest {
    /** Arduino Core Service instance from the `Init` response. */
    instance: Instance | undefined;
    /** Vendor name of the platform (e.g., `arduino`). */
    platformPackage: string;
    /** Architecture name of the platform (e.g., `avr`). */
    architecture: string;
    /**
     * Set to true to not run (eventual) pre uninstall scripts for trusted
     * platforms
     */
    skipPreUninstall: boolean;
}

export interface PlatformUninstallResponse {
    message?:
        | { $case: 'taskProgress'; taskProgress: TaskProgress }
        | {
              $case: 'result';
              result: PlatformUninstallResponse_Result;
          }
        | undefined;
}

/** Empty message, reserved for future expansion. */
export interface PlatformUninstallResponse_Result {}

/**
 * AlreadyAtLatestVersionError is returned when an upgrade is not possible
 * because already at latest version.
 */
export interface AlreadyAtLatestVersionError {}

export interface PlatformUpgradeRequest {
    /** Arduino Core Service instance from the `Init` response. */
    instance: Instance | undefined;
    /** Vendor name of the platform (e.g., `arduino`). */
    platformPackage: string;
    /** Architecture name of the platform (e.g., `avr`). */
    architecture: string;
    /**
     * Set to true to not run (eventual) post install scripts for trusted
     * platforms
     */
    skipPostInstall: boolean;
    /**
     * Set to true to not run (eventual) pre uninstall scripts for trusted
     * platforms when performing platform upgrades
     */
    skipPreUninstall: boolean;
}

export interface PlatformUpgradeResponse {
    message?:
        | { $case: 'progress'; progress: DownloadProgress }
        | { $case: 'taskProgress'; taskProgress: TaskProgress }
        | { $case: 'result'; result: PlatformUpgradeResponse_Result }
        | undefined;
}

export interface PlatformUpgradeResponse_Result {
    /** The upgraded platform. */
    platform: Platform | undefined;
}

export interface PlatformSearchRequest {
    /** Arduino Core Service instance from the `Init` response. */
    instance: Instance | undefined;
    /** Keywords for the search. */
    searchArgs: string;
    /**
     * Whether to show manually installed platforms. `false` causes to skip
     * manually installed platforms.
     */
    manuallyInstalled: boolean;
}

export interface PlatformSearchResponse {
    /** Results of the search. */
    searchOutput: PlatformSummary[];
}

function createBasePlatformInstallRequest(): PlatformInstallRequest {
    return {
        instance: undefined,
        platformPackage: '',
        architecture: '',
        version: '',
        skipPostInstall: false,
        noOverwrite: false,
        skipPreUninstall: false,
    };
}

export const PlatformInstallRequest = {
    encode(
        message: PlatformInstallRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(
                message.instance,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.platformPackage !== '') {
            writer.uint32(18).string(message.platformPackage);
        }
        if (message.architecture !== '') {
            writer.uint32(26).string(message.architecture);
        }
        if (message.version !== '') {
            writer.uint32(34).string(message.version);
        }
        if (message.skipPostInstall === true) {
            writer.uint32(40).bool(message.skipPostInstall);
        }
        if (message.noOverwrite === true) {
            writer.uint32(48).bool(message.noOverwrite);
        }
        if (message.skipPreUninstall === true) {
            writer.uint32(56).bool(message.skipPreUninstall);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PlatformInstallRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformInstallRequest();
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

                    message.platformPackage = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.architecture = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.version = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.skipPostInstall = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }

                    message.noOverwrite = reader.bool();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }

                    message.skipPreUninstall = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): PlatformInstallRequest {
        return {
            instance: isSet(object.instance)
                ? Instance.fromJSON(object.instance)
                : undefined,
            platformPackage: isSet(object.platformPackage)
                ? String(object.platformPackage)
                : '',
            architecture: isSet(object.architecture)
                ? String(object.architecture)
                : '',
            version: isSet(object.version) ? String(object.version) : '',
            skipPostInstall: isSet(object.skipPostInstall)
                ? Boolean(object.skipPostInstall)
                : false,
            noOverwrite: isSet(object.noOverwrite)
                ? Boolean(object.noOverwrite)
                : false,
            skipPreUninstall: isSet(object.skipPreUninstall)
                ? Boolean(object.skipPreUninstall)
                : false,
        };
    },

    toJSON(message: PlatformInstallRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance
                ? Instance.toJSON(message.instance)
                : undefined);
        message.platformPackage !== undefined &&
            (obj.platformPackage = message.platformPackage);
        message.architecture !== undefined &&
            (obj.architecture = message.architecture);
        message.version !== undefined && (obj.version = message.version);
        message.skipPostInstall !== undefined &&
            (obj.skipPostInstall = message.skipPostInstall);
        message.noOverwrite !== undefined &&
            (obj.noOverwrite = message.noOverwrite);
        message.skipPreUninstall !== undefined &&
            (obj.skipPreUninstall = message.skipPreUninstall);
        return obj;
    },

    create(base?: DeepPartial<PlatformInstallRequest>): PlatformInstallRequest {
        return PlatformInstallRequest.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<PlatformInstallRequest>
    ): PlatformInstallRequest {
        const message = createBasePlatformInstallRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.platformPackage = object.platformPackage ?? '';
        message.architecture = object.architecture ?? '';
        message.version = object.version ?? '';
        message.skipPostInstall = object.skipPostInstall ?? false;
        message.noOverwrite = object.noOverwrite ?? false;
        message.skipPreUninstall = object.skipPreUninstall ?? false;
        return message;
    },
};

function createBasePlatformInstallResponse(): PlatformInstallResponse {
    return { message: undefined };
}

export const PlatformInstallResponse = {
    encode(
        message: PlatformInstallResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        switch (message.message?.$case) {
            case 'progress':
                DownloadProgress.encode(
                    message.message.progress,
                    writer.uint32(10).fork()
                ).ldelim();
                break;
            case 'taskProgress':
                TaskProgress.encode(
                    message.message.taskProgress,
                    writer.uint32(18).fork()
                ).ldelim();
                break;
            case 'result':
                PlatformInstallResponse_Result.encode(
                    message.message.result,
                    writer.uint32(26).fork()
                ).ldelim();
                break;
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PlatformInstallResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformInstallResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.message = {
                        $case: 'progress',
                        progress: DownloadProgress.decode(
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
                        $case: 'taskProgress',
                        taskProgress: TaskProgress.decode(
                            reader,
                            reader.uint32()
                        ),
                    };
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.message = {
                        $case: 'result',
                        result: PlatformInstallResponse_Result.decode(
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

    fromJSON(object: any): PlatformInstallResponse {
        return {
            message: isSet(object.progress)
                ? {
                      $case: 'progress',
                      progress: DownloadProgress.fromJSON(object.progress),
                  }
                : isSet(object.taskProgress)
                ? {
                      $case: 'taskProgress',
                      taskProgress: TaskProgress.fromJSON(object.taskProgress),
                  }
                : isSet(object.result)
                ? {
                      $case: 'result',
                      result: PlatformInstallResponse_Result.fromJSON(
                          object.result
                      ),
                  }
                : undefined,
        };
    },

    toJSON(message: PlatformInstallResponse): unknown {
        const obj: any = {};
        message.message?.$case === 'progress' &&
            (obj.progress = message.message?.progress
                ? DownloadProgress.toJSON(message.message?.progress)
                : undefined);
        message.message?.$case === 'taskProgress' &&
            (obj.taskProgress = message.message?.taskProgress
                ? TaskProgress.toJSON(message.message?.taskProgress)
                : undefined);
        message.message?.$case === 'result' &&
            (obj.result = message.message?.result
                ? PlatformInstallResponse_Result.toJSON(message.message?.result)
                : undefined);
        return obj;
    },

    create(
        base?: DeepPartial<PlatformInstallResponse>
    ): PlatformInstallResponse {
        return PlatformInstallResponse.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<PlatformInstallResponse>
    ): PlatformInstallResponse {
        const message = createBasePlatformInstallResponse();
        if (
            object.message?.$case === 'progress' &&
            object.message?.progress !== undefined &&
            object.message?.progress !== null
        ) {
            message.message = {
                $case: 'progress',
                progress: DownloadProgress.fromPartial(object.message.progress),
            };
        }
        if (
            object.message?.$case === 'taskProgress' &&
            object.message?.taskProgress !== undefined &&
            object.message?.taskProgress !== null
        ) {
            message.message = {
                $case: 'taskProgress',
                taskProgress: TaskProgress.fromPartial(
                    object.message.taskProgress
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
                result: PlatformInstallResponse_Result.fromPartial(
                    object.message.result
                ),
            };
        }
        return message;
    },
};

function createBasePlatformInstallResponse_Result(): PlatformInstallResponse_Result {
    return {};
}

export const PlatformInstallResponse_Result = {
    encode(
        _: PlatformInstallResponse_Result,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PlatformInstallResponse_Result {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformInstallResponse_Result();
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

    fromJSON(_: any): PlatformInstallResponse_Result {
        return {};
    },

    toJSON(_: PlatformInstallResponse_Result): unknown {
        const obj: any = {};
        return obj;
    },

    create(
        base?: DeepPartial<PlatformInstallResponse_Result>
    ): PlatformInstallResponse_Result {
        return PlatformInstallResponse_Result.fromPartial(base ?? {});
    },

    fromPartial(
        _: DeepPartial<PlatformInstallResponse_Result>
    ): PlatformInstallResponse_Result {
        const message = createBasePlatformInstallResponse_Result();
        return message;
    },
};

function createBasePlatformLoadingError(): PlatformLoadingError {
    return {};
}

export const PlatformLoadingError = {
    encode(
        _: PlatformLoadingError,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PlatformLoadingError {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformLoadingError();
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

    fromJSON(_: any): PlatformLoadingError {
        return {};
    },

    toJSON(_: PlatformLoadingError): unknown {
        const obj: any = {};
        return obj;
    },

    create(base?: DeepPartial<PlatformLoadingError>): PlatformLoadingError {
        return PlatformLoadingError.fromPartial(base ?? {});
    },

    fromPartial(_: DeepPartial<PlatformLoadingError>): PlatformLoadingError {
        const message = createBasePlatformLoadingError();
        return message;
    },
};

function createBasePlatformDownloadRequest(): PlatformDownloadRequest {
    return {
        instance: undefined,
        platformPackage: '',
        architecture: '',
        version: '',
    };
}

export const PlatformDownloadRequest = {
    encode(
        message: PlatformDownloadRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(
                message.instance,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.platformPackage !== '') {
            writer.uint32(18).string(message.platformPackage);
        }
        if (message.architecture !== '') {
            writer.uint32(26).string(message.architecture);
        }
        if (message.version !== '') {
            writer.uint32(34).string(message.version);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PlatformDownloadRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformDownloadRequest();
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

                    message.platformPackage = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.architecture = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
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

    fromJSON(object: any): PlatformDownloadRequest {
        return {
            instance: isSet(object.instance)
                ? Instance.fromJSON(object.instance)
                : undefined,
            platformPackage: isSet(object.platformPackage)
                ? String(object.platformPackage)
                : '',
            architecture: isSet(object.architecture)
                ? String(object.architecture)
                : '',
            version: isSet(object.version) ? String(object.version) : '',
        };
    },

    toJSON(message: PlatformDownloadRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance
                ? Instance.toJSON(message.instance)
                : undefined);
        message.platformPackage !== undefined &&
            (obj.platformPackage = message.platformPackage);
        message.architecture !== undefined &&
            (obj.architecture = message.architecture);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },

    create(
        base?: DeepPartial<PlatformDownloadRequest>
    ): PlatformDownloadRequest {
        return PlatformDownloadRequest.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<PlatformDownloadRequest>
    ): PlatformDownloadRequest {
        const message = createBasePlatformDownloadRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.platformPackage = object.platformPackage ?? '';
        message.architecture = object.architecture ?? '';
        message.version = object.version ?? '';
        return message;
    },
};

function createBasePlatformDownloadResponse(): PlatformDownloadResponse {
    return { message: undefined };
}

export const PlatformDownloadResponse = {
    encode(
        message: PlatformDownloadResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        switch (message.message?.$case) {
            case 'progress':
                DownloadProgress.encode(
                    message.message.progress,
                    writer.uint32(10).fork()
                ).ldelim();
                break;
            case 'result':
                PlatformDownloadResponse_Result.encode(
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
    ): PlatformDownloadResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformDownloadResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.message = {
                        $case: 'progress',
                        progress: DownloadProgress.decode(
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
                        result: PlatformDownloadResponse_Result.decode(
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

    fromJSON(object: any): PlatformDownloadResponse {
        return {
            message: isSet(object.progress)
                ? {
                      $case: 'progress',
                      progress: DownloadProgress.fromJSON(object.progress),
                  }
                : isSet(object.result)
                ? {
                      $case: 'result',
                      result: PlatformDownloadResponse_Result.fromJSON(
                          object.result
                      ),
                  }
                : undefined,
        };
    },

    toJSON(message: PlatformDownloadResponse): unknown {
        const obj: any = {};
        message.message?.$case === 'progress' &&
            (obj.progress = message.message?.progress
                ? DownloadProgress.toJSON(message.message?.progress)
                : undefined);
        message.message?.$case === 'result' &&
            (obj.result = message.message?.result
                ? PlatformDownloadResponse_Result.toJSON(
                      message.message?.result
                  )
                : undefined);
        return obj;
    },

    create(
        base?: DeepPartial<PlatformDownloadResponse>
    ): PlatformDownloadResponse {
        return PlatformDownloadResponse.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<PlatformDownloadResponse>
    ): PlatformDownloadResponse {
        const message = createBasePlatformDownloadResponse();
        if (
            object.message?.$case === 'progress' &&
            object.message?.progress !== undefined &&
            object.message?.progress !== null
        ) {
            message.message = {
                $case: 'progress',
                progress: DownloadProgress.fromPartial(object.message.progress),
            };
        }
        if (
            object.message?.$case === 'result' &&
            object.message?.result !== undefined &&
            object.message?.result !== null
        ) {
            message.message = {
                $case: 'result',
                result: PlatformDownloadResponse_Result.fromPartial(
                    object.message.result
                ),
            };
        }
        return message;
    },
};

function createBasePlatformDownloadResponse_Result(): PlatformDownloadResponse_Result {
    return {};
}

export const PlatformDownloadResponse_Result = {
    encode(
        _: PlatformDownloadResponse_Result,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PlatformDownloadResponse_Result {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformDownloadResponse_Result();
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

    fromJSON(_: any): PlatformDownloadResponse_Result {
        return {};
    },

    toJSON(_: PlatformDownloadResponse_Result): unknown {
        const obj: any = {};
        return obj;
    },

    create(
        base?: DeepPartial<PlatformDownloadResponse_Result>
    ): PlatformDownloadResponse_Result {
        return PlatformDownloadResponse_Result.fromPartial(base ?? {});
    },

    fromPartial(
        _: DeepPartial<PlatformDownloadResponse_Result>
    ): PlatformDownloadResponse_Result {
        const message = createBasePlatformDownloadResponse_Result();
        return message;
    },
};

function createBasePlatformUninstallRequest(): PlatformUninstallRequest {
    return {
        instance: undefined,
        platformPackage: '',
        architecture: '',
        skipPreUninstall: false,
    };
}

export const PlatformUninstallRequest = {
    encode(
        message: PlatformUninstallRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(
                message.instance,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.platformPackage !== '') {
            writer.uint32(18).string(message.platformPackage);
        }
        if (message.architecture !== '') {
            writer.uint32(26).string(message.architecture);
        }
        if (message.skipPreUninstall === true) {
            writer.uint32(32).bool(message.skipPreUninstall);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PlatformUninstallRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformUninstallRequest();
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

                    message.platformPackage = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.architecture = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.skipPreUninstall = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): PlatformUninstallRequest {
        return {
            instance: isSet(object.instance)
                ? Instance.fromJSON(object.instance)
                : undefined,
            platformPackage: isSet(object.platformPackage)
                ? String(object.platformPackage)
                : '',
            architecture: isSet(object.architecture)
                ? String(object.architecture)
                : '',
            skipPreUninstall: isSet(object.skipPreUninstall)
                ? Boolean(object.skipPreUninstall)
                : false,
        };
    },

    toJSON(message: PlatformUninstallRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance
                ? Instance.toJSON(message.instance)
                : undefined);
        message.platformPackage !== undefined &&
            (obj.platformPackage = message.platformPackage);
        message.architecture !== undefined &&
            (obj.architecture = message.architecture);
        message.skipPreUninstall !== undefined &&
            (obj.skipPreUninstall = message.skipPreUninstall);
        return obj;
    },

    create(
        base?: DeepPartial<PlatformUninstallRequest>
    ): PlatformUninstallRequest {
        return PlatformUninstallRequest.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<PlatformUninstallRequest>
    ): PlatformUninstallRequest {
        const message = createBasePlatformUninstallRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.platformPackage = object.platformPackage ?? '';
        message.architecture = object.architecture ?? '';
        message.skipPreUninstall = object.skipPreUninstall ?? false;
        return message;
    },
};

function createBasePlatformUninstallResponse(): PlatformUninstallResponse {
    return { message: undefined };
}

export const PlatformUninstallResponse = {
    encode(
        message: PlatformUninstallResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        switch (message.message?.$case) {
            case 'taskProgress':
                TaskProgress.encode(
                    message.message.taskProgress,
                    writer.uint32(10).fork()
                ).ldelim();
                break;
            case 'result':
                PlatformUninstallResponse_Result.encode(
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
    ): PlatformUninstallResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformUninstallResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.message = {
                        $case: 'taskProgress',
                        taskProgress: TaskProgress.decode(
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
                        result: PlatformUninstallResponse_Result.decode(
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

    fromJSON(object: any): PlatformUninstallResponse {
        return {
            message: isSet(object.taskProgress)
                ? {
                      $case: 'taskProgress',
                      taskProgress: TaskProgress.fromJSON(object.taskProgress),
                  }
                : isSet(object.result)
                ? {
                      $case: 'result',
                      result: PlatformUninstallResponse_Result.fromJSON(
                          object.result
                      ),
                  }
                : undefined,
        };
    },

    toJSON(message: PlatformUninstallResponse): unknown {
        const obj: any = {};
        message.message?.$case === 'taskProgress' &&
            (obj.taskProgress = message.message?.taskProgress
                ? TaskProgress.toJSON(message.message?.taskProgress)
                : undefined);
        message.message?.$case === 'result' &&
            (obj.result = message.message?.result
                ? PlatformUninstallResponse_Result.toJSON(
                      message.message?.result
                  )
                : undefined);
        return obj;
    },

    create(
        base?: DeepPartial<PlatformUninstallResponse>
    ): PlatformUninstallResponse {
        return PlatformUninstallResponse.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<PlatformUninstallResponse>
    ): PlatformUninstallResponse {
        const message = createBasePlatformUninstallResponse();
        if (
            object.message?.$case === 'taskProgress' &&
            object.message?.taskProgress !== undefined &&
            object.message?.taskProgress !== null
        ) {
            message.message = {
                $case: 'taskProgress',
                taskProgress: TaskProgress.fromPartial(
                    object.message.taskProgress
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
                result: PlatformUninstallResponse_Result.fromPartial(
                    object.message.result
                ),
            };
        }
        return message;
    },
};

function createBasePlatformUninstallResponse_Result(): PlatformUninstallResponse_Result {
    return {};
}

export const PlatformUninstallResponse_Result = {
    encode(
        _: PlatformUninstallResponse_Result,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PlatformUninstallResponse_Result {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformUninstallResponse_Result();
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

    fromJSON(_: any): PlatformUninstallResponse_Result {
        return {};
    },

    toJSON(_: PlatformUninstallResponse_Result): unknown {
        const obj: any = {};
        return obj;
    },

    create(
        base?: DeepPartial<PlatformUninstallResponse_Result>
    ): PlatformUninstallResponse_Result {
        return PlatformUninstallResponse_Result.fromPartial(base ?? {});
    },

    fromPartial(
        _: DeepPartial<PlatformUninstallResponse_Result>
    ): PlatformUninstallResponse_Result {
        const message = createBasePlatformUninstallResponse_Result();
        return message;
    },
};

function createBaseAlreadyAtLatestVersionError(): AlreadyAtLatestVersionError {
    return {};
}

export const AlreadyAtLatestVersionError = {
    encode(
        _: AlreadyAtLatestVersionError,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): AlreadyAtLatestVersionError {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAlreadyAtLatestVersionError();
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

    fromJSON(_: any): AlreadyAtLatestVersionError {
        return {};
    },

    toJSON(_: AlreadyAtLatestVersionError): unknown {
        const obj: any = {};
        return obj;
    },

    create(
        base?: DeepPartial<AlreadyAtLatestVersionError>
    ): AlreadyAtLatestVersionError {
        return AlreadyAtLatestVersionError.fromPartial(base ?? {});
    },

    fromPartial(
        _: DeepPartial<AlreadyAtLatestVersionError>
    ): AlreadyAtLatestVersionError {
        const message = createBaseAlreadyAtLatestVersionError();
        return message;
    },
};

function createBasePlatformUpgradeRequest(): PlatformUpgradeRequest {
    return {
        instance: undefined,
        platformPackage: '',
        architecture: '',
        skipPostInstall: false,
        skipPreUninstall: false,
    };
}

export const PlatformUpgradeRequest = {
    encode(
        message: PlatformUpgradeRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(
                message.instance,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.platformPackage !== '') {
            writer.uint32(18).string(message.platformPackage);
        }
        if (message.architecture !== '') {
            writer.uint32(26).string(message.architecture);
        }
        if (message.skipPostInstall === true) {
            writer.uint32(32).bool(message.skipPostInstall);
        }
        if (message.skipPreUninstall === true) {
            writer.uint32(40).bool(message.skipPreUninstall);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PlatformUpgradeRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformUpgradeRequest();
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

                    message.platformPackage = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.architecture = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.skipPostInstall = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.skipPreUninstall = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): PlatformUpgradeRequest {
        return {
            instance: isSet(object.instance)
                ? Instance.fromJSON(object.instance)
                : undefined,
            platformPackage: isSet(object.platformPackage)
                ? String(object.platformPackage)
                : '',
            architecture: isSet(object.architecture)
                ? String(object.architecture)
                : '',
            skipPostInstall: isSet(object.skipPostInstall)
                ? Boolean(object.skipPostInstall)
                : false,
            skipPreUninstall: isSet(object.skipPreUninstall)
                ? Boolean(object.skipPreUninstall)
                : false,
        };
    },

    toJSON(message: PlatformUpgradeRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance
                ? Instance.toJSON(message.instance)
                : undefined);
        message.platformPackage !== undefined &&
            (obj.platformPackage = message.platformPackage);
        message.architecture !== undefined &&
            (obj.architecture = message.architecture);
        message.skipPostInstall !== undefined &&
            (obj.skipPostInstall = message.skipPostInstall);
        message.skipPreUninstall !== undefined &&
            (obj.skipPreUninstall = message.skipPreUninstall);
        return obj;
    },

    create(base?: DeepPartial<PlatformUpgradeRequest>): PlatformUpgradeRequest {
        return PlatformUpgradeRequest.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<PlatformUpgradeRequest>
    ): PlatformUpgradeRequest {
        const message = createBasePlatformUpgradeRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.platformPackage = object.platformPackage ?? '';
        message.architecture = object.architecture ?? '';
        message.skipPostInstall = object.skipPostInstall ?? false;
        message.skipPreUninstall = object.skipPreUninstall ?? false;
        return message;
    },
};

function createBasePlatformUpgradeResponse(): PlatformUpgradeResponse {
    return { message: undefined };
}

export const PlatformUpgradeResponse = {
    encode(
        message: PlatformUpgradeResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        switch (message.message?.$case) {
            case 'progress':
                DownloadProgress.encode(
                    message.message.progress,
                    writer.uint32(10).fork()
                ).ldelim();
                break;
            case 'taskProgress':
                TaskProgress.encode(
                    message.message.taskProgress,
                    writer.uint32(18).fork()
                ).ldelim();
                break;
            case 'result':
                PlatformUpgradeResponse_Result.encode(
                    message.message.result,
                    writer.uint32(26).fork()
                ).ldelim();
                break;
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PlatformUpgradeResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformUpgradeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.message = {
                        $case: 'progress',
                        progress: DownloadProgress.decode(
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
                        $case: 'taskProgress',
                        taskProgress: TaskProgress.decode(
                            reader,
                            reader.uint32()
                        ),
                    };
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.message = {
                        $case: 'result',
                        result: PlatformUpgradeResponse_Result.decode(
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

    fromJSON(object: any): PlatformUpgradeResponse {
        return {
            message: isSet(object.progress)
                ? {
                      $case: 'progress',
                      progress: DownloadProgress.fromJSON(object.progress),
                  }
                : isSet(object.taskProgress)
                ? {
                      $case: 'taskProgress',
                      taskProgress: TaskProgress.fromJSON(object.taskProgress),
                  }
                : isSet(object.result)
                ? {
                      $case: 'result',
                      result: PlatformUpgradeResponse_Result.fromJSON(
                          object.result
                      ),
                  }
                : undefined,
        };
    },

    toJSON(message: PlatformUpgradeResponse): unknown {
        const obj: any = {};
        message.message?.$case === 'progress' &&
            (obj.progress = message.message?.progress
                ? DownloadProgress.toJSON(message.message?.progress)
                : undefined);
        message.message?.$case === 'taskProgress' &&
            (obj.taskProgress = message.message?.taskProgress
                ? TaskProgress.toJSON(message.message?.taskProgress)
                : undefined);
        message.message?.$case === 'result' &&
            (obj.result = message.message?.result
                ? PlatformUpgradeResponse_Result.toJSON(message.message?.result)
                : undefined);
        return obj;
    },

    create(
        base?: DeepPartial<PlatformUpgradeResponse>
    ): PlatformUpgradeResponse {
        return PlatformUpgradeResponse.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<PlatformUpgradeResponse>
    ): PlatformUpgradeResponse {
        const message = createBasePlatformUpgradeResponse();
        if (
            object.message?.$case === 'progress' &&
            object.message?.progress !== undefined &&
            object.message?.progress !== null
        ) {
            message.message = {
                $case: 'progress',
                progress: DownloadProgress.fromPartial(object.message.progress),
            };
        }
        if (
            object.message?.$case === 'taskProgress' &&
            object.message?.taskProgress !== undefined &&
            object.message?.taskProgress !== null
        ) {
            message.message = {
                $case: 'taskProgress',
                taskProgress: TaskProgress.fromPartial(
                    object.message.taskProgress
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
                result: PlatformUpgradeResponse_Result.fromPartial(
                    object.message.result
                ),
            };
        }
        return message;
    },
};

function createBasePlatformUpgradeResponse_Result(): PlatformUpgradeResponse_Result {
    return { platform: undefined };
}

export const PlatformUpgradeResponse_Result = {
    encode(
        message: PlatformUpgradeResponse_Result,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.platform !== undefined) {
            Platform.encode(
                message.platform,
                writer.uint32(10).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PlatformUpgradeResponse_Result {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformUpgradeResponse_Result();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.platform = Platform.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): PlatformUpgradeResponse_Result {
        return {
            platform: isSet(object.platform)
                ? Platform.fromJSON(object.platform)
                : undefined,
        };
    },

    toJSON(message: PlatformUpgradeResponse_Result): unknown {
        const obj: any = {};
        message.platform !== undefined &&
            (obj.platform = message.platform
                ? Platform.toJSON(message.platform)
                : undefined);
        return obj;
    },

    create(
        base?: DeepPartial<PlatformUpgradeResponse_Result>
    ): PlatformUpgradeResponse_Result {
        return PlatformUpgradeResponse_Result.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<PlatformUpgradeResponse_Result>
    ): PlatformUpgradeResponse_Result {
        const message = createBasePlatformUpgradeResponse_Result();
        message.platform =
            object.platform !== undefined && object.platform !== null
                ? Platform.fromPartial(object.platform)
                : undefined;
        return message;
    },
};

function createBasePlatformSearchRequest(): PlatformSearchRequest {
    return { instance: undefined, searchArgs: '', manuallyInstalled: false };
}

export const PlatformSearchRequest = {
    encode(
        message: PlatformSearchRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(
                message.instance,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.searchArgs !== '') {
            writer.uint32(18).string(message.searchArgs);
        }
        if (message.manuallyInstalled === true) {
            writer.uint32(24).bool(message.manuallyInstalled);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PlatformSearchRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformSearchRequest();
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

                    message.searchArgs = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.manuallyInstalled = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): PlatformSearchRequest {
        return {
            instance: isSet(object.instance)
                ? Instance.fromJSON(object.instance)
                : undefined,
            searchArgs: isSet(object.searchArgs)
                ? String(object.searchArgs)
                : '',
            manuallyInstalled: isSet(object.manuallyInstalled)
                ? Boolean(object.manuallyInstalled)
                : false,
        };
    },

    toJSON(message: PlatformSearchRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance
                ? Instance.toJSON(message.instance)
                : undefined);
        message.searchArgs !== undefined &&
            (obj.searchArgs = message.searchArgs);
        message.manuallyInstalled !== undefined &&
            (obj.manuallyInstalled = message.manuallyInstalled);
        return obj;
    },

    create(base?: DeepPartial<PlatformSearchRequest>): PlatformSearchRequest {
        return PlatformSearchRequest.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<PlatformSearchRequest>
    ): PlatformSearchRequest {
        const message = createBasePlatformSearchRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.searchArgs = object.searchArgs ?? '';
        message.manuallyInstalled = object.manuallyInstalled ?? false;
        return message;
    },
};

function createBasePlatformSearchResponse(): PlatformSearchResponse {
    return { searchOutput: [] };
}

export const PlatformSearchResponse = {
    encode(
        message: PlatformSearchResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        for (const v of message.searchOutput) {
            PlatformSummary.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PlatformSearchResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformSearchResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.searchOutput.push(
                        PlatformSummary.decode(reader, reader.uint32())
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

    fromJSON(object: any): PlatformSearchResponse {
        return {
            searchOutput: Array.isArray(object?.searchOutput)
                ? object.searchOutput.map((e: any) =>
                      PlatformSummary.fromJSON(e)
                  )
                : [],
        };
    },

    toJSON(message: PlatformSearchResponse): unknown {
        const obj: any = {};
        if (message.searchOutput) {
            obj.searchOutput = message.searchOutput.map((e) =>
                e ? PlatformSummary.toJSON(e) : undefined
            );
        } else {
            obj.searchOutput = [];
        }
        return obj;
    },

    create(base?: DeepPartial<PlatformSearchResponse>): PlatformSearchResponse {
        return PlatformSearchResponse.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<PlatformSearchResponse>
    ): PlatformSearchResponse {
        const message = createBasePlatformSearchResponse();
        message.searchOutput =
            object.searchOutput?.map((e) => PlatformSummary.fromPartial(e)) ||
            [];
        return message;
    },
};

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
