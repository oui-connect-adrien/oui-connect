'use client';

import { useEffect, useState } from 'react';

interface GitInfo {
  branch: string;
  lastCommit: string;
  lastCommitDate: string;
  buildTime: string;
}

export const GitInfo = () => {
  const [gitInfo, setGitInfo] = useState<GitInfo | null>(null);

  useEffect(() => {
    fetch('/git-info.json')
      .then(res => res.json())
      .then(data => setGitInfo(data))
      .catch(error => {
        console.error('Error loading git info:', error);
        setGitInfo(null);
      });
  }, []);

  if (!gitInfo) return <>Pas de git info</>;

  return (
    <div className="text-xs text-muted-foreground/60">
      <span className="mr-4">Branch: {gitInfo.branch}</span>
      <span className="mr-4">Commit: {gitInfo.lastCommit}</span>
      <span className="mr-4">Last updated: {gitInfo.lastCommitDate}</span>
      <span>Built: {new Date(gitInfo.buildTime).toLocaleString()}</span>
    </div>
  );
}; 