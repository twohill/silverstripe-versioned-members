<?php

namespace Twohill\VersionedMembers;

use SilverStripe\Forms\FieldList;
use SilverStripe\ORM\DataExtension;
use SilverStripe\VersionedAdmin\Forms\HistoryViewerField;
use SilverStripe\View\Requirements;

class VersionedMemberExtension extends DataExtension
{
    public function updateCMSFields(FieldList $fields)
    {
        //Requirements::javascript('twohill/silverstripe-versioned-members:client/dist/js/bundle.js');
        //$fields->addFieldToTab('Root.History', HistoryViewerField::create('HistoryViewer'));
    }
}
