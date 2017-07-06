<?php

class HomePage extends UserDefinedForm {

    private static $db = array(
        'Section_One_Intro_Heading' => 'Text',
        'Section_One_Main_Heading'  => 'Text',
        'BgColor'                   => 'Color',

        'About_Heading'  => 'Text',
        'About_Content'  => 'HTMLText',

    );

    private static $has_one = array(
        'Profile_Image'   => 'Image',
    );

    public static $has_many = array(
        // 'Projects' => 'Project'
     );

    public function getCMSFields() {

        $fields = parent::getCMSFields();

        $fields->addFieldToTab( 'Root.Main', new ColorField( 'BgColor', 'Primary color' ) );

        $fields->addFieldToTab( 'Root.Main', TextField::create( 'Section_One_Intro_Heading', 'Intro Heading' ) );
        $fields->addFieldToTab( 'Root.Main', TextField::create( 'Section_One_Main_Heading' , 'Main Heading' ) );

        $fields->addFieldToTab( 'Root.About',TextField::create( 'About_Heading', 'Heading' ) );
        $fields->addFieldToTab( 'Root.About',HTMLEditorField::create( 'About_Content', 'Content' ) );
        
        $fields->addFieldToTab(
                'Root.About',    
                $uploadField = new UploadField(
                    $name = 'Profile_Image',
                    $title = 'Upload a profile image'
                )    
            );

        return $fields;
    }


}

class HomePage_Controller extends UserDefinedForm_Controller {

    public function showYear(){
        return date('Y');
    }


}
