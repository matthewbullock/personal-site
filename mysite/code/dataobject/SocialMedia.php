<?php

class SocialMedia extends DataObject {

	private static $singular_name = 'Social Media';
	private static $plural_name = 'Social Media';
	private static $default_sort = 'SortOrder';

	private static $db = [
	'SortOrder' => 'Int',
	'URL'    => 'Varchar(255)',
	'IconColor' => 'Color',
	'FontAwesomeIcon' => 'Varchar',

	];

	private static $has_one = [
	'Section'    => 'Section',
	];

	public function getCMSFields() {
		$fields = parent::getCMSFields();

		$fields->addFieldToTab(
			'Root.Main',
			FontAwesomeIconPickerField::create( 'FontAwesomeIcon', 'Font Awesome Icon' )
		);

		return $fields;
	}

	public function strip($Type) {
		return substr($Type,3);
	}
}
