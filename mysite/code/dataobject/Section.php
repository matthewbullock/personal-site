<?php

class Section extends DataObject {

	private static $singular_name = 'Section';
	private static $plural_name = 'Sections';
	private static $default_sort = 'SortOrder';

	private static $db = [
	'SortOrder' => 'Int',
	'Title'  => 'VarChar(255)',
	'Content'  => 'HTMLText',
	'BgType'  => "Enum('Standard,Coloured,Image','Standard')",
	];

	private static $has_one = [
	'HomePage'     => 'HomePage',
	'FeatureImage'  => 'Image',
	];

	private static $has_many = [
	'SocialMedia'   => 'SocialMedia',
	'Project'     => 'Project',
	'Skills'  => 'Skills',
	];

	public function getCMSFields() {

		$fields = parent::getCMSFields();

		$fields->addFieldToTab( 'Root.Main', new DropdownField(
				'BgType',
				'Type of Background',
				singleton( 'Section' )->dbObject( 'BgType' )->enumValues()
			) );


		$fields->addFieldsToTab( 'Root.Skills', new GridField(
                        'Skills',
                        'Skills',
                        $this->Skills(),
                        GridFieldConfig::create()->addComponents(
                            new GridFieldButtonRow('before'),
                            new GridFieldToolbarHeader(),
                            new GridFieldAddNewInlineButton(),
                            new GridFieldTitleHeader(),
                            new GridFieldEditableColumns(),
                            new GridFieldOrderableRows('SortOrder')
                        )
                    )
                );

		return $fields;
	}

	public function colorBackground( $Type ) {

		if ( $Type == "Coloured" ) {
			return true;
		}
	}

	// public function colorInverse( $color ) {

	//  $color = str_replace( '#', '', $color );
	//  if ( strlen( $color ) != 6 ) {
	//   return '000000';
	//  }

	//  $rgb = '';

	//  for ( $x=0; $x<3; $x++ ) {
	//   $c = 255 - hexdec( substr( $color, ( 2*$x ), 2 ) );
	//   $c = ( $c < 0 ) ? 0 : dechex( $c );
	//   $rgb .= ( strlen( $c ) < 2 ) ? '0'.$c : $c;
	//  }

	//  return '#'.$rgb;
	// }

	// public function determineTextColor( $hex ) {

	//  $r = hexdec( substr( $hex, 0, 2 ) );
	//  $g = hexdec( substr( $hex, 2, 2 ) );
	//  $b = hexdec( substr( $hex, 4, 2 ) );

	//  if ( $r + $g + $b > 382 ) {
	//   //bright color, use dark font
	//  }else {
	//   //dark color, use bright font
	//  }
	// }
}
