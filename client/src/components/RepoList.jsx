import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = ({repos}) => {
  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col"># of Stars</th>
            <th scope="col">Repo Name</th>
            <th scope="col">Owner</th>
          </tr>
        </thead>
        <tbody>
      {repos.map(repo => 
        <RepoListEntry repo={repo} key={repo._id} />
      )}
      </tbody>
      </table>
    </div>
  )
}

export default RepoList;