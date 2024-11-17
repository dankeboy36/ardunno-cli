/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { InstalledPlatformReference, Instance, TaskProgress } from './common';
import { Library } from './lib';

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
    /** Just get the build properties and do not run the full compile. */
    showProperties: boolean;
    /** Print preprocessed code to stdout instead of compiling. */
    preprocess: boolean;
    /**
     * Builds of core and sketches are saved into this path to be cached and
     * reused.
     *
     * @deprecated
     */
    buildCachePath: string;
    /**
     * Path to use to store the files used for the compilation. If omitted,
     * a directory will be created in the operating system's default temporary
     * path.
     */
    buildPath: string;
    /** List of custom build properties. */
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
     * build.
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
    exportBinaries?: boolean | undefined;
    /** A list of paths to single libraries root directory. */
    library: string[];
    /**
     * The path where to search for the custom signing key name and the encrypt
     * key name.
     */
    keysKeychain: string;
    /** The name of the custom key to use for signing during the compile process. */
    signKey: string;
    /** The name of the custom key to use for encrypting during the compile process. */
    encryptKey: string;
    /**
     * If set to true the build will skip the library discovery process and will
     * use the same libraries of latest build. Enabling this flag may produce a
     * wrong output and should not be used in regular compiles unless there is a
     * very specific reason to do so. This flag is mainly provided for usage in
     * language servers to optimize the build speed in some particular cases.
     */
    skipLibrariesDiscovery: boolean;
    /**
     * If set to true the returned build properties will be left unexpanded, with
     * the variables placeholders exactly as defined in the platform.
     */
    doNotExpandBuildProperties: boolean;
    /**
     * Search for precompiled cores in the given paths and use them if found.
     * This search is performed after the standard build_cache directory.
     */
    buildCacheExtraPaths: string[];
}

export interface CompileRequest_SourceOverrideEntry {
    key: string;
    value: string;
}

export interface CompileResponse {
    message?:
        | { $case: 'outStream'; outStream: Uint8Array }
        | { $case: 'errStream'; errStream: Uint8Array }
        | { $case: 'progress'; progress: TaskProgress }
        | { $case: 'result'; result: BuilderResult }
        | undefined;
}

export interface InstanceNeedsReinitializationError {}

export interface BuilderResult {
    /** The compiler build path. */
    buildPath: string;
    /** The libraries used in the build. */
    usedLibraries: Library[];
    /** The size of the executable split by sections. */
    executableSectionsSize: ExecutableSectionSize[];
    /** The platform where the board is defined. */
    boardPlatform: InstalledPlatformReference | undefined;
    /** The platform used for the build (if referenced from the board platform). */
    buildPlatform: InstalledPlatformReference | undefined;
    /** Build properties used for compiling. */
    buildProperties: string[];
    /** Compiler errors and warnings. */
    diagnostics: CompileDiagnostic[];
}

export interface ExecutableSectionSize {
    /** The name of the section. */
    name: string;
    /** The used size of the section in bytes. */
    size: number;
    /** The maximum size of the section in bytes. */
    maxSize: number;
}

export interface CompileDiagnostic {
    /** Severity of the diagnostic. */
    severity: string;
    /** The explanation of the diagnostic (it may be multiple preformatted lines). */
    message: string;
    /** The file containing the diagnostic. */
    file: string;
    /** The line of the diagnostic if available (starts from 1). */
    line: number;
    /** The column of the diagnostic if available (starts from 1). */
    column: number;
    /**
     * The context where this diagnostic is found (it may be multiple files that
     * represents a chain of includes, or a text describing where the diagnostic
     * is found).
     */
    context: CompileDiagnosticContext[];
    /** Annotations or suggestions to the diagnostic made by the compiler. */
    notes: CompileDiagnosticNote[];
}

export interface CompileDiagnosticContext {
    /** The message describing the context reference. */
    message: string;
    /** The file of the context reference. */
    file: string;
    /** The line of the context reference. */
    line: number;
    /** The column of the context reference. */
    column: number;
}

