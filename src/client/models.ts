export type AuthResponse = {
	access_token: string;
	refresh_token: string;
	token_type: string;
	user: User;
};



export type Body_login_access_token_api_v1_auth_login_access_token_post = {
	grant_type?: string | null;
	username: string;
	password: string;
	scope?: string;
	client_id?: string | null;
	client_secret?: string | null;
};



export type Body_reset_password_api_v1_auth_reset_password_post = {
	token: string;
	new_password: string;
};



export type Body_test_email_api_v1_test_email_post = {
	email_to: string;
};



export type CategoriesList = {
	categories: Array<app__schemas__maintenance__Category>;
	count: number;
};



export type CategoryList = {
	categories: Array<CategoryRead>;
	count: number;
};



export type CategoryRead = {
	name: string;
	category_slug: string;
	id: number;
	created_at: string;
	updated_at: string;
};



export type ChangePassword = {
	old_password: string;
	new_password: string;
};



export type ConfinedSpacePermitCreate = {
	supervisor_name: string;
	entrant_name: string;
	rescue_plan?: string;
	maintenance_ptw_id: number;
	remarks?: string | null;
};



export type ConfinedSpacePermitRead = {
	supervisor_name: string;
	entrant_name: string;
	rescue_plan?: string;
	maintenance_ptw_id: number;
	remarks?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type ConfinedSpacePermitUpdate = {
	supervisor_name: string;
	entrant_name: string;
	rescue_plan?: string;
	maintenance_ptw_id: number;
	remarks?: string | null;
	id: number;
};



export type ConfinedSpacePermitsList = {
	permits: Array<ConfinedSpacePermitRead>;
	count: number;
};



export type Department = {
	name: string;
	description?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type DepartmentCreate = {
	name: string;
	description?: string | null;
};



export type DepartmentList = {
	departments: Array<Department>;
	count: number;
};



export type DepartmentUpdate = {
	name: string;
	description?: string | null;
	id: number;
};



export type Downtime = {
	id?: number | null | null;
	department: string;
	start_time: string;
	end_time?: string | null | null;
	description?: string | null | null;
	production_log_id: number;
	equipment_id: number;
	created_at: string;
	updated_at: string;
	equipment: EquipmentResponseModel;
	production_log: ProductionLog;
	duration: number;
};



export type DowntimeAnalysis = {
	labels: Array<string>;
	data: Array<EquipmentDowntimeData>;
	label: string;
};



export type DowntimeCreate = {
	id?: number | null | null;
	department: DowntimeDepartment;
	start_time: string;
	end_time?: string | null | null;
	description?: string | null | null;
	production_log_id: number;
	equipment_id: number;
};



export type DowntimeDepartment = 'Production' | 'Mechanical' | 'Process' | 'Electrical' | 'Clothing' | 'Instrumentation' | 'Safety' | 'Outside Service' | 'Planned Maintenance';



export type DowntimePublic = {
	items: Array<Downtime>;
	count: number;
};



export type DowntimeRead = {
	id?: number | null | null;
	department: string;
	start_time: string;
	end_time?: string | null | null;
	description?: string | null | null;
	production_log_id: number;
	equipment_id: number;
	created_at: string;
	updated_at: string;
};



export type DowntimeResponseModel = {
	id?: number | null | null;
	department: string;
	start_time: string;
	end_time?: string | null | null;
	description?: string | null | null;
	production_log_id: number;
	equipment_id: number;
};



export type DowntimeUpdate = {
	id?: number | null | null;
	department: DowntimeDepartment;
	start_time: string;
	end_time?: string | null | null;
	description?: string | null | null;
	production_log_id: number;
	equipment_id: number;
};



export type ElectricalIsolationPermitCreate = {
	supervisor_name: string;
	electrician_name: string;
	isolation_plan?: string;
	maintenance_ptw_id: number;
	remarks?: string | null;
};



export type ElectricalIsolationPermitRead = {
	supervisor_name: string;
	electrician_name: string;
	isolation_plan?: string;
	maintenance_ptw_id: number;
	remarks?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type ElectricalIsolationPermitUpdate = {
	supervisor_name?: string | null;
	electrician_name?: string | null;
	isolation_plan?: string | null;
	maintenance_ptw_id?: number | null;
	remarks?: string | null;
	id: number;
};



export type ElectricalIsolationPermitsList = {
	permits: Array<ElectricalIsolationPermitRead>;
	count: number;
};



export type EquipmentAnalysisResponse = {
	status_summary: StatusSummary;
	top_ten_rpn: TopTenRPNResponse;
	top_ten_sdo: TopTenSDOResponse;
	downtimes_analysis: DowntimeAnalysis;
	maintenance_requests_analysis: MaintenanceRequestAnalysis;
};



export type EquipmentCategory = 'Electrical' | 'Mechanical' | 'Civil' | 'Safety' | 'Other';



export type EquipmentCreateModel = {
	name: string;
	description: string;
	asset_number: string;
	manufacturer: string;
	model: string;
	category: EquipmentCategory;
	location: EquipmentLocation;
	status: EquipmentStatus;
	failure_modes: string;
	failure_effects: string;
	causes: string;
	controls: string;
	severity: number;
	detectability: number;
	occurrence: number;
};



export type EquipmentDowntimeData = {
	asset_number: string;
	location: string;
	machine_downtime: number;
	stock_prep_downtime: number;
};



export type EquipmentInDB = {
	id: number;
	name: string;
	description: string;
	asset_number: string;
	manufacturer: string;
	model: string;
	category: EquipmentCategory;
	location: EquipmentLocation;
	status: EquipmentStatus;
	failure_modes: string;
	failure_effects: string;
	causes: string;
	controls: string;
	severity: number;
	detectability: number;
	occurrence: number;
	rpn: number;
	created_at: string;
	updated_at: string;
	mtbf?: MTBFResponseModel | null;
	maintenance_requests?: Array<MaintenanceRequestRead>;
	machine_downtimes?: Array<DowntimeResponseModel>;
	stock_prep_downtimes?: Array<DowntimeResponseModel>;
};



export type EquipmentLocation = 'Paper machine' | 'Stock preparation';



export type EquipmentPublic = {
	equipments: Array<EquipmentInDB>;
	count: number;
};



export type EquipmentRPNData = {
	asset_number: string;
	status: string;
	rpn: number;
};



export type EquipmentRead = {
	id: number;
	name: string;
	description: string;
	asset_number: string;
	manufacturer: string;
	model: string;
	category: EquipmentCategory;
	location: EquipmentLocation;
	status: EquipmentStatus;
	failure_modes: string;
	failure_effects: string;
	causes: string;
	controls: string;
	severity: number;
	detectability: number;
	occurrence: number;
	rpn: number;
	created_at: string;
	updated_at: string;
};



export type EquipmentResponseModel = {
	id: number;
	name: string;
	description: string;
	asset_number: string;
	manufacturer: string;
	model: string;
	category: EquipmentCategory;
	location: EquipmentLocation;
	status: EquipmentStatus;
	failure_modes: string;
	failure_effects: string;
	causes: string;
	controls: string;
	severity: number;
	detectability: number;
	occurrence: number;
	rpn: number;
	created_at: string;
	updated_at: string;
};



export type EquipmentSDOData = {
	asset_number: string;
	severity: number;
	detectability: number;
	occurrence: number;
};



export type EquipmentStatus = 'Operational' | 'Non-operational' | 'Under repair' | 'Decommissioned';



export type EquipmentUpdateModel = {
	name?: string | null;
	description?: string | null;
	asset_number?: string | null;
	manufacturer?: string | null;
	model?: string | null;
	category?: EquipmentCategory | null;
	location?: EquipmentLocation | null;
	status?: EquipmentStatus | null;
	failure_modes?: string | null;
	failure_effects?: string | null;
	causes?: string | null;
	controls?: string | null;
	severity?: number | null;
	detectability?: number | null;
	occurrence?: number | null;
};



export type HTTPValidationError = {
	detail?: Array<ValidationError>;
};



export type HotWorkPermitCreate = {
	id?: number | null;
	supervisor_name: string;
	hot_work_type?: string;
	fire_watch_required?: boolean | null;
	fire_watch_name?: string;
	type_of_fire_extinguisher?: string;
	maintenance_ptw_id: number;
	remarks?: string | null;
};



export type HotWorkPermitRead = {
	id: number;
	supervisor_name: string;
	hot_work_type?: string;
	fire_watch_required?: boolean | null;
	fire_watch_name?: string;
	type_of_fire_extinguisher?: string;
	maintenance_ptw_id: number;
	remarks?: string | null;
	created_at: string;
	updated_at: string;
};



export type HotWorkPermitUpdate = {
	id: number;
	supervisor_name?: string | null;
	hot_work_type?: string | null;
	fire_watch_required?: boolean | null;
	fire_watch_name?: string | null;
	type_of_fire_extinguisher?: string | null;
	maintenance_ptw_id?: number | null;
	remarks?: string | null;
};



export type HotWorkPermitsList = {
	permits: Array<HotWorkPermitRead>;
	count: number;
};



export type Inventory = {
	item_id: number;
	quantity: number;
	reorder_level: number;
	reorder_quantity: number;
	reserved_quantity?: number | null;
	remarks?: string | null;
	last_order_date?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
	item: ItemRead;
};



export type InventoryCreate = {
	item_id: number;
	quantity: number;
	reorder_level: number;
	reorder_quantity: number;
	reserved_quantity?: number | null;
	remarks?: string | null;
	last_order_date?: string | null;
};



export type InventoryList = {
	inventory: Array<InventoryRead>;
	count: number;
};



export type InventoryRead = {
	item_id: number;
	quantity: number;
	reorder_level: number;
	reorder_quantity: number;
	reserved_quantity?: number | null;
	remarks?: string | null;
	last_order_date?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type InventoryUpdate = {
	item_id?: number | null;
	quantity?: number | null;
	reorder_level?: number | null;
	reorder_quantity?: number | null;
	reserved_quantity?: number | null;
	remarks?: string | null;
	last_order_date?: string | null;
	id: number;
};



export type Item = {
	name: string;
	item_code: string;
	description: string;
	unit_price: number;
	category_id: number;
	is_active?: boolean | null;
	remarks?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
	category: CategoryRead;
	inventory?: InventoryRead | null;
	orders_items?: Array<OrderItemRead> | null;
};



export type ItemCreate = {
	name: string;
	item_code: string;
	description: string;
	unit_price: number;
	category_id: number;
	is_active?: boolean | null;
	remarks?: string | null;
};



export type ItemList = {
	items: Array<ItemRead>;
	count: number;
};



export type ItemRead = {
	name: string;
	item_code: string;
	description: string;
	unit_price: number;
	category_id: number;
	is_active?: boolean | null;
	remarks?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type MTBFCreateModel = {
	last_failure?: string | null;
	latest_failure?: string | null;
};



export type MTBFInDB = {
	id: number;
	last_failure: string | null;
	latest_failure: string | null;
	mtbf: number;
	created_at: string;
	updated_at: string;
	equipment: EquipmentResponseModel;
};



export type MTBFResponseModel = {
	id: number;
	last_failure: string | null;
	latest_failure: string | null;
	mtbf: number;
	created_at: string;
	updated_at: string;
};



export type MTBFUpdateModel = {
	last_failure?: string | null;
	latest_failure?: string | null;
	equipment_id?: number | null;
};



export type MachineDCSRelatedCheckCreate = {
	process_visor_id: number;
	dcs_related_check_number: string;
	ww1_makeup_open?: boolean;
	fresh_cold_water_tank_level?: number | null | null;
	machine_chest2_consistency?: number | null | null;
	stock_flow_valve_opening?: number | null | null;
	stock_flow?: number | null | null;
	fan_pump_motor_speed?: number | null | null;
	fan_pump_motor_current_load?: number | null | null;
	slice_opening?: number | null | null;
	jet_to_wire_ratio?: number | null | null;
	headbox_pressure?: number | null | null;
	trim_nozzle_pressure?: number | null | null;
	uhle_box_pressure?: number | null | null;
	spr_ds_air_pressure?: number | null | null;
	spr_nds_air_pressure?: number | null | null;
	spr_ds_nip_loading?: number | null | null;
	spr_nds_nip_loading?: number | null | null;
	second_press_ds_air_pressure?: number | null | null;
	second_press_nds_air_pressure?: number | null | null;
	second_press_ds_nip_loading?: number | null | null;
	second_press_nds_nip_loading?: number | null | null;
	main_steam_pressure?: number | null | null;
	yankee_steam_pressure?: number | null | null;
	yankee_dp?: number | null | null;
	blow_through_steam_pressure?: number | null | null;
	blow_through_steam_control_on_remote?: boolean;
	steambox_pressure?: number | null | null;
	steambox_temperature?: number | null | null;
	sprayboom_pressure?: number | null | null;
	mixing_pot_temperature?: number | null | null;
	de_hood_temperature?: number | null | null;
	we_hood_temperature?: number | null | null;
	hoods_exhaust_humidity?: number | null | null;
	hoods_exhaust_air_temperature?: number | null | null;
	average_qcs_moisture?: number | null | null;
	remarks?: string | null | null;
};



export type MachineDCSRelatedCheckPublic = {
	machine_dcs_related_checks?: Array<MachineDCSRelatedCheckResponse>;
	count: number;
};



export type MachineDCSRelatedCheckResponse = {
	process_visor_id: number;
	dcs_related_check_number: string;
	ww1_makeup_open?: boolean;
	fresh_cold_water_tank_level?: number | null | null;
	machine_chest2_consistency?: number | null | null;
	stock_flow_valve_opening?: number | null | null;
	stock_flow?: number | null | null;
	fan_pump_motor_speed?: number | null | null;
	fan_pump_motor_current_load?: number | null | null;
	slice_opening?: number | null | null;
	jet_to_wire_ratio?: number | null | null;
	headbox_pressure?: number | null | null;
	trim_nozzle_pressure?: number | null | null;
	uhle_box_pressure?: number | null | null;
	spr_ds_air_pressure?: number | null | null;
	spr_nds_air_pressure?: number | null | null;
	spr_ds_nip_loading?: number | null | null;
	spr_nds_nip_loading?: number | null | null;
	second_press_ds_air_pressure?: number | null | null;
	second_press_nds_air_pressure?: number | null | null;
	second_press_ds_nip_loading?: number | null | null;
	second_press_nds_nip_loading?: number | null | null;
	main_steam_pressure?: number | null | null;
	yankee_steam_pressure?: number | null | null;
	yankee_dp?: number | null | null;
	blow_through_steam_pressure?: number | null | null;
	blow_through_steam_control_on_remote?: boolean;
	steambox_pressure?: number | null | null;
	steambox_temperature?: number | null | null;
	sprayboom_pressure?: number | null | null;
	mixing_pot_temperature?: number | null | null;
	de_hood_temperature?: number | null | null;
	we_hood_temperature?: number | null | null;
	hoods_exhaust_humidity?: number | null | null;
	hoods_exhaust_air_temperature?: number | null | null;
	average_qcs_moisture?: number | null | null;
	remarks?: string | null | null;
	id: number;
	hood_temperature_diff: number;
	created_at: string;
	updated_at: string;
};



export type MachineDCSRelatedCheckUpdate = {
	process_visor_id: number;
	dcs_related_check_number: string;
	ww1_makeup_open?: boolean;
	fresh_cold_water_tank_level?: number | null | null;
	machine_chest2_consistency?: number | null | null;
	stock_flow_valve_opening?: number | null | null;
	stock_flow?: number | null | null;
	fan_pump_motor_speed?: number | null | null;
	fan_pump_motor_current_load?: number | null | null;
	slice_opening?: number | null | null;
	jet_to_wire_ratio?: number | null | null;
	headbox_pressure?: number | null | null;
	trim_nozzle_pressure?: number | null | null;
	uhle_box_pressure?: number | null | null;
	spr_ds_air_pressure?: number | null | null;
	spr_nds_air_pressure?: number | null | null;
	spr_ds_nip_loading?: number | null | null;
	spr_nds_nip_loading?: number | null | null;
	second_press_ds_air_pressure?: number | null | null;
	second_press_nds_air_pressure?: number | null | null;
	second_press_ds_nip_loading?: number | null | null;
	second_press_nds_nip_loading?: number | null | null;
	main_steam_pressure?: number | null | null;
	yankee_steam_pressure?: number | null | null;
	yankee_dp?: number | null | null;
	blow_through_steam_pressure?: number | null | null;
	blow_through_steam_control_on_remote?: boolean;
	steambox_pressure?: number | null | null;
	steambox_temperature?: number | null | null;
	sprayboom_pressure?: number | null | null;
	mixing_pot_temperature?: number | null | null;
	de_hood_temperature?: number | null | null;
	we_hood_temperature?: number | null | null;
	hoods_exhaust_humidity?: number | null | null;
	hoods_exhaust_air_temperature?: number | null | null;
	average_qcs_moisture?: number | null | null;
	remarks?: string | null | null;
	id: number;
};



export type MachineFieldCheckCreate = {
	process_visor_id: number;
	field_check_number: string;
	wire_supplier?: string | null | null;
	wire_age?: number | null | null;
	wire_tension?: number | null | null;
	wire_hp_shower_nozzles_blocked?: boolean;
	wire_hp_shower_oscillates?: boolean;
	wire_hp_pressure?: number | null | null;
	felt_supplier?: string | null | null;
	felt_age?: number | null | null;
	felt_tension?: number | null | null;
	felt_hp_shower_nozzles_blocked?: boolean;
	felt_hp_shower_oscillates?: boolean;
	felt_hp_pressure?: number | null | null;
	creping_blade_pressure?: number | null | null;
	creping_blade_stickout?: number | null | null;
	cleaning_blade_pressure?: number | null | null;
	knockoff_blade_pressure?: number | null | null;
	purgo2_water_quality_good?: boolean;
	purgo2_saturation_good?: boolean;
	purgo2_level_good?: boolean;
	auxiguard_dumping_rejects?: boolean;
	machine_floor_cleaned?: boolean;
	mezzanine_floor_cleaned?: boolean;
	machine_frames_and_walkways_cleaned?: boolean;
	remarks?: string | null | null;
};



export type MachineFieldCheckPublic = {
	machine_field_checks?: Array<MachineFieldCheckResponse>;
	count: number;
};



export type MachineFieldCheckResponse = {
	process_visor_id: number;
	field_check_number: string;
	wire_supplier?: string | null | null;
	wire_age?: number | null | null;
	wire_tension?: number | null | null;
	wire_hp_shower_nozzles_blocked?: boolean;
	wire_hp_shower_oscillates?: boolean;
	wire_hp_pressure?: number | null | null;
	felt_supplier?: string | null | null;
	felt_age?: number | null | null;
	felt_tension?: number | null | null;
	felt_hp_shower_nozzles_blocked?: boolean;
	felt_hp_shower_oscillates?: boolean;
	felt_hp_pressure?: number | null | null;
	creping_blade_pressure?: number | null | null;
	creping_blade_stickout?: number | null | null;
	cleaning_blade_pressure?: number | null | null;
	knockoff_blade_pressure?: number | null | null;
	purgo2_water_quality_good?: boolean;
	purgo2_saturation_good?: boolean;
	purgo2_level_good?: boolean;
	auxiguard_dumping_rejects?: boolean;
	machine_floor_cleaned?: boolean;
	mezzanine_floor_cleaned?: boolean;
	machine_frames_and_walkways_cleaned?: boolean;
	remarks?: string | null | null;
	id: number;
	water_system_checker: number;
	housekeeping_checker: number;
	hps_checker: number;
	created_at: string;
	updated_at: string;
};



export type MachineFieldCheckUpdate = {
	process_visor_id: number;
	field_check_number: string;
	wire_supplier?: string | null | null;
	wire_age?: number | null | null;
	wire_tension?: number | null | null;
	wire_hp_shower_nozzles_blocked?: boolean;
	wire_hp_shower_oscillates?: boolean;
	wire_hp_pressure?: number | null | null;
	felt_supplier?: string | null | null;
	felt_age?: number | null | null;
	felt_tension?: number | null | null;
	felt_hp_shower_nozzles_blocked?: boolean;
	felt_hp_shower_oscillates?: boolean;
	felt_hp_pressure?: number | null | null;
	creping_blade_pressure?: number | null | null;
	creping_blade_stickout?: number | null | null;
	cleaning_blade_pressure?: number | null | null;
	knockoff_blade_pressure?: number | null | null;
	purgo2_water_quality_good?: boolean;
	purgo2_saturation_good?: boolean;
	purgo2_level_good?: boolean;
	auxiguard_dumping_rejects?: boolean;
	machine_floor_cleaned?: boolean;
	mezzanine_floor_cleaned?: boolean;
	machine_frames_and_walkways_cleaned?: boolean;
	remarks?: string | null | null;
	id: number;
};



export type MaintenanceEvent = {
	event_number: string;
	description: string;
	completed?: boolean | null;
	planned_start: string;
	planned_end: string;
	actual_start?: string | null;
	actual_end?: string | null;
	started?: boolean | null;
	ended?: boolean | null;
	is_approved?: boolean | null;
	id: number;
	created_at: string;
	updated_at: string;
	maintenance_tickets?: Array<MaintenanceEventTicket> | null;
	planned_duration: string;
	actual_duration: string;
	planned_work_count: number;
	completed_work_count: number;
	planned_work_duration: string;
	completed_work_duration: string;
	work_completion_rate: number;
	work_efficiency: number;
};



export type MaintenanceEventAddResponse = {
	description: string;
	planned_start: string;
	planned_end: string;
	maintenance_tickets?: Array<MaintenanceEventTicketCreate> | null;
	event_number: string;
	planned_date: string;
	successfully_added?: Array<MaintenanceTicket> | null;
	failed_to_add?: Array<MaintenanceEventTicketCreate> | null;
	failed_to_add_reason?: Array<string> | null;
	planned_duration?: string | null;
};



export type MaintenanceEventCreate = {
	description: string;
	planned_start: string;
	planned_end: string;
	maintenance_tickets?: Array<MaintenanceEventTicketCreate> | null;
};



export type MaintenanceEventList = {
	maintenance_events: Array<MaintenanceEvent>;
	count: number;
};



export type MaintenanceEventRead = {
	event_number: string;
	description: string;
	completed?: boolean | null;
	planned_start: string;
	planned_end: string;
	actual_start?: string | null;
	actual_end?: string | null;
	started?: boolean | null;
	ended?: boolean | null;
	is_approved?: boolean | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type MaintenanceEventTicket = {
	maintenance_event_id: number;
	maintenance_ticket_id: number;
	is_completed: boolean;
	remarks?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
	maintenance_event: MaintenanceEventRead;
	maintenance_ticket: MaintenanceTicketRead;
};



export type MaintenanceEventTicketCreate = {
	maintenance_event_id: number;
	maintenance_ticket_id: number;
	is_completed: boolean;
	remarks?: string | null;
};



export type MaintenanceEventTicketRead = {
	maintenance_event_id: number;
	maintenance_ticket_id: number;
	is_completed: boolean;
	remarks?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type MaintenanceEventUpdate = {
	event_number?: string | null;
	description?: string | null;
	completed?: boolean | null;
	planned_start?: string | null;
	planned_end?: string | null;
	actual_start?: string | null;
	actual_end?: string | null;
	started?: boolean | null;
	ended?: boolean | null;
	is_approved?: boolean | null;
	id: number;
};



export type MaintenancePTW = {
	ptw_number: string;
	requestor_name: string;
	department_id: number;
	maintenance_tra_id: number;
	start_time: string;
	end_time?: string | null;
	work_description: string;
	is_completed?: boolean | null;
	remarks: string;
	id: number;
	created_at: string;
	updated_at: string;
	department: Department;
	maintenance_tra: MaintenanceTRARead;
};



export type MaintenancePTWCreate = {
	ptw_number?: string | null;
	requestor_name: string;
	department_id: number;
	maintenance_tra_id: number;
	start_time: string;
	end_time?: string | null;
	work_description: string;
	is_completed?: boolean | null;
	remarks: string;
};



export type MaintenancePTWList = {
	ptws: Array<MaintenancePTW>;
	count: number;
};



export type MaintenancePTWRead = {
	ptw_number: string;
	requestor_name: string;
	department_id: number;
	maintenance_tra_id: number;
	start_time: string;
	end_time?: string | null;
	work_description: string;
	is_completed?: boolean | null;
	remarks: string;
	id: number;
	created_at: string;
	updated_at: string;
};



export type MaintenancePTWUpdate = {
	ptw_number?: string | null;
	requestor_name?: string | null;
	department_id?: number | null;
	maintenance_tra_id?: number | null;
	start_time?: string | null;
	end_time?: string | null;
	work_description?: string | null;
	is_completed?: boolean | null;
	remarks?: string | null;
	id: number;
};



export type MaintenanceRequest = {
	rq_number: string;
	description: string;
	equipment_id: number;
	category_id: number;
	department_id: number;
	status_id: number;
	type_id: number;
	is_validated: boolean;
	is_a_call_out: boolean;
	id: number;
	created_at: string;
	updated_at: string;
	category: app__schemas__maintenance__Category;
	department: Department;
	status: Status;
	type: Type;
	equipment: EquipmentRead;
};



export type MaintenanceRequestAnalysis = {
	labels: Array<string>;
	data: Array<MaintenanceRequestData>;
	label: string;
};



export type MaintenanceRequestCreate = {
	rq_number?: string | null;
	description: string;
	equipment_id: number;
	category_id: number;
	department_id: number;
	status_id: number;
	type_id: number;
	is_validated: boolean;
	is_a_call_out: boolean;
};



export type MaintenanceRequestData = {
	asset_number: string;
	maintenance_request: number;
};



export type MaintenanceRequestList = {
	requests: Array<MaintenanceRequest>;
	count: number;
};



export type MaintenanceRequestRead = {
	rq_number: string;
	description: string;
	equipment_id: number;
	category_id: number;
	department_id: number;
	status_id: number;
	type_id: number;
	is_validated: boolean;
	is_a_call_out: boolean;
	id: number;
	created_at: string;
	updated_at: string;
};



export type MaintenanceRequestUpdate = {
	rq_number: string;
	description: string;
	equipment_id?: number | null;
	category_id?: number | null;
	department_id?: number | null;
	status_id?: number | null;
	type_id?: number | null;
	is_validated?: boolean | null;
	is_a_call_out?: boolean | null;
	id: number;
};



export type MaintenanceTRA = {
	ra_number: string;
	steps: string;
	maintenance_ticket_id: number;
	hazards: string;
	controls: string;
	supervisor: string;
	date?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
	maintenance_ticket: MaintenanceTicketRead;
};



export type MaintenanceTRACreate = {
	ra_number?: string | null;
	steps: string;
	maintenance_ticket_id: number;
	hazards: string;
	controls: string;
	supervisor: string;
	date?: string | null;
};



export type MaintenanceTRAList = {
	m_steps: Array<MaintenanceTRA>;
	count: number;
};



export type MaintenanceTRARead = {
	ra_number: string;
	steps: string;
	maintenance_ticket_id: number;
	hazards: string;
	controls: string;
	supervisor: string;
	date?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type MaintenanceTRAUpdate = {
	ra_number?: string | null;
	steps?: string | null;
	maintenance_ticket_id?: number | null;
	hazards?: string | null;
	controls?: string | null;
	supervisor?: string | null;
	date?: string | null;
	id: number;
};



export type MaintenanceTicket = {
	ticket_number: string;
	work_performed: string;
	maintenance_rq_id: number;
	start_time: string;
	end_time: string;
	is_completed: boolean;
	id: number;
	created_at: string;
	updated_at: string;
	duration: string;
	maintenance_request: MaintenanceRequestRead;
	m_steps?: Array<MaintenanceTRARead>;
	maintenance_events?: Array<MaintenanceEventTicketRead> | null;
};



export type MaintenanceTicketCreate = {
	ticket_number?: string | null;
	work_performed: string;
	maintenance_rq_id: number;
	start_time: string;
	end_time: string;
	is_completed: boolean;
};



export type MaintenanceTicketList = {
	tickets: Array<MaintenanceTicket>;
	count: number;
};



export type MaintenanceTicketRead = {
	ticket_number: string;
	work_performed: string;
	maintenance_rq_id: number;
	start_time: string;
	end_time: string;
	is_completed: boolean;
	id: number;
	created_at: string;
	updated_at: string;
};



export type MaintenanceTicketUpdate = {
	ticket_number?: string | null;
	work_performed?: string | null;
	maintenance_rq_id?: number | null;
	start_time?: string | null;
	end_time?: string | null;
	is_completed?: boolean | null;
	id: number;
};



export type OSHA300LogCreate = {
	log_number?: string | null;
	incident_date?: string | null;
	incident_type?: string | null;
	employee_name?: string | null;
	job_title?: string | null;
	department?: string | null;
	location?: string | null;
	description?: string | null;
	is_treated?: boolean | null;
	treatment_date?: string | null;
	treatment_type?: string | null;
	return_to_work_date?: string | null;
	lost_time?: boolean | null;
	lost_time_start?: string | null;
	lost_time_end?: string | null;
	lost_job_transfer?: boolean | null;
	lost_days_restriction_start?: string | null;
	lost_days_restriction_end?: string | null;
};



export type OSHA300LogList = {
	osha_300_logs: Array<OSHA300LogRead>;
	count: number;
};



export type OSHA300LogRead = {
	log_number: string;
	incident_date?: string | null;
	incident_type?: string | null;
	employee_name?: string | null;
	job_title?: string | null;
	department?: string | null;
	location?: string | null;
	description?: string | null;
	is_treated?: boolean | null;
	treatment_date?: string | null;
	treatment_type?: string | null;
	return_to_work_date?: string | null;
	lost_time?: boolean | null;
	lost_time_start?: string | null;
	lost_time_end?: string | null;
	lost_job_transfer?: boolean | null;
	lost_days_restriction_start?: string | null;
	lost_days_restriction_end?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
	lost_workdays: number;
	lost_days_transfer: number;
};



export type OSHA300LogUpdate = {
	log_number: string;
	incident_date?: string | null;
	incident_type?: string | null;
	employee_name?: string | null;
	job_title?: string | null;
	department?: string | null;
	location?: string | null;
	description?: string | null;
	is_treated?: boolean | null;
	treatment_date?: string | null;
	treatment_type?: string | null;
	return_to_work_date?: string | null;
	lost_time?: boolean | null;
	lost_time_start?: string | null;
	lost_time_end?: string | null;
	lost_job_transfer?: boolean | null;
	lost_days_restriction_start?: string | null;
	lost_days_restriction_end?: string | null;
	id: number;
};



export type Order = {
	order_number?: string | null;
	maintenance_requests_id?: number | null;
	date?: string | null;
	status?: string | null;
	remarks?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
	maintenance_request?: MaintenanceRequestRead | null;
	items: Array<OrderItemRead>;
};



export type OrderCreate = {
	order_number?: string | null;
	maintenance_requests_id?: number | null;
	date?: string | null;
	status?: string | null;
	remarks?: string | null;
	items: Array<OrderItemCreate>;
};



export type OrderItemCreate = {
	item_id: number;
	quantity: number;
};



export type OrderItemRead = {
	order_id?: number | null;
	item_id?: number | null;
	quantity?: number | null;
	id: number;
	total_price: number;
	created_at: string;
	updated_at: string;
};



export type OrderList = {
	items: Array<Order>;
	count: number;
};



export type OrderUpdate = {
	order_number?: string | null;
	maintenance_requests_id?: number | null;
	date?: string | null;
	status?: string | null;
	remarks?: string | null;
	id: number;
};



export type ProcessTestCreate = {
	test_number: string;
	process_visor_id: number;
	slushing_consistency?: number | null | null;
	dump_chest_actual_consistency?: number | null | null;
	dump_chest_dcs_consistency?: number | null | null;
	intermediate_chest_actual_consistency?: number | null | null;
	intermediate_chest_dcs_consistency?: number | null | null;
	vario_one_chute_actual_consistency?: number | null | null;
	vario_one_chute_dcs_consistency?: number | null | null;
	vario_one_handsheet_brightness?: number | null | null;
	vario_two_chute_actual_consistency?: number | null | null;
	vario_two_chute_dcs_consistency?: number | null | null;
	vario_two_handsheet_brightness?: number | null | null;
	disperger_chest_actual_consistency?: number | null | null;
	disperger_chest_dcs_consistency?: number | null | null;
	wire_press_output_actual_consistency?: number | null | null;
	delko_press_output_actual_consistency?: number | null | null;
	test_result: string | null;
	remarks?: string | null | null;
};



export type ProcessTestPublic = {
	process_tests?: Array<ProcessTestResponse>;
	count: number;
};



export type ProcessTestResponse = {
	test_number: string;
	process_visor_id: number;
	slushing_consistency?: number | null | null;
	dump_chest_actual_consistency?: number | null | null;
	dump_chest_dcs_consistency?: number | null | null;
	intermediate_chest_actual_consistency?: number | null | null;
	intermediate_chest_dcs_consistency?: number | null | null;
	vario_one_chute_actual_consistency?: number | null | null;
	vario_one_chute_dcs_consistency?: number | null | null;
	vario_one_handsheet_brightness?: number | null | null;
	vario_two_chute_actual_consistency?: number | null | null;
	vario_two_chute_dcs_consistency?: number | null | null;
	vario_two_handsheet_brightness?: number | null | null;
	disperger_chest_actual_consistency?: number | null | null;
	disperger_chest_dcs_consistency?: number | null | null;
	wire_press_output_actual_consistency?: number | null | null;
	delko_press_output_actual_consistency?: number | null | null;
	test_result: string | null;
	remarks?: string | null | null;
	id: number;
	pass_or_fail: boolean;
	created_at: string;
	updated_at: string;
};



export type ProcessTestUpdate = {
	test_number: string;
	process_visor_id: number;
	slushing_consistency?: number | null | null;
	dump_chest_actual_consistency?: number | null | null;
	dump_chest_dcs_consistency?: number | null | null;
	intermediate_chest_actual_consistency?: number | null | null;
	intermediate_chest_dcs_consistency?: number | null | null;
	vario_one_chute_actual_consistency?: number | null | null;
	vario_one_chute_dcs_consistency?: number | null | null;
	vario_one_handsheet_brightness?: number | null | null;
	vario_two_chute_actual_consistency?: number | null | null;
	vario_two_chute_dcs_consistency?: number | null | null;
	vario_two_handsheet_brightness?: number | null | null;
	disperger_chest_actual_consistency?: number | null | null;
	disperger_chest_dcs_consistency?: number | null | null;
	wire_press_output_actual_consistency?: number | null | null;
	delko_press_output_actual_consistency?: number | null | null;
	test_result: string | null;
	remarks?: string | null | null;
	id: number;
};



export type ProcessVisor = {
	visor_number: string;
	machine_operator_name?: string | null | null;
	machine_assisst_name?: string | null | null;
	stock_prep_operator_name?: string | null | null;
	stock_prep_assisst_name?: string | null | null;
	shift: string;
	started: boolean;
	completed: boolean;
	remarks?: string | null | null;
	id: number;
	field_check_count?: number | null | null;
	checklist_count?: number | null | null;
	created_at: string;
	updated_at: string;
	field_checks?: Array<MachineFieldCheckResponse> | null;
	dcs_related_checks?: Array<MachineDCSRelatedCheckResponse> | null;
	stock_prep_field_checks?: Array<StockPrepFieldCheckResponse> | null;
	stock_prep_dcs_related_checks?: Array<StockPrepDCSRelatedCheckResponse> | null;
	process_tests?: Array<ProcessTestResponse> | null;
	water_tests?: Array<WaterTestResponse> | null;
};



export type ProcessVisorCreate = {
	visor_number: string;
	machine_operator_name?: string | null | null;
	machine_assisst_name?: string | null | null;
	stock_prep_operator_name?: string | null | null;
	stock_prep_assisst_name?: string | null | null;
	shift: string;
	started: boolean;
	completed: boolean;
	remarks?: string | null | null;
};



export type ProcessVisorPublic = {
	machine_visors?: Array<ProcessVisorResponse>;
	count: number;
};



export type ProcessVisorResponse = {
	visor_number: string;
	machine_operator_name?: string | null | null;
	machine_assisst_name?: string | null | null;
	stock_prep_operator_name?: string | null | null;
	stock_prep_assisst_name?: string | null | null;
	shift: string;
	started: boolean;
	completed: boolean;
	remarks?: string | null | null;
	id: number;
	field_check_count?: number | null | null;
	checklist_count?: number | null | null;
	created_at: string;
	updated_at: string;
};



export type ProcessVisorUpdate = {
	visor_number: string;
	machine_operator_name?: string | null | null;
	machine_assisst_name?: string | null | null;
	stock_prep_operator_name?: string | null | null;
	stock_prep_assisst_name?: string | null | null;
	shift: string;
	started: boolean;
	completed: boolean;
	remarks?: string | null | null;
	id: number;
};



export type ProductSpecification = {
	id?: number | null | null;
	product_code: string;
	description?: string | null | null;
	grammage_high?: number;
	grammage_target?: number;
	grammage_low?: number;
	md_tensile_high?: number;
	md_tensile_target?: number;
	md_tensile_low?: number;
	cd_tensile_high?: number;
	cd_tensile_target?: number;
	cd_tensile_low?: number;
	stretch_high?: number;
	stretch_target?: number;
	stretch_low?: number;
	L_value_high?: number;
	L_value_target?: number;
	L_value_low?: number;
	a_value_high?: number;
	a_value_target?: number;
	a_value_low?: number;
	b_value_high?: number;
	b_value_target?: number;
	b_value_low?: number;
	brightness_high?: number;
	brightness_target?: number;
	brightness_low?: number;
	is_active: boolean;
	is_wet_strength: boolean;
	remarks?: string | null | null;
	created_at: string;
	updated_at: string;
};



export type ProductSpecificationCreate = {
	id?: number | null | null;
	product_code: string;
	description?: string | null | null;
	grammage_high?: number;
	grammage_target?: number;
	grammage_low?: number;
	md_tensile_high?: number;
	md_tensile_target?: number;
	md_tensile_low?: number;
	cd_tensile_high?: number;
	cd_tensile_target?: number;
	cd_tensile_low?: number;
	stretch_high?: number;
	stretch_target?: number;
	stretch_low?: number;
	L_value_high?: number;
	L_value_target?: number;
	L_value_low?: number;
	a_value_high?: number;
	a_value_target?: number;
	a_value_low?: number;
	b_value_high?: number;
	b_value_target?: number;
	b_value_low?: number;
	brightness_high?: number;
	brightness_target?: number;
	brightness_low?: number;
	is_active: boolean;
	is_wet_strength: boolean;
	remarks?: string | null | null;
};



export type ProductSpecificationPublic = {
	specifications: Array<ProductSpecification>;
	count: number;
};



export type ProductSpecificationUpdate = {
	id?: number | null | null;
	product_code: string;
	description?: string | null | null;
	grammage_high?: number;
	grammage_target?: number;
	grammage_low?: number;
	md_tensile_high?: number;
	md_tensile_target?: number;
	md_tensile_low?: number;
	cd_tensile_high?: number;
	cd_tensile_target?: number;
	cd_tensile_low?: number;
	stretch_high?: number;
	stretch_target?: number;
	stretch_low?: number;
	L_value_high?: number;
	L_value_target?: number;
	L_value_low?: number;
	a_value_high?: number;
	a_value_target?: number;
	a_value_low?: number;
	b_value_high?: number;
	b_value_target?: number;
	b_value_low?: number;
	brightness_high?: number;
	brightness_target?: number;
	brightness_low?: number;
	is_active: boolean;
	is_wet_strength: boolean;
	remarks?: string | null | null;
};



export type ProductionKanban = {
	id?: number | null | null;
	kanban_number: string;
	operator_name?: string | null | null;
	assisst_name?: string | null | null;
	/**
	 * Must be a valid date
	 */
	planned_date: string;
	shift: string;
	started: boolean;
	completed: boolean;
	/**
	 * Must be a non-negative integer
	 */
	planned_quantity: number;
	/**
	 * Must be a non-negative float
	 */
	planned_down_time?: number | null | null;
	/**
	 * Must be a non-negative float
	 */
	available_production_time?: number | null | null;
	/**
	 * Must be a non-negative float
	 */
	planned_raw_material: number;
	/**
	 * Must be a non-negative float
	 */
	actual_raw_material?: number | null | null;
	planned_product_code: string;
	actual_product_code?: string | null | null;
	/**
	 * Must be a non-negative float
	 */
	electricity_consumption: number;
	/**
	 * Must be a non-negative float
	 */
	water_consumption: number;
	/**
	 * Must be a non-negative float
	 */
	energy_consumption: number;
	remarks?: string | null | null;
	created_at: string;
	updated_at: string;
	logs?: ProductionLogRead | null;
	production_rate?: number | null;
};



export type ProductionKanbanCreate = {
	id?: number | null | null;
	kanban_number?: string | null;
	operator_name?: string | null | null;
	assisst_name?: string | null | null;
	/**
	 * Must be a future date
	 */
	planned_date: string;
	shift: string;
	started: boolean;
	completed: boolean;
	/**
	 * Must be a non-negative integer
	 */
	planned_quantity: number;
	/**
	 * Must be a non-negative float
	 */
	planned_down_time?: number | null | null;
	/**
	 * Must be a non-negative float
	 */
	available_production_time?: number | null | null;
	/**
	 * Must be a non-negative float
	 */
	planned_raw_material: number;
	/**
	 * Must be a non-negative float
	 */
	actual_raw_material?: number | null | null;
	planned_product_code: string;
	actual_product_code?: string | null | null;
	/**
	 * Must be a non-negative float
	 */
	electricity_consumption: number;
	/**
	 * Must be a non-negative float
	 */
	water_consumption: number;
	/**
	 * Must be a non-negative float
	 */
	energy_consumption: number;
	remarks?: string | null | null;
};



export type ProductionKanbanPublic = {
	kanbans: Array<ProductionKanban>;
	count: number;
};



export type ProductionKanbanRead = {
	id?: number | null | null;
	kanban_number: string;
	operator_name?: string | null | null;
	assisst_name?: string | null | null;
	/**
	 * Must be a valid date
	 */
	planned_date: string;
	shift: string;
	started: boolean;
	completed: boolean;
	/**
	 * Must be a non-negative integer
	 */
	planned_quantity: number;
	/**
	 * Must be a non-negative float
	 */
	planned_down_time?: number | null | null;
	/**
	 * Must be a non-negative float
	 */
	available_production_time?: number | null | null;
	/**
	 * Must be a non-negative float
	 */
	planned_raw_material: number;
	/**
	 * Must be a non-negative float
	 */
	actual_raw_material?: number | null | null;
	planned_product_code: string;
	actual_product_code?: string | null | null;
	/**
	 * Must be a non-negative float
	 */
	electricity_consumption: number;
	/**
	 * Must be a non-negative float
	 */
	water_consumption: number;
	/**
	 * Must be a non-negative float
	 */
	energy_consumption: number;
	remarks?: string | null | null;
	created_at: string;
	updated_at: string;
};



export type ProductionKanbanUpdate = {
	id?: number | null | null;
	kanban_number: string;
	operator_name?: string | null | null;
	assisst_name?: string | null | null;
	/**
	 * Must be a future date
	 */
	planned_date?: string | null;
	shift: string;
	started: boolean;
	completed: boolean;
	/**
	 * Must be a non-negative integer
	 */
	planned_quantity: number;
	/**
	 * Must be a non-negative float
	 */
	planned_down_time?: number | null | null;
	/**
	 * Must be a non-negative float
	 */
	available_production_time?: number | null | null;
	/**
	 * Must be a non-negative float
	 */
	planned_raw_material: number;
	/**
	 * Must be a non-negative float
	 */
	actual_raw_material?: number | null | null;
	planned_product_code: string;
	actual_product_code?: string | null | null;
	/**
	 * Must be a non-negative float
	 */
	electricity_consumption: number;
	/**
	 * Must be a non-negative float
	 */
	water_consumption: number;
	/**
	 * Must be a non-negative float
	 */
	energy_consumption: number;
	remarks?: string | null | null;
};



export type ProductionLog = {
	id?: number | null | null;
	log_number: string;
	kanban_id: number;
	remarks?: string | null | null;
	created_at: string;
	updated_at: string;
	total_production: number;
	total_downtime: number;
	quality_rate: number;
	availability_rate: number;
	running_production_rate: number;
	average_machine_speed: number;
	actual_production_rate: number;
	performance: number;
	oee: number;
	reels?: Array<ReelRead> | null;
	downtime?: Array<DowntimeRead> | null;
	stock_prep_downtime?: Array<StockPrepDowntimeRead> | null;
	kanban: ProductionKanbanRead;
};



export type ProductionLogCreate = {
	id?: number | null | null;
	log_number?: string | null;
	kanban_id: number;
	remarks?: string | null | null;
};



export type ProductionLogPublic = {
	logs: Array<ProductionLog>;
	count: number;
};



export type ProductionLogRead = {
	id?: number | null | null;
	log_number: string;
	kanban_id: number;
	remarks?: string | null | null;
	created_at: string;
	updated_at: string;
};



export type ProductionLogUpdate = {
	id?: number | null | null;
	log_number: string;
	kanban_id: number;
	remarks?: string | null | null;
};



export type QualityInspectionItem = {
	id?: number | null | null;
	reel_id: number;
	grammage: number;
	md_tensile: number;
	cd_tensile: number;
	stretch: number;
	L_value: number;
	a_value: number;
	b_value: number;
	brightness: number;
	remark?: string | null | null;
	created_at: string;
	updated_at: string;
	reel: Reel;
};



export type QualityInspectionItemCreate = {
	id?: number | null | null;
	reel_id: number;
	grammage: number;
	md_tensile: number;
	cd_tensile: number;
	stretch: number;
	L_value: number;
	a_value: number;
	b_value: number;
	brightness: number;
	remark?: string | null | null;
};



export type QualityInspectionItemPublic = {
	count: number;
	items: Array<QualityInspectionItem>;
};



export type QualityInspectionItemRead = {
	id?: number | null | null;
	reel_id: number;
	grammage: number;
	md_tensile: number;
	cd_tensile: number;
	stretch: number;
	L_value: number;
	a_value: number;
	b_value: number;
	brightness: number;
	remark?: string | null | null;
	created_at: string;
	updated_at: string;
};



export type QualityInspectionItemUpdate = {
	id?: number | null | null;
	reel_id: number;
	grammage: number;
	md_tensile: number;
	cd_tensile: number;
	stretch: number;
	L_value: number;
	a_value: number;
	b_value: number;
	brightness: number;
	remark?: string | null | null;
};



export type Reel = {
	id?: number | null | null;
	reel_number: string;
	specification_id?: number | null | null;
	weight: number;
	grammage: number;
	deckle: number;
	start_time: string;
	end_time: string;
	machine_speed: number;
	pope_speed: number;
	is_saleable: boolean;
	has_joint: boolean;
	production_log_id: number;
	remark?: string | null | null;
	created_at: string;
	updated_at: string;
	production_log: ProductionLogRead;
	quality_inspection_items?: Array<QualityInspectionItemRead> | null;
};



export type ReelCreate = {
	id?: number | null | null;
	reel_number?: string | null;
	specification_id?: number | null | null;
	weight: number;
	grammage: number;
	deckle: number;
	start_time: string;
	end_time: string;
	machine_speed: number;
	pope_speed: number;
	is_saleable: boolean;
	has_joint: boolean;
	production_log_id: number;
	remark?: string | null | null;
};



export type ReelPublic = {
	items: Array<Reel>;
	count: number;
};



export type ReelRead = {
	id?: number | null | null;
	reel_number: string;
	specification_id?: number | null | null;
	weight: number;
	grammage: number;
	deckle: number;
	start_time: string;
	end_time: string;
	machine_speed: number;
	pope_speed: number;
	is_saleable: boolean;
	has_joint: boolean;
	production_log_id: number;
	remark?: string | null | null;
	created_at: string;
	updated_at: string;
};



export type ReelUpdate = {
	id?: number | null | null;
	reel_number: string;
	specification_id?: number | null | null;
	weight: number;
	grammage: number;
	deckle: number;
	start_time: string;
	end_time: string;
	machine_speed: number;
	pope_speed: number;
	is_saleable: boolean;
	has_joint: boolean;
	production_log_id: number;
	remark?: string | null | null;
};



export type RequisitionResponseModel = {
	order_number: string;
	maintenance_request_id?: number | null;
	remarks?: string | null;
	successfully_requested_items?: Array<ItemRead> | null;
	failed_requested_items?: Array<OrderItemCreate> | null;
	request_failure_reason?: Array<string> | null;
	planned_cost?: number | null;
};



export type RiggingAndLiftingPermitCreate = {
	supervisor_name: string;
	rigger_name?: string;
	load_description?: string;
	lifting_plan?: string;
	maintenance_ptw_id?: number | null;
	remarks?: string | null;
};



export type RiggingAndLiftingPermitRead = {
	supervisor_name: string;
	rigger_name?: string;
	load_description?: string;
	lifting_plan?: string;
	maintenance_ptw_id?: number | null;
	remarks?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type RiggingAndLiftingPermitUpdate = {
	supervisor_name?: string | null;
	rigger_name?: string | null;
	load_description?: string | null;
	lifting_plan?: string | null;
	maintenance_ptw_id?: number | null;
	remarks?: string | null;
	id: number;
};



export type RiggingAndLiftingPermitsList = {
	permits: Array<RiggingAndLiftingPermitRead>;
	count: number;
};



export type RiskAssessmentCreateModel = {
	assessor_name: string;
	date: string;
	location: string;
	description: string;
	hazards: string;
	controls: string;
	severity: string;
	likelihood: string;
};



export type RiskAssessmentResponseModel = {
	id: number;
	assessor_name: string;
	date: string;
	location: string;
	description: string;
	hazards: string;
	controls: string;
	severity: string;
	likelihood: string;
	created_at: string;
	updated_at: string;
};



export type RiskAssessmentUpdateModel = {
	assessor_name?: string | null;
	date?: string | null;
	location?: string | null;
	description?: string | null;
	hazards?: string | null;
	controls?: string | null;
	severity?: string | null;
	likelihood?: string | null;
};



export type RiskAssessmentsPublic = {
	risk_assessments: Array<RiskAssessmentResponseModel>;
	count: number;
};



export type Role = 'admin' | 'viewer' | 'editor';



export type SHEIncidentCreate = {
	log_number?: string | null;
	incident_date?: string | null;
	incident_type?: string | null;
	employee_name?: string | null;
	incident_title?: string | null;
	incident_description?: string | null;
	incident_location?: string | null;
	incident_injured?: string | null;
	incident_witness?: string | null;
	incident_reported?: boolean | null;
	incident_remarks?: string | null;
};



export type SHEIncidentList = {
	she_incidents: Array<SHEIncidentRead>;
	count: number;
};



export type SHEIncidentRead = {
	log_number: string;
	incident_date?: string | null;
	incident_type?: string | null;
	employee_name?: string | null;
	incident_title?: string | null;
	incident_description?: string | null;
	incident_location?: string | null;
	incident_injured?: string | null;
	incident_witness?: string | null;
	incident_reported?: boolean | null;
	incident_remarks?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type SHEIncidentUpdate = {
	log_number: string;
	incident_date?: string | null;
	incident_type?: string | null;
	employee_name?: string | null;
	incident_title?: string | null;
	incident_description?: string | null;
	incident_location?: string | null;
	incident_injured?: string | null;
	incident_witness?: string | null;
	incident_reported?: boolean | null;
	incident_remarks?: string | null;
	id: number;
};



export type SHEMeetingCreate = {
	log_number?: string | null;
	meeting_date?: string | null;
	meeting_type?: string | null;
	meeting_title?: string | null;
	meeting_location?: string | null;
	meeting_duration?: number | null;
	meeting_description?: string | null;
	meeting_facilitator?: string | null;
	meeting_attendees?: string | null;
	meeting_remarks?: string | null;
};



export type SHEMeetingList = {
	she_meetings: Array<SHEMeetingRead>;
	count: number;
};



export type SHEMeetingRead = {
	log_number: string;
	meeting_date?: string | null;
	meeting_type?: string | null;
	meeting_title?: string | null;
	meeting_location?: string | null;
	meeting_duration?: number | null;
	meeting_description?: string | null;
	meeting_facilitator?: string | null;
	meeting_attendees?: string | null;
	meeting_remarks?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type SHEMeetingUpdate = {
	log_number: string;
	meeting_date?: string | null;
	meeting_type?: string | null;
	meeting_title?: string | null;
	meeting_location?: string | null;
	meeting_duration?: number | null;
	meeting_description?: string | null;
	meeting_facilitator?: string | null;
	meeting_attendees?: string | null;
	meeting_remarks?: string | null;
	id: number;
};



export type SHEQInspectionCreate = {
	log_number?: string | null;
	inspection_date?: string | null;
	inspection_type?: string | null;
	inspection_location?: string | null;
	inspection_description?: string | null;
	inspection_duration?: number | null;
	inspection_inspector?: string | null;
	inspection_remarks?: string | null;
};



export type SHEQInspectionList = {
	sheq_inspections: Array<SHEQInspectionRead>;
	count: number;
};



export type SHEQInspectionRead = {
	log_number: string;
	inspection_date?: string | null;
	inspection_type?: string | null;
	inspection_location?: string | null;
	inspection_description?: string | null;
	inspection_duration?: number | null;
	inspection_inspector?: string | null;
	inspection_remarks?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type SHEQInspectionUpdate = {
	log_number: string;
	inspection_date?: string | null;
	inspection_type?: string | null;
	inspection_location?: string | null;
	inspection_description?: string | null;
	inspection_duration?: number | null;
	inspection_inspector?: string | null;
	inspection_remarks?: string | null;
	id: number;
};



export type SHEQTrainingCreate = {
	log_number?: string | null;
	training_date?: string | null;
	training_type?: string | null;
	training_title?: string | null;
	training_description?: string | null;
	training_location?: string | null;
	training_duration?: number | null;
	training_provider?: string | null;
	training_instructor?: string | null;
	training_remarks?: string | null;
};



export type SHEQTrainingList = {
	sheq_trainings: Array<SHEQTrainingRead>;
	count: number;
};



export type SHEQTrainingRead = {
	log_number: string;
	training_date?: string | null;
	training_type?: string | null;
	training_title?: string | null;
	training_description?: string | null;
	training_location?: string | null;
	training_duration?: number | null;
	training_provider?: string | null;
	training_instructor?: string | null;
	training_remarks?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type SHEQTrainingUpdate = {
	log_number: string;
	training_date?: string | null;
	training_type?: string | null;
	training_title?: string | null;
	training_description?: string | null;
	training_location?: string | null;
	training_duration?: number | null;
	training_provider?: string | null;
	training_instructor?: string | null;
	training_remarks?: string | null;
	id: number;
};



export type SafetyObersevationsPublic = {
	safety_observations: Array<SafetyObservationResponseModel>;
	count: number;
};



export type SafetyObservationCreateModel = {
	observer_name: string;
	date: string;
	location: string;
	description: string;
	severity: string;
	status: string;
};



export type SafetyObservationResponseModel = {
	id: number;
	observer_name: string;
	date: string;
	location: string;
	description: string;
	severity: string;
	status: string;
	created_at: string;
	updated_at: string;
};



export type SafetyObservationUpdateModel = {
	observer_name?: string | null;
	date?: string | null;
	location?: string | null;
	description?: string | null;
	severity?: string | null;
	status?: string | null;
};



export type Status = {
	name: string;
	description?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type StatusCreate = {
	name: string;
	description?: string | null;
};



export type StatusList = {
	statuses: Array<Status>;
	count: number;
};



export type StatusSummary = {
	total_count: number;
	operational_count?: number | null;
	non_operational_count?: number | null;
	under_repair_count?: number | null;
	decommissioned_count?: number | null;
};



export type StatusUpdate = {
	name: string;
	description?: string | null;
	id: number;
};



export type StockPrepDCSRelatedCheckCreate = {
	process_visor_id: number;
	dcs_related_check_number: string;
	daf_1_systems_running?: boolean;
	daf_1_saturation_system_running?: boolean;
	daf_1_feed_flow?: number | null | null;
	daf_1_feed_valve_opening?: number | null | null;
	daf_1_water_tanks_levels_acceptable?: boolean;
	daf_3__saturation_systems_running?: boolean;
	daf_3_saturation_good?: boolean;
	daf_3_feed_flow?: number | null | null;
	daf_3_feed_valve_opening?: number | null | null;
	daf_3_water_tanks_levels_acceptable?: boolean;
	hp_compressor_pressure?: number | null | null;
	weighing_conveyor_weight_on_dcs?: number | null | null;
	weighing_conveyor_weight_on_scale?: number | null | null;
	puper_sequence_auto?: boolean;
	paper_dryness_setting?: number | null | null;
	dilution_pulper_dumping_valve_opening_count_from_last_six_hours?: number | null | null;
	dumping_chest_level?: number | null | null;
	flushing_valve_operation_on_auto?: boolean;
	hdc_differential_pressure?: number | null | null;
	omni_screen_one_operation_good?: boolean;
	omnni_screen_one_rejects_flow?: number | null | null;
	omni_screen_two_operation_good?: boolean;
	omni_screen_three_operation_good?: boolean;
	omni_screen_three_rejects_flow?: number | null | null;
	intermediate_chest_level?: number | null | null;
	intermediate_chest_consistency?: number | null | null;
	intermediate_chest_discharge_flow?: number | null | null;
	pre_flotation_cells_operation_good?: boolean;
	celleco_cleaners_dp?: number | null | null;
	slots_screens_operation_good?: boolean;
	slot_screen_one_dp?: number | null | null;
	slot_screen_two_dp?: number | null | null;
	slot_screen_three_dp?: number | null | null;
	slot_screen_three_rejects_flow?: number | null | null;
	booster_pump_motor_current_load?: number | null | null;
	vario_split_speed?: number | null | null;
	vario_split_drive_current?: number | null | null;
	vario_split_fabric_age?: number | null | null;
	vario_split_supplier?: string | null | null;
	vario_split_stretch_roll_cylinders_pressure?: number | null | null;
	inlet_pressure_to_vario_one_header?: number | null | null;
	inlet_pressure_to_vario_two_header?: number | null | null;
	wire_press_operation_good?: boolean;
	wire_press_running?: boolean;
	wire_press_top_fabric_age?: number | null | null;
	wire_press_bottom_fabric_age?: number | null | null;
	flow_to_wire_press?: number | null | null;
	flow_rate_to_disperger?: number | null | null;
	disperger_power?: number | null | null;
	disperger_specific_energy?: number | null | null;
	disperger_cascade_flush_water_pressure?: number | null | null;
	heating_screw_temperature?: number | null | null;
	disperger_chest_level?: number | null | null;
	disperger_chest_dilution_water_flow?: number | null | null;
	disperger_chest_flow_to_post_flotation_cells?: number | null | null;
	disperger_chest_discharge_consistency?: number | null | null;
	post_flotation_cells_operation_good?: boolean;
	post_flotation_cells_pressure?: number | null | null;
	post_flotation_cells_levels_acceptable?: boolean;
	cell_four_outlevel_set_point?: number | null | null;
	delko_press_running?: boolean;
	delko_press_operation_good?: boolean;
	flow_rate_to_delko_press?: number | null | null;
	delko_press_top_fabric_age?: number | null | null;
	delko_press_bottom_fabric_age?: number | null | null;
	hd_storage_level?: number | null | null;
	remarks?: string | null | null;
};



export type StockPrepDCSRelatedCheckPublic = {
	stock_prep_dcs_related_checks?: Array<StockPrepDCSRelatedCheckResponse>;
	count: number;
};



export type StockPrepDCSRelatedCheckResponse = {
	process_visor_id: number;
	dcs_related_check_number: string;
	daf_1_systems_running?: boolean;
	daf_1_saturation_system_running?: boolean;
	daf_1_feed_flow?: number | null | null;
	daf_1_feed_valve_opening?: number | null | null;
	daf_1_water_tanks_levels_acceptable?: boolean;
	daf_3__saturation_systems_running?: boolean;
	daf_3_saturation_good?: boolean;
	daf_3_feed_flow?: number | null | null;
	daf_3_feed_valve_opening?: number | null | null;
	daf_3_water_tanks_levels_acceptable?: boolean;
	hp_compressor_pressure?: number | null | null;
	weighing_conveyor_weight_on_dcs?: number | null | null;
	weighing_conveyor_weight_on_scale?: number | null | null;
	puper_sequence_auto?: boolean;
	paper_dryness_setting?: number | null | null;
	dilution_pulper_dumping_valve_opening_count_from_last_six_hours?: number | null | null;
	dumping_chest_level?: number | null | null;
	flushing_valve_operation_on_auto?: boolean;
	hdc_differential_pressure?: number | null | null;
	omni_screen_one_operation_good?: boolean;
	omnni_screen_one_rejects_flow?: number | null | null;
	omni_screen_two_operation_good?: boolean;
	omni_screen_three_operation_good?: boolean;
	omni_screen_three_rejects_flow?: number | null | null;
	intermediate_chest_level?: number | null | null;
	intermediate_chest_consistency?: number | null | null;
	intermediate_chest_discharge_flow?: number | null | null;
	pre_flotation_cells_operation_good?: boolean;
	celleco_cleaners_dp?: number | null | null;
	slots_screens_operation_good?: boolean;
	slot_screen_one_dp?: number | null | null;
	slot_screen_two_dp?: number | null | null;
	slot_screen_three_dp?: number | null | null;
	slot_screen_three_rejects_flow?: number | null | null;
	booster_pump_motor_current_load?: number | null | null;
	vario_split_speed?: number | null | null;
	vario_split_drive_current?: number | null | null;
	vario_split_fabric_age?: number | null | null;
	vario_split_supplier?: string | null | null;
	vario_split_stretch_roll_cylinders_pressure?: number | null | null;
	inlet_pressure_to_vario_one_header?: number | null | null;
	inlet_pressure_to_vario_two_header?: number | null | null;
	wire_press_operation_good?: boolean;
	wire_press_running?: boolean;
	wire_press_top_fabric_age?: number | null | null;
	wire_press_bottom_fabric_age?: number | null | null;
	flow_to_wire_press?: number | null | null;
	flow_rate_to_disperger?: number | null | null;
	disperger_power?: number | null | null;
	disperger_specific_energy?: number | null | null;
	disperger_cascade_flush_water_pressure?: number | null | null;
	heating_screw_temperature?: number | null | null;
	disperger_chest_level?: number | null | null;
	disperger_chest_dilution_water_flow?: number | null | null;
	disperger_chest_flow_to_post_flotation_cells?: number | null | null;
	disperger_chest_discharge_consistency?: number | null | null;
	post_flotation_cells_operation_good?: boolean;
	post_flotation_cells_pressure?: number | null | null;
	post_flotation_cells_levels_acceptable?: boolean;
	cell_four_outlevel_set_point?: number | null | null;
	delko_press_running?: boolean;
	delko_press_operation_good?: boolean;
	flow_rate_to_delko_press?: number | null | null;
	delko_press_top_fabric_age?: number | null | null;
	delko_press_bottom_fabric_age?: number | null | null;
	hd_storage_level?: number | null | null;
	remarks?: string | null | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type StockPrepDCSRelatedCheckUpdate = {
	process_visor_id: number;
	dcs_related_check_number: string;
	daf_1_systems_running?: boolean;
	daf_1_saturation_system_running?: boolean;
	daf_1_feed_flow?: number | null | null;
	daf_1_feed_valve_opening?: number | null | null;
	daf_1_water_tanks_levels_acceptable?: boolean;
	daf_3__saturation_systems_running?: boolean;
	daf_3_saturation_good?: boolean;
	daf_3_feed_flow?: number | null | null;
	daf_3_feed_valve_opening?: number | null | null;
	daf_3_water_tanks_levels_acceptable?: boolean;
	hp_compressor_pressure?: number | null | null;
	weighing_conveyor_weight_on_dcs?: number | null | null;
	weighing_conveyor_weight_on_scale?: number | null | null;
	puper_sequence_auto?: boolean;
	paper_dryness_setting?: number | null | null;
	dilution_pulper_dumping_valve_opening_count_from_last_six_hours?: number | null | null;
	dumping_chest_level?: number | null | null;
	flushing_valve_operation_on_auto?: boolean;
	hdc_differential_pressure?: number | null | null;
	omni_screen_one_operation_good?: boolean;
	omnni_screen_one_rejects_flow?: number | null | null;
	omni_screen_two_operation_good?: boolean;
	omni_screen_three_operation_good?: boolean;
	omni_screen_three_rejects_flow?: number | null | null;
	intermediate_chest_level?: number | null | null;
	intermediate_chest_consistency?: number | null | null;
	intermediate_chest_discharge_flow?: number | null | null;
	pre_flotation_cells_operation_good?: boolean;
	celleco_cleaners_dp?: number | null | null;
	slots_screens_operation_good?: boolean;
	slot_screen_one_dp?: number | null | null;
	slot_screen_two_dp?: number | null | null;
	slot_screen_three_dp?: number | null | null;
	slot_screen_three_rejects_flow?: number | null | null;
	booster_pump_motor_current_load?: number | null | null;
	vario_split_speed?: number | null | null;
	vario_split_drive_current?: number | null | null;
	vario_split_fabric_age?: number | null | null;
	vario_split_supplier?: string | null | null;
	vario_split_stretch_roll_cylinders_pressure?: number | null | null;
	inlet_pressure_to_vario_one_header?: number | null | null;
	inlet_pressure_to_vario_two_header?: number | null | null;
	wire_press_operation_good?: boolean;
	wire_press_running?: boolean;
	wire_press_top_fabric_age?: number | null | null;
	wire_press_bottom_fabric_age?: number | null | null;
	flow_to_wire_press?: number | null | null;
	flow_rate_to_disperger?: number | null | null;
	disperger_power?: number | null | null;
	disperger_specific_energy?: number | null | null;
	disperger_cascade_flush_water_pressure?: number | null | null;
	heating_screw_temperature?: number | null | null;
	disperger_chest_level?: number | null | null;
	disperger_chest_dilution_water_flow?: number | null | null;
	disperger_chest_flow_to_post_flotation_cells?: number | null | null;
	disperger_chest_discharge_consistency?: number | null | null;
	post_flotation_cells_operation_good?: boolean;
	post_flotation_cells_pressure?: number | null | null;
	post_flotation_cells_levels_acceptable?: boolean;
	cell_four_outlevel_set_point?: number | null | null;
	delko_press_running?: boolean;
	delko_press_operation_good?: boolean;
	flow_rate_to_delko_press?: number | null | null;
	delko_press_top_fabric_age?: number | null | null;
	delko_press_bottom_fabric_age?: number | null | null;
	hd_storage_level?: number | null | null;
	remarks?: string | null | null;
	id: number;
};



export type StockPrepDowntime = {
	id?: number | null | null;
	department: string;
	start_time: string;
	end_time?: string | null | null;
	description?: string | null | null;
	production_log_id: number;
	equipment_id: number;
	created_at: string;
	updated_at: string;
	equipment: EquipmentResponseModel;
	production_log: ProductionLog;
	duration: number;
};



export type StockPrepDowntimeCreate = {
	id?: number | null | null;
	department: DowntimeDepartment;
	start_time: string;
	end_time?: string | null | null;
	description?: string | null | null;
	production_log_id: number;
	equipment_id: number;
};



export type StockPrepDowntimePublic = {
	items: Array<StockPrepDowntime>;
	count: number;
};



export type StockPrepDowntimeRead = {
	id?: number | null | null;
	department: string;
	start_time: string;
	end_time?: string | null | null;
	description?: string | null | null;
	production_log_id: number;
	equipment_id: number;
	created_at: string;
	updated_at: string;
};



export type StockPrepDowntimeUpdate = {
	id?: number | null | null;
	department: DowntimeDepartment;
	start_time: string;
	end_time?: string | null | null;
	description?: string | null | null;
	production_log_id: number;
	equipment_id: number;
};



export type StockPrepFieldCheckCreate = {
	field_check_number: string;
	process_visor_id: number;
	akupak_screw_running?: boolean;
	pulper_level_transmitter_purged?: boolean;
	reject_sorter_rejects_more_more_plastics?: boolean;
	hdc_elutration_lines_not_blocked?: boolean;
	hdc_not_rejecting_more_stock?: boolean;
	hdc_operation_good?: boolean;
	ldc_elutration_lines_not_blocked?: boolean;
	ldc_operation_good?: boolean;
	buffer_screen_running?: boolean;
	buffer_screen_rejects_coming_out?: boolean;
	buffer_screen_not_blocked?: boolean;
	level_200_floor_cleaned?: boolean;
	delko_press_running?: boolean;
	delko_press_operation_good?: boolean;
	flotation_cells_operation_good?: boolean;
	flocutation_on_flotation_cells_sight_glass_good?: boolean;
	dafs_bridge_operational?: boolean;
	dafs_scoop_operational?: boolean;
	dafs_screw_operational?: boolean;
	dafs_scoop_scooping?: boolean;
	dafs_sight_glasses_water_quality_acceptable?: boolean;
	dafs_sight_glasses_cleaned?: boolean;
	dafs_flocutation_can_be_seen_on_sight_glass?: boolean;
	dry_line_can_be_seen_on_belt_press?: boolean;
	chemical_station_clean?: boolean;
	chemical_station_operational?: boolean;
	chemical_station_flow_bins_levels_acceptable?: boolean;
	level_100_floor_cleaned?: boolean;
	fas_station_clean?: boolean;
	fas_station_operational?: boolean;
	fas_station_flow_bins_levels_acceptable?: boolean;
	fas_flow?: number | null | null;
	disperger_bund_cleaned?: boolean;
	disperger_operation_good?: boolean;
	belt_presses_operation_good?: boolean;
	belt_presses_shower_nozzles_blocked?: boolean;
	contrashear_operation_good?: boolean;
	sludge_tank_one_not_overflowing?: boolean;
	omni_screens_operation_good?: boolean;
	slot_screens_operation_good?: boolean;
	holding_tanks_not_overflowing?: boolean;
	leaks_on_pipes_in_level_100?: boolean;
	celleco_cleaners_not_leaking?: boolean;
	fibermizer_operation_good?: boolean;
	core_cleaners_not_leaking?: boolean;
	pumps_in_level_100_operation_good?: boolean;
	basement_cleaned?: boolean;
	basement_tanks_not_overflowing?: boolean;
	pumps_in_the_basement_operation_good?: boolean;
	leaks_on_pipes_in_the_basement?: boolean;
	basement_chemicals_stations_cleaned?: boolean;
	basement_chemicals_stations_operational?: boolean;
	basement_chemicals_stations_flow_bins_levels_acceptable?: boolean;
	day_store_cleaned?: boolean;
	rf_overall_condition_acceptable?: boolean;
	loading_conveyor_running?: boolean;
	weighing_conveyor_running?: boolean;
	paper_underneath_conveyors_levels_acceptable?: boolean;
	remarks?: string | null | null;
};



export type StockPrepFieldCheckPublic = {
	stock_prep_field_checks?: Array<StockPrepFieldCheckResponse>;
	count: number;
};



export type StockPrepFieldCheckResponse = {
	field_check_number: string;
	process_visor_id: number;
	akupak_screw_running?: boolean;
	pulper_level_transmitter_purged?: boolean;
	reject_sorter_rejects_more_more_plastics?: boolean;
	hdc_elutration_lines_not_blocked?: boolean;
	hdc_not_rejecting_more_stock?: boolean;
	hdc_operation_good?: boolean;
	ldc_elutration_lines_not_blocked?: boolean;
	ldc_operation_good?: boolean;
	buffer_screen_running?: boolean;
	buffer_screen_rejects_coming_out?: boolean;
	buffer_screen_not_blocked?: boolean;
	level_200_floor_cleaned?: boolean;
	delko_press_running?: boolean;
	delko_press_operation_good?: boolean;
	flotation_cells_operation_good?: boolean;
	flocutation_on_flotation_cells_sight_glass_good?: boolean;
	dafs_bridge_operational?: boolean;
	dafs_scoop_operational?: boolean;
	dafs_screw_operational?: boolean;
	dafs_scoop_scooping?: boolean;
	dafs_sight_glasses_water_quality_acceptable?: boolean;
	dafs_sight_glasses_cleaned?: boolean;
	dafs_flocutation_can_be_seen_on_sight_glass?: boolean;
	dry_line_can_be_seen_on_belt_press?: boolean;
	chemical_station_clean?: boolean;
	chemical_station_operational?: boolean;
	chemical_station_flow_bins_levels_acceptable?: boolean;
	level_100_floor_cleaned?: boolean;
	fas_station_clean?: boolean;
	fas_station_operational?: boolean;
	fas_station_flow_bins_levels_acceptable?: boolean;
	fas_flow?: number | null | null;
	disperger_bund_cleaned?: boolean;
	disperger_operation_good?: boolean;
	belt_presses_operation_good?: boolean;
	belt_presses_shower_nozzles_blocked?: boolean;
	contrashear_operation_good?: boolean;
	sludge_tank_one_not_overflowing?: boolean;
	omni_screens_operation_good?: boolean;
	slot_screens_operation_good?: boolean;
	holding_tanks_not_overflowing?: boolean;
	leaks_on_pipes_in_level_100?: boolean;
	celleco_cleaners_not_leaking?: boolean;
	fibermizer_operation_good?: boolean;
	core_cleaners_not_leaking?: boolean;
	pumps_in_level_100_operation_good?: boolean;
	basement_cleaned?: boolean;
	basement_tanks_not_overflowing?: boolean;
	pumps_in_the_basement_operation_good?: boolean;
	leaks_on_pipes_in_the_basement?: boolean;
	basement_chemicals_stations_cleaned?: boolean;
	basement_chemicals_stations_operational?: boolean;
	basement_chemicals_stations_flow_bins_levels_acceptable?: boolean;
	day_store_cleaned?: boolean;
	rf_overall_condition_acceptable?: boolean;
	loading_conveyor_running?: boolean;
	weighing_conveyor_running?: boolean;
	paper_underneath_conveyors_levels_acceptable?: boolean;
	remarks?: string | null | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type StockPrepFieldCheckUpdate = {
	field_check_number: string;
	process_visor_id: number;
	akupak_screw_running?: boolean;
	pulper_level_transmitter_purged?: boolean;
	reject_sorter_rejects_more_more_plastics?: boolean;
	hdc_elutration_lines_not_blocked?: boolean;
	hdc_not_rejecting_more_stock?: boolean;
	hdc_operation_good?: boolean;
	ldc_elutration_lines_not_blocked?: boolean;
	ldc_operation_good?: boolean;
	buffer_screen_running?: boolean;
	buffer_screen_rejects_coming_out?: boolean;
	buffer_screen_not_blocked?: boolean;
	level_200_floor_cleaned?: boolean;
	delko_press_running?: boolean;
	delko_press_operation_good?: boolean;
	flotation_cells_operation_good?: boolean;
	flocutation_on_flotation_cells_sight_glass_good?: boolean;
	dafs_bridge_operational?: boolean;
	dafs_scoop_operational?: boolean;
	dafs_screw_operational?: boolean;
	dafs_scoop_scooping?: boolean;
	dafs_sight_glasses_water_quality_acceptable?: boolean;
	dafs_sight_glasses_cleaned?: boolean;
	dafs_flocutation_can_be_seen_on_sight_glass?: boolean;
	dry_line_can_be_seen_on_belt_press?: boolean;
	chemical_station_clean?: boolean;
	chemical_station_operational?: boolean;
	chemical_station_flow_bins_levels_acceptable?: boolean;
	level_100_floor_cleaned?: boolean;
	fas_station_clean?: boolean;
	fas_station_operational?: boolean;
	fas_station_flow_bins_levels_acceptable?: boolean;
	fas_flow?: number | null | null;
	disperger_bund_cleaned?: boolean;
	disperger_operation_good?: boolean;
	belt_presses_operation_good?: boolean;
	belt_presses_shower_nozzles_blocked?: boolean;
	contrashear_operation_good?: boolean;
	sludge_tank_one_not_overflowing?: boolean;
	omni_screens_operation_good?: boolean;
	slot_screens_operation_good?: boolean;
	holding_tanks_not_overflowing?: boolean;
	leaks_on_pipes_in_level_100?: boolean;
	celleco_cleaners_not_leaking?: boolean;
	fibermizer_operation_good?: boolean;
	core_cleaners_not_leaking?: boolean;
	pumps_in_level_100_operation_good?: boolean;
	basement_cleaned?: boolean;
	basement_tanks_not_overflowing?: boolean;
	pumps_in_the_basement_operation_good?: boolean;
	leaks_on_pipes_in_the_basement?: boolean;
	basement_chemicals_stations_cleaned?: boolean;
	basement_chemicals_stations_operational?: boolean;
	basement_chemicals_stations_flow_bins_levels_acceptable?: boolean;
	day_store_cleaned?: boolean;
	rf_overall_condition_acceptable?: boolean;
	loading_conveyor_running?: boolean;
	weighing_conveyor_running?: boolean;
	paper_underneath_conveyors_levels_acceptable?: boolean;
	remarks?: string | null | null;
	id: number;
};



export type TopTenRPNResponse = {
	labels: Array<string>;
	data: Array<EquipmentRPNData>;
	label: string;
};



export type TopTenSDOResponse = {
	labels: Array<string>;
	data: Array<EquipmentSDOData>;
	label: string;
};



export type Type = {
	name: string;
	description?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type TypeCreate = {
	name: string;
	description?: string | null;
};



export type TypeUpdate = {
	name: string;
	description?: string | null;
	id: number;
};



export type TypesList = {
	types: Array<Type>;
	count: number;
};



export type User = {
	email?: string | null;
	first_name?: string | null;
	last_name?: string | null;
	id: string;
	confirmed: boolean | null;
	role: Role;
	is_admin: boolean;
	is_viewer: boolean;
	is_editor: boolean;
	full_name?: string | null;
};



export type UserUpdate = {
	email?: string | null;
	first_name?: string | null;
	last_name?: string | null;
};



export type ValidationError = {
	loc: Array<string | number>;
	msg: string;
	type: string;
};



export type WaterTestCreate = {
	test_number: string;
	process_visor_id: number;
	daf_1_ppm?: number | null | null;
	daf_2_ppm?: number | null | null;
	daf_3_ppm?: number | null | null;
	filtrate_tank_ppm?: number | null | null;
	slc_ppm?: number | null | null;
	effluent_dam_in_ppm?: number | null | null;
	effluent_dam_out_ppm?: number | null | null;
	test_result: string | null;
	remarks?: string | null | null;
};



export type WaterTestPublic = {
	water_tests?: Array<WaterTestResponse>;
	count: number;
};



export type WaterTestResponse = {
	test_number: string;
	process_visor_id: number;
	daf_1_ppm?: number | null | null;
	daf_2_ppm?: number | null | null;
	daf_3_ppm?: number | null | null;
	filtrate_tank_ppm?: number | null | null;
	slc_ppm?: number | null | null;
	effluent_dam_in_ppm?: number | null | null;
	effluent_dam_out_ppm?: number | null | null;
	test_result: string | null;
	remarks?: string | null | null;
	id: number;
	pass_or_fail: boolean;
	created_at: string;
	updated_at: string;
};



export type WaterTestUpdate = {
	test_number: string;
	process_visor_id: number;
	daf_1_ppm?: number | null | null;
	daf_2_ppm?: number | null | null;
	daf_3_ppm?: number | null | null;
	filtrate_tank_ppm?: number | null | null;
	slc_ppm?: number | null | null;
	effluent_dam_in_ppm?: number | null | null;
	effluent_dam_out_ppm?: number | null | null;
	test_result: string | null;
	remarks?: string | null | null;
	id: number;
};



export type WorkAtHeightPermitCreate = {
	supervisor_name: string;
	worker_name: string;
	work_at_height_type?: string;
	fall_protection_required?: boolean | null;
	fall_protection_type?: string;
	maintenance_ptw_id: number | null;
	remarks?: string | null;
};



export type WorkAtHeightPermitRead = {
	supervisor_name: string;
	worker_name: string;
	work_at_height_type?: string;
	fall_protection_required?: boolean | null;
	fall_protection_type?: string;
	maintenance_ptw_id: number | null;
	remarks?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type WorkAtHeightPermitUpdate = {
	supervisor_name?: string | null;
	worker_name?: string | null;
	work_at_height_type?: string | null;
	fall_protection_required?: boolean | null;
	fall_protection_type?: string | null;
	maintenance_ptw_id?: number | null;
	remarks?: string | null;
	id: number;
};



export type WorkAtHeightPermitsList = {
	permits: Array<WorkAtHeightPermitRead>;
	count: number;
};



export type app__schemas__maintenance__Category = {
	name: string;
	description?: string | null;
	id: number;
	created_at: string;
	updated_at: string;
};



export type app__schemas__maintenance__CategoryCreate = {
	name: string;
	description?: string | null;
};



export type app__schemas__maintenance__CategoryUpdate = {
	name: string;
	description?: string | null;
	id: number;
};



export type app__schemas__stores__Category = {
	name: string;
	category_slug: string;
	id: number;
	created_at: string;
	updated_at: string;
	items: Array<ItemRead>;
};



export type app__schemas__stores__CategoryCreate = {
	name: string;
	category_slug: string;
};



export type app__schemas__stores__CategoryUpdate = {
	name: string;
	category_slug: string;
	id: number;
};

