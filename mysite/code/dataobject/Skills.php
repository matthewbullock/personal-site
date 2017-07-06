<?php

class Skills extends DataObject {

    private static $singular_name = 'Skill';
    private static $plural_name = 'Skills';
    private static $default_sort = 'SortOrder';

    private static $db = [
    'SortOrder' => 'Int',
    'Skill' => 'Varchar(255)',
    'Percent' => 'Int'
    ];

    private static $summary_fields = [
    'Skill' => 'Skill',
    'Percent' => 'Percentage'
    ];

    private static $has_one = [
    'Section' => 'Section',
    ];
}
