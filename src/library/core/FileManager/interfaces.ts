import { ReactNode } from 'react';

export type FilePathType = 'newFile' | 'newFolder' | 'file' | 'folder';

export type Paths = string[];

export type ClearListFunction = () => any;

export type RefreshCurrentFolderFunction = () => any;

export type AppendPathFunction = (path : string) => any;

export type PathKey = string;

export type HandleCreateFunctionParams = {
  info: FileListItem,
  options: GetViewOptionsResult,
};

export type HandleFileOrFolderCreateFunction = (params : HandleCreateFunctionParams, cb : (r : string | void) => any) => any;


export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type FolderViewProps = Omit<RenderFolderViewOption, 'viewPaths'> & {
  index : number;
  paths : Paths;
  pathKey : string;
};

export type ExtraViewOptions = Omit<FolderViewProps, 'index' | 'fullPaths' | 'paths' | 'setPaths' | 'getFileList' | 'handleCreate' | 'updateViewCallbacks'>;

export type GetViewOptionsResult = {
  appendPath: AppendPathFunction;
  fullPaths: Paths;
  paths: Paths;
  clearList : ClearListFunction;
  refresh: RefreshCurrentFolderFunction;
  handleCreate: HandleFileOrFolderCreateFunction;
} & ExtraViewOptions;

export type UpdateViewCallbacksFunction = (cbs : FolderViewCbs) => any;

export type GetViewOptionsFunction = (cbs : FolderViewCbs) => GetViewOptionsResult;

export type Selection = any;
export type OnSelectFunction = (info : FileListItem, viewOptions : GetViewOptionsResult) => any;

export type ViewOptions = GetViewOptionsResult;

export type RenderListItemFunction = (info : FileListItem, options : ViewOptions) => ReactNode;

export type RenderFolderViewOption<CustomProps = any> = {
  handleCreate: HandleFileOrFolderCreateFunction;
  updateViewCallbacks : UpdateViewCallbacksFunction;
  getFileList: GetFileListFunction;
  renderListItem: RenderListItemFunction;
  fullPaths: Paths;
  viewPaths: Paths;
  setPaths: (paths: Paths) => any,
  onSelect: OnSelectFunction;
  selection : Selection;
  currentPathKey: PathKey;
  fileFilter: FileFiter;
  customProps : CustomProps;
};

export type RenderFolderViewFunction<CustomProps = any> = (slideInfo : any, options : RenderFolderViewOption<CustomProps>) => ReactNode;

export type FilenameValidater = (filename : string) => string | void;

export type ApiArgBase = {
  filename: string;
  params?: {
    options?: {
      paths?: string[];
    };
  };
}

export type ApiExArg = ApiArgBase & {
  type: FilePathType;
}

export type FileListItem = {
  type: FilePathType;
  name: string;
  relPath: string;
  paths?: Paths,
  path?: PathKey,
}

export type FileFiter = (fileInfo : FileListItem, options: GetViewOptionsResult) => boolean;

export type GetFileListFunction = (paths : string[]) => Promise<FileListItem[]> | FileListItem[];

export type CreateFileOrFolderFunction = (arg : ApiArgBase) => Promise<string | void> | string | void;

export type CanCreateFunction = (arg : ApiExArg) => Promise<string | void> | string | void;

export type IsFileExistsFunction = (arg : ApiExArg) => Promise<boolean> | boolean;


export type FileApi = {
  getFileList: GetFileListFunction;
  createFileOrFolder: CreateFileOrFolderFunction;
  canCreate: CanCreateFunction;
  isFileExists: IsFileExistsFunction;
}

export type CreateFileOrFolderInfoCallback = Function;

export type CreateFileOrFolderInfo = {
  cb : CreateFileOrFolderInfoCallback;
};

export type FolderViewCbs = {
  clearList : ClearListFunction;
  refresh: RefreshCurrentFolderFunction;
  getViewOptions: GetViewOptionsFunction,
}


export type FileManagerProps<CustomProps = any> = FileApi & {
  fileFilter: FileFiter;
  filenameValidater: FilenameValidater;
  updateViewCallbacks : GetViewOptionsFunction;
  customProps: CustomProps;
  SwipeableViewsProps: any;
  onPathsChange: (paths : Paths) => void;
  onSelect: OnSelectFunction;
  selection: Selection,
  renderFolderView: RenderFolderViewFunction;
  renderListItem: () => ReactNode;
  value?: Paths;
  [s: string]: any;
};
