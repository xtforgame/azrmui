/// <reference types="react" />
import { FileManagerProps } from './interfaces';
export declare type WithSearchProps<CustomProps = any> = FileManagerProps<CustomProps> & {
    title: string;
    onClose: Function;
};
export default function WithSearch<CustomProps = any>(props: WithSearchProps<CustomProps>): JSX.Element;
