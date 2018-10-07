const schema = (db: any) => {
	let table_query: string[] = [];

	table_query[0] = 'CREATE TABLE IF NOT EXISTS `app_module` (\n' +
		'  `module_id` varchar(2) NOT NULL,\n' +
		'  `insert_by` varchar(30) NOT NULL,\n' +
		'  `insert_date` datetime NOT NULL,\n' +
		'  `update_by` varchar(30) NOT NULL,\n' +
		'  `update_date` datetime NOT NULL,\n' +
		'  `full_desc` varchar(50) NOT NULL,\n' +
		'  `full_desc_english` varchar(100) DEFAULT NULL,\n' +
		'  `order_seq` int(4) NOT NULL DEFAULT \'0\',\n' +
		'  `mark_status` char(1) NOT NULL DEFAULT \'N\' COMMENT \'ref_group AR:MRK_STT\',\n' +
		'  `remark` varchar(1000) DEFAULT NULL,\n' +
		'  PRIMARY KEY (`module_id`)\n' +
		') ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=\'List of Valid Modules.\'';

	table_query[1] = 'CREATE TABLE IF NOT EXISTS `app_refgroup` (\n' +
		'  `module_id` varchar(2) NOT NULL,\n' +
		'  `ref_group` varchar(50) NOT NULL,\n' +
		'  `insert_by` varchar(30) NOT NULL,\n' +
		'  `insert_date` datetime NOT NULL,\n' +
		'  `update_by` varchar(30) NOT NULL,\n' +
		'  `update_date` datetime NOT NULL,\n' +
		'  `full_desc` varchar(50) NOT NULL,\n' +
		'  `full_desc_english` varchar(100) DEFAULT NULL,\n' +
		'  `admin_only` char(1) NOT NULL DEFAULT \'N\',\n' +
		'  `variable1` varchar(30) DEFAULT NULL,\n' +
		'  `variable2` varchar(30) DEFAULT NULL,\n' +
		'  `variable3` varchar(30) DEFAULT NULL,\n' +
		'  `variable4` varchar(30) DEFAULT NULL,\n' +
		'  `variable5` varchar(30) DEFAULT NULL,\n' +
		'  `variable6` varchar(30) DEFAULT NULL,\n' +
		'  `mark_status` char(1) NOT NULL DEFAULT \'N\' COMMENT \'ref_group AR:MRK_STT\',\n' +
		'  `remark` varchar(1000) DEFAULT NULL,\n' +
		'  PRIMARY KEY (`module_id`,`ref_group`),\n' +
		'  KEY `app_refgroup_fk1` (`module_id`),\n' +
		'  CONSTRAINT `app_refgroup_fk1` FOREIGN KEY (`module_id`) REFERENCES `app_module` (`module_id`) ON UPDATE NO ACTION' +
		') ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=\'List of Reference Group for the respective modules.\'';

	table_query[2] = 'CREATE TABLE IF NOT EXISTS `app_refcode` (\n' +
		'  `module_id` varchar(2) NOT NULL,\n' +
		'  `ref_group` varchar(50) NOT NULL,\n' +
		'  `ref_code` varchar(30) NOT NULL,\n' +
		'  `insert_by` varchar(30) NOT NULL,\n' +
		'  `insert_date` datetime NOT NULL,\n' +
		'  `update_by` varchar(30) NOT NULL,\n' +
		'  `update_date` datetime NOT NULL,\n' +
		'  `full_desc` varchar(50) NOT NULL,\n' +
		'  `full_desc_english` varchar(100) DEFAULT NULL,\n' +
		'  `order_seq` int(11) NOT NULL DEFAULT \'0\',\n' +
		'  `value1` varchar(100) DEFAULT NULL,\n' +
		'  `value2` varchar(100) DEFAULT NULL,\n' +
		'  `value3` varchar(100) DEFAULT NULL,\n' +
		'  `value4` varchar(100) DEFAULT NULL,\n' +
		'  `value5` varchar(100) DEFAULT NULL,\n' +
		'  `value6` varchar(100) DEFAULT NULL,\n' +
		'  `mark_status` char(1) NOT NULL DEFAULT \'N\' COMMENT \'ref_group AR:MRK_STT\',\n' +
		'  `remark` varchar(1000) DEFAULT NULL,\n' +
		'  PRIMARY KEY (`module_id`,`ref_group`,`ref_code`),\n' +
		'  KEY `app_refcode_fk1` (`module_id`,`ref_group`),\n' +
		'  KEY `app_refcode_idx1` (`module_id`,`ref_group`,`value1`),\n' +
		'  KEY `app_refcode_idx2` (`ref_code`),\n' +
		'  CONSTRAINT `app_refcode_fk1` FOREIGN KEY (`module_id`, `ref_group`) REFERENCES `app_refgroup` (`module_id`, `ref_group`) ON UPDATE NO ACTION\n' +
		') ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=\'List of Reference Code for the respective reference group.\'';

	table_query[3] = 'CREATE TABLE IF NOT EXISTS `app_menu` (\n' +
		'  `menu_id` varchar(30) NOT NULL,\n' +
		'  `insert_by` varchar(30) NOT NULL,\n' +
		'  `insert_date` datetime NOT NULL,\n' +
		'  `update_by` varchar(30) NOT NULL,\n' +
		'  `update_date` datetime NOT NULL,\n' +
		'  `module_id` varchar(2) NOT NULL,\n' +
		'  `module_type` char(1) NOT NULL DEFAULT \'P\' COMMENT \'ref_group MF:MDL_TYP\',\n' +
		'  `full_desc` varchar(50) NOT NULL,\n' +
		'  `full_desc_english` varchar(100) DEFAULT NULL,\n' +
		'  `menu_api` varchar(100) DEFAULT NULL COMMENT \'API menu url.\',\n' +
		'  `parameter` varchar(100) DEFAULT NULL,\n' +
		'  `image_url` varchar(100) DEFAULT NULL,\n' +
		'  `parent_menu_id` varchar(30) DEFAULT NULL,\n' +
		'  `order_seq` int(11) NOT NULL DEFAULT \'0\',\n' +
		'  `level_id` varchar(100) DEFAULT NULL,\n' +
		'  `mark_status` char(1) NOT NULL DEFAULT \'N\' COMMENT \'ref_group AR:MRK_STT\',\n' +
		'  `remark` varchar(1000) DEFAULT NULL,\n' +
		'  PRIMARY KEY (`menu_id`),\n' +
		'  KEY `app_menu_fk1` (`module_id`),\n' +
		'  KEY `app_menu_idx1` (`parent_menu_id`),\n' +
		'  KEY `app_menu_idx2` (`module_type`),\n' +
		'  KEY `app_menu_idx3` (`parameter`),\n' +
		'  CONSTRAINT `app_menu_fk1` FOREIGN KEY (`module_id`) REFERENCES `app_module` (`module_id`) ON UPDATE NO ACTION\n' +
		') ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=\'List of Valid Objects (program, menu, tasks and alerts)\'';

	table_query[4] = 'CREATE TABLE IF NOT EXISTS `app_project` (\n' +
		'  `project_code` varchar(15) NOT NULL,\n' +
		'  `insert_by` varchar(30) NOT NULL,\n' +
		'  `insert_date` datetime NOT NULL,\n' +
		'  `update_by` varchar(30) NOT NULL,\n' +
		'  `update_date` datetime NOT NULL,\n' +
		'  `project_name` varchar(100) NOT NULL,\n' +
		'  `project_desc` varchar(200) NOT NULL,\n' +
		'  `project_image` varchar(50) DEFAULT NULL,\n' +
		'  `project_git` varchar(100) DEFAULT NULL,\n' +
		'  `system_token` varchar(200) DEFAULT NULL,\n' +
		'  `duration` int(2) NOT NULL DEFAULT \'1\',\n' +
		'  `country_code` varchar(3) DEFAULT NULL,\n' +
		'  `mark_status` char(1) NOT NULL DEFAULT \'N\' COMMENT \'ref_group AR:MRK_STT\',\n' +
		'  `remark` varchar(1000) DEFAULT NULL,\n' +
		'  PRIMARY KEY (`project_code`)\n' +
		') ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=\'List of Project Application Development\'';

	table_query[5] = 'CREATE TABLE IF NOT EXISTS `app_user` (\n' +
		'  `user_id` varchar(50) NOT NULL,\n' +
		'  `insert_by` varchar(30) NOT NULL,\n' +
		'  `insert_date` datetime NOT NULL,\n' +
		'  `update_by` varchar(30) NOT NULL,\n' +
		'  `update_date` datetime NOT NULL,\n' +
		'  `user_type` char(1) NOT NULL DEFAULT \'U\' COMMENT \'ref_group AR:USR_TYP\',\n' +
		'  `user_level` varchar(7) NOT NULL DEFAULT \'USR_COM\' COMMENT \'ref_group AR:USR_LVL\',\n' +
		'  `project_code_app` varchar(15) NOT NULL COMMENT \'Default Project Code\',\n' +
		'  `password_hash` varchar(60) NOT NULL,\n' +
		'  `first_name` varchar(50) NOT NULL,\n' +
		'  `last_name` varchar(50) NOT NULL,\n' +
		'  `email` varchar(100) NOT NULL,\n' +
		'  `mobile_no` varchar(50) DEFAULT \'-\',\n' +
		'  `activated` int(11) NOT NULL DEFAULT \'1\',\n' +
		'  `activation_key` varchar(200) NOT NULL,\n' +
		'  `lang_key` varchar(15) NOT NULL DEFAULT \'en_US\',\n' +
		'  `reset_key` varchar(200) DEFAULT NULL,\n' +
		'  `reset_date` datetime DEFAULT NULL,\n' +
		'  `last_modified_by` varchar(50) DEFAULT NULL,\n' +
		'  `last_modified_date` datetime DEFAULT NULL,\n' +
		'  `mark_status` char(1) NOT NULL DEFAULT \'Y\' COMMENT \'ref_group AR:MRK_STT\',\n' +
		'  `remark` varchar(1000) DEFAULT NULL,\n' +
		'  PRIMARY KEY (`user_id`),\n' +
		'  UNIQUE KEY `app_user_idx1` (`user_id`),\n' +
		'  UNIQUE KEY `app_user_idx2` (`email`),\n' +
		'  KEY `app_user_fk1` (`project_code_app`),\n' +
		'  KEY `app_user_fk2` (`user_level`),\n' +
		'  CONSTRAINT `app_user_fk1` FOREIGN KEY (`project_code_app`) REFERENCES `app_project` (`project_code`) ON UPDATE NO ACTION,\n' +
		'  CONSTRAINT `app_user_fk2` FOREIGN KEY (`user_level`) REFERENCES `app_refcode` (`ref_code`) ON UPDATE NO ACTION\n' +
		') ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=\'List of Valid Users\'';

	table_query[6] = 'CREATE TABLE IF NOT EXISTS `app_style` (\n' +
		'  `style_item` varchar(50) NOT NULL,\n' +
		'  `insert_by` varchar(30) NOT NULL,\n' +
		'  `insert_date` datetime NOT NULL,\n' +
		'  `update_by` varchar(30) NOT NULL,\n' +
		'  `update_date` datetime NOT NULL,\n' +
		'  `item1` varchar(100) NOT NULL,\n' +
		'  `item2` varchar(50) DEFAULT NULL,\n' +
		'  `item3` varchar(50) DEFAULT NULL,\n' +
		'  `item4` varchar(50) DEFAULT NULL,\n' +
		'  `item5` varchar(50) DEFAULT NULL,\n' +
		'  `mark_status` char(1) NOT NULL DEFAULT \'N\' COMMENT \'ref_group AR:MRK_STT\',\n' +
		'  `remark` varchar(1000) DEFAULT NULL,\n' +
		'  PRIMARY KEY (`style_item`)\n' +
		') ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=\'List of Application Styles.\'';
		
	table_query[7] = 'CREATE TABLE IF NOT EXISTS `app_customer` (\n' +
		'  `customer_id` varchar(50) NOT NULL,\n' +
		'  `insert_by` varchar(30) NOT NULL,\n' +
		'  `insert_date` datetime NOT NULL,\n' +
		'  `update_by` varchar(30) NOT NULL,\n' +
		'  `update_date` datetime NOT NULL,\n' +
		'  `first_name` varchar(50) NOT NULL,\n' +
		'  `last_name` varchar(50) NOT NULL,\n' +
		'  `ic_no` varchar(30) NOT NULL,\n' +
		'  `date_of_birth` datetime NOT NULL,\n' +
		'  `gender` char(1) NOT NULL,\n' +
		'  `account_no` varchar(50) NOT NULL,\n' +
		'  `profile_rate` int(11) NOT NULL,\n' +
		'  `address1` varchar(50) NOT NULL,\n' +
		'  `address2` varchar(50) NOT NULL,\n' +
		'  `address3` varchar(50) DEFAULT NULL,\n' +
		'  `postal_code` varchar(50) NOT NULL,\n' +
		'  `city` varchar(50) NOT NULL,\n' +
		'  `state` varchar(50) NOT NULL,\n' +
		'  `country` varchar(50) NOT NULL,\n' +
		'  `mobile_no` varchar(50) NOT NULL,\n' +
		'  `email` varchar(100) NOT NULL,\n' +
		'  `image` varchar(100) DEFAULT NULL,\n' +
		'  `emergency_contact_no` varchar(50) NOT NULL,\n' +
		'  `mark_status` char(1) NOT NULL DEFAULT \'N\' COMMENT \'ref_group AR:MRK_STT\',\n' +
		'  `remark` varchar(1000) DEFAULT NULL,\n' +
		'  PRIMARY KEY (`customer_id`)\n' +
		') ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=\'List of Application Customers.\'';

	table_query[8] = 'CREATE TABLE IF NOT EXISTS `app_audit` (\n' +
		'  `audit_id` varchar(50) NOT NULL,\n' +
		'  `insert_by` varchar(30) NOT NULL,\n' +
		'  `insert_date` datetime NOT NULL,\n' +
		'  `update_by` varchar(30) NOT NULL,\n' +
		'  `update_date` datetime NOT NULL,\n' +
		'  `from_customer_id` varchar(50) NOT NULL,\n' +
		'  `to_customer_id` varchar(50) NOT NULL,\n' +
		'  `bankin_type` varchar(10) NOT NULL,\n' +
		'  `amount` int(11) NOT NULL,\n' +
		'  `point_of_interest` int(11) NOT NULL,\n' +
		'  `status` varchar(50) NOT NULL,\n' +
		'  `number_of_month` int(11) NOT NULL,\n' +
		'  `mark_status` char(1) NOT NULL DEFAULT \'N\' COMMENT \'ref_group AR:MRK_STT\',\n' +
		'  `remark` varchar(1000) DEFAULT NULL,\n' +
		'  PRIMARY KEY (`audit_id`)\n' +
		') ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=\'List of Application Audit.\'';

	table_query[9] = 'CREATE TABLE IF NOT EXISTS `app_log` (\n' +
		'  `log_id` varchar(50) NOT NULL,\n' +
		'  `insert_by` varchar(30) NOT NULL,\n' +
		'  `insert_date` datetime NOT NULL,\n' +
		'  `update_by` varchar(30) NOT NULL,\n' +
		'  `update_date` datetime NOT NULL,\n' +
		'  `customer_id` varchar(50) NOT NULL,\n' +
		'  `customer_status` varchar(50) NOT NULL,\n' +
		'  `credit_score` int(11) NOT NULL,\n' +
		'  `number_of_lend` int(11) NOT NULL,\n' +
		'  `number_of_rent` int(11) NOT NULL,\n' +
		'  `mark_status` char(1) NOT NULL DEFAULT \'N\' COMMENT \'ref_group AR:MRK_STT\',\n' +
		'  `remark` varchar(1000) DEFAULT NULL,\n' +
		'  PRIMARY KEY (`log_id`)\n' +
		') ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=\'List of Application Log.\'';
			
	db.getConnection((err: any, connection: any) => {
		if (err) {
			console.log(err);
		} else {
			for (let x in table_query) {
				connection.query(table_query[x], (err: any) => {
					if (err) {
						console.log(err);
					}
				});
			}

			connection.release();

			require('./dump/db.insert')(db);
		}
	});
};

export = schema;
