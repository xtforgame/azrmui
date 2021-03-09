/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect, useRef } from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ProgressWithMask from '../Progress/ProgressWithMask';
import DefaultListItem from './ListItem';
import {
  RenderListItemFunction,
  FolderViewProps,
  FolderViewCbs,
  FileListItem,
} from './interfaces';

const defaultRenderListItem : RenderListItemFunction = (info, options) => (
  <DefaultListItem
    key={info.name}
    info={info}
    viewOptions={options}
    {...options}
  />
);

export default (props : FolderViewProps) => {
  const {
    index,
    fullPaths,
    paths,
    setPaths,
    getFileList,
    handleCreate,
    updateViewCallbacks,
    fileFilter: ff,
    ...o
  } = props;

  const {
    pathKey,
    currentPathKey,
  } = props;


  const fileFilter = ff || (() => true);

  const [allList, setAllList] = useState<FileListItem[] | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const al = useRef<Promise<FileListItem[]> | FileListItem[]>();

  const renderListItem = props.renderListItem || defaultRenderListItem;

  const clearList = () => setAllList(null);
  const refresh = () => setRefreshKey(refreshKey + 1);

  const rawCbs = useRef<FolderViewCbs>({
    clearList,
    refresh,
    getViewOptions: () => ({
      appendPath: p => setPaths([...paths, p]),
      fullPaths,
      paths,
      ...o,
      clearList,
      refresh,
      handleCreate,
      fileFilter,
    }),
  });

  rawCbs.current = {
    clearList,
    refresh,
    getViewOptions: () => ({
      appendPath: p => setPaths([...paths, p]),
      fullPaths,
      paths,
      ...o,
      clearList,
      refresh,
      handleCreate,
      fileFilter,
    }),
  };

  const callbacks = useRef({
    clearList: () => rawCbs.current.clearList(),
    refresh: () => rawCbs.current.refresh(),
    getViewOptions: () => rawCbs.current.getViewOptions({
      clearList,
      refresh,
      getViewOptions: rawCbs.current.getViewOptions,
    }),
  });

  const options = rawCbs.current.getViewOptions({
    clearList,
    refresh,
    getViewOptions: rawCbs.current.getViewOptions,
  });

  useEffect(() => {
    if (index < 0 || index > paths.length) {
      return;
    }
    if (pathKey === currentPathKey) {
      updateViewCallbacks(callbacks.current);
    }
  }, [
    index < 0 || index > paths.length,
    pathKey === currentPathKey,
  ]);

  useEffect(() => {
    setAllList(null);
    if (index < 0 || index > paths.length) {
      return;
    }
    const allList = getFileList(paths);
    al.current = allList;
    if (Array.isArray(allList)) {
      setAllList(allList);
    } else {
      allList.then((_allList) => {
        if (al.current === allList) {
          setAllList(_allList);
        }
      });
    }
  }, [
    index < 0 || index > paths.length,
    // pathKey === currentPathKey,
    refreshKey,
  ]);

  if (!allList) {
    return (
      <div key={index} style={{ height: '100%' }}>
        <ProgressWithMask delay={100} />
      </div>
    );
  }

  const sortFunc = (a, b) => {
    if (a.relPath < b.relPath) {
      return -1;
    }
    if (a.relPath > b.relPath) {
      return 1;
    }
    return 0;
  };

  const filteredList = allList.filter(info => fileFilter(info, options));
  const fileList = filteredList.filter(info => info.type === 'file');
  fileList.sort(sortFunc);
  const folderList = filteredList.filter(info => info.type === 'folder');
  folderList.sort(sortFunc);

  return (
    <List dense key={index}>
      {renderListItem({ type: 'newFile', name: 'newFile', relPath: '' }, options)}
      {renderListItem({ type: 'newFolder', name: 'newFolder', relPath: '' }, options)}
      <Divider />
      {folderList.map(info => renderListItem(info, options))}
      {fileList.map(info => renderListItem(info, options))}
    </List>
  );
};
