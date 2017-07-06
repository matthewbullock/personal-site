<?php

global $project;
$project = 'personal';

global $databaseConfig;
$databaseConfig = array(
	'type' => 'MySQLDatabase',
	'server' => 'localhost',
	'username' => 'root',
	'password' => 'Jorgen_1993',
	'database' => 'SS_personal',

);

Director::set_environment_type("dev");

i18n::set_locale('en_US');
Security::setDefaultAdmin('FLASH', 'JORGEN');
