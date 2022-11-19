/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { BoolValue } from '../../../../../google/protobuf/wrappers';
import { InstalledPlatformReference, Instance, TaskProgress } from './common';
import { Library } from './lib';

export const protobufPackage = 'cc.arduino.cli.commands.v1';

export interface CompileRequest {
    /** Arduino Core Service instance from the `Init` response. */
    instance: Instance | undefined;
    /**
     * Fully Qualified Board Name, e.g.: `arduino:avr:uno`. If this field is
     * not defined, the FQBN of the board attached to the sketch via the
     * `BoardAttach` method is used.
     */
    fqbn: string;
    /** The path where the sketch is stored. */
    sketchPath: string;
    /** Show all build preferences used instead of compiling. */
    showProperties: boolean;
    /** Print preprocessed code to stdout instead of compiling. */
    preprocess: boolean;
    /** Builds of 'core.a' are saved into this path to be cached and reused. */
    buildCachePath: string;
    /**
     * Path to use to store the files used for the compilation. If omitted,
     * a directory will be created in the operating system's default temporary
     * path.
     */
    buildPath: string;
    /** List of custom build properties separated by commas. */
    buildProperties: string[];
    /**
     * Used to tell gcc which warning level to use. The level names are: "none",
     * "default", "more" and "all".
     */
    warnings: string;
    /** Turns on verbose mode. */
    verbose: boolean;
    /** Suppresses almost every output. */
    quiet: boolean;
    /** VID/PID specific build properties. */
    vidPid: string;
    /**
     * The max number of concurrent compiler instances to run (as `make -jx`).
     * If jobs is set to 0, it will use the number of available CPUs as the
     * maximum.
     */
    jobs: number;
    /** A list of paths to directories containing a collection of libraries. */
    libraries: string[];
    /** Optimize compile output for debug, not for release. */
    optimizeForDebug: boolean;
    /**
     * Optional: save the build artifacts in this directory, the directory must
     * exist.
     */
    exportDir: string;
    /**
     * Optional: cleanup the build folder and do not use any previously cached
     * build
     */
    clean: boolean;
    /**
     * When set to `true` only the compilation database will be produced and no
     * actual build will be performed.
     */
    createCompilationDatabaseOnly: boolean;
    /**
     * This map (source file -> new content) let the builder use the provided
     * content instead of reading the corresponding file on disk. This is useful
     * for IDE that have unsaved changes in memory. The path must be relative to
     * the sketch directory. Only files from the sketch are allowed.
     */
    sourceOverride: { [key: string]: string };
    /**
     * When set to `true` the compiled binary will be copied to the export
     * directory.
     */
    exportBinaries: boolean | undefined;
    /** A list of paths to single libraries root directory. */
    library: string[];
    /**
     * The path where to search for the custom signing key name and the encrypt
     * key name
     */
    keysKeychain: string;
    /** The name of the custom key to use for signing during the compile process */
    signKey: string;
    /** The name of the custom key to use for encrypting during the compile process */
    encryptKey: string;
    /**
     * If set to true the build will skip the library discovery process and will
     * use the same libraries of latest build. Enabling this flag may produce a
     * wrong output and should not be used in regular compiles unless there is a
     * very specific reason to do so. This flag is mainly provided for usage in
     * language servers to optimize the build speed in some particular cases.
     */
    skipLibrariesDiscovery: boolean;
}

export interface CompileRequest_SourceOverrideEntry {
    key: string;
    value: string;
}

export interface CompileResponse {
    /** The output of the compilation process (stream) */
    outStream: Uint8Array;
    /** The error output of the compilation process (stream) */
    errStream: Uint8Array;
    /** The compiler build path */
    buildPath: string;
    /** The libraries used in the build */
    usedLibraries: Library[];
    /** The size of the executable split by sections */
    executableSectionsSize: ExecutableSectionSize[];
    /** The platform where the board is defined */
    boardPlatform: InstalledPlatformReference | undefined;
    /** The platform used for the build (if referenced from the board platform) */
    buildPlatform: InstalledPlatformReference | undefined;
    /** Completions reports of the compilation process (stream) */
    progress: TaskProgress | undefined;
}

