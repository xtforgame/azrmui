export declare function isUploadSupported(): boolean;
export declare function isFileReaderSupported(): {
    new (form?: HTMLFormElement | undefined): FormData;
    prototype: FormData;
};
export declare const defaultHashFunc: (data: any) => any;
export declare type ProcessFileDataUrlResult = {
    file: string;
    fileName: string;
    fileType: string;
    dataURL: string;
    hash?: string;
};
export declare type ProcessFileResult = ProcessFileDataUrlResult;
export declare function processFileFromDataURL(dataURL: any, file: any, options?: any): Promise<ProcessFileDataUrlResult>;
export declare const readFileAsDataURL: (file: any, options?: {}) => Promise<unknown>;
export declare const processFile: typeof processFileFromDataURL;
export declare const readFile: (file: any, options?: {}) => Promise<unknown>;
export declare type ProcessFileBinaryResult = {
    file: string;
    fileName: string;
    fileType: string;
    buffer: string | ArrayBuffer | null;
    hash?: string;
};
export declare function processFileFromBinary(buffer: string | ArrayBuffer | null, file: any, options?: any): Promise<ProcessFileBinaryResult>;
export declare const readFileAsBinary: (file: any, options?: {}) => Promise<unknown>;
export declare function processFileFromText(data: any, file: any, options?: {}): Promise<{
    file: any;
    fileName: any;
    fileType: any;
    data: any;
}>;
export declare const readFileAsText: (file: any, options?: {}) => Promise<unknown>;
