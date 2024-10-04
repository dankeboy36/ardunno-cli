/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

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
          }
        | undefined;
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
    /** Platform name */
    platform: string;
    /** Programmer ID */
    id: string;
    /** Programmer name */
    name: string;
}

/**
 * MissingProgrammerError is a status error detail that is returned when
 * the operation can not be completed due to a missing programmer argument.
 */
export interface MissingProgrammerError {}

/**
 * Platform is a structure containing all the information about a single
 * platform release.
 */
export interface Platform {
    /** Generic information about a platform */
    metadata: PlatformMetadata | undefined;
    /** Information about a specific release of a platform */
    release: PlatformRelease | undefined;
}

/**
 * PlatformSummary is a structure containing all the information about
 * a platform and all its available releases.
 */
export interface PlatformSummary {
    /** Generic information about a platform */
    metadata: PlatformMetadata | undefined;
    /** Maps version to the corresponding PlatformRelease */
    releases: { [key: string]: PlatformRelease };
    /** The installed version of the platform, or empty string if none installed */
    installedVersion: string;
    /**
     * The latest available version of the platform that can be installable, or
     * empty if none available.
     */
    latestVersion: string;
}

export interface PlatformSummary_ReleasesEntry {
    key: string;
    value: PlatformRelease | undefined;
}

/**
 * PlatformMetadata contains generic information about a platform (not
 * correlated to a specific release).
 */
export interface PlatformMetadata {
    /** Platform ID (e.g., `arduino:avr`). */
    id: string;
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
     * If true this Platform has been installed manually in the user' sketchbook
     * hardware folder
     */
    manuallyInstalled: boolean;
    /** True if the latest release of this Platform has been deprecated */
    deprecated: boolean;
    /** If true the platform is indexed */
    indexed: boolean;
}

