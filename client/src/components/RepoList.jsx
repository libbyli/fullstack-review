import React from 'react';
import RepoListEntry from './RepoListEntry.jsx'

const RepoList = ({repos}) => {
  return (
    <div>
      <h4> Repo List Component </h4>
        <ol type="1">
        {repos.map(repo => 
          <RepoListEntry repo={repo} key={repo._id} />
        )}
        </ol>
    </div>
  )
}

export default RepoList;