export interface ExecutableSectionSize {
    name: string;
    size: number;
    maxSize: number;
}

function createBaseCompileRequest(): CompileRequest {
    return {
        instance: undefined,
        fqbn: '',
        sketchPath: '',
        showProperties: false,
        preprocess: false,
        buildCachePath: '',
        buildPath: '',
        buildProperties: [],
        warnings: '',
        verbose: false,
        quiet: false,
        vidPid: '',
        jobs: 0,
        libraries: [],
        optimizeForDebug: false,
        exportDir: '',
        clean: false,
        createCompilationDatabaseOnly: false,
        sourceOverride: {},
        exportBinaries: undefined,
        library: [],
        keysKeychain: '',
        signKey: '',
        encryptKey: '',
        skipLibrariesDiscovery: false,
    };
}

export const CompileRequest = {
    encode(
        message: CompileRequest,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.instance !== undefined) {
            Instance.encode(
                message.instance,
                writer.uint32(10).fork()
            ).ldelim();
        }
        if (message.fqbn !== '') {
            writer.uint32(18).string(message.fqbn);
        }
        if (message.sketchPath !== '') {
            writer.uint32(26).string(message.sketchPath);
        }
        if (message.showProperties === true) {
            writer.uint32(32).bool(message.showProperties);
        }
        if (message.preprocess === true) {
            writer.uint32(40).bool(message.preprocess);
        }
        if (message.buildCachePath !== '') {
            writer.uint32(50).string(message.buildCachePath);
        }
        if (message.buildPath !== '') {
            writer.uint32(58).string(message.buildPath);
        }
        for (const v of message.buildProperties) {
            writer.uint32(66).string(v!);
        }
        if (message.warnings !== '') {
            writer.uint32(74).string(message.warnings);
        }
        if (message.verbose === true) {
            writer.uint32(80).bool(message.verbose);
        }
        if (message.quiet === true) {
            writer.uint32(88).bool(message.quiet);
        }
        if (message.vidPid !== '') {
            writer.uint32(98).string(message.vidPid);
        }
        if (message.jobs !== 0) {
            writer.uint32(112).int32(message.jobs);
        }
        for (const v of message.libraries) {
            writer.uint32(122).string(v!);
        }
        if (message.optimizeForDebug === true) {
            writer.uint32(128).bool(message.optimizeForDebug);
        }
        if (message.exportDir !== '') {
            writer.uint32(146).string(message.exportDir);
        }
        if (message.clean === true) {
            writer.uint32(152).bool(message.clean);
        }
        if (message.createCompilationDatabaseOnly === true) {
            writer.uint32(168).bool(message.createCompilationDatabaseOnly);
        }
        Object.entries(message.sourceOverride).forEach(([key, value]) => {
            CompileRequest_SourceOverrideEntry.encode(
                { key: key as any, value },
                writer.uint32(178).fork()
            ).ldelim();
        });
        if (message.exportBinaries !== undefined) {
            BoolValue.encode(
                { value: message.exportBinaries! },
                writer.uint32(186).fork()
            ).ldelim();
        }
        for (const v of message.library) {
            writer.uint32(194).string(v!);
        }
        if (message.keysKeychain !== '') {
            writer.uint32(202).string(message.keysKeychain);
        }
        if (message.signKey !== '') {
            writer.uint32(210).string(message.signKey);
        }
        if (message.encryptKey !== '') {
            writer.uint32(218).string(message.encryptKey);
        }
        if (message.skipLibrariesDiscovery === true) {
            writer.uint32(224).bool(message.skipLibrariesDiscovery);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CompileRequest {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompileRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = Instance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.fqbn = reader.string();
                    break;
                case 3:
                    message.sketchPath = reader.string();
                    break;
                case 4:
                    message.showProperties = reader.bool();
                    break;
                case 5:
                    message.preprocess = reader.bool();
                    break;
                case 6:
                    message.buildCachePath = reader.string();
                    break;
                case 7:
                    message.buildPath = reader.string();
                    break;
                case 8:
                    message.buildProperties.push(reader.string());
                    break;
                case 9:
                    message.warnings = reader.string();
                    break;
                case 10:
                    message.verbose = reader.bool();
                    break;
                case 11:
                    message.quiet = reader.bool();
                    break;
                case 12:
                    message.vidPid = reader.string();
                    break;
                case 14:
                    message.jobs = reader.int32();
                    break;
                case 15:
                    message.libraries.push(reader.string());
                    break;
                case 16:
                    message.optimizeForDebug = reader.bool();
                    break;
                case 18:
                    message.exportDir = reader.string();
                    break;
                case 19:
                    message.clean = reader.bool();
                    break;
                case 21:
                    message.createCompilationDatabaseOnly = reader.bool();
                    break;
                case 22:
                    const entry22 = CompileRequest_SourceOverrideEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry22.value !== undefined) {
                        message.sourceOverride[entry22.key] = entry22.value;
                    }
                    break;
                case 23:
                    message.exportBinaries = BoolValue.decode(
                        reader,
                        reader.uint32()
                    ).value;
                    break;
                case 24:
                    message.library.push(reader.string());
                    break;
                case 25:
                    message.keysKeychain = reader.string();
                    break;
                case 26:
                    message.signKey = reader.string();
                    break;
                case 27:
                    message.encryptKey = reader.string();
                    break;
                case 28:
                    message.skipLibrariesDiscovery = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): CompileRequest {
        return {
            instance: isSet(object.instance)
                ? Instance.fromJSON(object.instance)
                : undefined,
            fqbn: isSet(object.fqbn) ? String(object.fqbn) : '',
            sketchPath: isSet(object.sketchPath)
                ? String(object.sketchPath)
                : '',
            showProperties: isSet(object.showProperties)
                ? Boolean(object.showProperties)
                : false,
            preprocess: isSet(object.preprocess)
                ? Boolean(object.preprocess)
                : false,
            buildCachePath: isSet(object.buildCachePath)
                ? String(object.buildCachePath)
                : '',
            buildPath: isSet(object.buildPath) ? String(object.buildPath) : '',
            buildProperties: Array.isArray(object?.buildProperties)
                ? object.buildProperties.map((e: any) => String(e))
                : [],
            warnings: isSet(object.warnings) ? String(object.warnings) : '',
            verbose: isSet(object.verbose) ? Boolean(object.verbose) : false,
            quiet: isSet(object.quiet) ? Boolean(object.quiet) : false,
            vidPid: isSet(object.vidPid) ? String(object.vidPid) : '',
            jobs: isSet(object.jobs) ? Number(object.jobs) : 0,
            libraries: Array.isArray(object?.libraries)
                ? object.libraries.map((e: any) => String(e))
                : [],
            optimizeForDebug: isSet(object.optimizeForDebug)
                ? Boolean(object.optimizeForDebug)
                : false,
            exportDir: isSet(object.exportDir) ? String(object.exportDir) : '',
            clean: isSet(object.clean) ? Boolean(object.clean) : false,
            createCompilationDatabaseOnly: isSet(
                object.createCompilationDatabaseOnly
            )
                ? Boolean(object.createCompilationDatabaseOnly)
                : false,
            sourceOverride: isObject(object.sourceOverride)
                ? Object.entries(object.sourceOverride).reduce<{
                      [key: string]: string;
                  }>((acc, [key, value]) => {
                      acc[key] = String(value);
                      return acc;
                  }, {})
                : {},
            exportBinaries: isSet(object.exportBinaries)
                ? Boolean(object.exportBinaries)
                : undefined,
            library: Array.isArray(object?.library)
                ? object.library.map((e: any) => String(e))
                : [],
            keysKeychain: isSet(object.keysKeychain)
                ? String(object.keysKeychain)
                : '',
            signKey: isSet(object.signKey) ? String(object.signKey) : '',
            encryptKey: isSet(object.encryptKey)
                ? String(object.encryptKey)
                : '',
            skipLibrariesDiscovery: isSet(object.skipLibrariesDiscovery)
                ? Boolean(object.skipLibrariesDiscovery)
                : false,
        };
    },

    toJSON(message: CompileRequest): unknown {
        const obj: any = {};
        message.instance !== undefined &&
            (obj.instance = message.instance
                ? Instance.toJSON(message.instance)
                : undefined);
        message.fqbn !== undefined && (obj.fqbn = message.fqbn);
        message.sketchPath !== undefined &&
            (obj.sketchPath = message.sketchPath);
        message.showProperties !== undefined &&
            (obj.showProperties = message.showProperties);
        message.preprocess !== undefined &&
            (obj.preprocess = message.preprocess);
        message.buildCachePath !== undefined &&
            (obj.buildCachePath = message.buildCachePath);
        message.buildPath !== undefined && (obj.buildPath = message.buildPath);
        if (message.buildProperties) {
            obj.buildProperties = message.buildProperties.map((e) => e);
        } else {
            obj.buildProperties = [];
        }
        message.warnings !== undefined && (obj.warnings = message.warnings);
        message.verbose !== undefined && (obj.verbose = message.verbose);
        message.quiet !== undefined && (obj.quiet = message.quiet);
        message.vidPid !== undefined && (obj.vidPid = message.vidPid);
        message.jobs !== undefined && (obj.jobs = Math.round(message.jobs));
        if (message.libraries) {
            obj.libraries = message.libraries.map((e) => e);
        } else {
            obj.libraries = [];
        }
        message.optimizeForDebug !== undefined &&
            (obj.optimizeForDebug = message.optimizeForDebug);
        message.exportDir !== undefined && (obj.exportDir = message.exportDir);
        message.clean !== undefined && (obj.clean = message.clean);
        message.createCompilationDatabaseOnly !== undefined &&
            (obj.createCompilationDatabaseOnly =
                message.createCompilationDatabaseOnly);
        obj.sourceOverride = {};
        if (message.sourceOverride) {
            Object.entries(message.sourceOverride).forEach(([k, v]) => {
                obj.sourceOverride[k] = v;
            });
        }
        message.exportBinaries !== undefined &&
            (obj.exportBinaries = message.exportBinaries);
        if (message.library) {
            obj.library = message.library.map((e) => e);
        } else {
            obj.library = [];
        }
        message.keysKeychain !== undefined &&
            (obj.keysKeychain = message.keysKeychain);
        message.signKey !== undefined && (obj.signKey = message.signKey);
        message.encryptKey !== undefined &&
            (obj.encryptKey = message.encryptKey);
        message.skipLibrariesDiscovery !== undefined &&
            (obj.skipLibrariesDiscovery = message.skipLibrariesDiscovery);
        return obj;
    },

    fromPartial(object: DeepPartial<CompileRequest>): CompileRequest {
        const message = createBaseCompileRequest();
        message.instance =
            object.instance !== undefined && object.instance !== null
                ? Instance.fromPartial(object.instance)
                : undefined;
        message.fqbn = object.fqbn ?? '';
        message.sketchPath = object.sketchPath ?? '';
        message.showProperties = object.showProperties ?? false;
        message.preprocess = object.preprocess ?? false;
        message.buildCachePath = object.buildCachePath ?? '';
        message.buildPath = object.buildPath ?? '';
        message.buildProperties = object.buildProperties?.map((e) => e) || [];
        message.warnings = object.warnings ?? '';
        message.verbose = object.verbose ?? false;
        message.quiet = object.quiet ?? false;
        message.vidPid = object.vidPid ?? '';
        message.jobs = object.jobs ?? 0;
        message.libraries = object.libraries?.map((e) => e) || [];
        message.optimizeForDebug = object.optimizeForDebug ?? false;
        message.exportDir = object.exportDir ?? '';
        message.clean = object.clean ?? false;
        message.createCompilationDatabaseOnly =
            object.createCompilationDatabaseOnly ?? false;
        message.sourceOverride = Object.entries(
            object.sourceOverride ?? {}
        ).reduce<{ [key: string]: string }>((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.exportBinaries = object.exportBinaries ?? undefined;
        message.library = object.library?.map((e) => e) || [];
        message.keysKeychain = object.keysKeychain ?? '';
        message.signKey = object.signKey ?? '';
        message.encryptKey = object.encryptKey ?? '';
        message.skipLibrariesDiscovery = object.skipLibrariesDiscovery ?? false;
        return message;
    },
};

function createBaseCompileRequest_SourceOverrideEntry(): CompileRequest_SourceOverrideEntry {
    return { key: '', value: '' };
}

export const CompileRequest_SourceOverrideEntry = {
    encode(
        message: CompileRequest_SourceOverrideEntry,
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

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CompileRequest_SourceOverrideEntry {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompileRequest_SourceOverrideEntry();
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

    fromJSON(object: any): CompileRequest_SourceOverrideEntry {
        return {
            key: isSet(object.key) ? String(object.key) : '',
            value: isSet(object.value) ? String(object.value) : '',
        };
    },

    toJSON(message: CompileRequest_SourceOverrideEntry): unknown {
        const obj: any = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },

    fromPartial(
        object: DeepPartial<CompileRequest_SourceOverrideEntry>
    ): CompileRequest_SourceOverrideEntry {
        const message = createBaseCompileRequest_SourceOverrideEntry();
        message.key = object.key ?? '';
        message.value = object.value ?? '';
        return message;
    },
};

function createBaseCompileResponse(): CompileResponse {
    return {
        outStream: new Uint8Array(),
        errStream: new Uint8Array(),
        buildPath: '',
        usedLibraries: [],
        executableSectionsSize: [],
        boardPlatform: undefined,
        buildPlatform: undefined,
        progress: undefined,
    };
}

export const CompileResponse = {
    encode(
        message: CompileResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.outStream.length !== 0) {
            writer.uint32(10).bytes(message.outStream);
        }
        if (message.errStream.length !== 0) {
            writer.uint32(18).bytes(message.errStream);
        }
        if (message.buildPath !== '') {
            writer.uint32(26).string(message.buildPath);
        }
        for (const v of message.usedLibraries) {
            Library.encode(v!, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.executableSectionsSize) {
            ExecutableSectionSize.encode(v!, writer.uint32(42).fork()).ldelim();
        }
        if (message.boardPlatform !== undefined) {
            InstalledPlatformReference.encode(
                message.boardPlatform,
                writer.uint32(50).fork()
            ).ldelim();
        }
        if (message.buildPlatform !== undefined) {
            InstalledPlatformReference.encode(
                message.buildPlatform,
                writer.uint32(58).fork()
            ).ldelim();
        }
        if (message.progress !== undefined) {
            TaskProgress.encode(
                message.progress,
                writer.uint32(66).fork()
            ).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CompileResponse {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompileResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.outStream = reader.bytes();
                    break;
                case 2:
                    message.errStream = reader.bytes();
                    break;
                case 3:
                    message.buildPath = reader.string();
                    break;
                case 4:
                    message.usedLibraries.push(
                        Library.decode(reader, reader.uint32())
                    );
                    break;
                case 5:
                    message.executableSectionsSize.push(
                        ExecutableSectionSize.decode(reader, reader.uint32())
                    );
                    break;
                case 6:
                    message.boardPlatform = InstalledPlatformReference.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 7:
                    message.buildPlatform = InstalledPlatformReference.decode(
                        reader,
                        reader.uint32()
                    );
                    break;
                case 8:
                    message.progress = TaskProgress.decode(
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

    fromJSON(object: any): CompileResponse {
        return {
            outStream: isSet(object.outStream)
                ? bytesFromBase64(object.outStream)
                : new Uint8Array(),
            errStream: isSet(object.errStream)
                ? bytesFromBase64(object.errStream)
                : new Uint8Array(),
            buildPath: isSet(object.buildPath) ? String(object.buildPath) : '',
            usedLibraries: Array.isArray(object?.usedLibraries)
                ? object.usedLibraries.map((e: any) => Library.fromJSON(e))
                : [],
            executableSectionsSize: Array.isArray(
                object?.executableSectionsSize
            )
                ? object.executableSectionsSize.map((e: any) =>
                      ExecutableSectionSize.fromJSON(e)
                  )
                : [],
            boardPlatform: isSet(object.boardPlatform)
                ? InstalledPlatformReference.fromJSON(object.boardPlatform)
                : undefined,
            buildPlatform: isSet(object.buildPlatform)
                ? InstalledPlatformReference.fromJSON(object.buildPlatform)
                : undefined,
            progress: isSet(object.progress)
                ? TaskProgress.fromJSON(object.progress)
                : undefined,
        };
    },

    toJSON(message: CompileResponse): unknown {
        const obj: any = {};
        message.outStream !== undefined &&
            (obj.outStream = base64FromBytes(
                message.outStream !== undefined
                    ? message.outStream
                    : new Uint8Array()
            ));
        message.errStream !== undefined &&
            (obj.errStream = base64FromBytes(
                message.errStream !== undefined
                    ? message.errStream
                    : new Uint8Array()
            ));
        message.buildPath !== undefined && (obj.buildPath = message.buildPath);
        if (message.usedLibraries) {
            obj.usedLibraries = message.usedLibraries.map((e) =>
                e ? Library.toJSON(e) : undefined
            );
        } else {
            obj.usedLibraries = [];
        }
        if (message.executableSectionsSize) {
            obj.executableSectionsSize = message.executableSectionsSize.map(
                (e) => (e ? ExecutableSectionSize.toJSON(e) : undefined)
            );
        } else {
            obj.executableSectionsSize = [];
        }
        message.boardPlatform !== undefined &&
            (obj.boardPlatform = message.boardPlatform
                ? InstalledPlatformReference.toJSON(message.boardPlatform)
                : undefined);
        message.buildPlatform !== undefined &&
            (obj.buildPlatform = message.buildPlatform
                ? InstalledPlatformReference.toJSON(message.buildPlatform)
                : undefined);
        message.progress !== undefined &&
            (obj.progress = message.progress
                ? TaskProgress.toJSON(message.progress)
                : undefined);
        return obj;
    },

    fromPartial(object: DeepPartial<CompileResponse>): CompileResponse {
        const message = createBaseCompileResponse();
        message.outStream = object.outStream ?? new Uint8Array();
        message.errStream = object.errStream ?? new Uint8Array();
        message.buildPath = object.buildPath ?? '';
        message.usedLibraries =
            object.usedLibraries?.map((e) => Library.fromPartial(e)) || [];
        message.executableSectionsSize =
            object.executableSectionsSize?.map((e) =>
                ExecutableSectionSize.fromPartial(e)
            ) || [];
        message.boardPlatform =
            object.boardPlatform !== undefined && object.boardPlatform !== null
                ? InstalledPlatformReference.fromPartial(object.boardPlatform)
                : undefined;
        message.buildPlatform =
            object.buildPlatform !== undefined && object.buildPlatform !== null
                ? InstalledPlatformReference.fromPartial(object.buildPlatform)
                : undefined;
        message.progress =
            object.progress !== undefined && object.progress !== null
                ? TaskProgress.fromPartial(object.progress)
                : undefined;
        return message;
    },
};

function createBaseExecutableSectionSize(): ExecutableSectionSize {
    return { name: '', size: 0, maxSize: 0 };
}

export const ExecutableSectionSize = {
    encode(
        message: ExecutableSectionSize,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.size !== 0) {
            writer.uint32(16).int64(message.size);
        }
        if (message.maxSize !== 0) {
            writer.uint32(24).int64(message.maxSize);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): ExecutableSectionSize {
        const reader =
            input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExecutableSectionSize();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.size = longToNumber(reader.int64() as Long);
                    break;
                case 3:
                    message.maxSize = longToNumber(reader.int64() as Long);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ExecutableSectionSize {
        return {
            name: isSet(object.name) ? String(object.name) : '',
            size: isSet(object.size) ? Number(object.size) : 0,
            maxSize: isSet(object.maxSize) ? Number(object.maxSize) : 0,
        };
    },

    toJSON(message: ExecutableSectionSize): unknown {
        const obj: any = {};
        message.name !== undefined && (obj.name = message.name);
        message.size !== undefined && (obj.size = Math.round(message.size));
        message.maxSize !== undefined &&
            (obj.maxSize = Math.round(message.maxSize));
        return obj;
    },

    fromPartial(
        object: DeepPartial<ExecutableSectionSize>
    ): ExecutableSectionSize {
        const message = createBaseExecutableSectionSize();
        message.name = object.name ?? '';
        message.size = object.size ?? 0;
        message.maxSize = object.maxSize ?? 0;
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

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error(
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
