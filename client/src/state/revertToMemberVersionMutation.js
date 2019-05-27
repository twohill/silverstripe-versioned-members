import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const mutation = gql`
mutation revertMemberToVersion($id:ID!, $toVersion:Int!) {
  rollbackMember(
    ID: $id
    ToVersion: $toVersion
  ) {
    ID
  }
}
`;

const config = {
  props: ({ mutate, ownProps: { actions } }) => {
    const revertToVersion = (id, toVersion) => mutate({
      variables: {
        id,
        toVersion,
      },
    });

    return {
      actions: {
        ...actions,
        revertToVersion,
      },
    };
  },
  options: {
    // Refetch versions after mutation is completed
    refetchQueries: ['ReadHistoryViewerMember'],
  },
};

export { mutation, config };

export default graphql(mutation, config);
