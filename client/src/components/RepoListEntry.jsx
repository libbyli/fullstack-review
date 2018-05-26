import React from 'react';

const RepoListEntry = ({repo}) => (
  <div>
    <li>
    <a href={repo.url}> {repo.name} </a>
    </li>
  </div>
)

export default RepoListEntry;