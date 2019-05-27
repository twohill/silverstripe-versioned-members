/* global window */
import Injector from 'lib/Injector';
import readOneSilverStripeMemberQuery from 'state/readOneSilverStripeMemberQuery';
import revertToSilverStripeMemberVersionMutation from 'state/revertToSilverStripeMemberVersionMutation';

window.document.addEventListener('DOMContentLoaded', () => {
  // Register GraphQL operations with Injector as transformations
  Injector.transform(
    'member-history', (updater) => {
      updater.component(
        'HistoryViewer.Form_ItemEditForm',
        readOneSilverStripeMemberQuery, 'ReadHistoryViewerSilverStripeMember');
    }
  );

  Injector.transform(
    'member-history-revert', (updater) => {
      updater.component(
        'HistoryViewerToolbar.VersionedAdmin.HistoryViewer.Member.HistoryViewerVersionDetail',
        revertToSilverStripeMemberVersionMutation,
        'SilverStripeMemberRevertMutation'
      );
    }
  );
});
