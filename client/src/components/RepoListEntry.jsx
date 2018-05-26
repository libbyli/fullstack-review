import React from 'react';

const RepoListEntry = ({repo}) => (
  <tr>
    <td>{repo.stars}</td>
    <td><a href={repo.url}>{repo.name}</a></td>
    <td><a href={repo.ownerUrl}>{repo.owner}</a></td>
  </tr>
)

export default RepoListEntry;