/** PlatformRelease contains information about a specific release of a platform. */
export interface PlatformRelease {
    /** Name used to identify the platform to humans (e.g., "Arduino AVR Boards"). */
    name: string;
    /** Version of the platform release */
    version: string;
    /** Type of the platform. */
    types: string[];
    /** True if the platform is installed */
    installed: boolean;
    /**
     * List of boards provided by the platform. If the platform is installed,
     * this is the boards listed in the platform's boards.txt. If the platform is
     * not installed, this is an arbitrary list of board names provided by the
     * platform author for display and may not match boards.txt.
     */
    boards: Board[];
    /**
     * A URL provided by the author of the platform's package, intended to point
     * to their online help service.
     */
    help: HelpResources | undefined;
    /**
     * This field is true if the platform is missing installation metadata (this
     * happens if the platform has been installed with the legacy Arduino IDE
     * <=1.8.x). If the platform miss metadata and it's not indexed through a
     * package index, it may fail to work correctly in some circumstances, and it
     * may need to be reinstalled. This should be evaluated only when the
     * PlatformRelease is `Installed` otherwise is an undefined behaviour.
     */
    missingMetadata: boolean;
    /** True this release is deprecated */
    deprecated: boolean;
    /**
     * True if the platform dependencies are available for the current OS/ARCH.
     * This also means that the platform is installable.
     */
    compatible: boolean;
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

export interface HelpResources {
    /**
     * A URL provided by the author of the platform's package, intended to point
     * to their online help service.
     */
    online: string;
}

export interface Sketch {
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
    /** Default FQBN set in project file (sketch.yaml) */
    defaultFqbn: string;
    /** Default Port set in project file (sketch.yaml) */
    defaultPort: string;
    /** Default Protocol set in project file (sketch.yaml) */
    defaultProtocol: string;
    /** List of profiles present in the project file (sketch.yaml) */
    profiles: SketchProfile[];
    /** Default profile set in the project file (sketch.yaml) */
    defaultProfile: SketchProfile | undefined;
    /** Default Programmer set in project file (sketch.yaml) */
    defaultProgrammer: string;
}

export interface SketchProfile {
    /** Name of the profile */
    name: string;
    /** FQBN used by the profile */
    fqbn: string;
    /** Programmer used by the profile */
    programmer: string;
}

function createBaseInstance(): Instance {
    return { id: 0 };
}

export const Instance = {
    encode(
        message: Instance,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Instance {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.id = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
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

    create(base?: DeepPartial<Instance>): Instance {
        return Instance.fromPartial(base ?? {});
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
    encode(
        message: DownloadProgress,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        switch (message.message?.$case) {
            case 'start':
                DownloadProgressStart.encode(
                    message.message.start,
                    writer.uint32(10).fork()
                ).ldelim();
                break;
            case 'update':
                DownloadProgressUpdate.encode(
                    message.message.update,
                    writer.uint32(18).fork()
                ).ldelim();
                break;
            case 'end':
                DownloadProgressEnd.encode(
                    message.message.end,
                    writer.uint32(26).fork()
                ).ldelim();
                break;
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): DownloadProgress {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDownloadProgress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.message = {
                        $case: 'start',
                        start: DownloadProgressStart.decode(
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
                        $case: 'update',
                        update: DownloadProgressUpdate.decode(
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
                        $case: 'end',
                        end: DownloadProgressEnd.decode(
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

    fromJSON(object: any): DownloadProgress {
        return {
            message: isSet(object.start)
                ? {
                      $case: 'start',
                      start: DownloadProgressStart.fromJSON(object.start),
                  }
                : isSet(object.update)
                ? {
                      $case: 'update',
                      update: DownloadProgressUpdate.fromJSON(object.update),
                  }
                : isSet(object.end)
                ? {
                      $case: 'end',
                      end: DownloadProgressEnd.fromJSON(object.end),
                  }
                : undefined,
        };
    },

    toJSON(message: DownloadProgress): unknown {
        const obj: any = {};
        message.message?.$case === 'start' &&
            (obj.start = message.message?.start
                ? DownloadProgressStart.toJSON(message.message?.start)
                : undefined);
        message.message?.$case === 'update' &&
            (obj.update = message.message?.update
                ? DownloadProgressUpdate.toJSON(message.message?.update)
                : undefined);
        message.message?.$case === 'end' &&
            (obj.end = message.message?.end
                ? DownloadProgressEnd.toJSON(message.message?.end)
                : undefined);
        return obj;
    },

    create(base?: DeepPartial<DownloadProgress>): DownloadProgress {
        return DownloadProgress.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<DownloadProgress>): DownloadProgress {
        const message = createBaseDownloadProgress();
        if (
            object.message?.$case === 'start' &&
            object.message?.start !== undefined &&
            object.message?.start !== null
        ) {
            message.message = {
                $case: 'start',
                start: DownloadProgressStart.fromPartial(object.message.start),
            };
        }
        if (
            object.message?.$case === 'update' &&
            object.message?.update !== undefined &&
            object.message?.update !== null
        ) {
            message.message = {
                $case: 'update',
                update: DownloadProgressUpdate.fromPartial(
                    object.message.update
                ),
            };
        }
        if (
            object.message?.$case === 'end' &&
            object.message?.end !== undefined &&
            object.message?.end !== null
        ) {
            message.message = {
                $case: 'end',
                end: DownloadProgressEnd.fromPartial(object.message.end),
            };
        }
        return message;
    },
};

function createBaseDownloadProgressStart(): DownloadProgressStart {
    return { url: '', label: '' };
}

export const DownloadProgressStart = {
    encode(
        message: DownloadProgressStart,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.url !== '') {
            writer.uint32(10).string(message.url);
        }
        if (message.label !== '') {
            writer.uint32(18).string(message.label);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DownloadProgressStart {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDownloadProgressStart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.url = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.label = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
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

    create(base?: DeepPartial<DownloadProgressStart>): DownloadProgressStart {
        return DownloadProgressStart.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<DownloadProgressStart>
    ): DownloadProgressStart {
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
    encode(
        message: DownloadProgressUpdate,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.downloaded !== 0) {
            writer.uint32(8).int64(message.downloaded);
        }
        if (message.totalSize !== 0) {
            writer.uint32(16).int64(message.totalSize);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DownloadProgressUpdate {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDownloadProgressUpdate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.downloaded = longToNumber(reader.int64() as Long);
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }

                    message.totalSize = longToNumber(reader.int64() as Long);
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): DownloadProgressUpdate {
        return {
            downloaded: isSet(object.downloaded)
                ? Number(object.downloaded)
                : 0,
            totalSize: isSet(object.totalSize) ? Number(object.totalSize) : 0,
        };
    },

    toJSON(message: DownloadProgressUpdate): unknown {
        const obj: any = {};
        message.downloaded !== undefined &&
            (obj.downloaded = Math.round(message.downloaded));
        message.totalSize !== undefined &&
            (obj.totalSize = Math.round(message.totalSize));
        return obj;
    },

    create(base?: DeepPartial<DownloadProgressUpdate>): DownloadProgressUpdate {
        return DownloadProgressUpdate.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<DownloadProgressUpdate>
    ): DownloadProgressUpdate {
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
    encode(
        message: DownloadProgressEnd,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        if (message.message !== '') {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): DownloadProgressEnd {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDownloadProgressEnd();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }

                    message.success = reader.bool();
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

    create(base?: DeepPartial<DownloadProgressEnd>): DownloadProgressEnd {
        return DownloadProgressEnd.fromPartial(base ?? {});
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
    encode(
        message: TaskProgress,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTaskProgress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.message = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.completed = reader.bool();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }

                    message.percent = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): TaskProgress {
        return {
            name: isSet(object.name) ? String(object.name) : '',
            message: isSet(object.message) ? String(object.message) : '',
            completed: isSet(object.completed)
                ? Boolean(object.completed)
                : false,
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

    create(base?: DeepPartial<TaskProgress>): TaskProgress {
        return TaskProgress.fromPartial(base ?? {});
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
    encode(
        message: Programmer,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProgrammer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.platform = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.name = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
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

    create(base?: DeepPartial<Programmer>): Programmer {
        return Programmer.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<Programmer>): Programmer {
        const message = createBaseProgrammer();
        message.platform = object.platform ?? '';
        message.id = object.id ?? '';
        message.name = object.name ?? '';
        return message;
    },
};

function createBaseMissingProgrammerError(): MissingProgrammerError {
    return {};
}

export const MissingProgrammerError = {
    encode(
        _: MissingProgrammerError,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): MissingProgrammerError {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMissingProgrammerError();
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

    fromJSON(_: any): MissingProgrammerError {
        return {};
    },

    toJSON(_: MissingProgrammerError): unknown {
        const obj: any = {};
        return obj;
    },

    create(base?: DeepPartial<MissingProgrammerError>): MissingProgrammerError {
        return MissingProgrammerError.fromPartial(base ?? {});
    },

    fromPartial(
        _: DeepPartial<MissingProgrammerError>
    ): MissingProgrammerError {
        const message = createBaseMissingProgrammerError();
        return message;
    },
};

function createBasePlatform(): Platform {
    return { metadata: undefined, release: undefined };
}

export const Platform = {
    encode(
        message: Platform,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.metadata !== undefined) {
            PlatformMetadata.encode(
                message.metadata,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.release !== undefined) {
            PlatformRelease.encode(
                message.release,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Platform {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatform();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.metadata = PlatformMetadata.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.release = PlatformRelease.decode(
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

    fromJSON(object: any): Platform {
        return {
            metadata: isSet(object.metadata)
                ? PlatformMetadata.fromJSON(object.metadata)
                : undefined,
            release: isSet(object.release)
                ? PlatformRelease.fromJSON(object.release)
                : undefined,
        };
    },

    toJSON(message: Platform): unknown {
        const obj: any = {};
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? PlatformMetadata.toJSON(message.metadata)
                : undefined);
        message.release !== undefined &&
            (obj.release = message.release
                ? PlatformRelease.toJSON(message.release)
                : undefined);
        return obj;
    },

    create(base?: DeepPartial<Platform>): Platform {
        return Platform.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<Platform>): Platform {
        const message = createBasePlatform();
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? PlatformMetadata.fromPartial(object.metadata)
                : undefined;
        message.release =
            object.release !== undefined && object.release !== null
                ? PlatformRelease.fromPartial(object.release)
                : undefined;
        return message;
    },
};

function createBasePlatformSummary(): PlatformSummary {
    return {
        metadata: undefined,
        releases: {},
        installedVersion: '',
        latestVersion: '',
    };
}

export const PlatformSummary = {
    encode(
        message: PlatformSummary,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.metadata !== undefined) {
            PlatformMetadata.encode(
                message.metadata,
                writer.uint32(10).fork()
            ).ldelim();
        }
        Object.entries(message.releases).forEach(([key, value]) => {
            PlatformSummary_ReleasesEntry.encode(
                { key: key as any, value },
                writer.uint32(18).fork()
            ).ldelim();
        });
        if (message.installedVersion !== '') {
            writer.uint32(26).string(message.installedVersion);
        }
        if (message.latestVersion !== '') {
            writer.uint32(34).string(message.latestVersion);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PlatformSummary {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformSummary();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.metadata = PlatformMetadata.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    const entry2 = PlatformSummary_ReleasesEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry2.value !== undefined) {
                        message.releases[entry2.key] = entry2.value;
                    }
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.installedVersion = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.latestVersion = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): PlatformSummary {
        return {
            metadata: isSet(object.metadata)
                ? PlatformMetadata.fromJSON(object.metadata)
                : undefined,
            releases: isObject(object.releases)
                ? Object.entries(object.releases).reduce<{
                      [key: string]: PlatformRelease;
                  }>((acc, [key, value]) => {
                      acc[key] = PlatformRelease.fromJSON(value);
                      return acc;
                  }, {})
                : {},
            installedVersion: isSet(object.installedVersion)
                ? String(object.installedVersion)
                : '',
            latestVersion: isSet(object.latestVersion)
                ? String(object.latestVersion)
                : '',
        };
    },

    toJSON(message: PlatformSummary): unknown {
        const obj: any = {};
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? PlatformMetadata.toJSON(message.metadata)
                : undefined);
        obj.releases = {};
        if (message.releases) {
            Object.entries(message.releases).forEach(([k, v]) => {
                obj.releases[k] = PlatformRelease.toJSON(v);
            });
        }
        message.installedVersion !== undefined &&
            (obj.installedVersion = message.installedVersion);
        message.latestVersion !== undefined &&
            (obj.latestVersion = message.latestVersion);
        return obj;
    },

    create(base?: DeepPartial<PlatformSummary>): PlatformSummary {
        return PlatformSummary.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<PlatformSummary>): PlatformSummary {
        const message = createBasePlatformSummary();
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? PlatformMetadata.fromPartial(object.metadata)
                : undefined;
        message.releases = Object.entries(object.releases ?? {}).reduce<{
            [key: string]: PlatformRelease;
        }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = PlatformRelease.fromPartial(value);
            }
            return acc;
        }, {});
        message.installedVersion = object.installedVersion ?? '';
        message.latestVersion = object.latestVersion ?? '';
        return message;
    },
};

function createBasePlatformSummary_ReleasesEntry(): PlatformSummary_ReleasesEntry {
    return { key: '', value: undefined };
}

export const PlatformSummary_ReleasesEntry = {
    encode(
        message: PlatformSummary_ReleasesEntry,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.key !== '') {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            PlatformRelease.encode(
                message.value,
                writer.uint32(18).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): PlatformSummary_ReleasesEntry {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformSummary_ReleasesEntry();
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

                    message.value = PlatformRelease.decode(
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

    fromJSON(object: any): PlatformSummary_ReleasesEntry {
        return {
            key: isSet(object.key) ? String(object.key) : '',
            value: isSet(object.value)
                ? PlatformRelease.fromJSON(object.value)
                : undefined,
        };
    },

    toJSON(message: PlatformSummary_ReleasesEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? PlatformRelease.toJSON(message.value)
                : undefined);
        return obj;
    },

    create(
        base?: DeepPartial<PlatformSummary_ReleasesEntry>
    ): PlatformSummary_ReleasesEntry {
        return PlatformSummary_ReleasesEntry.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<PlatformSummary_ReleasesEntry>
    ): PlatformSummary_ReleasesEntry {
        const message = createBasePlatformSummary_ReleasesEntry();
        message.key = object.key ?? '';
        message.value =
            object.value !== undefined && object.value !== null
                ? PlatformRelease.fromPartial(object.value)
                : undefined;
        return message;
    },
};

function createBasePlatformMetadata(): PlatformMetadata {
    return {
        id: '',
        maintainer: '',
        website: '',
        email: '',
        manuallyInstalled: false,
        deprecated: false,
        indexed: false,
    };
}

export const PlatformMetadata = {
    encode(
        message: PlatformMetadata,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.id !== '') {
            writer.uint32(10).string(message.id);
        }
        if (message.maintainer !== '') {
            writer.uint32(18).string(message.maintainer);
        }
        if (message.website !== '') {
            writer.uint32(26).string(message.website);
        }
        if (message.email !== '') {
            writer.uint32(34).string(message.email);
        }
        if (message.manuallyInstalled === true) {
            writer.uint32(40).bool(message.manuallyInstalled);
        }
        if (message.deprecated === true) {
            writer.uint32(48).bool(message.deprecated);
        }
        if (message.indexed === true) {
            writer.uint32(56).bool(message.indexed);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PlatformMetadata {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.maintainer = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.website = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.email = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.manuallyInstalled = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }

                    message.deprecated = reader.bool();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }

                    message.indexed = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): PlatformMetadata {
        return {
            id: isSet(object.id) ? String(object.id) : '',
            maintainer: isSet(object.maintainer)
                ? String(object.maintainer)
                : '',
            website: isSet(object.website) ? String(object.website) : '',
            email: isSet(object.email) ? String(object.email) : '',
            manuallyInstalled: isSet(object.manuallyInstalled)
                ? Boolean(object.manuallyInstalled)
                : false,
            deprecated: isSet(object.deprecated)
                ? Boolean(object.deprecated)
                : false,
            indexed: isSet(object.indexed) ? Boolean(object.indexed) : false,
        };
    },

    toJSON(message: PlatformMetadata): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.maintainer !== undefined &&
            (obj.maintainer = message.maintainer);
        message.website !== undefined && (obj.website = message.website);
        message.email !== undefined && (obj.email = message.email);
        message.manuallyInstalled !== undefined &&
            (obj.manuallyInstalled = message.manuallyInstalled);
        message.deprecated !== undefined &&
            (obj.deprecated = message.deprecated);
        message.indexed !== undefined && (obj.indexed = message.indexed);
        return obj;
    },

    create(base?: DeepPartial<PlatformMetadata>): PlatformMetadata {
        return PlatformMetadata.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<PlatformMetadata>): PlatformMetadata {
        const message = createBasePlatformMetadata();
        message.id = object.id ?? '';
        message.maintainer = object.maintainer ?? '';
        message.website = object.website ?? '';
        message.email = object.email ?? '';
        message.manuallyInstalled = object.manuallyInstalled ?? false;
        message.deprecated = object.deprecated ?? false;
        message.indexed = object.indexed ?? false;
        return message;
    },
};

function createBasePlatformRelease(): PlatformRelease {
    return {
        name: '',
        version: '',
        types: [],
        installed: false,
        boards: [],
        help: undefined,
        missingMetadata: false,
        deprecated: false,
        compatible: false,
    };
}

export const PlatformRelease = {
    encode(
        message: PlatformRelease,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.version !== '') {
            writer.uint32(18).string(message.version);
        }
        for (const v of message.types) {
            writer.uint32(26).string(v!);
        }
        if (message.installed === true) {
            writer.uint32(32).bool(message.installed);
        }
        for (const v of message.boards) {
            Board.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        if (message.help !== undefined) {
            HelpResources.encode(
                message.help,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.missingMetadata === true) {
            writer.uint32(56).bool(message.missingMetadata);
        }
        if (message.deprecated === true) {
            writer.uint32(64).bool(message.deprecated);
        }
        if (message.compatible === true) {
            writer.uint32(72).bool(message.compatible);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): PlatformRelease {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformRelease();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.version = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.types.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.installed = reader.bool();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.boards.push(Board.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.help = HelpResources.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }

                    message.missingMetadata = reader.bool();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }

                    message.deprecated = reader.bool();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }

                    message.compatible = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): PlatformRelease {
        return {
            name: isSet(object.name) ? String(object.name) : '',
            version: isSet(object.version) ? String(object.version) : '',
            types: Array.isArray(object?.types)
                ? object.types.map((e: any) => String(e))
                : [],
            installed: isSet(object.installed)
                ? Boolean(object.installed)
                : false,
            boards: Array.isArray(object?.boards)
                ? object.boards.map((e: any) => Board.fromJSON(e))
                : [],
            help: isSet(object.help)
                ? HelpResources.fromJSON(object.help)
                : undefined,
            missingMetadata: isSet(object.missingMetadata)
                ? Boolean(object.missingMetadata)
                : false,
            deprecated: isSet(object.deprecated)
                ? Boolean(object.deprecated)
                : false,
            compatible: isSet(object.compatible)
                ? Boolean(object.compatible)
                : false,
        };
    },

    toJSON(message: PlatformRelease): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.version !== undefined && (obj.version = message.version);
        if (message.types) {
            obj.types = message.types.map((e) => e);
        } else {
            obj.types = [];
        }
        message.installed !== undefined && (obj.installed = message.installed);
        if (message.boards) {
            obj.boards = message.boards.map((e) =>
                e ? Board.toJSON(e) : undefined
            );
        } else {
            obj.boards = [];
        }
        message.help !== undefined &&
            (obj.help = message.help
                ? HelpResources.toJSON(message.help)
                : undefined);
        message.missingMetadata !== undefined &&
            (obj.missingMetadata = message.missingMetadata);
        message.deprecated !== undefined &&
            (obj.deprecated = message.deprecated);
        message.compatible !== undefined &&
            (obj.compatible = message.compatible);
        return obj;
    },

    create(base?: DeepPartial<PlatformRelease>): PlatformRelease {
        return PlatformRelease.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<PlatformRelease>): PlatformRelease {
        const message = createBasePlatformRelease();
        message.name = object.name ?? '';
        message.version = object.version ?? '';
        message.types = object.types?.map((e) => e) || [];
        message.installed = object.installed ?? false;
        message.boards = object.boards?.map((e) => Board.fromPartial(e)) || [];
        message.help =
            object.help !== undefined && object.help !== null
                ? HelpResources.fromPartial(object.help)
                : undefined;
        message.missingMetadata = object.missingMetadata ?? false;
        message.deprecated = object.deprecated ?? false;
        message.compatible = object.compatible ?? false;
        return message;
    },
};

function createBaseInstalledPlatformReference(): InstalledPlatformReference {
    return { id: '', version: '', installDir: '', packageUrl: '' };
}

export const InstalledPlatformReference = {
    encode(
        message: InstalledPlatformReference,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): InstalledPlatformReference {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstalledPlatformReference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.version = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.installDir = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.packageUrl = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): InstalledPlatformReference {
        return {
            id: isSet(object.id) ? String(object.id) : '',
            version: isSet(object.version) ? String(object.version) : '',
            installDir: isSet(object.installDir)
                ? String(object.installDir)
                : '',
            packageUrl: isSet(object.packageUrl)
                ? String(object.packageUrl)
                : '',
        };
    },

    toJSON(message: InstalledPlatformReference): unknown {
        const obj: any = {};
        message.id !== undefined && (obj.id = message.id);
        message.version !== undefined && (obj.version = message.version);
        message.installDir !== undefined &&
            (obj.installDir = message.installDir);
        message.packageUrl !== undefined &&
            (obj.packageUrl = message.packageUrl);
        return obj;
    },

    create(
        base?: DeepPartial<InstalledPlatformReference>
    ): InstalledPlatformReference {
        return InstalledPlatformReference.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<InstalledPlatformReference>
    ): InstalledPlatformReference {
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
    encode(
        message: Board,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.fqbn !== '') {
            writer.uint32(18).string(message.fqbn);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Board {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBoard();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
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

    create(base?: DeepPartial<Board>): Board {
        return Board.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<Board>): Board {
        const message = createBaseBoard();
        message.name = object.name ?? '';
        message.fqbn = object.fqbn ?? '';
        return message;
    },
};

function createBaseHelpResources(): HelpResources {
    return { online: '' };
}

export const HelpResources = {
    encode(
        message: HelpResources,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.online !== '') {
            writer.uint32(10).string(message.online);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): HelpResources {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHelpResources();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.online = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): HelpResources {
        return { online: isSet(object.online) ? String(object.online) : '' };
    },

    toJSON(message: HelpResources): unknown {
        const obj: any = {};
        message.online !== undefined && (obj.online = message.online);
        return obj;
    },

    create(base?: DeepPartial<HelpResources>): HelpResources {
        return HelpResources.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<HelpResources>): HelpResources {
        const message = createBaseHelpResources();
        message.online = object.online ?? '';
        return message;
    },
};

function createBaseSketch(): Sketch {
    return {
        mainFile: '',
        locationPath: '',
        otherSketchFiles: [],
        additionalFiles: [],
        rootFolderFiles: [],
        defaultFqbn: '',
        defaultPort: '',
        defaultProtocol: '',
        profiles: [],
        defaultProfile: undefined,
        defaultProgrammer: '',
    };
}

export const Sketch = {
    encode(
        message: Sketch,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
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
        if (message.defaultFqbn !== '') {
            writer.uint32(50).string(message.defaultFqbn);
        }
        if (message.defaultPort !== '') {
            writer.uint32(58).string(message.defaultPort);
        }
        if (message.defaultProtocol !== '') {
            writer.uint32(66).string(message.defaultProtocol);
        }
        for (const v of message.profiles) {
            SketchProfile.encode(v!, writer.uint32(74).fork()).ldelim();
        }
        if (message.defaultProfile !== undefined) {
            SketchProfile.encode(
                message.defaultProfile,
                writer.uint32(82).fork()
            ).ldelim();
        }
        if (message.defaultProgrammer !== '') {
            writer.uint32(90).string(message.defaultProgrammer);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): Sketch {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSketch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.mainFile = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.locationPath = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.otherSketchFiles.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.additionalFiles.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.rootFolderFiles.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.defaultFqbn = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.defaultPort = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.defaultProtocol = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }

                    message.profiles.push(
                        SketchProfile.decode(reader, reader.uint32())
                    );
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }

                    message.defaultProfile = SketchProfile.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 11:
                    if (tag !== 90) {
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

    fromJSON(object: any): Sketch {
        return {
            mainFile: isSet(object.mainFile) ? String(object.mainFile) : '',
            locationPath: isSet(object.locationPath)
                ? String(object.locationPath)
                : '',
            otherSketchFiles: Array.isArray(object?.otherSketchFiles)
                ? object.otherSketchFiles.map((e: any) => String(e))
                : [],
            additionalFiles: Array.isArray(object?.additionalFiles)
                ? object.additionalFiles.map((e: any) => String(e))
                : [],
            rootFolderFiles: Array.isArray(object?.rootFolderFiles)
                ? object.rootFolderFiles.map((e: any) => String(e))
                : [],
            defaultFqbn: isSet(object.defaultFqbn)
                ? String(object.defaultFqbn)
                : '',
            defaultPort: isSet(object.defaultPort)
                ? String(object.defaultPort)
                : '',
            defaultProtocol: isSet(object.defaultProtocol)
                ? String(object.defaultProtocol)
                : '',
            profiles: Array.isArray(object?.profiles)
                ? object.profiles.map((e: any) => SketchProfile.fromJSON(e))
                : [],
            defaultProfile: isSet(object.defaultProfile)
                ? SketchProfile.fromJSON(object.defaultProfile)
                : undefined,
            defaultProgrammer: isSet(object.defaultProgrammer)
                ? String(object.defaultProgrammer)
                : '',
        };
    },

    toJSON(message: Sketch): unknown {
        const obj: any = {};
        message.mainFile !== undefined && (obj.mainFile = message.mainFile);
        message.locationPath !== undefined &&
            (obj.locationPath = message.locationPath);
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
        message.defaultFqbn !== undefined &&
            (obj.defaultFqbn = message.defaultFqbn);
        message.defaultPort !== undefined &&
            (obj.defaultPort = message.defaultPort);
        message.defaultProtocol !== undefined &&
            (obj.defaultProtocol = message.defaultProtocol);
        if (message.profiles) {
            obj.profiles = message.profiles.map((e) =>
                e ? SketchProfile.toJSON(e) : undefined
            );
        } else {
            obj.profiles = [];
        }
        message.defaultProfile !== undefined &&
            (obj.defaultProfile = message.defaultProfile
                ? SketchProfile.toJSON(message.defaultProfile)
                : undefined);
        message.defaultProgrammer !== undefined &&
            (obj.defaultProgrammer = message.defaultProgrammer);
        return obj;
    },

    create(base?: DeepPartial<Sketch>): Sketch {
        return Sketch.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<Sketch>): Sketch {
        const message = createBaseSketch();
        message.mainFile = object.mainFile ?? '';
        message.locationPath = object.locationPath ?? '';
        message.otherSketchFiles = object.otherSketchFiles?.map((e) => e) || [];
        message.additionalFiles = object.additionalFiles?.map((e) => e) || [];
        message.rootFolderFiles = object.rootFolderFiles?.map((e) => e) || [];
        message.defaultFqbn = object.defaultFqbn ?? '';
        message.defaultPort = object.defaultPort ?? '';
        message.defaultProtocol = object.defaultProtocol ?? '';
        message.profiles =
            object.profiles?.map((e) => SketchProfile.fromPartial(e)) || [];
        message.defaultProfile =
            object.defaultProfile !== undefined &&
            object.defaultProfile !== null
                ? SketchProfile.fromPartial(object.defaultProfile)
                : undefined;
        message.defaultProgrammer = object.defaultProgrammer ?? '';
        return message;
    },
};

function createBaseSketchProfile(): SketchProfile {
    return { name: '', fqbn: '', programmer: '' };
}

export const SketchProfile = {
    encode(
        message: SketchProfile,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.fqbn !== '') {
            writer.uint32(18).string(message.fqbn);
        }
        if (message.programmer !== '') {
            writer.uint32(26).string(message.programmer);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): SketchProfile {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSketchProfile();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.name = reader.string();
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

    fromJSON(object: any): SketchProfile {
        return {
            name: isSet(object.name) ? String(object.name) : '',
            fqbn: isSet(object.fqbn) ? String(object.fqbn) : '',
            programmer: isSet(object.programmer)
                ? String(object.programmer)
                : '',
        };
    },

    toJSON(message: SketchProfile): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.fqbn !== undefined && (obj.fqbn = message.fqbn);
        message.programmer !== undefined &&
            (obj.programmer = message.programmer);
        return obj;
    },

    create(base?: DeepPartial<SketchProfile>): SketchProfile {
        return SketchProfile.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<SketchProfile>): SketchProfile {
        const message = createBaseSketchProfile();
        message.name = object.name ?? '';
        message.fqbn = object.fqbn ?? '';
        message.programmer = object.programmer ?? '';
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

function isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
}

function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