export interface CompileDiagnosticNote {
    /** The message describing the compiler note. */
    message: string;
    /** The file of the compiler note. */
    file: string;
    /** The line of the compiler note. */
    line: number;
    /** The column of the compiler note. */
    column: number;
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
        doNotExpandBuildProperties: false,
        buildCacheExtraPaths: [],
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
            writer.uint32(184).bool(message.exportBinaries);
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
        if (message.doNotExpandBuildProperties === true) {
            writer.uint32(232).bool(message.doNotExpandBuildProperties);
        }
        for (const v of message.buildCacheExtraPaths) {
            writer.uint32(242).string(v!);
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CompileRequest {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompileRequest();
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

                    message.fqbn = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.sketchPath = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.showProperties = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.preprocess = reader.bool();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.buildCachePath = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.buildPath = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.buildProperties.push(reader.string());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }

                    message.warnings = reader.string();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }

                    message.verbose = reader.bool();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }

                    message.quiet = reader.bool();
                    continue;
                case 14:
                    if (tag !== 112) {
                        break;
                    }

                    message.jobs = reader.int32();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }

                    message.libraries.push(reader.string());
                    continue;
                case 16:
                    if (tag !== 128) {
                        break;
                    }

                    message.optimizeForDebug = reader.bool();
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }

                    message.exportDir = reader.string();
                    continue;
                case 19:
                    if (tag !== 152) {
                        break;
                    }

                    message.clean = reader.bool();
                    continue;
                case 21:
                    if (tag !== 168) {
                        break;
                    }

                    message.createCompilationDatabaseOnly = reader.bool();
                    continue;
                case 22:
                    if (tag !== 178) {
                        break;
                    }

                    const entry22 = CompileRequest_SourceOverrideEntry.decode(
                        reader,
                        reader.uint32()
                    );
                    if (entry22.value !== undefined) {
                        message.sourceOverride[entry22.key] = entry22.value;
                    }
                    continue;
                case 23:
                    if (tag !== 184) {
                        break;
                    }

                    message.exportBinaries = reader.bool();
                    continue;
                case 24:
                    if (tag !== 194) {
                        break;
                    }

                    message.library.push(reader.string());
                    continue;
                case 25:
                    if (tag !== 202) {
                        break;
                    }

                    message.keysKeychain = reader.string();
                    continue;
                case 26:
                    if (tag !== 210) {
                        break;
                    }

                    message.signKey = reader.string();
                    continue;
                case 27:
                    if (tag !== 218) {
                        break;
                    }

                    message.encryptKey = reader.string();
                    continue;
                case 28:
                    if (tag !== 224) {
                        break;
                    }

                    message.skipLibrariesDiscovery = reader.bool();
                    continue;
                case 29:
                    if (tag !== 232) {
                        break;
                    }

                    message.doNotExpandBuildProperties = reader.bool();
                    continue;
                case 30:
                    if (tag !== 242) {
                        break;
                    }

                    message.buildCacheExtraPaths.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
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
            doNotExpandBuildProperties: isSet(object.doNotExpandBuildProperties)
                ? Boolean(object.doNotExpandBuildProperties)
                : false,
            buildCacheExtraPaths: Array.isArray(object?.buildCacheExtraPaths)
                ? object.buildCacheExtraPaths.map((e: any) => String(e))
                : [],
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
        message.doNotExpandBuildProperties !== undefined &&
            (obj.doNotExpandBuildProperties =
                message.doNotExpandBuildProperties);
        if (message.buildCacheExtraPaths) {
            obj.buildCacheExtraPaths = message.buildCacheExtraPaths.map(
                (e) => e
            );
        } else {
            obj.buildCacheExtraPaths = [];
        }
        return obj;
    },

    create(base?: DeepPartial<CompileRequest>): CompileRequest {
        return CompileRequest.fromPartial(base ?? {});
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
        message.doNotExpandBuildProperties =
            object.doNotExpandBuildProperties ?? false;
        message.buildCacheExtraPaths =
            object.buildCacheExtraPaths?.map((e) => e) || [];
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
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompileRequest_SourceOverrideEntry();
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

    create(
        base?: DeepPartial<CompileRequest_SourceOverrideEntry>
    ): CompileRequest_SourceOverrideEntry {
        return CompileRequest_SourceOverrideEntry.fromPartial(base ?? {});
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
    return { message: undefined };
}

export const CompileResponse = {
    encode(
        message: CompileResponse,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        switch (message.message?.$case) {
            case 'outStream':
                writer.uint32(10).bytes(message.message.outStream);
                break;
            case 'errStream':
                writer.uint32(18).bytes(message.message.errStream);
                break;
            case 'progress':
                TaskProgress.encode(
                    message.message.progress,
                    writer.uint32(26).fork()
                ).ldelim();
                break;
            case 'result':
                BuilderResult.encode(
                    message.message.result,
                    writer.uint32(34).fork()
                ).ldelim();
                break;
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CompileResponse {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompileResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.message = {
                        $case: 'outStream',
                        outStream: reader.bytes(),
                    };
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.message = {
                        $case: 'errStream',
                        errStream: reader.bytes(),
                    };
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.message = {
                        $case: 'progress',
                        progress: TaskProgress.decode(reader, reader.uint32()),
                    };
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.message = {
                        $case: 'result',
                        result: BuilderResult.decode(reader, reader.uint32()),
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

    fromJSON(object: any): CompileResponse {
        return {
            message: isSet(object.outStream)
                ? {
                      $case: 'outStream',
                      outStream: bytesFromBase64(object.outStream),
                  }
                : isSet(object.errStream)
                ? {
                      $case: 'errStream',
                      errStream: bytesFromBase64(object.errStream),
                  }
                : isSet(object.progress)
                ? {
                      $case: 'progress',
                      progress: TaskProgress.fromJSON(object.progress),
                  }
                : isSet(object.result)
                ? {
                      $case: 'result',
                      result: BuilderResult.fromJSON(object.result),
                  }
                : undefined,
        };
    },

    toJSON(message: CompileResponse): unknown {
        const obj: any = {};
        message.message?.$case === 'outStream' &&
            (obj.outStream =
                message.message?.outStream !== undefined
                    ? base64FromBytes(message.message?.outStream)
                    : undefined);
        message.message?.$case === 'errStream' &&
            (obj.errStream =
                message.message?.errStream !== undefined
                    ? base64FromBytes(message.message?.errStream)
                    : undefined);
        message.message?.$case === 'progress' &&
            (obj.progress = message.message?.progress
                ? TaskProgress.toJSON(message.message?.progress)
                : undefined);
        message.message?.$case === 'result' &&
            (obj.result = message.message?.result
                ? BuilderResult.toJSON(message.message?.result)
                : undefined);
        return obj;
    },

    create(base?: DeepPartial<CompileResponse>): CompileResponse {
        return CompileResponse.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<CompileResponse>): CompileResponse {
        const message = createBaseCompileResponse();
        if (
            object.message?.$case === 'outStream' &&
            object.message?.outStream !== undefined &&
            object.message?.outStream !== null
        ) {
            message.message = {
                $case: 'outStream',
                outStream: object.message.outStream,
            };
        }
        if (
            object.message?.$case === 'errStream' &&
            object.message?.errStream !== undefined &&
            object.message?.errStream !== null
        ) {
            message.message = {
                $case: 'errStream',
                errStream: object.message.errStream,
            };
        }
        if (
            object.message?.$case === 'progress' &&
            object.message?.progress !== undefined &&
            object.message?.progress !== null
        ) {
            message.message = {
                $case: 'progress',
                progress: TaskProgress.fromPartial(object.message.progress),
            };
        }
        if (
            object.message?.$case === 'result' &&
            object.message?.result !== undefined &&
            object.message?.result !== null
        ) {
            message.message = {
                $case: 'result',
                result: BuilderResult.fromPartial(object.message.result),
            };
        }
        return message;
    },
};

function createBaseInstanceNeedsReinitializationError(): InstanceNeedsReinitializationError {
    return {};
}

export const InstanceNeedsReinitializationError = {
    encode(
        _: InstanceNeedsReinitializationError,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): InstanceNeedsReinitializationError {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstanceNeedsReinitializationError();
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

    fromJSON(_: any): InstanceNeedsReinitializationError {
        return {};
    },

    toJSON(_: InstanceNeedsReinitializationError): unknown {
        const obj: any = {};
        return obj;
    },

    create(
        base?: DeepPartial<InstanceNeedsReinitializationError>
    ): InstanceNeedsReinitializationError {
        return InstanceNeedsReinitializationError.fromPartial(base ?? {});
    },

    fromPartial(
        _: DeepPartial<InstanceNeedsReinitializationError>
    ): InstanceNeedsReinitializationError {
        const message = createBaseInstanceNeedsReinitializationError();
        return message;
    },
};

function createBaseBuilderResult(): BuilderResult {
    return {
        buildPath: '',
        usedLibraries: [],
        executableSectionsSize: [],
        boardPlatform: undefined,
        buildPlatform: undefined,
        buildProperties: [],
        diagnostics: [],
    };
}

export const BuilderResult = {
    encode(
        message: BuilderResult,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.buildPath !== '') {
            writer.uint32(10).string(message.buildPath);
        }
        for (const v of message.usedLibraries) {
            Library.encode(v!, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.executableSectionsSize) {
            ExecutableSectionSize.encode(v!, writer.uint32(26).fork()).ldelim();
        }
        if (message.boardPlatform !== undefined) {
            InstalledPlatformReference.encode(
                message.boardPlatform,
                writer.uint32(34).fork()
            ).ldelim();
        }
        if (message.buildPlatform !== undefined) {
            InstalledPlatformReference.encode(
                message.buildPlatform,
                writer.uint32(42).fork()
            ).ldelim();
        }
        for (const v of message.buildProperties) {
            writer.uint32(58).string(v!);
        }
        for (const v of message.diagnostics) {
            CompileDiagnostic.encode(v!, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): BuilderResult {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBuilderResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.buildPath = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.usedLibraries.push(
                        Library.decode(reader, reader.uint32())
                    );
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.executableSectionsSize.push(
                        ExecutableSectionSize.decode(reader, reader.uint32())
                    );
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }

                    message.boardPlatform = InstalledPlatformReference.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }

                    message.buildPlatform = InstalledPlatformReference.decode(
                        reader,
                        reader.uint32()
                    );
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.buildProperties.push(reader.string());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }

                    message.diagnostics.push(
                        CompileDiagnostic.decode(reader, reader.uint32())
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

    fromJSON(object: any): BuilderResult {
        return {
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
            buildProperties: Array.isArray(object?.buildProperties)
                ? object.buildProperties.map((e: any) => String(e))
                : [],
            diagnostics: Array.isArray(object?.diagnostics)
                ? object.diagnostics.map((e: any) =>
                      CompileDiagnostic.fromJSON(e)
                  )
                : [],
        };
    },

    toJSON(message: BuilderResult): unknown {
        const obj: any = {};
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
        if (message.buildProperties) {
            obj.buildProperties = message.buildProperties.map((e) => e);
        } else {
            obj.buildProperties = [];
        }
        if (message.diagnostics) {
            obj.diagnostics = message.diagnostics.map((e) =>
                e ? CompileDiagnostic.toJSON(e) : undefined
            );
        } else {
            obj.diagnostics = [];
        }
        return obj;
    },

    create(base?: DeepPartial<BuilderResult>): BuilderResult {
        return BuilderResult.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<BuilderResult>): BuilderResult {
        const message = createBaseBuilderResult();
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
        message.buildProperties = object.buildProperties?.map((e) => e) || [];
        message.diagnostics =
            object.diagnostics?.map((e) => CompileDiagnostic.fromPartial(e)) ||
            [];
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
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExecutableSectionSize();
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
                    if (tag !== 16) {
                        break;
                    }

                    message.size = longToNumber(reader.int64() as Long);
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.maxSize = longToNumber(reader.int64() as Long);
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
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

    create(base?: DeepPartial<ExecutableSectionSize>): ExecutableSectionSize {
        return ExecutableSectionSize.fromPartial(base ?? {});
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

function createBaseCompileDiagnostic(): CompileDiagnostic {
    return {
        severity: '',
        message: '',
        file: '',
        line: 0,
        column: 0,
        context: [],
        notes: [],
    };
}

export const CompileDiagnostic = {
    encode(
        message: CompileDiagnostic,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.severity !== '') {
            writer.uint32(10).string(message.severity);
        }
        if (message.message !== '') {
            writer.uint32(18).string(message.message);
        }
        if (message.file !== '') {
            writer.uint32(26).string(message.file);
        }
        if (message.line !== 0) {
            writer.uint32(32).int64(message.line);
        }
        if (message.column !== 0) {
            writer.uint32(40).int64(message.column);
        }
        for (const v of message.context) {
            CompileDiagnosticContext.encode(
                v!,
                writer.uint32(50).fork()
            ).ldelim();
        }
        for (const v of message.notes) {
            CompileDiagnosticNote.encode(v!, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },

    decode(input: _m0.Reader | Uint8Array, length?: number): CompileDiagnostic {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompileDiagnostic();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.severity = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.message = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }

                    message.file = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.line = longToNumber(reader.int64() as Long);
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }

                    message.column = longToNumber(reader.int64() as Long);
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }

                    message.context.push(
                        CompileDiagnosticContext.decode(reader, reader.uint32())
                    );
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }

                    message.notes.push(
                        CompileDiagnosticNote.decode(reader, reader.uint32())
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

    fromJSON(object: any): CompileDiagnostic {
        return {
            severity: isSet(object.severity) ? String(object.severity) : '',
            message: isSet(object.message) ? String(object.message) : '',
            file: isSet(object.file) ? String(object.file) : '',
            line: isSet(object.line) ? Number(object.line) : 0,
            column: isSet(object.column) ? Number(object.column) : 0,
            context: Array.isArray(object?.context)
                ? object.context.map((e: any) =>
                      CompileDiagnosticContext.fromJSON(e)
                  )
                : [],
            notes: Array.isArray(object?.notes)
                ? object.notes.map((e: any) =>
                      CompileDiagnosticNote.fromJSON(e)
                  )
                : [],
        };
    },

    toJSON(message: CompileDiagnostic): unknown {
        const obj: any = {};
        message.severity !== undefined && (obj.severity = message.severity);
        message.message !== undefined && (obj.message = message.message);
        message.file !== undefined && (obj.file = message.file);
        message.line !== undefined && (obj.line = Math.round(message.line));
        message.column !== undefined &&
            (obj.column = Math.round(message.column));
        if (message.context) {
            obj.context = message.context.map((e) =>
                e ? CompileDiagnosticContext.toJSON(e) : undefined
            );
        } else {
            obj.context = [];
        }
        if (message.notes) {
            obj.notes = message.notes.map((e) =>
                e ? CompileDiagnosticNote.toJSON(e) : undefined
            );
        } else {
            obj.notes = [];
        }
        return obj;
    },

    create(base?: DeepPartial<CompileDiagnostic>): CompileDiagnostic {
        return CompileDiagnostic.fromPartial(base ?? {});
    },

    fromPartial(object: DeepPartial<CompileDiagnostic>): CompileDiagnostic {
        const message = createBaseCompileDiagnostic();
        message.severity = object.severity ?? '';
        message.message = object.message ?? '';
        message.file = object.file ?? '';
        message.line = object.line ?? 0;
        message.column = object.column ?? 0;
        message.context =
            object.context?.map((e) =>
                CompileDiagnosticContext.fromPartial(e)
            ) || [];
        message.notes =
            object.notes?.map((e) => CompileDiagnosticNote.fromPartial(e)) ||
            [];
        return message;
    },
};

function createBaseCompileDiagnosticContext(): CompileDiagnosticContext {
    return { message: '', file: '', line: 0, column: 0 };
}

export const CompileDiagnosticContext = {
    encode(
        message: CompileDiagnosticContext,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.message !== '') {
            writer.uint32(10).string(message.message);
        }
        if (message.file !== '') {
            writer.uint32(18).string(message.file);
        }
        if (message.line !== 0) {
            writer.uint32(24).int64(message.line);
        }
        if (message.column !== 0) {
            writer.uint32(32).int64(message.column);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CompileDiagnosticContext {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompileDiagnosticContext();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.message = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.file = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.line = longToNumber(reader.int64() as Long);
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.column = longToNumber(reader.int64() as Long);
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CompileDiagnosticContext {
        return {
            message: isSet(object.message) ? String(object.message) : '',
            file: isSet(object.file) ? String(object.file) : '',
            line: isSet(object.line) ? Number(object.line) : 0,
            column: isSet(object.column) ? Number(object.column) : 0,
        };
    },

    toJSON(message: CompileDiagnosticContext): unknown {
        const obj: any = {};
        message.message !== undefined && (obj.message = message.message);
        message.file !== undefined && (obj.file = message.file);
        message.line !== undefined && (obj.line = Math.round(message.line));
        message.column !== undefined &&
            (obj.column = Math.round(message.column));
        return obj;
    },

    create(
        base?: DeepPartial<CompileDiagnosticContext>
    ): CompileDiagnosticContext {
        return CompileDiagnosticContext.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<CompileDiagnosticContext>
    ): CompileDiagnosticContext {
        const message = createBaseCompileDiagnosticContext();
        message.message = object.message ?? '';
        message.file = object.file ?? '';
        message.line = object.line ?? 0;
        message.column = object.column ?? 0;
        return message;
    },
};

function createBaseCompileDiagnosticNote(): CompileDiagnosticNote {
    return { message: '', file: '', line: 0, column: 0 };
}

export const CompileDiagnosticNote = {
    encode(
        message: CompileDiagnosticNote,
        writer: _m0.Writer = _m0.Writer.create()
    ): _m0.Writer {
        if (message.message !== '') {
            writer.uint32(10).string(message.message);
        }
        if (message.file !== '') {
            writer.uint32(18).string(message.file);
        }
        if (message.line !== 0) {
            writer.uint32(24).int64(message.line);
        }
        if (message.column !== 0) {
            writer.uint32(32).int64(message.column);
        }
        return writer;
    },

    decode(
        input: _m0.Reader | Uint8Array,
        length?: number
    ): CompileDiagnosticNote {
        const reader =
            input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompileDiagnosticNote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }

                    message.message = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }

                    message.file = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }

                    message.line = longToNumber(reader.int64() as Long);
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }

                    message.column = longToNumber(reader.int64() as Long);
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },

    fromJSON(object: any): CompileDiagnosticNote {
        return {
            message: isSet(object.message) ? String(object.message) : '',
            file: isSet(object.file) ? String(object.file) : '',
            line: isSet(object.line) ? Number(object.line) : 0,
            column: isSet(object.column) ? Number(object.column) : 0,
        };
    },

    toJSON(message: CompileDiagnosticNote): unknown {
        const obj: any = {};
        message.message !== undefined && (obj.message = message.message);
        message.file !== undefined && (obj.file = message.file);
        message.line !== undefined && (obj.line = Math.round(message.line));
        message.column !== undefined &&
            (obj.column = Math.round(message.column));
        return obj;
    },

    create(base?: DeepPartial<CompileDiagnosticNote>): CompileDiagnosticNote {
        return CompileDiagnosticNote.fromPartial(base ?? {});
    },

    fromPartial(
        object: DeepPartial<CompileDiagnosticNote>
    ): CompileDiagnosticNote {
        const message = createBaseCompileDiagnosticNote();
        message.message = object.message ?? '';
        message.file = object.file ?? '';
        message.line = object.line ?? 0;
        message.column = object.column ?? 0;
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
