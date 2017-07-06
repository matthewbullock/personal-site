<?php

class Project extends DataObject {

    private static $singular_name = 'Project';
    private static $plural_name = 'Projects';
    private static $default_sort = 'SortOrder';

    private static $db = [
    'SortOrder' => 'Int',
    'ProjectTitle' => 'Varchar(255)',
    'Primary_Description' => 'HTMLText',
    'Project_Description_One' => 'HTMLText',
    'Project_Description_Two' => 'HTMLText',
    'Project_Description_Three' => 'HTMLText',
    ];


    private static $has_one = [
    'Section' => 'Section',
    'Cover_Image' => 'Image',
    ];
}
