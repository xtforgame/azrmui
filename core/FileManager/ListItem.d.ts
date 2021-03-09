import { Paths, GetViewOptionsResult, FileListItem } from './interfaces';
export declare type ListItemProps = GetViewOptionsResult & {
    info: FileListItem;
    pathKey: string;
    paths: Paths;
    viewOptions: GetViewOptionsResult;
};
declare const _default: (props: ListItemProps) => JSX.Element | null;
export default _default;
