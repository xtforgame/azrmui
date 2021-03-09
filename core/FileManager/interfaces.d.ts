import { ReactNode } from 'react';
export declare type FilePathType = 'newFile' | 'newFolder' | 'file' | 'folder';
export declare type Paths = string[];
export declare type ClearListFunction = () => any;
export declare type RefreshCurrentFolderFunction = () => any;
export declare type AppendPathFunction = (path: string) => any;
export declare type PathKey = string;
export declare type HandleCreateFunctionParams = {
    info: FileListItem;
    options: GetViewOptionsResult;
};
export declare type HandleFileOrFolderCreateFunction = (params: HandleCreateFunctionParams, cb: (r: string | void) => any) => any;
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare type FolderViewProps = Omit<RenderFolderViewOption, 'viewPaths'> & {
    index: number;
    paths: Paths;
    pathKey: string;
};
export declare type ExtraViewOptions = Omit<FolderViewProps, 'index' | 'fullPaths' | 'paths' | 'setPaths' | 'getFileList' | 'handleCreate' | 'updateViewCallbacks'>;
export declare type GetViewOptionsResult = {
    appendPath: AppendPathFunction;
    fullPaths: Paths;
    paths: Paths;
    clearList: ClearListFunction;
    refresh: RefreshCurrentFolderFunction;
    handleCreate: HandleFileOrFolderCreateFunction;
} & ExtraViewOptions;
export declare type UpdateViewCallbacksFunction = (cbs: FolderViewCbs) => any;
export declare type GetViewOptionsFunction = (cbs: FolderViewCbs) => GetViewOptionsResult;
export declare type Selection = any;
export declare type OnSelectFunction = (info: FileListItem, viewOptions: GetViewOptionsResult) => any;
export declare type ViewOptions = GetViewOptionsResult;
export declare type RenderListItemFunction = (info: FileListItem, options: ViewOptions) => ReactNode;
export declare type RenderFolderViewOption<CustomProps = any> = {
    handleCreate: HandleFileOrFolderCreateFunction;
    updateViewCallbacks: UpdateViewCallbacksFunction;
    getFileList: GetFileListFunction;
    renderListItem: RenderListItemFunction;
    fullPaths: Paths;
    viewPaths: Paths;
    setPaths: (paths: Paths) => any;
    onSelect: OnSelectFunction;
    selection: Selection;
    currentPathKey: PathKey;
    fileFilter: FileFiter;
    customProps: CustomProps;
};
export declare type RenderFolderViewFunction<CustomProps = any> = (slideInfo: any, options: RenderFolderViewOption<CustomProps>) => ReactNode;
export declare type FilenameValidater = (filename: string) => string | void;
export declare type ApiArgBase = {
    filename: string;
    params?: {
        options?: {
            paths?: string[];
        };
    };
};
export declare type ApiExArg = ApiArgBase & {
    type: FilePathType;
};
export declare type FileListItem = {
    type: FilePathType;
    name: string;
    relPath: string;
    paths?: Paths;
    path?: PathKey;
};
export declare type FileFiter = (fileInfo: FileListItem, options: GetViewOptionsResult) => boolean;
export declare type GetFileListFunction = (paths: string[]) => Promise<FileListItem[]> | FileListItem[];
export declare type CreateFileOrFolderFunction = (arg: ApiArgBase) => Promise<string | void> | string | void;
export declare type CanCreateFunction = (arg: ApiExArg) => Promise<string | void> | string | void;
export declare type IsFileExistsFunction = (arg: ApiExArg) => Promise<boolean> | boolean;
export declare type FileApi = {
    getFileList: GetFileListFunction;
    createFileOrFolder: CreateFileOrFolderFunction;
    canCreate: CanCreateFunction;
    isFileExists: IsFileExistsFunction;
};
export declare type CreateFileOrFolderInfoCallback = Function;
export declare type CreateFileOrFolderInfo = {
    cb: CreateFileOrFolderInfoCallback;
};
export declare type FolderViewCbs = {
    clearList: ClearListFunction;
    refresh: RefreshCurrentFolderFunction;
    getViewOptions: GetViewOptionsFunction;
};
export declare type FileManagerProps<CustomProps = any> = FileApi & {
    fileFilter: FileFiter;
    filenameValidater: FilenameValidater;
    updateViewCallbacks: GetViewOptionsFunction;
    customProps: CustomProps;
    SwipeableViewsProps: any;
    onPathsChange: (paths: Paths) => void;
    onSelect: OnSelectFunction;
    selection: Selection;
    renderFolderView: RenderFolderViewFunction;
    renderListItem: () => ReactNode;
    value?: Paths;
    [s: string]: any;
};
