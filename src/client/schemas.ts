export const $AuthResponse = {
	properties: {
		access_token: {
	type: 'string',
	isRequired: true,
},
		refresh_token: {
	type: 'string',
	isRequired: true,
},
		token_type: {
	type: 'string',
	isRequired: true,
},
		user: {
	type: 'User',
	isRequired: true,
},
	},
} as const;

export const $Body_login_access_token_api_v1_auth_login_access_token_post = {
	properties: {
		grant_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: 'password',
}, {
	type: 'null',
}],
},
		username: {
	type: 'string',
	isRequired: true,
},
		password: {
	type: 'string',
	isRequired: true,
},
		scope: {
	type: 'string',
	default: '',
},
		client_id: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		client_secret: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $Body_reset_password_api_v1_auth_reset_password_post = {
	properties: {
		token: {
	type: 'string',
	isRequired: true,
},
		new_password: {
	type: 'string',
	isRequired: true,
},
	},
} as const;

export const $CategoriesList = {
	properties: {
		categories: {
	type: 'array',
	contains: {
		type: 'app__schemas__maintenance__Category',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $CategoryList = {
	properties: {
		categories: {
	type: 'array',
	contains: {
		type: 'CategoryRead',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $CategoryRead = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		category_slug: {
	type: 'string',
	isRequired: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $ConfinedSpacePermitCreate = {
	properties: {
		supervisor_name: {
	type: 'string',
	isRequired: true,
},
		entrant_name: {
	type: 'string',
	isRequired: true,
},
		rescue_plan: {
	type: 'string',
	pattern: '^(Self Rescue|Non-Entry Rescue|Team Rescue|Entry Rescue)$',
},
		maintenance_ptw_id: {
	type: 'number',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $ConfinedSpacePermitRead = {
	properties: {
		supervisor_name: {
	type: 'string',
	isRequired: true,
},
		entrant_name: {
	type: 'string',
	isRequired: true,
},
		rescue_plan: {
	type: 'string',
	pattern: '^(Self Rescue|Non-Entry Rescue|Team Rescue|Entry Rescue)$',
},
		maintenance_ptw_id: {
	type: 'number',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $ConfinedSpacePermitUpdate = {
	properties: {
		supervisor_name: {
	type: 'string',
	isRequired: true,
},
		entrant_name: {
	type: 'string',
	isRequired: true,
},
		rescue_plan: {
	type: 'string',
	pattern: '^(Self Rescue|Non-Entry Rescue|Team Rescue|Entry Rescue)$',
},
		maintenance_ptw_id: {
	type: 'number',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $ConfinedSpacePermitsList = {
	properties: {
		permits: {
	type: 'array',
	contains: {
		type: 'ConfinedSpacePermitRead',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $Department = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $DepartmentCreate = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $DepartmentList = {
	properties: {
		departments: {
	type: 'array',
	contains: {
		type: 'Department',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $DepartmentUpdate = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $Downtime = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		department: {
	type: 'string',
	isRequired: true,
	pattern: '^(Production|Mechanical|Process|Electrical|Clothing|Instrumentation|Safety|Outside Service|Planned Maintenance)$',
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
	isNullable: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		production_log_id: {
	type: 'number',
	isRequired: true,
},
		equipment_id: {
	type: 'number',
	isRequired: true,
},
		equipment: {
	type: 'EquipmentResponseModel',
	isRequired: true,
},
		production_log: {
	type: 'ProductionLog',
	isRequired: true,
},
		duration: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $DowntimeAnalysis = {
	properties: {
		labels: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
		data: {
	type: 'array',
	contains: {
		type: 'EquipmentDowntimeData',
	},
	isRequired: true,
},
		label: {
	type: 'string',
	isRequired: true,
},
	},
} as const;

export const $DowntimeCreate = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		department: {
	type: 'DowntimeDepartment',
	isRequired: true,
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
	isNullable: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		production_log_id: {
	type: 'number',
	isRequired: true,
},
		equipment_id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $DowntimeDepartment = {
	type: 'Enum',
	enum: ['Production','Mechanical','Process','Electrical','Clothing','Instrumentation','Safety','Outside Service','Planned Maintenance',],
} as const;

export const $DowntimePublic = {
	properties: {
		items: {
	type: 'array',
	contains: {
		type: 'Downtime',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $DowntimeRead = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		department: {
	type: 'string',
	isRequired: true,
	pattern: '^(Production|Mechanical|Process|Electrical|Clothing|Instrumentation|Safety|Outside Service|Planned Maintenance)$',
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
	isNullable: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		production_log_id: {
	type: 'number',
	isRequired: true,
},
		equipment_id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $DowntimeResponseModel = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		department: {
	type: 'string',
	isRequired: true,
	pattern: '^(Production|Mechanical|Process|Electrical|Clothing|Instrumentation|Safety|Outside Service|Planned Maintenance)$',
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
	isNullable: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		production_log_id: {
	type: 'number',
	isRequired: true,
},
		equipment_id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $DowntimeUpdate = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		department: {
	type: 'DowntimeDepartment',
	isRequired: true,
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
	isNullable: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		production_log_id: {
	type: 'number',
	isRequired: true,
},
		equipment_id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $ElectricalIsolationPermitCreate = {
	properties: {
		supervisor_name: {
	type: 'string',
	isRequired: true,
},
		electrician_name: {
	type: 'string',
	isRequired: true,
},
		isolation_plan: {
	type: 'string',
	pattern: '^(Lockout|Tagout|Lockout/Tagout(LOTO))$',
},
		maintenance_ptw_id: {
	type: 'number',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
	},
} as const;

export const $ElectricalIsolationPermitRead = {
	properties: {
		supervisor_name: {
	type: 'string',
	isRequired: true,
},
		electrician_name: {
	type: 'string',
	isRequired: true,
},
		isolation_plan: {
	type: 'string',
	pattern: '^(Lockout|Tagout|Lockout/Tagout(LOTO))$',
},
		maintenance_ptw_id: {
	type: 'number',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $ElectricalIsolationPermitUpdate = {
	properties: {
		supervisor_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		electrician_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		isolation_plan: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		maintenance_ptw_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $ElectricalIsolationPermitsList = {
	properties: {
		permits: {
	type: 'array',
	contains: {
		type: 'ElectricalIsolationPermitRead',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $EquipmentAnalysisResponse = {
	properties: {
		status_summary: {
	type: 'StatusSummary',
	isRequired: true,
},
		top_ten_rpn: {
	type: 'TopTenRPNResponse',
	isRequired: true,
},
		top_ten_sdo: {
	type: 'TopTenSDOResponse',
	isRequired: true,
},
		downtimes_analysis: {
	type: 'DowntimeAnalysis',
	isRequired: true,
},
		maintenance_requests_analysis: {
	type: 'MaintenanceRequestAnalysis',
	isRequired: true,
},
	},
} as const;

export const $EquipmentCategory = {
	type: 'Enum',
	enum: ['Electrical','Mechanical','Civil','Safety','Other',],
} as const;

export const $EquipmentCreateModel = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'string',
	isRequired: true,
},
		asset_number: {
	type: 'string',
	isRequired: true,
},
		manufacturer: {
	type: 'string',
	isRequired: true,
},
		model: {
	type: 'string',
	isRequired: true,
},
		category: {
	type: 'EquipmentCategory',
	isRequired: true,
},
		location: {
	type: 'EquipmentLocation',
	isRequired: true,
},
		status: {
	type: 'EquipmentStatus',
	isRequired: true,
},
		failure_modes: {
	type: 'string',
	isRequired: true,
},
		failure_effects: {
	type: 'string',
	isRequired: true,
},
		causes: {
	type: 'string',
	isRequired: true,
},
		controls: {
	type: 'string',
	isRequired: true,
},
		severity: {
	type: 'number',
	isRequired: true,
},
		detectability: {
	type: 'number',
	isRequired: true,
},
		occurrence: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $EquipmentDowntimeData = {
	properties: {
		asset_number: {
	type: 'string',
	isRequired: true,
},
		location: {
	type: 'string',
	isRequired: true,
},
		machine_downtime: {
	type: 'number',
	isRequired: true,
},
		stock_prep_downtime: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $EquipmentInDB = {
	properties: {
		id: {
	type: 'number',
	isRequired: true,
},
		name: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'string',
	isRequired: true,
},
		asset_number: {
	type: 'string',
	isRequired: true,
},
		manufacturer: {
	type: 'string',
	isRequired: true,
},
		model: {
	type: 'string',
	isRequired: true,
},
		category: {
	type: 'EquipmentCategory',
	isRequired: true,
},
		location: {
	type: 'EquipmentLocation',
	isRequired: true,
},
		status: {
	type: 'EquipmentStatus',
	isRequired: true,
},
		failure_modes: {
	type: 'string',
	isRequired: true,
},
		failure_effects: {
	type: 'string',
	isRequired: true,
},
		causes: {
	type: 'string',
	isRequired: true,
},
		controls: {
	type: 'string',
	isRequired: true,
},
		severity: {
	type: 'number',
	isRequired: true,
},
		detectability: {
	type: 'number',
	isRequired: true,
},
		occurrence: {
	type: 'number',
	isRequired: true,
},
		rpn: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		mtbf: {
	type: 'any-of',
	contains: [{
	type: 'MTBFResponseModel',
}, {
	type: 'null',
}],
},
		maintenance_requests: {
	type: 'array',
	contains: {
		type: 'MaintenanceRequestRead',
	},
	default: [],
},
		machine_downtimes: {
	type: 'array',
	contains: {
		type: 'DowntimeResponseModel',
	},
	default: [],
},
		stock_prep_downtimes: {
	type: 'array',
	contains: {
		type: 'DowntimeResponseModel',
	},
	default: [],
},
	},
} as const;

export const $EquipmentLocation = {
	type: 'Enum',
	enum: ['Paper machine','Stock preparation',],
} as const;

export const $EquipmentPublic = {
	properties: {
		equipments: {
	type: 'array',
	contains: {
		type: 'EquipmentInDB',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $EquipmentRPNData = {
	properties: {
		asset_number: {
	type: 'string',
	isRequired: true,
},
		status: {
	type: 'string',
	isRequired: true,
},
		rpn: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $EquipmentRead = {
	properties: {
		id: {
	type: 'number',
	isRequired: true,
},
		name: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'string',
	isRequired: true,
},
		asset_number: {
	type: 'string',
	isRequired: true,
},
		manufacturer: {
	type: 'string',
	isRequired: true,
},
		model: {
	type: 'string',
	isRequired: true,
},
		category: {
	type: 'EquipmentCategory',
	isRequired: true,
},
		location: {
	type: 'EquipmentLocation',
	isRequired: true,
},
		status: {
	type: 'EquipmentStatus',
	isRequired: true,
},
		failure_modes: {
	type: 'string',
	isRequired: true,
},
		failure_effects: {
	type: 'string',
	isRequired: true,
},
		causes: {
	type: 'string',
	isRequired: true,
},
		controls: {
	type: 'string',
	isRequired: true,
},
		severity: {
	type: 'number',
	isRequired: true,
},
		detectability: {
	type: 'number',
	isRequired: true,
},
		occurrence: {
	type: 'number',
	isRequired: true,
},
		rpn: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $EquipmentResponseModel = {
	properties: {
		id: {
	type: 'number',
	isRequired: true,
},
		name: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'string',
	isRequired: true,
},
		asset_number: {
	type: 'string',
	isRequired: true,
},
		manufacturer: {
	type: 'string',
	isRequired: true,
},
		model: {
	type: 'string',
	isRequired: true,
},
		category: {
	type: 'EquipmentCategory',
	isRequired: true,
},
		location: {
	type: 'EquipmentLocation',
	isRequired: true,
},
		status: {
	type: 'EquipmentStatus',
	isRequired: true,
},
		failure_modes: {
	type: 'string',
	isRequired: true,
},
		failure_effects: {
	type: 'string',
	isRequired: true,
},
		causes: {
	type: 'string',
	isRequired: true,
},
		controls: {
	type: 'string',
	isRequired: true,
},
		severity: {
	type: 'number',
	isRequired: true,
},
		detectability: {
	type: 'number',
	isRequired: true,
},
		occurrence: {
	type: 'number',
	isRequired: true,
},
		rpn: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $EquipmentSDOData = {
	properties: {
		asset_number: {
	type: 'string',
	isRequired: true,
},
		severity: {
	type: 'number',
	isRequired: true,
},
		detectability: {
	type: 'number',
	isRequired: true,
},
		occurrence: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $EquipmentStatus = {
	type: 'Enum',
	enum: ['Operational','Non-operational','Under repair','Decommissioned',],
} as const;

export const $EquipmentUpdateModel = {
	properties: {
		name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		asset_number: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		manufacturer: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		model: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		category: {
	type: 'any-of',
	contains: [{
	type: 'EquipmentCategory',
}, {
	type: 'null',
}],
},
		location: {
	type: 'any-of',
	contains: [{
	type: 'EquipmentLocation',
}, {
	type: 'null',
}],
},
		status: {
	type: 'any-of',
	contains: [{
	type: 'EquipmentStatus',
}, {
	type: 'null',
}],
},
		failure_modes: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		failure_effects: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		causes: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		controls: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		severity: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		detectability: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		occurrence: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $HTTPValidationError = {
	properties: {
		detail: {
	type: 'array',
	contains: {
		type: 'ValidationError',
	},
},
	},
} as const;

export const $HotWorkPermitCreate = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		supervisor_name: {
	type: 'string',
	isRequired: true,
},
		hot_work_type: {
	type: 'string',
	pattern: '^(Welding|Cutting|Metal Heating|Grinding|Brazing|Soldering|Other)$',
},
		fire_watch_required: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		fire_watch_name: {
	type: 'string',
	maxLength: 50,
},
		type_of_fire_extinguisher: {
	type: 'string',
	pattern: '^(CO2|Dry Chemical Powder|Foam|Water|Fire Hose/Hydrants|Other)$',
},
		maintenance_ptw_id: {
	type: 'number',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
	},
} as const;

export const $HotWorkPermitRead = {
	properties: {
		id: {
	type: 'number',
	isRequired: true,
},
		supervisor_name: {
	type: 'string',
	isRequired: true,
},
		hot_work_type: {
	type: 'string',
	pattern: '^(Welding|Cutting|Metal Heating|Grinding|Brazing|Soldering|Other)$',
},
		fire_watch_required: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		fire_watch_name: {
	type: 'string',
	maxLength: 50,
},
		type_of_fire_extinguisher: {
	type: 'string',
	pattern: '^(CO2|Dry Chemical Powder|Foam|Water|Fire Hose/Hydrants|Other)$',
},
		maintenance_ptw_id: {
	type: 'number',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $HotWorkPermitUpdate = {
	properties: {
		id: {
	type: 'number',
	isRequired: true,
},
		supervisor_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		hot_work_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		fire_watch_required: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		fire_watch_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		type_of_fire_extinguisher: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		maintenance_ptw_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $HotWorkPermitsList = {
	properties: {
		permits: {
	type: 'array',
	contains: {
		type: 'HotWorkPermitRead',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $Inventory = {
	properties: {
		item_id: {
	type: 'number',
	isRequired: true,
},
		quantity: {
	type: 'number',
	isRequired: true,
},
		reorder_level: {
	type: 'number',
	isRequired: true,
},
		reorder_quantity: {
	type: 'number',
	isRequired: true,
},
		reserved_quantity: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		last_order_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		item: {
	type: 'ItemRead',
	isRequired: true,
},
	},
} as const;

export const $InventoryCreate = {
	properties: {
		item_id: {
	type: 'number',
	isRequired: true,
},
		quantity: {
	type: 'number',
	isRequired: true,
	exclusiveMinimum: 0,
},
		reorder_level: {
	type: 'number',
	isRequired: true,
},
		reorder_quantity: {
	type: 'number',
	isRequired: true,
},
		reserved_quantity: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		last_order_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $InventoryList = {
	properties: {
		inventory: {
	type: 'array',
	contains: {
		type: 'InventoryRead',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $InventoryRead = {
	properties: {
		item_id: {
	type: 'number',
	isRequired: true,
},
		quantity: {
	type: 'number',
	isRequired: true,
},
		reorder_level: {
	type: 'number',
	isRequired: true,
},
		reorder_quantity: {
	type: 'number',
	isRequired: true,
},
		reserved_quantity: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		last_order_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $InventoryUpdate = {
	properties: {
		item_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		quantity: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		reorder_level: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		reorder_quantity: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		reserved_quantity: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		last_order_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $Item = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		item_code: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'string',
	isRequired: true,
},
		unit_price: {
	type: 'number',
	isRequired: true,
},
		category_id: {
	type: 'number',
	isRequired: true,
},
		is_active: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		category: {
	type: 'CategoryRead',
	isRequired: true,
},
		inventory: {
	type: 'any-of',
	contains: [{
	type: 'InventoryRead',
}, {
	type: 'null',
}],
},
		orders_items: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'OrderItemRead',
	},
}, {
	type: 'null',
}],
},
	},
} as const;

export const $ItemCreate = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		item_code: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'string',
	isRequired: true,
},
		unit_price: {
	type: 'number',
	isRequired: true,
	exclusiveMinimum: 0,
},
		category_id: {
	type: 'number',
	isRequired: true,
},
		is_active: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $ItemList = {
	properties: {
		items: {
	type: 'array',
	contains: {
		type: 'ItemRead',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $ItemRead = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		item_code: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'string',
	isRequired: true,
},
		unit_price: {
	type: 'number',
	isRequired: true,
},
		category_id: {
	type: 'number',
	isRequired: true,
},
		is_active: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $MTBFCreateModel = {
	properties: {
		last_failure: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		latest_failure: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $MTBFInDB = {
	properties: {
		id: {
	type: 'number',
	isRequired: true,
},
		last_failure: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
	isRequired: true,
},
		latest_failure: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
	isRequired: true,
},
		mtbf: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		equipment: {
	type: 'EquipmentResponseModel',
	isRequired: true,
},
	},
} as const;

export const $MTBFResponseModel = {
	properties: {
		id: {
	type: 'number',
	isRequired: true,
},
		last_failure: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
	isRequired: true,
},
		latest_failure: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
	isRequired: true,
},
		mtbf: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $MTBFUpdateModel = {
	properties: {
		last_failure: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		latest_failure: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		equipment_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $MachineDCSRelatedCheckCreate = {
	properties: {
		process_visor_id: {
	type: 'number',
	isRequired: true,
},
		dcs_related_check_number: {
	type: 'string',
	isRequired: true,
},
		ww1_makeup_open: {
	type: 'boolean',
	default: false,
},
		fresh_cold_water_tank_level: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		machine_chest2_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		stock_flow_valve_opening: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		stock_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		fan_pump_motor_speed: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		fan_pump_motor_current_load: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		slice_opening: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		jet_to_wire_ratio: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		headbox_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		trim_nozzle_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		uhle_box_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		spr_ds_air_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		spr_nds_air_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		spr_ds_nip_loading: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		spr_nds_nip_loading: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		second_press_ds_air_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		second_press_nds_air_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		second_press_ds_nip_loading: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		second_press_nds_nip_loading: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		main_steam_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		yankee_steam_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		yankee_dp: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		blow_through_steam_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		blow_through_steam_control_on_remote: {
	type: 'boolean',
	default: false,
},
		steambox_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		steambox_temperature: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		sprayboom_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		mixing_pot_temperature: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		de_hood_temperature: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		we_hood_temperature: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		hoods_exhaust_humidity: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		hoods_exhaust_air_temperature: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		average_qcs_moisture: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
	},
} as const;

export const $MachineDCSRelatedCheckPublic = {
	properties: {
		machine_dcs_related_checks: {
	type: 'array',
	contains: {
		type: 'MachineDCSRelatedCheckResponse',
	},
	default: [],
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $MachineDCSRelatedCheckResponse = {
	properties: {
		process_visor_id: {
	type: 'number',
	isRequired: true,
},
		dcs_related_check_number: {
	type: 'string',
	isRequired: true,
},
		ww1_makeup_open: {
	type: 'boolean',
	default: false,
},
		fresh_cold_water_tank_level: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		machine_chest2_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		stock_flow_valve_opening: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		stock_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		fan_pump_motor_speed: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		fan_pump_motor_current_load: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		slice_opening: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		jet_to_wire_ratio: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		headbox_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		trim_nozzle_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		uhle_box_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		spr_ds_air_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		spr_nds_air_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		spr_ds_nip_loading: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		spr_nds_nip_loading: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		second_press_ds_air_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		second_press_nds_air_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		second_press_ds_nip_loading: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		second_press_nds_nip_loading: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		main_steam_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		yankee_steam_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		yankee_dp: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		blow_through_steam_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		blow_through_steam_control_on_remote: {
	type: 'boolean',
	default: false,
},
		steambox_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		steambox_temperature: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		sprayboom_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		mixing_pot_temperature: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		de_hood_temperature: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		we_hood_temperature: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		hoods_exhaust_humidity: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		hoods_exhaust_air_temperature: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		average_qcs_moisture: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		hood_temperature_diff: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $MachineDCSRelatedCheckUpdate = {
	properties: {
		process_visor_id: {
	type: 'number',
	isRequired: true,
},
		dcs_related_check_number: {
	type: 'string',
	isRequired: true,
},
		ww1_makeup_open: {
	type: 'boolean',
	default: false,
},
		fresh_cold_water_tank_level: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		machine_chest2_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		stock_flow_valve_opening: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		stock_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		fan_pump_motor_speed: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		fan_pump_motor_current_load: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		slice_opening: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		jet_to_wire_ratio: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		headbox_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		trim_nozzle_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		uhle_box_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		spr_ds_air_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		spr_nds_air_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		spr_ds_nip_loading: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		spr_nds_nip_loading: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		second_press_ds_air_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		second_press_nds_air_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		second_press_ds_nip_loading: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		second_press_nds_nip_loading: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		main_steam_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		yankee_steam_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		yankee_dp: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		blow_through_steam_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		blow_through_steam_control_on_remote: {
	type: 'boolean',
	default: false,
},
		steambox_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		steambox_temperature: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		sprayboom_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		mixing_pot_temperature: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		de_hood_temperature: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		we_hood_temperature: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		hoods_exhaust_humidity: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		hoods_exhaust_air_temperature: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		average_qcs_moisture: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		id: {
	type: 'number',
	isRequired: true,
	exclusiveMinimum: 0,
},
	},
} as const;

export const $MachineFieldCheckCreate = {
	properties: {
		process_visor_id: {
	type: 'number',
	isRequired: true,
},
		field_check_number: {
	type: 'string',
	isRequired: true,
},
		wire_supplier: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		wire_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		wire_tension: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		wire_hp_shower_nozzles_blocked: {
	type: 'boolean',
	default: false,
},
		wire_hp_shower_oscillates: {
	type: 'boolean',
	default: false,
},
		wire_hp_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		felt_supplier: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		felt_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		felt_tension: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		felt_hp_shower_nozzles_blocked: {
	type: 'boolean',
	default: false,
},
		felt_hp_shower_oscillates: {
	type: 'boolean',
	default: false,
},
		felt_hp_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		creping_blade_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		creping_blade_stickout: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		cleaning_blade_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		knockoff_blade_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		purgo2_water_quality_good: {
	type: 'boolean',
	default: false,
},
		purgo2_saturation_good: {
	type: 'boolean',
	default: false,
},
		purgo2_level_good: {
	type: 'boolean',
	default: false,
},
		auxiguard_dumping_rejects: {
	type: 'boolean',
	default: false,
},
		machine_floor_cleaned: {
	type: 'boolean',
	default: false,
},
		mezzanine_floor_cleaned: {
	type: 'boolean',
	default: false,
},
		machine_frames_and_walkways_cleaned: {
	type: 'boolean',
	default: false,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
	},
} as const;

export const $MachineFieldCheckPublic = {
	properties: {
		machine_field_checks: {
	type: 'array',
	contains: {
		type: 'MachineFieldCheckResponse',
	},
	default: [],
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $MachineFieldCheckResponse = {
	properties: {
		process_visor_id: {
	type: 'number',
	isRequired: true,
},
		field_check_number: {
	type: 'string',
	isRequired: true,
},
		wire_supplier: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		wire_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		wire_tension: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		wire_hp_shower_nozzles_blocked: {
	type: 'boolean',
	default: false,
},
		wire_hp_shower_oscillates: {
	type: 'boolean',
	default: false,
},
		wire_hp_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		felt_supplier: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		felt_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		felt_tension: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		felt_hp_shower_nozzles_blocked: {
	type: 'boolean',
	default: false,
},
		felt_hp_shower_oscillates: {
	type: 'boolean',
	default: false,
},
		felt_hp_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		creping_blade_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		creping_blade_stickout: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		cleaning_blade_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		knockoff_blade_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		purgo2_water_quality_good: {
	type: 'boolean',
	default: false,
},
		purgo2_saturation_good: {
	type: 'boolean',
	default: false,
},
		purgo2_level_good: {
	type: 'boolean',
	default: false,
},
		auxiguard_dumping_rejects: {
	type: 'boolean',
	default: false,
},
		machine_floor_cleaned: {
	type: 'boolean',
	default: false,
},
		mezzanine_floor_cleaned: {
	type: 'boolean',
	default: false,
},
		machine_frames_and_walkways_cleaned: {
	type: 'boolean',
	default: false,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		water_system_checker: {
	type: 'number',
	isRequired: true,
},
		housekeeping_checker: {
	type: 'number',
	isRequired: true,
},
		hps_checker: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $MachineFieldCheckUpdate = {
	properties: {
		process_visor_id: {
	type: 'number',
	isRequired: true,
},
		field_check_number: {
	type: 'string',
	isRequired: true,
},
		wire_supplier: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		wire_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		wire_tension: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		wire_hp_shower_nozzles_blocked: {
	type: 'boolean',
	default: false,
},
		wire_hp_shower_oscillates: {
	type: 'boolean',
	default: false,
},
		wire_hp_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		felt_supplier: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		felt_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		felt_tension: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		felt_hp_shower_nozzles_blocked: {
	type: 'boolean',
	default: false,
},
		felt_hp_shower_oscillates: {
	type: 'boolean',
	default: false,
},
		felt_hp_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		creping_blade_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		creping_blade_stickout: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		cleaning_blade_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		knockoff_blade_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		purgo2_water_quality_good: {
	type: 'boolean',
	default: false,
},
		purgo2_saturation_good: {
	type: 'boolean',
	default: false,
},
		purgo2_level_good: {
	type: 'boolean',
	default: false,
},
		auxiguard_dumping_rejects: {
	type: 'boolean',
	default: false,
},
		machine_floor_cleaned: {
	type: 'boolean',
	default: false,
},
		mezzanine_floor_cleaned: {
	type: 'boolean',
	default: false,
},
		machine_frames_and_walkways_cleaned: {
	type: 'boolean',
	default: false,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		id: {
	type: 'number',
	isRequired: true,
	exclusiveMinimum: 0,
},
	},
} as const;

export const $MaintenanceEvent = {
	properties: {
		event_number: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'string',
	isRequired: true,
},
		completed: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		planned_start: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		planned_end: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		actual_start: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		actual_end: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		started: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		ended: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		is_approved: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		maintenance_tickets: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'MaintenanceEventTicket',
	},
}, {
	type: 'null',
}],
},
		planned_duration: {
	type: 'string',
	isRequired: true,
	format: 'duration',
},
		actual_duration: {
	type: 'string',
	isRequired: true,
	format: 'duration',
},
		planned_work_count: {
	type: 'number',
	isRequired: true,
},
		completed_work_count: {
	type: 'number',
	isRequired: true,
},
		planned_work_duration: {
	type: 'string',
	isRequired: true,
	format: 'duration',
},
		completed_work_duration: {
	type: 'string',
	isRequired: true,
	format: 'duration',
},
		work_completion_rate: {
	type: 'number',
	isRequired: true,
},
		work_efficiency: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $MaintenanceEventAddPlannedTickets = {
	properties: {
		id: {
	type: 'number',
	isRequired: true,
},
		maintenance_tickets: {
	type: 'array',
	contains: {
		type: 'MaintenanceTicket',
	},
	isRequired: true,
},
	},
} as const;

export const $MaintenanceEventAddResponse = {
	properties: {
		description: {
	type: 'string',
	isRequired: true,
},
		planned_start: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		planned_end: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		maintenance_tickets: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'MaintenanceEventTicketCreate',
	},
}, {
	type: 'null',
}],
},
		event_number: {
	type: 'string',
	isRequired: true,
},
		planned_date: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		successfully_added: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'MaintenanceTicket',
	},
}, {
	type: 'null',
}],
},
		failed_to_add: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'MaintenanceEventTicketCreate',
	},
}, {
	type: 'null',
}],
},
		failed_to_add_reason: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
	type: 'string',
},
}, {
	type: 'null',
}],
},
		planned_duration: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'duration',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $MaintenanceEventCreate = {
	properties: {
		description: {
	type: 'string',
	isRequired: true,
},
		planned_start: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		planned_end: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		maintenance_tickets: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'MaintenanceEventTicketCreate',
	},
}, {
	type: 'null',
}],
},
	},
} as const;

export const $MaintenanceEventList = {
	properties: {
		maintenance_events: {
	type: 'array',
	contains: {
		type: 'MaintenanceEvent',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $MaintenanceEventRead = {
	properties: {
		event_number: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'string',
	isRequired: true,
},
		completed: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		planned_start: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		planned_end: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		actual_start: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		actual_end: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		started: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		ended: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		is_approved: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $MaintenanceEventTicket = {
	properties: {
		maintenance_event_id: {
	type: 'number',
	isRequired: true,
},
		maintenance_ticket_id: {
	type: 'number',
	isRequired: true,
},
		is_completed: {
	type: 'boolean',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		maintenance_event: {
	type: 'MaintenanceEventRead',
	isRequired: true,
},
		maintenance_ticket: {
	type: 'MaintenanceTicketRead',
	isRequired: true,
},
	},
} as const;

export const $MaintenanceEventTicketCreate = {
	properties: {
		maintenance_event_id: {
	type: 'number',
	isRequired: true,
},
		maintenance_ticket_id: {
	type: 'number',
	isRequired: true,
},
		is_completed: {
	type: 'boolean',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $MaintenanceEventTicketRead = {
	properties: {
		maintenance_event_id: {
	type: 'number',
	isRequired: true,
},
		maintenance_ticket_id: {
	type: 'number',
	isRequired: true,
},
		is_completed: {
	type: 'boolean',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $MaintenanceEventUpdate = {
	properties: {
		event_number: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		completed: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		planned_start: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		planned_end: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		actual_start: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		actual_end: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		started: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		ended: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		is_approved: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $MaintenancePTW = {
	properties: {
		ptw_number: {
	type: 'string',
	isRequired: true,
},
		requestor_name: {
	type: 'string',
	isRequired: true,
},
		department_id: {
	type: 'number',
	isRequired: true,
},
		maintenance_tra_id: {
	type: 'number',
	isRequired: true,
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		work_description: {
	type: 'string',
	isRequired: true,
},
		is_completed: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'string',
	isRequired: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		department: {
	type: 'Department',
	isRequired: true,
},
		maintenance_tra: {
	type: 'MaintenanceTRARead',
	isRequired: true,
},
	},
} as const;

export const $MaintenancePTWCreate = {
	properties: {
		ptw_number: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		requestor_name: {
	type: 'string',
	isRequired: true,
},
		department_id: {
	type: 'number',
	isRequired: true,
},
		maintenance_tra_id: {
	type: 'number',
	isRequired: true,
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		work_description: {
	type: 'string',
	isRequired: true,
},
		is_completed: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'string',
	isRequired: true,
},
	},
} as const;

export const $MaintenancePTWList = {
	properties: {
		ptws: {
	type: 'array',
	contains: {
		type: 'MaintenancePTW',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $MaintenancePTWRead = {
	properties: {
		ptw_number: {
	type: 'string',
	isRequired: true,
},
		requestor_name: {
	type: 'string',
	isRequired: true,
},
		department_id: {
	type: 'number',
	isRequired: true,
},
		maintenance_tra_id: {
	type: 'number',
	isRequired: true,
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		work_description: {
	type: 'string',
	isRequired: true,
},
		is_completed: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'string',
	isRequired: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $MaintenancePTWUpdate = {
	properties: {
		ptw_number: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		requestor_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		department_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		maintenance_tra_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		start_time: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		end_time: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		work_description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		is_completed: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $MaintenanceRequest = {
	properties: {
		rq_number: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'string',
	isRequired: true,
},
		equipment_id: {
	type: 'number',
	isRequired: true,
},
		category_id: {
	type: 'number',
	isRequired: true,
},
		department_id: {
	type: 'number',
	isRequired: true,
},
		status_id: {
	type: 'number',
	isRequired: true,
},
		type_id: {
	type: 'number',
	isRequired: true,
},
		is_validated: {
	type: 'boolean',
	isRequired: true,
},
		is_a_call_out: {
	type: 'boolean',
	isRequired: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		category: {
	type: 'app__schemas__maintenance__Category',
	isRequired: true,
},
		department: {
	type: 'Department',
	isRequired: true,
},
		status: {
	type: 'Status',
	isRequired: true,
},
		type: {
	type: 'Type',
	isRequired: true,
},
		equipment: {
	type: 'EquipmentRead',
	isRequired: true,
},
	},
} as const;

export const $MaintenanceRequestAnalysis = {
	properties: {
		labels: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
		data: {
	type: 'array',
	contains: {
		type: 'MaintenanceRequestData',
	},
	isRequired: true,
},
		label: {
	type: 'string',
	isRequired: true,
},
	},
} as const;

export const $MaintenanceRequestCreate = {
	properties: {
		rq_number: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		description: {
	type: 'string',
	isRequired: true,
},
		equipment_id: {
	type: 'number',
	isRequired: true,
},
		category_id: {
	type: 'number',
	isRequired: true,
},
		department_id: {
	type: 'number',
	isRequired: true,
},
		status_id: {
	type: 'number',
	isRequired: true,
},
		type_id: {
	type: 'number',
	isRequired: true,
},
		is_validated: {
	type: 'boolean',
	isRequired: true,
},
		is_a_call_out: {
	type: 'boolean',
	isRequired: true,
},
	},
} as const;

export const $MaintenanceRequestData = {
	properties: {
		asset_number: {
	type: 'string',
	isRequired: true,
},
		maintenance_request: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $MaintenanceRequestList = {
	properties: {
		requests: {
	type: 'array',
	contains: {
		type: 'MaintenanceRequest',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $MaintenanceRequestRead = {
	properties: {
		rq_number: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'string',
	isRequired: true,
},
		equipment_id: {
	type: 'number',
	isRequired: true,
},
		category_id: {
	type: 'number',
	isRequired: true,
},
		department_id: {
	type: 'number',
	isRequired: true,
},
		status_id: {
	type: 'number',
	isRequired: true,
},
		type_id: {
	type: 'number',
	isRequired: true,
},
		is_validated: {
	type: 'boolean',
	isRequired: true,
},
		is_a_call_out: {
	type: 'boolean',
	isRequired: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $MaintenanceRequestUpdate = {
	properties: {
		rq_number: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'string',
	isRequired: true,
},
		equipment_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		category_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		department_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		status_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		type_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		is_validated: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		is_a_call_out: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $MaintenanceTRA = {
	properties: {
		ra_number: {
	type: 'string',
	isRequired: true,
},
		steps: {
	type: 'string',
	isRequired: true,
},
		maintenance_ticket_id: {
	type: 'number',
	isRequired: true,
},
		hazards: {
	type: 'string',
	isRequired: true,
},
		controls: {
	type: 'string',
	isRequired: true,
},
		supervisor: {
	type: 'string',
	isRequired: true,
},
		date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		maintenance_ticket: {
	type: 'MaintenanceTicketRead',
	isRequired: true,
},
	},
} as const;

export const $MaintenanceTRACreate = {
	properties: {
		ra_number: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		steps: {
	type: 'string',
	isRequired: true,
},
		maintenance_ticket_id: {
	type: 'number',
	isRequired: true,
},
		hazards: {
	type: 'string',
	isRequired: true,
},
		controls: {
	type: 'string',
	isRequired: true,
},
		supervisor: {
	type: 'string',
	isRequired: true,
},
		date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $MaintenanceTRAList = {
	properties: {
		m_steps: {
	type: 'array',
	contains: {
		type: 'MaintenanceTRA',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $MaintenanceTRARead = {
	properties: {
		ra_number: {
	type: 'string',
	isRequired: true,
},
		steps: {
	type: 'string',
	isRequired: true,
},
		maintenance_ticket_id: {
	type: 'number',
	isRequired: true,
},
		hazards: {
	type: 'string',
	isRequired: true,
},
		controls: {
	type: 'string',
	isRequired: true,
},
		supervisor: {
	type: 'string',
	isRequired: true,
},
		date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $MaintenanceTRAUpdate = {
	properties: {
		ra_number: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		steps: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		maintenance_ticket_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		hazards: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		controls: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		supervisor: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $MaintenanceTicket = {
	properties: {
		ticket_number: {
	type: 'string',
	isRequired: true,
},
		work_performed: {
	type: 'string',
	isRequired: true,
},
		maintenance_rq_id: {
	type: 'number',
	isRequired: true,
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		is_completed: {
	type: 'boolean',
	isRequired: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		duration: {
	type: 'string',
	isRequired: true,
	format: 'duration',
},
		maintenance_request: {
	type: 'MaintenanceRequestRead',
	isRequired: true,
},
		m_steps: {
	type: 'array',
	contains: {
		type: 'MaintenanceTRARead',
	},
	default: [],
},
		maintenance_events: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'MaintenanceEventTicketRead',
	},
}, {
	type: 'null',
}],
},
	},
} as const;

export const $MaintenanceTicketCreate = {
	properties: {
		ticket_number: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		work_performed: {
	type: 'string',
	isRequired: true,
},
		maintenance_rq_id: {
	type: 'number',
	isRequired: true,
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		is_completed: {
	type: 'boolean',
	isRequired: true,
},
	},
} as const;

export const $MaintenanceTicketList = {
	properties: {
		tickets: {
	type: 'array',
	contains: {
		type: 'MaintenanceTicket',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $MaintenanceTicketRead = {
	properties: {
		ticket_number: {
	type: 'string',
	isRequired: true,
},
		work_performed: {
	type: 'string',
	isRequired: true,
},
		maintenance_rq_id: {
	type: 'number',
	isRequired: true,
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		is_completed: {
	type: 'boolean',
	isRequired: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $MaintenanceTicketUpdate = {
	properties: {
		ticket_number: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		work_performed: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		maintenance_rq_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		start_time: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		end_time: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		is_completed: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $OSHA300LogCreate = {
	properties: {
		log_number: {
	type: 'string',
	isRequired: true,
},
		incident_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		incident_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(Injury|Illness)$',
}, {
	type: 'null',
}],
},
		employee_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		job_title: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		department: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		location: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		is_treated: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		treatment_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		treatment_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(First Aid|Medical Treatment)$',
}, {
	type: 'null',
}],
},
		return_to_work_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		lost_time: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		lost_time_start: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		lost_time_end: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		lost_job_transfer: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		lost_days_restriction_start: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		lost_days_restriction_end: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $OSHA300LogList = {
	properties: {
		osha_300_logs: {
	type: 'array',
	contains: {
		type: 'OSHA300LogRead',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $OSHA300LogRead = {
	properties: {
		log_number: {
	type: 'string',
	isRequired: true,
},
		incident_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		incident_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(Injury|Illness)$',
}, {
	type: 'null',
}],
},
		employee_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		job_title: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		department: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		location: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		is_treated: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		treatment_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		treatment_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(First Aid|Medical Treatment)$',
}, {
	type: 'null',
}],
},
		return_to_work_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		lost_time: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		lost_time_start: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		lost_time_end: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		lost_job_transfer: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		lost_days_restriction_start: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		lost_days_restriction_end: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		lost_workdays: {
	type: 'number',
	isRequired: true,
},
		lost_days_transfer: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $OSHA300LogUpdate = {
	properties: {
		log_number: {
	type: 'string',
	isRequired: true,
},
		incident_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		incident_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(Injury|Illness)$',
}, {
	type: 'null',
}],
},
		employee_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		job_title: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		department: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		location: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		is_treated: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		treatment_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		treatment_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(First Aid|Medical Treatment)$',
}, {
	type: 'null',
}],
},
		return_to_work_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		lost_time: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		lost_time_start: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		lost_time_end: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		lost_job_transfer: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		lost_days_restriction_start: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		lost_days_restriction_end: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $Order = {
	properties: {
		order_number: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		maintenance_requests_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		status: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		maintenance_request: {
	type: 'any-of',
	contains: [{
	type: 'MaintenanceRequestRead',
}, {
	type: 'null',
}],
},
		items: {
	type: 'array',
	contains: {
		type: 'OrderItemRead',
	},
	isRequired: true,
},
	},
} as const;

export const $OrderCreate = {
	properties: {
		order_number: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		maintenance_requests_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		status: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		items: {
	type: 'array',
	contains: {
		type: 'OrderItemCreate',
	},
	isRequired: true,
},
	},
} as const;

export const $OrderItemCreate = {
	properties: {
		item_id: {
	type: 'number',
	isRequired: true,
},
		quantity: {
	type: 'number',
	isRequired: true,
	exclusiveMinimum: 0,
},
	},
} as const;

export const $OrderItemRead = {
	properties: {
		order_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		item_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		quantity: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		total_price: {
	type: 'number',
	isRequired: true,
	exclusiveMinimum: 0,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $OrderList = {
	properties: {
		items: {
	type: 'array',
	contains: {
		type: 'Order',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $OrderUpdate = {
	properties: {
		order_number: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		maintenance_requests_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		status: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $ProcessTestCreate = {
	properties: {
		test_number: {
	type: 'string',
	isRequired: true,
},
		process_visor_id: {
	type: 'number',
	isRequired: true,
},
		slushing_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		dump_chest_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		dump_chest_dcs_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		intermediate_chest_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		intermediate_chest_dcs_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_one_chute_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_one_chute_dcs_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_one_handsheet_brightness: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_two_chute_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_two_chute_dcs_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_two_handsheet_brightness: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_chest_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_chest_dcs_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		wire_press_output_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		delko_press_output_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		test_result: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(pass|fail)$',
}, {
	type: 'null',
}],
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
	},
} as const;

export const $ProcessTestPublic = {
	properties: {
		process_tests: {
	type: 'array',
	contains: {
		type: 'ProcessTestResponse',
	},
	default: [],
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $ProcessTestResponse = {
	properties: {
		test_number: {
	type: 'string',
	isRequired: true,
},
		process_visor_id: {
	type: 'number',
	isRequired: true,
},
		slushing_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		dump_chest_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		dump_chest_dcs_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		intermediate_chest_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		intermediate_chest_dcs_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_one_chute_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_one_chute_dcs_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_one_handsheet_brightness: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_two_chute_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_two_chute_dcs_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_two_handsheet_brightness: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_chest_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_chest_dcs_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		wire_press_output_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		delko_press_output_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		test_result: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(pass|fail)$',
}, {
	type: 'null',
}],
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		pass_or_fail: {
	type: 'boolean',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $ProcessTestUpdate = {
	properties: {
		test_number: {
	type: 'string',
	isRequired: true,
},
		process_visor_id: {
	type: 'number',
	isRequired: true,
},
		slushing_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		dump_chest_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		dump_chest_dcs_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		intermediate_chest_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		intermediate_chest_dcs_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_one_chute_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_one_chute_dcs_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_one_handsheet_brightness: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_two_chute_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_two_chute_dcs_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_two_handsheet_brightness: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_chest_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_chest_dcs_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		wire_press_output_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		delko_press_output_actual_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		test_result: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(pass|fail)$',
}, {
	type: 'null',
}],
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		id: {
	type: 'number',
	isRequired: true,
	exclusiveMinimum: 0,
},
	},
} as const;

export const $ProcessVisor = {
	properties: {
		visor_number: {
	type: 'string',
	isRequired: true,
},
		machine_operator_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		machine_assisst_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		stock_prep_operator_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		stock_prep_assisst_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		shift: {
	type: 'string',
	isRequired: true,
	pattern: '^(day|night)$',
},
		started: {
	type: 'boolean',
	isRequired: true,
},
		completed: {
	type: 'boolean',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		field_check_count: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		checklist_count: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		field_checks: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'MachineFieldCheckResponse',
	},
}, {
	type: 'null',
}],
},
		dcs_related_checks: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'MachineDCSRelatedCheckResponse',
	},
}, {
	type: 'null',
}],
},
		stock_prep_field_checks: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'StockPrepFieldCheckResponse',
	},
}, {
	type: 'null',
}],
},
		stock_prep_dcs_related_checks: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'StockPrepDCSRelatedCheckResponse',
	},
}, {
	type: 'null',
}],
},
		process_tests: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'ProcessTestResponse',
	},
}, {
	type: 'null',
}],
},
		water_tests: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'WaterTestResponse',
	},
}, {
	type: 'null',
}],
},
	},
} as const;

export const $ProcessVisorCreate = {
	properties: {
		visor_number: {
	type: 'string',
	isRequired: true,
},
		machine_operator_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		machine_assisst_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		stock_prep_operator_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		stock_prep_assisst_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		shift: {
	type: 'string',
	isRequired: true,
	pattern: '^(day|night)$',
},
		started: {
	type: 'boolean',
	isRequired: true,
},
		completed: {
	type: 'boolean',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
	},
} as const;

export const $ProcessVisorPublic = {
	properties: {
		machine_visors: {
	type: 'array',
	contains: {
		type: 'ProcessVisorResponse',
	},
	default: [],
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $ProcessVisorResponse = {
	properties: {
		visor_number: {
	type: 'string',
	isRequired: true,
},
		machine_operator_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		machine_assisst_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		stock_prep_operator_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		stock_prep_assisst_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		shift: {
	type: 'string',
	isRequired: true,
	pattern: '^(day|night)$',
},
		started: {
	type: 'boolean',
	isRequired: true,
},
		completed: {
	type: 'boolean',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		field_check_count: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		checklist_count: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $ProcessVisorUpdate = {
	properties: {
		visor_number: {
	type: 'string',
	isRequired: true,
},
		machine_operator_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		machine_assisst_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		stock_prep_operator_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		stock_prep_assisst_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		shift: {
	type: 'string',
	isRequired: true,
	pattern: '^(day|night)$',
},
		started: {
	type: 'boolean',
	isRequired: true,
},
		completed: {
	type: 'boolean',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		id: {
	type: 'number',
	isRequired: true,
	exclusiveMinimum: 0,
},
	},
} as const;

export const $ProductSpecification = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		product_code: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		grammage_high: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		grammage_target: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		grammage_low: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		md_tensile_high: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		md_tensile_target: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		md_tensile_low: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		cd_tensile_high: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		cd_tensile_target: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		cd_tensile_low: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		stretch_high: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		stretch_target: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		stretch_low: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		L_value_high: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		L_value_target: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		L_value_low: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		a_value_high: {
	type: 'number',
	default: 0,
},
		a_value_target: {
	type: 'number',
	default: 0,
},
		a_value_low: {
	type: 'number',
	default: 0,
},
		b_value_high: {
	type: 'number',
	default: 0,
},
		b_value_target: {
	type: 'number',
	default: 0,
},
		b_value_low: {
	type: 'number',
	default: 0,
},
		brightness_high: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		brightness_target: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		brightness_low: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		is_active: {
	type: 'boolean',
	isRequired: true,
},
		is_wet_strength: {
	type: 'boolean',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $ProductSpecificationCreate = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		product_code: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		grammage_high: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		grammage_target: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		grammage_low: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		md_tensile_high: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		md_tensile_target: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		md_tensile_low: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		cd_tensile_high: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		cd_tensile_target: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		cd_tensile_low: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		stretch_high: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		stretch_target: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		stretch_low: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		L_value_high: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		L_value_target: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		L_value_low: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		a_value_high: {
	type: 'number',
	default: 0,
},
		a_value_target: {
	type: 'number',
	default: 0,
},
		a_value_low: {
	type: 'number',
	default: 0,
},
		b_value_high: {
	type: 'number',
	default: 0,
},
		b_value_target: {
	type: 'number',
	default: 0,
},
		b_value_low: {
	type: 'number',
	default: 0,
},
		brightness_high: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		brightness_target: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		brightness_low: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		is_active: {
	type: 'boolean',
	isRequired: true,
},
		is_wet_strength: {
	type: 'boolean',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
	},
} as const;

export const $ProductSpecificationPublic = {
	properties: {
		specifications: {
	type: 'array',
	contains: {
		type: 'ProductSpecification',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $ProductSpecificationUpdate = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		product_code: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		grammage_high: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		grammage_target: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		grammage_low: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		md_tensile_high: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		md_tensile_target: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		md_tensile_low: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		cd_tensile_high: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		cd_tensile_target: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		cd_tensile_low: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		stretch_high: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		stretch_target: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		stretch_low: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		L_value_high: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		L_value_target: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		L_value_low: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		a_value_high: {
	type: 'number',
	default: 0,
},
		a_value_target: {
	type: 'number',
	default: 0,
},
		a_value_low: {
	type: 'number',
	default: 0,
},
		b_value_high: {
	type: 'number',
	default: 0,
},
		b_value_target: {
	type: 'number',
	default: 0,
},
		b_value_low: {
	type: 'number',
	default: 0,
},
		brightness_high: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		brightness_target: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		brightness_low: {
	type: 'number',
	default: 0,
	minimum: 0,
},
		is_active: {
	type: 'boolean',
	isRequired: true,
},
		is_wet_strength: {
	type: 'boolean',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
	},
} as const;

export const $ProductionKanban = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		kanban_number: {
	type: 'string',
	isRequired: true,
},
		operator_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		assisst_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		planned_date: {
	type: 'string',
	description: `Must be a valid date`,
	isRequired: true,
	format: 'date-time',
},
		shift: {
	type: 'string',
	isRequired: true,
	pattern: '^(day|night)$',
},
		started: {
	type: 'boolean',
	isRequired: true,
},
		completed: {
	type: 'boolean',
	isRequired: true,
},
		planned_quantity: {
	type: 'number',
	description: `Must be a non-negative integer`,
	isRequired: true,
	minimum: 0,
},
		planned_down_time: {
	type: 'any-of',
	description: `Must be a non-negative float`,
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		available_production_time: {
	type: 'any-of',
	description: `Must be a non-negative float`,
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		planned_raw_material: {
	type: 'number',
	description: `Must be a non-negative float`,
	isRequired: true,
	minimum: 0,
},
		actual_raw_material: {
	type: 'any-of',
	description: `Must be a non-negative float`,
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		planned_product_code: {
	type: 'string',
	isRequired: true,
},
		actual_product_code: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		electricity_consumption: {
	type: 'number',
	description: `Must be a non-negative float`,
	isRequired: true,
	minimum: 0,
},
		water_consumption: {
	type: 'number',
	description: `Must be a non-negative float`,
	isRequired: true,
	minimum: 0,
},
		energy_consumption: {
	type: 'number',
	description: `Must be a non-negative float`,
	isRequired: true,
	minimum: 0,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		logs: {
	type: 'any-of',
	contains: [{
	type: 'ProductionLogRead',
}, {
	type: 'null',
}],
},
		production_rate: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $ProductionKanbanCreate = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		kanban_number: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		operator_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		assisst_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		planned_date: {
	type: 'string',
	description: `Must be a future date`,
	isRequired: true,
	format: 'date-time',
},
		shift: {
	type: 'string',
	isRequired: true,
	pattern: '^(day|night)$',
},
		started: {
	type: 'boolean',
	isRequired: true,
},
		completed: {
	type: 'boolean',
	isRequired: true,
},
		planned_quantity: {
	type: 'number',
	description: `Must be a non-negative integer`,
	isRequired: true,
	minimum: 0,
},
		planned_down_time: {
	type: 'any-of',
	description: `Must be a non-negative float`,
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		available_production_time: {
	type: 'any-of',
	description: `Must be a non-negative float`,
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		planned_raw_material: {
	type: 'number',
	description: `Must be a non-negative float`,
	isRequired: true,
	minimum: 0,
},
		actual_raw_material: {
	type: 'any-of',
	description: `Must be a non-negative float`,
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		planned_product_code: {
	type: 'string',
	isRequired: true,
},
		actual_product_code: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		electricity_consumption: {
	type: 'number',
	description: `Must be a non-negative float`,
	isRequired: true,
	minimum: 0,
},
		water_consumption: {
	type: 'number',
	description: `Must be a non-negative float`,
	isRequired: true,
	minimum: 0,
},
		energy_consumption: {
	type: 'number',
	description: `Must be a non-negative float`,
	isRequired: true,
	minimum: 0,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
	},
} as const;

export const $ProductionKanbanPublic = {
	properties: {
		kanbans: {
	type: 'array',
	contains: {
		type: 'ProductionKanban',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $ProductionKanbanRead = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		kanban_number: {
	type: 'string',
	isRequired: true,
},
		operator_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		assisst_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		planned_date: {
	type: 'string',
	description: `Must be a valid date`,
	isRequired: true,
	format: 'date-time',
},
		shift: {
	type: 'string',
	isRequired: true,
	pattern: '^(day|night)$',
},
		started: {
	type: 'boolean',
	isRequired: true,
},
		completed: {
	type: 'boolean',
	isRequired: true,
},
		planned_quantity: {
	type: 'number',
	description: `Must be a non-negative integer`,
	isRequired: true,
	minimum: 0,
},
		planned_down_time: {
	type: 'any-of',
	description: `Must be a non-negative float`,
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		available_production_time: {
	type: 'any-of',
	description: `Must be a non-negative float`,
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		planned_raw_material: {
	type: 'number',
	description: `Must be a non-negative float`,
	isRequired: true,
	minimum: 0,
},
		actual_raw_material: {
	type: 'any-of',
	description: `Must be a non-negative float`,
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		planned_product_code: {
	type: 'string',
	isRequired: true,
},
		actual_product_code: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		electricity_consumption: {
	type: 'number',
	description: `Must be a non-negative float`,
	isRequired: true,
	minimum: 0,
},
		water_consumption: {
	type: 'number',
	description: `Must be a non-negative float`,
	isRequired: true,
	minimum: 0,
},
		energy_consumption: {
	type: 'number',
	description: `Must be a non-negative float`,
	isRequired: true,
	minimum: 0,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $ProductionKanbanUpdate = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		kanban_number: {
	type: 'string',
	isRequired: true,
},
		operator_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		assisst_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		planned_date: {
	type: 'any-of',
	description: `Must be a future date`,
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		shift: {
	type: 'string',
	isRequired: true,
	pattern: '^(day|night)$',
},
		started: {
	type: 'boolean',
	isRequired: true,
},
		completed: {
	type: 'boolean',
	isRequired: true,
},
		planned_quantity: {
	type: 'number',
	description: `Must be a non-negative integer`,
	isRequired: true,
	minimum: 0,
},
		planned_down_time: {
	type: 'any-of',
	description: `Must be a non-negative float`,
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		available_production_time: {
	type: 'any-of',
	description: `Must be a non-negative float`,
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		planned_raw_material: {
	type: 'number',
	description: `Must be a non-negative float`,
	isRequired: true,
	minimum: 0,
},
		actual_raw_material: {
	type: 'any-of',
	description: `Must be a non-negative float`,
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		planned_product_code: {
	type: 'string',
	isRequired: true,
},
		actual_product_code: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		electricity_consumption: {
	type: 'number',
	description: `Must be a non-negative float`,
	isRequired: true,
	minimum: 0,
},
		water_consumption: {
	type: 'number',
	description: `Must be a non-negative float`,
	isRequired: true,
	minimum: 0,
},
		energy_consumption: {
	type: 'number',
	description: `Must be a non-negative float`,
	isRequired: true,
	minimum: 0,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
	},
} as const;

export const $ProductionLog = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		log_number: {
	type: 'string',
	isRequired: true,
},
		kanban_id: {
	type: 'number',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		total_production: {
	type: 'number',
	isRequired: true,
},
		total_downtime: {
	type: 'number',
	isRequired: true,
},
		quality_rate: {
	type: 'number',
	isRequired: true,
},
		availability_rate: {
	type: 'number',
	isRequired: true,
},
		running_production_rate: {
	type: 'number',
	isRequired: true,
},
		average_machine_speed: {
	type: 'number',
	isRequired: true,
},
		actual_production_rate: {
	type: 'number',
	isRequired: true,
},
		performance: {
	type: 'number',
	isRequired: true,
},
		oee: {
	type: 'number',
	isRequired: true,
},
		reels: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'ReelRead',
	},
}, {
	type: 'null',
}],
},
		downtime: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'DowntimeRead',
	},
}, {
	type: 'null',
}],
},
		stock_prep_downtime: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'StockPrepDowntimeRead',
	},
}, {
	type: 'null',
}],
},
		kanban: {
	type: 'ProductionKanbanRead',
	isRequired: true,
},
	},
} as const;

export const $ProductionLogCreate = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		log_number: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		kanban_id: {
	type: 'number',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
	},
} as const;

export const $ProductionLogPublic = {
	properties: {
		logs: {
	type: 'array',
	contains: {
		type: 'ProductionLog',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $ProductionLogRead = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		log_number: {
	type: 'string',
	isRequired: true,
},
		kanban_id: {
	type: 'number',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $ProductionLogUpdate = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		log_number: {
	type: 'string',
	isRequired: true,
},
		kanban_id: {
	type: 'number',
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
	},
} as const;

export const $QualityInspectionItem = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		reel_id: {
	type: 'number',
	isRequired: true,
	minimum: 1,
},
		grammage: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		md_tensile: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		cd_tensile: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		stretch: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		L_value: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		a_value: {
	type: 'number',
	isRequired: true,
},
		b_value: {
	type: 'number',
	isRequired: true,
},
		brightness: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		remark: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		reel: {
	type: 'Reel',
	isRequired: true,
},
	},
} as const;

export const $QualityInspectionItemCreate = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		reel_id: {
	type: 'number',
	isRequired: true,
	minimum: 1,
},
		grammage: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		md_tensile: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		cd_tensile: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		stretch: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		L_value: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		a_value: {
	type: 'number',
	isRequired: true,
},
		b_value: {
	type: 'number',
	isRequired: true,
},
		brightness: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		remark: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
	},
} as const;

export const $QualityInspectionItemPublic = {
	properties: {
		count: {
	type: 'number',
	isRequired: true,
},
		items: {
	type: 'array',
	contains: {
		type: 'QualityInspectionItem',
	},
	isRequired: true,
},
	},
} as const;

export const $QualityInspectionItemRead = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		reel_id: {
	type: 'number',
	isRequired: true,
	minimum: 1,
},
		grammage: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		md_tensile: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		cd_tensile: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		stretch: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		L_value: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		a_value: {
	type: 'number',
	isRequired: true,
},
		b_value: {
	type: 'number',
	isRequired: true,
},
		brightness: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		remark: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $QualityInspectionItemUpdate = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		reel_id: {
	type: 'number',
	isRequired: true,
	minimum: 1,
},
		grammage: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		md_tensile: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		cd_tensile: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		stretch: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		L_value: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		a_value: {
	type: 'number',
	isRequired: true,
},
		b_value: {
	type: 'number',
	isRequired: true,
},
		brightness: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		remark: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
	},
} as const;

export const $Reel = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		reel_number: {
	type: 'string',
	isRequired: true,
},
		specification_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		weight: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		grammage: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		deckle: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		machine_speed: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		pope_speed: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		is_saleable: {
	type: 'boolean',
	isRequired: true,
},
		production_log_id: {
	type: 'number',
	isRequired: true,
},
		remark: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		production_log: {
	type: 'ProductionLogRead',
	isRequired: true,
},
		quality_inspection_items: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'QualityInspectionItemRead',
	},
}, {
	type: 'null',
}],
},
	},
} as const;

export const $ReelCreate = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		reel_number: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		specification_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		weight: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		grammage: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		deckle: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		machine_speed: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		pope_speed: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		is_saleable: {
	type: 'boolean',
	isRequired: true,
},
		production_log_id: {
	type: 'number',
	isRequired: true,
},
		remark: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
	},
} as const;

export const $ReelPublic = {
	properties: {
		items: {
	type: 'array',
	contains: {
		type: 'Reel',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $ReelRead = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		reel_number: {
	type: 'string',
	isRequired: true,
},
		specification_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		weight: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		grammage: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		deckle: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		machine_speed: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		pope_speed: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		is_saleable: {
	type: 'boolean',
	isRequired: true,
},
		production_log_id: {
	type: 'number',
	isRequired: true,
},
		remark: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $ReelUpdate = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		reel_number: {
	type: 'string',
	isRequired: true,
},
		specification_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		weight: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		grammage: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		deckle: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		machine_speed: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		pope_speed: {
	type: 'number',
	isRequired: true,
	minimum: 0,
},
		is_saleable: {
	type: 'boolean',
	isRequired: true,
},
		production_log_id: {
	type: 'number',
	isRequired: true,
},
		remark: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
	},
} as const;

export const $RequisitionResponseModel = {
	properties: {
		order_number: {
	type: 'string',
	isRequired: true,
},
		maintenance_request_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		successfully_requested_items: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'ItemRead',
	},
}, {
	type: 'null',
}],
},
		failed_requested_items: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
		type: 'OrderItemCreate',
	},
}, {
	type: 'null',
}],
},
		request_failure_reason: {
	type: 'any-of',
	contains: [{
	type: 'array',
	contains: {
	type: 'string',
},
}, {
	type: 'null',
}],
},
		planned_cost: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $RiggingAndLiftingPermitCreate = {
	properties: {
		supervisor_name: {
	type: 'string',
	isRequired: true,
},
		rigger_name: {
	type: 'string',
	maxLength: 50,
},
		load_description: {
	type: 'string',
	maxLength: 100,
},
		lifting_plan: {
	type: 'string',
	pattern: '^(Crane|Slings/Chain Block(s)|Forklift|Manual|Other)$',
},
		maintenance_ptw_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $RiggingAndLiftingPermitRead = {
	properties: {
		supervisor_name: {
	type: 'string',
	isRequired: true,
},
		rigger_name: {
	type: 'string',
	maxLength: 50,
},
		load_description: {
	type: 'string',
	maxLength: 100,
},
		lifting_plan: {
	type: 'string',
	pattern: '^(Crane|Slings/Chain Block(s)|Forklift|Manual|Other)$',
},
		maintenance_ptw_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $RiggingAndLiftingPermitUpdate = {
	properties: {
		supervisor_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		rigger_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		load_description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		lifting_plan: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		maintenance_ptw_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $RiggingAndLiftingPermitsList = {
	properties: {
		permits: {
	type: 'array',
	contains: {
		type: 'RiggingAndLiftingPermitRead',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $RiskAssessmentCreateModel = {
	properties: {
		assessor_name: {
	type: 'string',
	isRequired: true,
},
		date: {
	type: 'string',
	isRequired: true,
},
		location: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'string',
	isRequired: true,
},
		hazards: {
	type: 'string',
	isRequired: true,
},
		controls: {
	type: 'string',
	isRequired: true,
},
		severity: {
	type: 'string',
	isRequired: true,
},
		likelihood: {
	type: 'string',
	isRequired: true,
},
	},
} as const;

export const $RiskAssessmentResponseModel = {
	properties: {
		id: {
	type: 'number',
	isRequired: true,
},
		assessor_name: {
	type: 'string',
	isRequired: true,
},
		date: {
	type: 'string',
	isRequired: true,
},
		location: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'string',
	isRequired: true,
},
		hazards: {
	type: 'string',
	isRequired: true,
},
		controls: {
	type: 'string',
	isRequired: true,
},
		severity: {
	type: 'string',
	isRequired: true,
},
		likelihood: {
	type: 'string',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $RiskAssessmentUpdateModel = {
	properties: {
		assessor_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		date: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		location: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		hazards: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		controls: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		severity: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		likelihood: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $RiskAssessmentsPublic = {
	properties: {
		risk_assessments: {
	type: 'array',
	contains: {
		type: 'RiskAssessmentResponseModel',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $Role = {
	type: 'Enum',
	enum: ['admin','viewer','editor',],
} as const;

export const $SHEIncidentCreate = {
	properties: {
		log_number: {
	type: 'string',
	isRequired: true,
},
		incident_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		incident_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(Injury|Illness|Near Miss|Property Damage)$',
}, {
	type: 'null',
}],
},
		employee_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		incident_title: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		incident_description: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		incident_location: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		incident_injured: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		incident_witness: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		incident_reported: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		incident_remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $SHEIncidentList = {
	properties: {
		she_incidents: {
	type: 'array',
	contains: {
		type: 'SHEIncidentRead',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $SHEIncidentRead = {
	properties: {
		log_number: {
	type: 'string',
	isRequired: true,
},
		incident_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		incident_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(Injury|Illness|Near Miss|Property Damage)$',
}, {
	type: 'null',
}],
},
		employee_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		incident_title: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		incident_description: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		incident_location: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		incident_injured: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		incident_witness: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		incident_reported: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		incident_remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $SHEIncidentUpdate = {
	properties: {
		log_number: {
	type: 'string',
	isRequired: true,
},
		incident_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		incident_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(Injury|Illness|Near Miss|Property Damage)$',
}, {
	type: 'null',
}],
},
		employee_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		incident_title: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		incident_description: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		incident_location: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		incident_injured: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		incident_witness: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		incident_reported: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		incident_remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $SHEMeetingCreate = {
	properties: {
		log_number: {
	type: 'string',
	isRequired: true,
},
		meeting_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		meeting_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(Safety|Health|Environmental|Quality)$',
}, {
	type: 'null',
}],
},
		meeting_title: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		meeting_location: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		meeting_duration: {
	type: 'any-of',
	contains: [{
	type: 'number',
	exclusiveMinimum: 0,
}, {
	type: 'null',
}],
},
		meeting_description: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		meeting_facilitator: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		meeting_attendees: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		meeting_remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
	},
} as const;

export const $SHEMeetingList = {
	properties: {
		she_meetings: {
	type: 'array',
	contains: {
		type: 'SHEMeetingRead',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $SHEMeetingRead = {
	properties: {
		log_number: {
	type: 'string',
	isRequired: true,
},
		meeting_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		meeting_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(Safety|Health|Environmental|Quality)$',
}, {
	type: 'null',
}],
},
		meeting_title: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		meeting_location: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		meeting_duration: {
	type: 'any-of',
	contains: [{
	type: 'number',
	exclusiveMinimum: 0,
}, {
	type: 'null',
}],
},
		meeting_description: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		meeting_facilitator: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		meeting_attendees: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		meeting_remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $SHEMeetingUpdate = {
	properties: {
		log_number: {
	type: 'string',
	isRequired: true,
},
		meeting_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		meeting_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(Safety|Health|Environmental|Quality)$',
}, {
	type: 'null',
}],
},
		meeting_title: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		meeting_location: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		meeting_duration: {
	type: 'any-of',
	contains: [{
	type: 'number',
	exclusiveMinimum: 0,
}, {
	type: 'null',
}],
},
		meeting_description: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		meeting_facilitator: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		meeting_attendees: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		meeting_remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $SHEQInspectionCreate = {
	properties: {
		log_number: {
	type: 'string',
	isRequired: true,
},
		inspection_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		inspection_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(Safety|Health|Environmental|Quality)$',
}, {
	type: 'null',
}],
},
		inspection_location: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		inspection_description: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		inspection_duration: {
	type: 'any-of',
	contains: [{
	type: 'number',
	exclusiveMinimum: 0,
}, {
	type: 'null',
}],
},
		inspection_inspector: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		inspection_remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
	},
} as const;

export const $SHEQInspectionList = {
	properties: {
		sheq_inspections: {
	type: 'array',
	contains: {
		type: 'SHEQInspectionRead',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $SHEQInspectionRead = {
	properties: {
		log_number: {
	type: 'string',
	isRequired: true,
},
		inspection_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		inspection_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(Safety|Health|Environmental|Quality)$',
}, {
	type: 'null',
}],
},
		inspection_location: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		inspection_description: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		inspection_duration: {
	type: 'any-of',
	contains: [{
	type: 'number',
	exclusiveMinimum: 0,
}, {
	type: 'null',
}],
},
		inspection_inspector: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		inspection_remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $SHEQInspectionUpdate = {
	properties: {
		log_number: {
	type: 'string',
	isRequired: true,
},
		inspection_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		inspection_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(Safety|Health|Environmental|Quality)$',
}, {
	type: 'null',
}],
},
		inspection_location: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		inspection_description: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		inspection_duration: {
	type: 'any-of',
	contains: [{
	type: 'number',
	exclusiveMinimum: 0,
}, {
	type: 'null',
}],
},
		inspection_inspector: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		inspection_remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $SHEQTrainingCreate = {
	properties: {
		log_number: {
	type: 'string',
	isRequired: true,
},
		training_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		training_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(Safety|Health|Environmental|Quality)$',
}, {
	type: 'null',
}],
},
		training_title: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		training_description: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		training_location: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		training_duration: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		training_provider: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		training_instructor: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		training_remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
	},
} as const;

export const $SHEQTrainingList = {
	properties: {
		sheq_trainings: {
	type: 'array',
	contains: {
		type: 'SHEQTrainingRead',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $SHEQTrainingRead = {
	properties: {
		log_number: {
	type: 'string',
	isRequired: true,
},
		training_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		training_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(Safety|Health|Environmental|Quality)$',
}, {
	type: 'null',
}],
},
		training_title: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		training_description: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		training_location: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		training_duration: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		training_provider: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		training_instructor: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		training_remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $SHEQTrainingUpdate = {
	properties: {
		log_number: {
	type: 'string',
	isRequired: true,
},
		training_date: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
},
		training_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(Safety|Health|Environmental|Quality)$',
}, {
	type: 'null',
}],
},
		training_title: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		training_description: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		training_location: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		training_duration: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		training_provider: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		training_instructor: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 50,
}, {
	type: 'null',
}],
},
		training_remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
	maxLength: 255,
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $SafetyObersevationsPublic = {
	properties: {
		safety_observations: {
	type: 'array',
	contains: {
		type: 'SafetyObservationResponseModel',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $SafetyObservationCreateModel = {
	properties: {
		observer_name: {
	type: 'string',
	isRequired: true,
},
		date: {
	type: 'string',
	isRequired: true,
},
		location: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'string',
	isRequired: true,
},
		severity: {
	type: 'string',
	isRequired: true,
},
		status: {
	type: 'string',
	isRequired: true,
},
	},
} as const;

export const $SafetyObservationResponseModel = {
	properties: {
		id: {
	type: 'number',
	isRequired: true,
},
		observer_name: {
	type: 'string',
	isRequired: true,
},
		date: {
	type: 'string',
	isRequired: true,
},
		location: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'string',
	isRequired: true,
},
		severity: {
	type: 'string',
	isRequired: true,
},
		status: {
	type: 'string',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $SafetyObservationUpdateModel = {
	properties: {
		observer_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		date: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		location: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		severity: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		status: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $Status = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $StatusCreate = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $StatusList = {
	properties: {
		statuses: {
	type: 'array',
	contains: {
		type: 'Status',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $StatusSummary = {
	properties: {
		total_count: {
	type: 'number',
	isRequired: true,
},
		operational_count: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		non_operational_count: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		under_repair_count: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		decommissioned_count: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $StatusUpdate = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $StockPrepDCSRelatedCheckCreate = {
	properties: {
		process_visor_id: {
	type: 'number',
	isRequired: true,
},
		dcs_related_check_number: {
	type: 'string',
	isRequired: true,
},
		daf_1_systems_running: {
	type: 'boolean',
	default: false,
},
		daf_1_saturation_system_running: {
	type: 'boolean',
	default: false,
},
		daf_1_feed_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		daf_1_feed_valve_opening: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		daf_1_water_tanks_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		daf_3__saturation_systems_running: {
	type: 'boolean',
	default: false,
},
		daf_3_saturation_good: {
	type: 'boolean',
	default: false,
},
		daf_3_feed_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		daf_3_feed_valve_opening: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		daf_3_water_tanks_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		hp_compressor_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		weighing_conveyor_weight_on_dcs: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		weighing_conveyor_weight_on_scale: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		puper_sequence_auto: {
	type: 'boolean',
	default: false,
},
		paper_dryness_setting: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		dilution_pulper_dumping_valve_opening_count_from_last_six_hours: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		dumping_chest_level: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		flushing_valve_operation_on_auto: {
	type: 'boolean',
	default: false,
},
		hdc_differential_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		omni_screen_one_operation_good: {
	type: 'boolean',
	default: false,
},
		omnni_screen_one_rejects_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		omni_screen_two_operation_good: {
	type: 'boolean',
	default: false,
},
		omni_screen_three_operation_good: {
	type: 'boolean',
	default: false,
},
		omni_screen_three_rejects_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		intermediate_chest_level: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		intermediate_chest_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		intermediate_chest_discharge_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		pre_flotation_cells_operation_good: {
	type: 'boolean',
	default: false,
},
		celleco_cleaners_dp: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		slots_screens_operation_good: {
	type: 'boolean',
	default: false,
},
		slot_screen_one_dp: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		slot_screen_two_dp: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		slot_screen_three_dp: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		slot_screen_three_rejects_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		booster_pump_motor_current_load: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_split_speed: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_split_drive_current: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_split_fabric_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_split_supplier: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_split_stretch_roll_cylinders_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		inlet_pressure_to_vario_one_header: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		inlet_pressure_to_vario_two_header: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		wire_press_operation_good: {
	type: 'boolean',
	default: false,
},
		wire_press_running: {
	type: 'boolean',
	default: false,
},
		wire_press_top_fabric_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		wire_press_bottom_fabric_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		flow_to_wire_press: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		flow_rate_to_disperger: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_power: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_specific_energy: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_cascade_flush_water_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		heating_screw_temperature: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_chest_level: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_chest_dilution_water_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_chest_flow_to_post_flotation_cells: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_chest_discharge_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		post_flotation_cells_operation_good: {
	type: 'boolean',
	default: false,
},
		post_flotation_cells_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		post_flotation_cells_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		cell_four_outlevel_set_point: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		delko_press_running: {
	type: 'boolean',
	default: false,
},
		delko_press_operation_good: {
	type: 'boolean',
	default: false,
},
		flow_rate_to_delko_press: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		delko_press_top_fabric_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		delko_press_bottom_fabric_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		hd_storage_level: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
	},
} as const;

export const $StockPrepDCSRelatedCheckPublic = {
	properties: {
		stock_prep_dcs_related_checks: {
	type: 'array',
	contains: {
		type: 'StockPrepDCSRelatedCheckResponse',
	},
	default: [],
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $StockPrepDCSRelatedCheckResponse = {
	properties: {
		process_visor_id: {
	type: 'number',
	isRequired: true,
},
		dcs_related_check_number: {
	type: 'string',
	isRequired: true,
},
		daf_1_systems_running: {
	type: 'boolean',
	default: false,
},
		daf_1_saturation_system_running: {
	type: 'boolean',
	default: false,
},
		daf_1_feed_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		daf_1_feed_valve_opening: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		daf_1_water_tanks_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		daf_3__saturation_systems_running: {
	type: 'boolean',
	default: false,
},
		daf_3_saturation_good: {
	type: 'boolean',
	default: false,
},
		daf_3_feed_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		daf_3_feed_valve_opening: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		daf_3_water_tanks_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		hp_compressor_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		weighing_conveyor_weight_on_dcs: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		weighing_conveyor_weight_on_scale: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		puper_sequence_auto: {
	type: 'boolean',
	default: false,
},
		paper_dryness_setting: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		dilution_pulper_dumping_valve_opening_count_from_last_six_hours: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		dumping_chest_level: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		flushing_valve_operation_on_auto: {
	type: 'boolean',
	default: false,
},
		hdc_differential_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		omni_screen_one_operation_good: {
	type: 'boolean',
	default: false,
},
		omnni_screen_one_rejects_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		omni_screen_two_operation_good: {
	type: 'boolean',
	default: false,
},
		omni_screen_three_operation_good: {
	type: 'boolean',
	default: false,
},
		omni_screen_three_rejects_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		intermediate_chest_level: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		intermediate_chest_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		intermediate_chest_discharge_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		pre_flotation_cells_operation_good: {
	type: 'boolean',
	default: false,
},
		celleco_cleaners_dp: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		slots_screens_operation_good: {
	type: 'boolean',
	default: false,
},
		slot_screen_one_dp: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		slot_screen_two_dp: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		slot_screen_three_dp: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		slot_screen_three_rejects_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		booster_pump_motor_current_load: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_split_speed: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_split_drive_current: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_split_fabric_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_split_supplier: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_split_stretch_roll_cylinders_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		inlet_pressure_to_vario_one_header: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		inlet_pressure_to_vario_two_header: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		wire_press_operation_good: {
	type: 'boolean',
	default: false,
},
		wire_press_running: {
	type: 'boolean',
	default: false,
},
		wire_press_top_fabric_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		wire_press_bottom_fabric_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		flow_to_wire_press: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		flow_rate_to_disperger: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_power: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_specific_energy: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_cascade_flush_water_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		heating_screw_temperature: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_chest_level: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_chest_dilution_water_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_chest_flow_to_post_flotation_cells: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_chest_discharge_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		post_flotation_cells_operation_good: {
	type: 'boolean',
	default: false,
},
		post_flotation_cells_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		post_flotation_cells_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		cell_four_outlevel_set_point: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		delko_press_running: {
	type: 'boolean',
	default: false,
},
		delko_press_operation_good: {
	type: 'boolean',
	default: false,
},
		flow_rate_to_delko_press: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		delko_press_top_fabric_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		delko_press_bottom_fabric_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		hd_storage_level: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $StockPrepDCSRelatedCheckUpdate = {
	properties: {
		process_visor_id: {
	type: 'number',
	isRequired: true,
},
		dcs_related_check_number: {
	type: 'string',
	isRequired: true,
},
		daf_1_systems_running: {
	type: 'boolean',
	default: false,
},
		daf_1_saturation_system_running: {
	type: 'boolean',
	default: false,
},
		daf_1_feed_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		daf_1_feed_valve_opening: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		daf_1_water_tanks_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		daf_3__saturation_systems_running: {
	type: 'boolean',
	default: false,
},
		daf_3_saturation_good: {
	type: 'boolean',
	default: false,
},
		daf_3_feed_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		daf_3_feed_valve_opening: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		daf_3_water_tanks_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		hp_compressor_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		weighing_conveyor_weight_on_dcs: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		weighing_conveyor_weight_on_scale: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		puper_sequence_auto: {
	type: 'boolean',
	default: false,
},
		paper_dryness_setting: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		dilution_pulper_dumping_valve_opening_count_from_last_six_hours: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		dumping_chest_level: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		flushing_valve_operation_on_auto: {
	type: 'boolean',
	default: false,
},
		hdc_differential_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		omni_screen_one_operation_good: {
	type: 'boolean',
	default: false,
},
		omnni_screen_one_rejects_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		omni_screen_two_operation_good: {
	type: 'boolean',
	default: false,
},
		omni_screen_three_operation_good: {
	type: 'boolean',
	default: false,
},
		omni_screen_three_rejects_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		intermediate_chest_level: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		intermediate_chest_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		intermediate_chest_discharge_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		pre_flotation_cells_operation_good: {
	type: 'boolean',
	default: false,
},
		celleco_cleaners_dp: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		slots_screens_operation_good: {
	type: 'boolean',
	default: false,
},
		slot_screen_one_dp: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		slot_screen_two_dp: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		slot_screen_three_dp: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		slot_screen_three_rejects_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		booster_pump_motor_current_load: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_split_speed: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_split_drive_current: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_split_fabric_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_split_supplier: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		vario_split_stretch_roll_cylinders_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		inlet_pressure_to_vario_one_header: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		inlet_pressure_to_vario_two_header: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		wire_press_operation_good: {
	type: 'boolean',
	default: false,
},
		wire_press_running: {
	type: 'boolean',
	default: false,
},
		wire_press_top_fabric_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		wire_press_bottom_fabric_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		flow_to_wire_press: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		flow_rate_to_disperger: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_power: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_specific_energy: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_cascade_flush_water_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		heating_screw_temperature: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_chest_level: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_chest_dilution_water_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_chest_flow_to_post_flotation_cells: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_chest_discharge_consistency: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		post_flotation_cells_operation_good: {
	type: 'boolean',
	default: false,
},
		post_flotation_cells_pressure: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		post_flotation_cells_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		cell_four_outlevel_set_point: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		delko_press_running: {
	type: 'boolean',
	default: false,
},
		delko_press_operation_good: {
	type: 'boolean',
	default: false,
},
		flow_rate_to_delko_press: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		delko_press_top_fabric_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		delko_press_bottom_fabric_age: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		hd_storage_level: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		id: {
	type: 'number',
	isRequired: true,
	exclusiveMinimum: 0,
},
	},
} as const;

export const $StockPrepDowntime = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		department: {
	type: 'string',
	isRequired: true,
	pattern: '^(Production|Mechanical|Process|Electrical|Clothing|Instrumentation|Safety|Outside Service|Planned Maintenance)$',
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
	isNullable: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		production_log_id: {
	type: 'number',
	isRequired: true,
},
		equipment_id: {
	type: 'number',
	isRequired: true,
},
		equipment: {
	type: 'EquipmentResponseModel',
	isRequired: true,
},
		production_log: {
	type: 'ProductionLog',
	isRequired: true,
},
		duration: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $StockPrepDowntimeCreate = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		department: {
	type: 'DowntimeDepartment',
	isRequired: true,
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
	isNullable: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		production_log_id: {
	type: 'number',
	isRequired: true,
},
		equipment_id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $StockPrepDowntimePublic = {
	properties: {
		items: {
	type: 'array',
	contains: {
		type: 'StockPrepDowntime',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $StockPrepDowntimeRead = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		department: {
	type: 'string',
	isRequired: true,
	pattern: '^(Production|Mechanical|Process|Electrical|Clothing|Instrumentation|Safety|Outside Service|Planned Maintenance)$',
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
	isNullable: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		production_log_id: {
	type: 'number',
	isRequired: true,
},
		equipment_id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $StockPrepDowntimeUpdate = {
	properties: {
		id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isNullable: true,
},
		department: {
	type: 'DowntimeDepartment',
	isRequired: true,
},
		start_time: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		end_time: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'date-time',
}, {
	type: 'null',
}],
	isNullable: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		production_log_id: {
	type: 'number',
	isRequired: true,
},
		equipment_id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $StockPrepFieldCheckCreate = {
	properties: {
		field_check_number: {
	type: 'string',
	isRequired: true,
},
		process_visor_id: {
	type: 'number',
	isRequired: true,
},
		akupak_screw_running: {
	type: 'boolean',
	default: false,
},
		pulper_level_transmitter_purged: {
	type: 'boolean',
	default: false,
},
		reject_sorter_rejects_more_more_plastics: {
	type: 'boolean',
	default: false,
},
		hdc_elutration_lines_not_blocked: {
	type: 'boolean',
	default: false,
},
		hdc_not_rejecting_more_stock: {
	type: 'boolean',
	default: false,
},
		hdc_operation_good: {
	type: 'boolean',
	default: false,
},
		ldc_elutration_lines_not_blocked: {
	type: 'boolean',
	default: false,
},
		ldc_operation_good: {
	type: 'boolean',
	default: false,
},
		buffer_screen_running: {
	type: 'boolean',
	default: false,
},
		buffer_screen_rejects_coming_out: {
	type: 'boolean',
	default: false,
},
		buffer_screen_not_blocked: {
	type: 'boolean',
	default: false,
},
		level_200_floor_cleaned: {
	type: 'boolean',
	default: false,
},
		delko_press_running: {
	type: 'boolean',
	default: false,
},
		delko_press_operation_good: {
	type: 'boolean',
	default: false,
},
		flotation_cells_operation_good: {
	type: 'boolean',
	default: false,
},
		flocutation_on_flotation_cells_sight_glass_good: {
	type: 'boolean',
	default: false,
},
		dafs_bridge_operational: {
	type: 'boolean',
	default: false,
},
		dafs_scoop_operational: {
	type: 'boolean',
	default: false,
},
		dafs_screw_operational: {
	type: 'boolean',
	default: false,
},
		dafs_scoop_scooping: {
	type: 'boolean',
	default: false,
},
		dafs_sight_glasses_water_quality_acceptable: {
	type: 'boolean',
	default: false,
},
		dafs_sight_glasses_cleaned: {
	type: 'boolean',
	default: false,
},
		dafs_flocutation_can_be_seen_on_sight_glass: {
	type: 'boolean',
	default: false,
},
		dry_line_can_be_seen_on_belt_press: {
	type: 'boolean',
	default: false,
},
		chemical_station_clean: {
	type: 'boolean',
	default: false,
},
		chemical_station_operational: {
	type: 'boolean',
	default: false,
},
		chemical_station_flow_bins_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		level_100_floor_cleaned: {
	type: 'boolean',
	default: false,
},
		fas_station_clean: {
	type: 'boolean',
	default: false,
},
		fas_station_operational: {
	type: 'boolean',
	default: false,
},
		fas_station_flow_bins_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		fas_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_bund_cleaned: {
	type: 'boolean',
	default: false,
},
		disperger_operation_good: {
	type: 'boolean',
	default: false,
},
		belt_presses_operation_good: {
	type: 'boolean',
	default: false,
},
		belt_presses_shower_nozzles_blocked: {
	type: 'boolean',
	default: false,
},
		contrashear_operation_good: {
	type: 'boolean',
	default: false,
},
		sludge_tank_one_not_overflowing: {
	type: 'boolean',
	default: false,
},
		omni_screens_operation_good: {
	type: 'boolean',
	default: false,
},
		slot_screens_operation_good: {
	type: 'boolean',
	default: false,
},
		holding_tanks_not_overflowing: {
	type: 'boolean',
	default: false,
},
		leaks_on_pipes_in_level_100: {
	type: 'boolean',
	default: false,
},
		celleco_cleaners_not_leaking: {
	type: 'boolean',
	default: false,
},
		fibermizer_operation_good: {
	type: 'boolean',
	default: false,
},
		core_cleaners_not_leaking: {
	type: 'boolean',
	default: false,
},
		pumps_in_level_100_operation_good: {
	type: 'boolean',
	default: false,
},
		basement_cleaned: {
	type: 'boolean',
	default: false,
},
		basement_tanks_not_overflowing: {
	type: 'boolean',
	default: false,
},
		pumps_in_the_basement_operation_good: {
	type: 'boolean',
	default: false,
},
		leaks_on_pipes_in_the_basement: {
	type: 'boolean',
	default: false,
},
		basement_chemicals_stations_cleaned: {
	type: 'boolean',
	default: false,
},
		basement_chemicals_stations_operational: {
	type: 'boolean',
	default: false,
},
		basement_chemicals_stations_flow_bins_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		day_store_cleaned: {
	type: 'boolean',
	default: false,
},
		rf_overall_condition_acceptable: {
	type: 'boolean',
	default: false,
},
		loading_conveyor_running: {
	type: 'boolean',
	default: false,
},
		weighing_conveyor_running: {
	type: 'boolean',
	default: false,
},
		paper_underneath_conveyors_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
	},
} as const;

export const $StockPrepFieldCheckPublic = {
	properties: {
		stock_prep_field_checks: {
	type: 'array',
	contains: {
		type: 'StockPrepFieldCheckResponse',
	},
	default: [],
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $StockPrepFieldCheckResponse = {
	properties: {
		field_check_number: {
	type: 'string',
	isRequired: true,
},
		process_visor_id: {
	type: 'number',
	isRequired: true,
},
		akupak_screw_running: {
	type: 'boolean',
	default: false,
},
		pulper_level_transmitter_purged: {
	type: 'boolean',
	default: false,
},
		reject_sorter_rejects_more_more_plastics: {
	type: 'boolean',
	default: false,
},
		hdc_elutration_lines_not_blocked: {
	type: 'boolean',
	default: false,
},
		hdc_not_rejecting_more_stock: {
	type: 'boolean',
	default: false,
},
		hdc_operation_good: {
	type: 'boolean',
	default: false,
},
		ldc_elutration_lines_not_blocked: {
	type: 'boolean',
	default: false,
},
		ldc_operation_good: {
	type: 'boolean',
	default: false,
},
		buffer_screen_running: {
	type: 'boolean',
	default: false,
},
		buffer_screen_rejects_coming_out: {
	type: 'boolean',
	default: false,
},
		buffer_screen_not_blocked: {
	type: 'boolean',
	default: false,
},
		level_200_floor_cleaned: {
	type: 'boolean',
	default: false,
},
		delko_press_running: {
	type: 'boolean',
	default: false,
},
		delko_press_operation_good: {
	type: 'boolean',
	default: false,
},
		flotation_cells_operation_good: {
	type: 'boolean',
	default: false,
},
		flocutation_on_flotation_cells_sight_glass_good: {
	type: 'boolean',
	default: false,
},
		dafs_bridge_operational: {
	type: 'boolean',
	default: false,
},
		dafs_scoop_operational: {
	type: 'boolean',
	default: false,
},
		dafs_screw_operational: {
	type: 'boolean',
	default: false,
},
		dafs_scoop_scooping: {
	type: 'boolean',
	default: false,
},
		dafs_sight_glasses_water_quality_acceptable: {
	type: 'boolean',
	default: false,
},
		dafs_sight_glasses_cleaned: {
	type: 'boolean',
	default: false,
},
		dafs_flocutation_can_be_seen_on_sight_glass: {
	type: 'boolean',
	default: false,
},
		dry_line_can_be_seen_on_belt_press: {
	type: 'boolean',
	default: false,
},
		chemical_station_clean: {
	type: 'boolean',
	default: false,
},
		chemical_station_operational: {
	type: 'boolean',
	default: false,
},
		chemical_station_flow_bins_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		level_100_floor_cleaned: {
	type: 'boolean',
	default: false,
},
		fas_station_clean: {
	type: 'boolean',
	default: false,
},
		fas_station_operational: {
	type: 'boolean',
	default: false,
},
		fas_station_flow_bins_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		fas_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_bund_cleaned: {
	type: 'boolean',
	default: false,
},
		disperger_operation_good: {
	type: 'boolean',
	default: false,
},
		belt_presses_operation_good: {
	type: 'boolean',
	default: false,
},
		belt_presses_shower_nozzles_blocked: {
	type: 'boolean',
	default: false,
},
		contrashear_operation_good: {
	type: 'boolean',
	default: false,
},
		sludge_tank_one_not_overflowing: {
	type: 'boolean',
	default: false,
},
		omni_screens_operation_good: {
	type: 'boolean',
	default: false,
},
		slot_screens_operation_good: {
	type: 'boolean',
	default: false,
},
		holding_tanks_not_overflowing: {
	type: 'boolean',
	default: false,
},
		leaks_on_pipes_in_level_100: {
	type: 'boolean',
	default: false,
},
		celleco_cleaners_not_leaking: {
	type: 'boolean',
	default: false,
},
		fibermizer_operation_good: {
	type: 'boolean',
	default: false,
},
		core_cleaners_not_leaking: {
	type: 'boolean',
	default: false,
},
		pumps_in_level_100_operation_good: {
	type: 'boolean',
	default: false,
},
		basement_cleaned: {
	type: 'boolean',
	default: false,
},
		basement_tanks_not_overflowing: {
	type: 'boolean',
	default: false,
},
		pumps_in_the_basement_operation_good: {
	type: 'boolean',
	default: false,
},
		leaks_on_pipes_in_the_basement: {
	type: 'boolean',
	default: false,
},
		basement_chemicals_stations_cleaned: {
	type: 'boolean',
	default: false,
},
		basement_chemicals_stations_operational: {
	type: 'boolean',
	default: false,
},
		basement_chemicals_stations_flow_bins_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		day_store_cleaned: {
	type: 'boolean',
	default: false,
},
		rf_overall_condition_acceptable: {
	type: 'boolean',
	default: false,
},
		loading_conveyor_running: {
	type: 'boolean',
	default: false,
},
		weighing_conveyor_running: {
	type: 'boolean',
	default: false,
},
		paper_underneath_conveyors_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $StockPrepFieldCheckUpdate = {
	properties: {
		field_check_number: {
	type: 'string',
	isRequired: true,
},
		process_visor_id: {
	type: 'number',
	isRequired: true,
},
		akupak_screw_running: {
	type: 'boolean',
	default: false,
},
		pulper_level_transmitter_purged: {
	type: 'boolean',
	default: false,
},
		reject_sorter_rejects_more_more_plastics: {
	type: 'boolean',
	default: false,
},
		hdc_elutration_lines_not_blocked: {
	type: 'boolean',
	default: false,
},
		hdc_not_rejecting_more_stock: {
	type: 'boolean',
	default: false,
},
		hdc_operation_good: {
	type: 'boolean',
	default: false,
},
		ldc_elutration_lines_not_blocked: {
	type: 'boolean',
	default: false,
},
		ldc_operation_good: {
	type: 'boolean',
	default: false,
},
		buffer_screen_running: {
	type: 'boolean',
	default: false,
},
		buffer_screen_rejects_coming_out: {
	type: 'boolean',
	default: false,
},
		buffer_screen_not_blocked: {
	type: 'boolean',
	default: false,
},
		level_200_floor_cleaned: {
	type: 'boolean',
	default: false,
},
		delko_press_running: {
	type: 'boolean',
	default: false,
},
		delko_press_operation_good: {
	type: 'boolean',
	default: false,
},
		flotation_cells_operation_good: {
	type: 'boolean',
	default: false,
},
		flocutation_on_flotation_cells_sight_glass_good: {
	type: 'boolean',
	default: false,
},
		dafs_bridge_operational: {
	type: 'boolean',
	default: false,
},
		dafs_scoop_operational: {
	type: 'boolean',
	default: false,
},
		dafs_screw_operational: {
	type: 'boolean',
	default: false,
},
		dafs_scoop_scooping: {
	type: 'boolean',
	default: false,
},
		dafs_sight_glasses_water_quality_acceptable: {
	type: 'boolean',
	default: false,
},
		dafs_sight_glasses_cleaned: {
	type: 'boolean',
	default: false,
},
		dafs_flocutation_can_be_seen_on_sight_glass: {
	type: 'boolean',
	default: false,
},
		dry_line_can_be_seen_on_belt_press: {
	type: 'boolean',
	default: false,
},
		chemical_station_clean: {
	type: 'boolean',
	default: false,
},
		chemical_station_operational: {
	type: 'boolean',
	default: false,
},
		chemical_station_flow_bins_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		level_100_floor_cleaned: {
	type: 'boolean',
	default: false,
},
		fas_station_clean: {
	type: 'boolean',
	default: false,
},
		fas_station_operational: {
	type: 'boolean',
	default: false,
},
		fas_station_flow_bins_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		fas_flow: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		disperger_bund_cleaned: {
	type: 'boolean',
	default: false,
},
		disperger_operation_good: {
	type: 'boolean',
	default: false,
},
		belt_presses_operation_good: {
	type: 'boolean',
	default: false,
},
		belt_presses_shower_nozzles_blocked: {
	type: 'boolean',
	default: false,
},
		contrashear_operation_good: {
	type: 'boolean',
	default: false,
},
		sludge_tank_one_not_overflowing: {
	type: 'boolean',
	default: false,
},
		omni_screens_operation_good: {
	type: 'boolean',
	default: false,
},
		slot_screens_operation_good: {
	type: 'boolean',
	default: false,
},
		holding_tanks_not_overflowing: {
	type: 'boolean',
	default: false,
},
		leaks_on_pipes_in_level_100: {
	type: 'boolean',
	default: false,
},
		celleco_cleaners_not_leaking: {
	type: 'boolean',
	default: false,
},
		fibermizer_operation_good: {
	type: 'boolean',
	default: false,
},
		core_cleaners_not_leaking: {
	type: 'boolean',
	default: false,
},
		pumps_in_level_100_operation_good: {
	type: 'boolean',
	default: false,
},
		basement_cleaned: {
	type: 'boolean',
	default: false,
},
		basement_tanks_not_overflowing: {
	type: 'boolean',
	default: false,
},
		pumps_in_the_basement_operation_good: {
	type: 'boolean',
	default: false,
},
		leaks_on_pipes_in_the_basement: {
	type: 'boolean',
	default: false,
},
		basement_chemicals_stations_cleaned: {
	type: 'boolean',
	default: false,
},
		basement_chemicals_stations_operational: {
	type: 'boolean',
	default: false,
},
		basement_chemicals_stations_flow_bins_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		day_store_cleaned: {
	type: 'boolean',
	default: false,
},
		rf_overall_condition_acceptable: {
	type: 'boolean',
	default: false,
},
		loading_conveyor_running: {
	type: 'boolean',
	default: false,
},
		weighing_conveyor_running: {
	type: 'boolean',
	default: false,
},
		paper_underneath_conveyors_levels_acceptable: {
	type: 'boolean',
	default: false,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		id: {
	type: 'number',
	isRequired: true,
	exclusiveMinimum: 0,
},
	},
} as const;

export const $TopTenRPNResponse = {
	properties: {
		labels: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
		data: {
	type: 'array',
	contains: {
		type: 'EquipmentRPNData',
	},
	isRequired: true,
},
		label: {
	type: 'string',
	isRequired: true,
},
	},
} as const;

export const $TopTenSDOResponse = {
	properties: {
		labels: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
		data: {
	type: 'array',
	contains: {
		type: 'EquipmentSDOData',
	},
	isRequired: true,
},
		label: {
	type: 'string',
	isRequired: true,
},
	},
} as const;

export const $Type = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $TypeCreate = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $TypeUpdate = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $TypesList = {
	properties: {
		types: {
	type: 'array',
	contains: {
		type: 'Type',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $User = {
	properties: {
		email: {
	type: 'any-of',
	contains: [{
	type: 'string',
	format: 'email',
}, {
	type: 'null',
}],
},
		first_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		last_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'string',
	isRequired: true,
	format: 'uuid4',
},
		confirmed: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
	isRequired: true,
},
		role: {
	type: 'Role',
	isRequired: true,
},
		is_admin: {
	type: 'boolean',
	isRequired: true,
},
		is_viewer: {
	type: 'boolean',
	isRequired: true,
},
		is_editor: {
	type: 'boolean',
	isRequired: true,
},
		full_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $ValidationError = {
	properties: {
		loc: {
	type: 'array',
	contains: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'number',
}],
},
	isRequired: true,
},
		msg: {
	type: 'string',
	isRequired: true,
},
		type: {
	type: 'string',
	isRequired: true,
},
	},
} as const;

export const $WaterTestCreate = {
	properties: {
		test_number: {
	type: 'string',
	isRequired: true,
},
		process_visor_id: {
	type: 'number',
	isRequired: true,
},
		daf_1_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		daf_2_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		daf_3_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		filtrate_tank_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		slc_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		effluent_dam_in_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		effluent_dam_out_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		test_result: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(pass|fail)$',
}, {
	type: 'null',
}],
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
	},
} as const;

export const $WaterTestPublic = {
	properties: {
		water_tests: {
	type: 'array',
	contains: {
		type: 'WaterTestResponse',
	},
	default: [],
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $WaterTestResponse = {
	properties: {
		test_number: {
	type: 'string',
	isRequired: true,
},
		process_visor_id: {
	type: 'number',
	isRequired: true,
},
		daf_1_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		daf_2_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		daf_3_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		filtrate_tank_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		slc_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		effluent_dam_in_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		effluent_dam_out_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		test_result: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(pass|fail)$',
}, {
	type: 'null',
}],
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		pass_or_fail: {
	type: 'boolean',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $WaterTestUpdate = {
	properties: {
		test_number: {
	type: 'string',
	isRequired: true,
},
		process_visor_id: {
	type: 'number',
	isRequired: true,
},
		daf_1_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		daf_2_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		daf_3_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		filtrate_tank_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		slc_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		effluent_dam_in_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		effluent_dam_out_ppm: {
	type: 'any-of',
	contains: [{
	type: 'number',
	minimum: 0,
}, {
	type: 'null',
}],
	isNullable: true,
},
		test_result: {
	type: 'any-of',
	contains: [{
	type: 'string',
	pattern: '^(pass|fail)$',
}, {
	type: 'null',
}],
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
	isNullable: true,
},
		id: {
	type: 'number',
	isRequired: true,
	exclusiveMinimum: 0,
},
	},
} as const;

export const $WorkAtHeightPermitCreate = {
	properties: {
		supervisor_name: {
	type: 'string',
	isRequired: true,
},
		worker_name: {
	type: 'string',
	isRequired: true,
},
		work_at_height_type: {
	type: 'string',
	pattern: '^(Roof Work|Scaffolding|Ladder|Elevated Platform|Other)$',
},
		fall_protection_required: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		fall_protection_type: {
	type: 'string',
	pattern: '^(Fall Arrest|Fall Restraint|Safety Nets|Other)$',
},
		maintenance_ptw_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $WorkAtHeightPermitRead = {
	properties: {
		supervisor_name: {
	type: 'string',
	isRequired: true,
},
		worker_name: {
	type: 'string',
	isRequired: true,
},
		work_at_height_type: {
	type: 'string',
	pattern: '^(Roof Work|Scaffolding|Ladder|Elevated Platform|Other)$',
},
		fall_protection_required: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		fall_protection_type: {
	type: 'string',
	pattern: '^(Fall Arrest|Fall Restraint|Safety Nets|Other)$',
},
		maintenance_ptw_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
	isRequired: true,
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $WorkAtHeightPermitUpdate = {
	properties: {
		supervisor_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		worker_name: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		work_at_height_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		fall_protection_required: {
	type: 'any-of',
	contains: [{
	type: 'boolean',
}, {
	type: 'null',
}],
},
		fall_protection_type: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		maintenance_ptw_id: {
	type: 'any-of',
	contains: [{
	type: 'number',
}, {
	type: 'null',
}],
},
		remarks: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $WorkAtHeightPermitsList = {
	properties: {
		permits: {
	type: 'array',
	contains: {
		type: 'WorkAtHeightPermitRead',
	},
	isRequired: true,
},
		count: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $app__schemas__maintenance__Category = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
	},
} as const;

export const $app__schemas__maintenance__CategoryCreate = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
	},
} as const;

export const $app__schemas__maintenance__CategoryUpdate = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		description: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;

export const $app__schemas__stores__Category = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		category_slug: {
	type: 'string',
	isRequired: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
		created_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		updated_at: {
	type: 'string',
	isRequired: true,
	format: 'date-time',
},
		items: {
	type: 'array',
	contains: {
		type: 'ItemRead',
	},
	isRequired: true,
},
	},
} as const;

export const $app__schemas__stores__CategoryCreate = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		category_slug: {
	type: 'string',
	isRequired: true,
},
	},
} as const;

export const $app__schemas__stores__CategoryUpdate = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		category_slug: {
	type: 'string',
	isRequired: true,
},
		id: {
	type: 'number',
	isRequired: true,
},
	},
} as const;