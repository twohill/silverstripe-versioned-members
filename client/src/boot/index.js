/* global window */
import Injector from 'lib/Injector';
import readOneMemberQuery from 'state/readOneMemberQuery';
import revertToMemberVersionMutation from 'state/revertToMemberVersionMutation';

window.document.addEventListener('DOMContentLoaded', () => {
  // Register GraphQL operations with Injector as transformations
  Injector.transform(
    'member-history', (updater) => {
      updater.component(
        'HistoryViewer.Form_ItemEditForm',
        readOneMemberQuery, 'ElementHistoryViewer');
    }
  );

  Injector.transform(
    'member-history-revert', (updater) => {
      updater.component(
        'HistoryViewerToolbar.VersionedAdmin.HistoryViewer.Member.HistoryViewerVersionDetail',
        revertToMemberVersionMutation,
        'MemberRevertMutation'
      );
    }
  );
});
