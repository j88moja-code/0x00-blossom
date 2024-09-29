import type { CancelablePromise } from './core/CancelablePromise';
import { OpenAPI } from './core/OpenAPI';
import { request as __request } from './core/request';

import type { AuthResponse,Body_login_access_token_api_v1_auth_login_access_token_post,Body_reset_password_api_v1_auth_reset_password_post,User,EquipmentCreateModel,EquipmentInDB,EquipmentPublic,EquipmentResponseModel,EquipmentUpdateModel,MTBFCreateModel,MTBFInDB,MTBFResponseModel,MTBFUpdateModel,EquipmentAnalysisResponse,MachineDCSRelatedCheckCreate,MachineDCSRelatedCheckPublic,MachineDCSRelatedCheckResponse,MachineDCSRelatedCheckUpdate,MachineFieldCheckCreate,MachineFieldCheckPublic,MachineFieldCheckResponse,MachineFieldCheckUpdate,app__schemas__maintenance__Category,app__schemas__maintenance__CategoryCreate,app__schemas__maintenance__CategoryUpdate,CategoriesList,Department,DepartmentCreate,DepartmentList,DepartmentUpdate,Status,StatusCreate,StatusList,StatusUpdate,Type,TypeCreate,TypesList,TypeUpdate,MaintenancePTW,MaintenancePTWCreate,MaintenancePTWList,MaintenancePTWRead,MaintenancePTWUpdate,MaintenanceRequest,MaintenanceRequestCreate,MaintenanceRequestList,MaintenanceRequestRead,MaintenanceRequestUpdate,MaintenanceTicket,MaintenanceTicketCreate,MaintenanceTicketList,MaintenanceTicketRead,MaintenanceTicketUpdate,MaintenanceTRA,MaintenanceTRACreate,MaintenanceTRAList,MaintenanceTRARead,MaintenanceTRAUpdate,MaintenanceEvent,MaintenanceEventAddResponse,MaintenanceEventCreate,MaintenanceEventList,MaintenanceEventRead,MaintenanceEventUpdate,app__schemas__stores__Category,app__schemas__stores__CategoryCreate,app__schemas__stores__CategoryUpdate,CategoryList,CategoryRead,Inventory,InventoryCreate,InventoryList,InventoryRead,InventoryUpdate,Item,ItemCreate,ItemList,ItemRead,Order,OrderCreate,OrderList,OrderUpdate,RequisitionResponseModel,ProcessVisor,ProcessVisorCreate,ProcessVisorPublic,ProcessVisorResponse,ProcessVisorUpdate,ProcessTestCreate,ProcessTestPublic,ProcessTestResponse,ProcessTestUpdate,Downtime,DowntimeCreate,DowntimePublic,DowntimeRead,DowntimeUpdate,ProductionLog,ProductionLogCreate,ProductionLogPublic,ProductionLogRead,ProductionLogUpdate,QualityInspectionItem,QualityInspectionItemCreate,QualityInspectionItemPublic,QualityInspectionItemRead,QualityInspectionItemUpdate,Reel,ReelCreate,ReelPublic,ReelRead,ReelUpdate,StockPrepDowntime,StockPrepDowntimeCreate,StockPrepDowntimePublic,StockPrepDowntimeRead,StockPrepDowntimeUpdate,ProductionKanbanCreate,ProductionKanbanPublic,ProductionKanbanRead,ProductionKanbanUpdate,ProductSpecification,ProductSpecificationCreate,ProductSpecificationPublic,ProductSpecificationUpdate,OSHA300LogCreate,OSHA300LogList,OSHA300LogRead,OSHA300LogUpdate,RiskAssessmentCreateModel,RiskAssessmentResponseModel,RiskAssessmentsPublic,RiskAssessmentUpdateModel,SafetyObersevationsPublic,SafetyObservationCreateModel,SafetyObservationResponseModel,SafetyObservationUpdateModel,SHEIncidentCreate,SHEIncidentList,SHEIncidentRead,SHEIncidentUpdate,SHEMeetingCreate,SHEMeetingList,SHEMeetingRead,SHEMeetingUpdate,SHEQInspectionCreate,SHEQInspectionList,SHEQInspectionRead,SHEQInspectionUpdate,SHEQTrainingCreate,SHEQTrainingList,SHEQTrainingRead,SHEQTrainingUpdate,StockPrepDCSRelatedCheckCreate,StockPrepDCSRelatedCheckPublic,StockPrepDCSRelatedCheckResponse,StockPrepDCSRelatedCheckUpdate,StockPrepFieldCheckCreate,StockPrepFieldCheckPublic,StockPrepFieldCheckResponse,StockPrepFieldCheckUpdate,ConfinedSpacePermitCreate,ConfinedSpacePermitRead,ConfinedSpacePermitsList,ConfinedSpacePermitUpdate,ElectricalIsolationPermitCreate,ElectricalIsolationPermitRead,ElectricalIsolationPermitsList,ElectricalIsolationPermitUpdate,HotWorkPermitCreate,HotWorkPermitRead,HotWorkPermitsList,HotWorkPermitUpdate,RiggingAndLiftingPermitCreate,RiggingAndLiftingPermitRead,RiggingAndLiftingPermitsList,RiggingAndLiftingPermitUpdate,WorkAtHeightPermitCreate,WorkAtHeightPermitRead,WorkAtHeightPermitsList,WorkAtHeightPermitUpdate,WaterTestCreate,WaterTestPublic,WaterTestResponse,WaterTestUpdate,ChangePassword,UserUpdate,Body_test_email_api_v1_test_email_post } from './models';

export type TDataLoginAccessTokenApiV1AuthLoginAccessTokenPost = {
                formData: Body_login_access_token_api_v1_auth_login_access_token_post
                
            }
export type TDataRefreshTokenApiV1AuthRefreshPost = {
                requestBody: string
                
            }
export type TDataRecoverPasswordApiV1AuthPasswordRecoveryEmailPost = {
                email: string
                
            }
export type TDataResetPasswordApiV1AuthResetPasswordPost = {
                requestBody: Body_reset_password_api_v1_auth_reset_password_post
                
            }

export class AuthenticationService {

	/**
	 * Login Access Token
	 * Login user
	 * @returns AuthResponse Successful Response
	 * @throws ApiError
	 */
	public static loginAccessTokenApiV1AuthLoginAccessTokenPost(data: TDataLoginAccessTokenApiV1AuthLoginAccessTokenPost): CancelablePromise<AuthResponse> {
		const {
formData,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/auth/login/access-token',
			formData: formData,
			mediaType: 'application/x-www-form-urlencoded',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Refresh Token
	 * Refresh user access token
	 * @returns AuthResponse Successful Response
	 * @throws ApiError
	 */
	public static refreshTokenApiV1AuthRefreshPost(data: TDataRefreshTokenApiV1AuthRefreshPost): CancelablePromise<AuthResponse> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/auth/refresh',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Test Token
	 * Test access token
	 * @returns User Successful Response
	 * @throws ApiError
	 */
	public static testTokenApiV1AuthLoginTestTokenPost(): CancelablePromise<User> {
				return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/auth/login/test-token',
		});
	}

	/**
	 * Recover Password
	 * Password recovery
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static recoverPasswordApiV1AuthPasswordRecoveryEmailPost(data: TDataRecoverPasswordApiV1AuthPasswordRecoveryEmailPost): CancelablePromise<unknown> {
		const {
email,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/auth/password-recovery/{email}',
			path: {
				email
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Reset Password
	 * Reset user password
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static resetPasswordApiV1AuthResetPasswordPost(data: TDataResetPasswordApiV1AuthResetPasswordPost): CancelablePromise<unknown> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/auth/reset-password',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

}

export type TDataGetAllEquipmentApiV1EquipmentGet = {
                limit?: number
location?: string
skip?: number
                
            }
export type TDataCreateEquipmentApiV1EquipmentPost = {
                requestBody: EquipmentCreateModel
                
            }
export type TDataGetEquipmentByIdApiV1EquipmentIdGet = {
                id: number
                
            }
export type TDataUpdateEquipmentApiV1EquipmentIdPut = {
                id: number
requestBody: EquipmentUpdateModel
                
            }
export type TDataDeleteEquipmentApiV1EquipmentIdDelete = {
                id: number
                
            }
export type TDataGetEquipmentByQueryApiV1EquipmentEquipmentGet = {
                q?: string
                
            }
export type TDataReadMtbfByIdApiV1EquipmentMtbfIdGet = {
                id: number
                
            }
export type TDataUpdateMtbfApiV1EquipmentMtbfIdPut = {
                id: number
requestBody: MTBFUpdateModel
                
            }
export type TDataDeleteMtbfApiV1EquipmentMtbfIdDelete = {
                id: number
                
            }
export type TDataCreateMtbfApiV1EquipmentMtbfPost = {
                equipmentId: number
requestBody: MTBFCreateModel
                
            }

export class EquipmentService {

	/**
	 * Get All Equipment
	 * Get all equipment with related spares and MTBFs
	 * @returns EquipmentPublic Successful Response
	 * @throws ApiError
	 */
	public static getAllEquipmentApiV1EquipmentGet(data: TDataGetAllEquipmentApiV1EquipmentGet = {}): CancelablePromise<EquipmentPublic> {
		const {
limit = 100,
location,
skip = 0,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/equipment/',
			query: {
				skip, limit, location
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Equipment
	 * @returns EquipmentResponseModel Successful Response
	 * @throws ApiError
	 */
	public static createEquipmentApiV1EquipmentPost(data: TDataCreateEquipmentApiV1EquipmentPost): CancelablePromise<EquipmentResponseModel> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/equipment/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Equipment By Id
	 * @returns EquipmentInDB Successful Response
	 * @throws ApiError
	 */
	public static getEquipmentByIdApiV1EquipmentIdGet(data: TDataGetEquipmentByIdApiV1EquipmentIdGet): CancelablePromise<EquipmentInDB> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/equipment/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Equipment
	 * Update equipment
	 * @returns EquipmentResponseModel Successful Response
	 * @throws ApiError
	 */
	public static updateEquipmentApiV1EquipmentIdPut(data: TDataUpdateEquipmentApiV1EquipmentIdPut): CancelablePromise<EquipmentResponseModel> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/equipment/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Equipment
	 * Delete equipment
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static deleteEquipmentApiV1EquipmentIdDelete(data: TDataDeleteEquipmentApiV1EquipmentIdDelete): CancelablePromise<unknown> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/equipment/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Equipment By Query
	 * @returns EquipmentPublic Successful Response
	 * @throws ApiError
	 */
	public static getEquipmentByQueryApiV1EquipmentEquipmentGet(data: TDataGetEquipmentByQueryApiV1EquipmentEquipmentGet = {}): CancelablePromise<EquipmentPublic> {
		const {
q,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/equipment/equipment',
			query: {
				q
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Mtbf By Id
	 * Get MTBF by id
	 * @returns MTBFInDB Successful Response
	 * @throws ApiError
	 */
	public static readMtbfByIdApiV1EquipmentMtbfIdGet(data: TDataReadMtbfByIdApiV1EquipmentMtbfIdGet): CancelablePromise<MTBFInDB> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/equipment/mtbf/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Mtbf
	 * Update MTBF
	 * @returns MTBFResponseModel Successful Response
	 * @throws ApiError
	 */
	public static updateMtbfApiV1EquipmentMtbfIdPut(data: TDataUpdateMtbfApiV1EquipmentMtbfIdPut): CancelablePromise<MTBFResponseModel> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/equipment/mtbf/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Mtbf
	 * Delete MTBF
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static deleteMtbfApiV1EquipmentMtbfIdDelete(data: TDataDeleteMtbfApiV1EquipmentMtbfIdDelete): CancelablePromise<unknown> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/equipment/mtbf/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Mtbf
	 * Create MTBF
	 * @returns MTBFResponseModel Successful Response
	 * @throws ApiError
	 */
	public static createMtbfApiV1EquipmentMtbfPost(data: TDataCreateMtbfApiV1EquipmentMtbfPost): CancelablePromise<MTBFResponseModel> {
		const {
equipmentId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/equipment/mtbf',
			query: {
				equipment_id: equipmentId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

}



export class EquipmentAnalysisService {

	/**
	 * Get Equipment Analysis
	 * Fetch data from the specified table and return data for charting.
	 * @returns EquipmentAnalysisResponse Successful Response
	 * @throws ApiError
	 */
	public static getEquipmentAnalysisApiV1EquipmentAnalysisGet(): CancelablePromise<EquipmentAnalysisResponse> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/equipment/analysis/',
		});
	}

}

export type TDataReadAllMachineDcsCheckApiV1McDcsChecksGet = {
                endDate?: string | null
limit?: number
search?: string | null
skip?: number
startDate?: string | null
                
            }
export type TDataCreateMachineDcsCheckApiV1McDcsChecksPost = {
                requestBody: MachineDCSRelatedCheckCreate
                
            }
export type TDataReadMachineDcsCheckByIdApiV1McDcsChecksIdGet = {
                id: number
                
            }
export type TDataUpdateMachineDcsCheckApiV1McDcsChecksIdPut = {
                id: number
requestBody: MachineDCSRelatedCheckUpdate
                
            }
export type TDataDeleteMachineDcsCheckApiV1McDcsChecksIdDelete = {
                id: number
                
            }
export type TDataReadMachineDcsCheckByVisorIdApiV1McDcsChecksPcvVisorIdMcDcsCheckGet = {
                visorId: number
                
            }
export type TDataUpdateMachineDcsCheckAfsApiV1McDcsChecksIdAfsDcsPut = {
                id: number
requestBody: MachineDCSRelatedCheckUpdate
                
            }
export type TDataUpdateMachineCfsApiV1McDcsChecksIdCfsDcsPut = {
                id: number
requestBody: MachineDCSRelatedCheckUpdate
                
            }
export type TDataUpdateMachineDesDcsApiV1McDcsChecksIdDesDcsPut = {
                id: number
requestBody: MachineDCSRelatedCheckUpdate
                
            }
export type TDataAddRemarksApiV1McDcsChecksIdAddRemarksPut = {
                id: number
remarks: string
                
            }

export class MCDcsChecksService {

	/**
	 * Read All Machine Dcs Check
	 * Get all machine dcs checks.
 * 
 * Args:
 * skip (int, optional): _description_. Defaults to 0.
 * limit (int, optional): _description_. Defaults to 100.
 * start_date (Optional[datetime], optional): _description_. Defaults to None.
 * end_date (Optional[datetime], optional): _description_. Defaults to None.
 * search (Optional[str], optional): _description_. Defaults to None.
 * 
 * Returns:
 * dict: _description_
	 * @returns MachineDCSRelatedCheckPublic Successful Response
	 * @throws ApiError
	 */
	public static readAllMachineDcsCheckApiV1McDcsChecksGet(data: TDataReadAllMachineDcsCheckApiV1McDcsChecksGet = {}): CancelablePromise<MachineDCSRelatedCheckPublic> {
		const {
endDate,
limit = 100,
search,
skip = 0,
startDate,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/mc-dcs-checks/',
			query: {
				skip, limit, start_date: startDate, end_date: endDate, search
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Machine Dcs Check
	 * Create machine dcs check.
 * 
 * Args:
 * machine_dcs_check_data (MachineDCSRelatedCheckCreate): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns MachineDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static createMachineDcsCheckApiV1McDcsChecksPost(data: TDataCreateMachineDcsCheckApiV1McDcsChecksPost): CancelablePromise<MachineDCSRelatedCheckResponse> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/mc-dcs-checks/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Machine Dcs Check By Id
	 * Get machine dcs check by id.
 * 
 * Args:
 * id (int): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns MachineDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static readMachineDcsCheckByIdApiV1McDcsChecksIdGet(data: TDataReadMachineDcsCheckByIdApiV1McDcsChecksIdGet): CancelablePromise<MachineDCSRelatedCheckResponse> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/mc-dcs-checks/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Machine Dcs Check
	 * Update machine dcs check.
 * 
 * Args:
 * id (int): _description_
 * machine_dcs_check_data (MachineDCSRelatedCheckUpdate): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns MachineDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateMachineDcsCheckApiV1McDcsChecksIdPut(data: TDataUpdateMachineDcsCheckApiV1McDcsChecksIdPut): CancelablePromise<MachineDCSRelatedCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/mc-dcs-checks/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Machine Dcs Check
	 * Delete machine dcs check.
 * 
 * Args:
 * id (int): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteMachineDcsCheckApiV1McDcsChecksIdDelete(data: TDataDeleteMachineDcsCheckApiV1McDcsChecksIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/mc-dcs-checks/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Machine Dcs Check By Visor Id
	 * Get machine dcs check by visor id.
 * 
 * Args:
 * visor_id (int): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns MachineDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static readMachineDcsCheckByVisorIdApiV1McDcsChecksPcvVisorIdMcDcsCheckGet(data: TDataReadMachineDcsCheckByVisorIdApiV1McDcsChecksPcvVisorIdMcDcsCheckGet): CancelablePromise<MachineDCSRelatedCheckResponse> {
		const {
visorId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/mc-dcs-checks/pcv/{visor_id}/mc-dcs-check',
			path: {
				visor_id: visorId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Machine Dcs Check Afs
	 * Update machine dcs check.
 * 
 * Args:
 * id (int): _description_
 * machine_dcs_check_data (MachineDCSRelatedCheckUpdate): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns MachineDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateMachineDcsCheckAfsApiV1McDcsChecksIdAfsDcsPut(data: TDataUpdateMachineDcsCheckAfsApiV1McDcsChecksIdAfsDcsPut): CancelablePromise<MachineDCSRelatedCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/mc-dcs-checks/{id}/afs-dcs',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Machine Cfs
	 * Update machine dcs check.
 * 
 * Args:
 * id (int): _description_
 * machine_dcs_check_data (MachineDCSRelatedCheckUpdate): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns MachineDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateMachineCfsApiV1McDcsChecksIdCfsDcsPut(data: TDataUpdateMachineCfsApiV1McDcsChecksIdCfsDcsPut): CancelablePromise<MachineDCSRelatedCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/mc-dcs-checks/{id}/cfs-dcs',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Machine Des Dcs
	 * Update machine dcs check.
 * 
 * Args:
 * id (int): _description_
 * machine_dcs_check_data (MachineDCSRelatedCheckUpdate): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns MachineDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateMachineDesDcsApiV1McDcsChecksIdDesDcsPut(data: TDataUpdateMachineDesDcsApiV1McDcsChecksIdDesDcsPut): CancelablePromise<MachineDCSRelatedCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/mc-dcs-checks/{id}/des-dcs',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Add Remarks
	 * Add remarks to machine dcs check.
 * 
 * Args:
 * id (int): _description_
 * remarks (str): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns MachineDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static addRemarksApiV1McDcsChecksIdAddRemarksPut(data: TDataAddRemarksApiV1McDcsChecksIdAddRemarksPut): CancelablePromise<MachineDCSRelatedCheckResponse> {
		const {
id,
remarks,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/mc-dcs-checks/{id}/add-remarks',
			path: {
				id
			},
			query: {
				remarks
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

}

export type TDataReadAllFieldChecksApiV1McFieldChecksGet = {
                endDate?: string | null
limit?: number
search?: string | null
skip?: number
startDate?: string | null
                
            }
export type TDataCreateFieldCheckApiV1McFieldChecksPost = {
                requestBody: MachineFieldCheckCreate
                
            }
export type TDataReadFieldCheckByIdApiV1McFieldChecksIdGet = {
                id: number
                
            }
export type TDataUpdateFieldCheckApiV1McFieldChecksIdPut = {
                id: number
requestBody: MachineFieldCheckUpdate
                
            }
export type TDataDeleteFieldCheckApiV1McFieldChecksIdDelete = {
                id: number
                
            }
export type TDataReadFieldCheckByVisorIdApiV1McFieldChecksPcvProcessVisorIdMcFieldCheckGet = {
                processVisorId: number
                
            }
export type TDataUpdateCrescentFormerSectionApiV1McFieldChecksIdCfsFcPut = {
                id: number
requestBody: MachineFieldCheckUpdate
                
            }
export type TDataUpdateDryEndSectionApiV1McFieldChecksIdDesFcPut = {
                id: number
requestBody: MachineFieldCheckUpdate
                
            }
export type TDataUpdateWaterSystemFieldCheckApiV1McFieldChecksIdWsFcPut = {
                id: number
requestBody: MachineFieldCheckUpdate
                
            }
export type TDataUpdateHousekeepingFieldCheckApiV1McFieldChecksIdHousekeepingPut = {
                id: number
requestBody: MachineFieldCheckUpdate
                
            }
export type TDataAddFieldCheckRemarksApiV1McFieldChecksIdAddRemarksPut = {
                id: number
remarks: string
                
            }

export class MCFieldChecksService {

	/**
	 * Read All Field Checks
	 * @returns MachineFieldCheckPublic Successful Response
	 * @throws ApiError
	 */
	public static readAllFieldChecksApiV1McFieldChecksGet(data: TDataReadAllFieldChecksApiV1McFieldChecksGet = {}): CancelablePromise<MachineFieldCheckPublic> {
		const {
endDate,
limit = 100,
search,
skip = 0,
startDate,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/mc-field-checks/',
			query: {
				skip, limit, start_date: startDate, end_date: endDate, search
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Field Check
	 * @returns MachineFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static createFieldCheckApiV1McFieldChecksPost(data: TDataCreateFieldCheckApiV1McFieldChecksPost): CancelablePromise<MachineFieldCheckResponse> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/mc-field-checks/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Field Check By Id
	 * @returns MachineFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static readFieldCheckByIdApiV1McFieldChecksIdGet(data: TDataReadFieldCheckByIdApiV1McFieldChecksIdGet): CancelablePromise<MachineFieldCheckResponse> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/mc-field-checks/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Field Check
	 * @returns MachineFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateFieldCheckApiV1McFieldChecksIdPut(data: TDataUpdateFieldCheckApiV1McFieldChecksIdPut): CancelablePromise<MachineFieldCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/mc-field-checks/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Field Check
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteFieldCheckApiV1McFieldChecksIdDelete(data: TDataDeleteFieldCheckApiV1McFieldChecksIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/mc-field-checks/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Field Check By Visor Id
	 * @returns MachineFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static readFieldCheckByVisorIdApiV1McFieldChecksPcvProcessVisorIdMcFieldCheckGet(data: TDataReadFieldCheckByVisorIdApiV1McFieldChecksPcvProcessVisorIdMcFieldCheckGet): CancelablePromise<MachineFieldCheckResponse> {
		const {
processVisorId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/mc-field-checks/pcv/{process_visor_id}/mc-field-check',
			path: {
				process_visor_id: processVisorId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Crescent Former Section
	 * @returns MachineFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateCrescentFormerSectionApiV1McFieldChecksIdCfsFcPut(data: TDataUpdateCrescentFormerSectionApiV1McFieldChecksIdCfsFcPut): CancelablePromise<MachineFieldCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/mc-field-checks/{id}/cfs-fc',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Dry End Section
	 * @returns MachineFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateDryEndSectionApiV1McFieldChecksIdDesFcPut(data: TDataUpdateDryEndSectionApiV1McFieldChecksIdDesFcPut): CancelablePromise<MachineFieldCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/mc-field-checks/{id}/des-fc',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Water System Field Check
	 * @returns MachineFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateWaterSystemFieldCheckApiV1McFieldChecksIdWsFcPut(data: TDataUpdateWaterSystemFieldCheckApiV1McFieldChecksIdWsFcPut): CancelablePromise<MachineFieldCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/mc-field-checks/{id}/ws-fc',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Housekeeping Field Check
	 * @returns MachineFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateHousekeepingFieldCheckApiV1McFieldChecksIdHousekeepingPut(data: TDataUpdateHousekeepingFieldCheckApiV1McFieldChecksIdHousekeepingPut): CancelablePromise<MachineFieldCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/mc-field-checks/{id}/housekeeping',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Add Field Check Remarks
	 * @returns MachineFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static addFieldCheckRemarksApiV1McFieldChecksIdAddRemarksPut(data: TDataAddFieldCheckRemarksApiV1McFieldChecksIdAddRemarksPut): CancelablePromise<MachineFieldCheckResponse> {
		const {
id,
remarks,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/mc-field-checks/{id}/add-remarks',
			path: {
				id
			},
			query: {
				remarks
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

}

export type TDataCreateCategoryApiV1MaintenanceCategoriesPost = {
                requestBody: app__schemas__maintenance__CategoryCreate
                
            }
export type TDataUpdateCategoryApiV1MaintenanceCategoriesIdPut = {
                id: number
requestBody: app__schemas__maintenance__CategoryUpdate
                
            }
export type TDataCreateDepartmentApiV1MaintenanceDepartmentsPost = {
                requestBody: DepartmentCreate
                
            }
export type TDataUpdateDepartmentApiV1MaintenanceDepartmentsIdPut = {
                id: number
requestBody: DepartmentUpdate
                
            }
export type TDataCreateStatusApiV1MaintenanceStatusesPost = {
                requestBody: StatusCreate
                
            }
export type TDataUpdateStatusApiV1MaintenanceStatusesIdPut = {
                id: number
requestBody: StatusUpdate
                
            }
export type TDataCreateTypeApiV1MaintenanceTypesPost = {
                requestBody: TypeCreate
                
            }
export type TDataUpdateTypeApiV1MaintenanceTypesIdPut = {
                id: number
requestBody: TypeUpdate
                
            }

export class MaintenanceSettingsService {

	/**
	 * Get Categories
	 * @returns CategoriesList Successful Response
	 * @throws ApiError
	 */
	public static getCategoriesApiV1MaintenanceCategoriesGet(): CancelablePromise<CategoriesList> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/maintenance/categories',
		});
	}

	/**
	 * Create Category
	 * @returns app__schemas__maintenance__Category Successful Response
	 * @throws ApiError
	 */
	public static createCategoryApiV1MaintenanceCategoriesPost(data: TDataCreateCategoryApiV1MaintenanceCategoriesPost): CancelablePromise<app__schemas__maintenance__Category> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/maintenance/categories',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Category
	 * @returns app__schemas__maintenance__Category Successful Response
	 * @throws ApiError
	 */
	public static updateCategoryApiV1MaintenanceCategoriesIdPut(data: TDataUpdateCategoryApiV1MaintenanceCategoriesIdPut): CancelablePromise<app__schemas__maintenance__Category> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/maintenance/categories/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Departments
	 * @returns DepartmentList Successful Response
	 * @throws ApiError
	 */
	public static getDepartmentsApiV1MaintenanceDepartmentsGet(): CancelablePromise<DepartmentList> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/maintenance/departments',
		});
	}

	/**
	 * Create Department
	 * @returns Department Successful Response
	 * @throws ApiError
	 */
	public static createDepartmentApiV1MaintenanceDepartmentsPost(data: TDataCreateDepartmentApiV1MaintenanceDepartmentsPost): CancelablePromise<Department> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/maintenance/departments',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Department
	 * @returns Department Successful Response
	 * @throws ApiError
	 */
	public static updateDepartmentApiV1MaintenanceDepartmentsIdPut(data: TDataUpdateDepartmentApiV1MaintenanceDepartmentsIdPut): CancelablePromise<Department> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/maintenance/departments/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Statuses
	 * @returns StatusList Successful Response
	 * @throws ApiError
	 */
	public static getStatusesApiV1MaintenanceStatusesGet(): CancelablePromise<StatusList> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/maintenance/statuses',
		});
	}

	/**
	 * Create Status
	 * @returns Status Successful Response
	 * @throws ApiError
	 */
	public static createStatusApiV1MaintenanceStatusesPost(data: TDataCreateStatusApiV1MaintenanceStatusesPost): CancelablePromise<Status> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/maintenance/statuses',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Status
	 * @returns Status Successful Response
	 * @throws ApiError
	 */
	public static updateStatusApiV1MaintenanceStatusesIdPut(data: TDataUpdateStatusApiV1MaintenanceStatusesIdPut): CancelablePromise<Status> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/maintenance/statuses/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Types
	 * @returns TypesList Successful Response
	 * @throws ApiError
	 */
	public static getTypesApiV1MaintenanceTypesGet(): CancelablePromise<TypesList> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/maintenance/types',
		});
	}

	/**
	 * Create Type
	 * @returns Type Successful Response
	 * @throws ApiError
	 */
	public static createTypeApiV1MaintenanceTypesPost(data: TDataCreateTypeApiV1MaintenanceTypesPost): CancelablePromise<Type> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/maintenance/types',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Type
	 * @returns Type Successful Response
	 * @throws ApiError
	 */
	public static updateTypeApiV1MaintenanceTypesIdPut(data: TDataUpdateTypeApiV1MaintenanceTypesIdPut): CancelablePromise<Type> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/maintenance/types/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

}

export type TDataGetMaintenanceRequestsApiV1MaintenanceRequestsGet = {
                endDate?: string | null
filter?: string | null
limit?: number
search?: string | null
skip?: number
startDate?: string | null
status?: string | null
                
            }
export type TDataCreateMaintenanceRequestApiV1MaintenanceRequestsPost = {
                equipmentId: number
requestBody: MaintenanceRequestCreate
                
            }
export type TDataGetMaintenanceRequestApiV1MaintenanceRequestsIdGet = {
                id: number
                
            }
export type TDataUpdateMaintenanceRequestApiV1MaintenanceRequestsIdPut = {
                id: number
requestBody: MaintenanceRequestUpdate
                
            }
export type TDataDeleteMaintenanceRequestApiV1MaintenanceRequestsIdDelete = {
                id: number
                
            }
export type TDataGetMaintenanceTicketsApiV1MaintenanceTicketsGet = {
                endDate?: string | null
isCompleted?: boolean | null
limit?: number
search?: string | null
skip?: number
startDate?: string | null
                
            }
export type TDataCreateMaintenanceTicketApiV1MaintenanceTicketsPost = {
                maintenanceRequestId: number
requestBody: MaintenanceTicketCreate
                
            }
export type TDataGetMaintenanceTicketApiV1MaintenanceTicketsIdGet = {
                id: number
                
            }
export type TDataUpdateMaintenanceTicketApiV1MaintenanceTicketsIdPut = {
                id: number
requestBody: MaintenanceTicketUpdate
                
            }
export type TDataDeleteMaintenanceTicketApiV1MaintenanceTicketsIdDelete = {
                id: number
                
            }
export type TDataCompleteMaintenanceTicketApiV1MaintenanceTicketsIdCompletePatch = {
                id: number
                
            }
export type TDataReopenMaintenanceTicketApiV1MaintenanceTicketsIdReopenPatch = {
                id: number
                
            }
export type TDataGetMaintenanceTraApiV1MaintenanceTraGet = {
                endDate?: string | null
limit?: number
search?: string | null
skip?: number
startDate?: string | null
                
            }
export type TDataCreateMaintenanceTraApiV1MaintenanceTraPost = {
                maintenanceTicketId: number
requestBody: MaintenanceTRACreate
                
            }
export type TDataGetMaintenanceTraApiV1MaintenanceTraIdGet = {
                id: number
                
            }
export type TDataUpdateMaintenanceTraApiV1MaintenanceTraIdPut = {
                id: number
requestBody: MaintenanceTRAUpdate
                
            }
export type TDataDeleteMaintenanceTraApiV1MaintenanceTraIdDelete = {
                id: number
                
            }
export type TDataGetAllMaintenancePtwsApiV1MaintenancePtwGet = {
                endDate?: string | null
limit?: number
search?: string | null
skip?: number
startDate?: string | null
                
            }
export type TDataCreateMaintenancePtwApiV1MaintenancePtwPost = {
                mainternanceTraId: number
requestBody: MaintenancePTWCreate
                
            }
export type TDataGetMaintenancePtwApiV1MaintenancePtwIdGet = {
                id: number
                
            }
export type TDataUpdateMaintenancePtwApiV1MaintenancePtwIdPut = {
                id: number
requestBody: MaintenancePTWUpdate
                
            }
export type TDataDeleteMaintenancePtwApiV1MaintenancePtwIdDelete = {
                id: number
                
            }
export type TDataCompleteMaintenancePtwApiV1MaintenancePtwIdCompletePatch = {
                id: number
                
            }
export type TDataCancelMaintenancePtwApiV1MaintenancePtwIdIncompletePatch = {
                id: number
                
            }

export class RequestsAndTicketsService {

	/**
	 * Get Maintenance Requests
	 * Get all maintenance requests.
	 * @returns MaintenanceRequestList Successful Response
	 * @throws ApiError
	 */
	public static getMaintenanceRequestsApiV1MaintenanceRequestsGet(data: TDataGetMaintenanceRequestsApiV1MaintenanceRequestsGet = {}): CancelablePromise<MaintenanceRequestList> {
		const {
endDate,
filter,
limit = 50,
search,
skip = 0,
startDate,
status,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/maintenance/requests',
			query: {
				skip, limit, start_date: startDate, end_date: endDate, search, filter, status
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Maintenance Request
	 * Create a maintenance request.
	 * @returns MaintenanceRequestRead Successful Response
	 * @throws ApiError
	 */
	public static createMaintenanceRequestApiV1MaintenanceRequestsPost(data: TDataCreateMaintenanceRequestApiV1MaintenanceRequestsPost): CancelablePromise<MaintenanceRequestRead> {
		const {
equipmentId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/maintenance/requests',
			query: {
				equipment_id: equipmentId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Maintenance Request
	 * Get a maintenance request.
	 * @returns MaintenanceRequest Successful Response
	 * @throws ApiError
	 */
	public static getMaintenanceRequestApiV1MaintenanceRequestsIdGet(data: TDataGetMaintenanceRequestApiV1MaintenanceRequestsIdGet): CancelablePromise<MaintenanceRequest> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/maintenance/requests/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Maintenance Request
	 * Update a maintenance request.
	 * @returns MaintenanceRequestRead Successful Response
	 * @throws ApiError
	 */
	public static updateMaintenanceRequestApiV1MaintenanceRequestsIdPut(data: TDataUpdateMaintenanceRequestApiV1MaintenanceRequestsIdPut): CancelablePromise<MaintenanceRequestRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/maintenance/requests/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Maintenance Request
	 * Delete a maintenance request.
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteMaintenanceRequestApiV1MaintenanceRequestsIdDelete(data: TDataDeleteMaintenanceRequestApiV1MaintenanceRequestsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/maintenance/requests/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Maintenance Tickets
	 * Get all maintenance tickets.
	 * @returns MaintenanceTicketList Successful Response
	 * @throws ApiError
	 */
	public static getMaintenanceTicketsApiV1MaintenanceTicketsGet(data: TDataGetMaintenanceTicketsApiV1MaintenanceTicketsGet = {}): CancelablePromise<MaintenanceTicketList> {
		const {
endDate,
isCompleted,
limit = 50,
search,
skip = 0,
startDate,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/maintenance/tickets',
			query: {
				skip, limit, start_date: startDate, end_date: endDate, is_completed: isCompleted, search
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Maintenance Ticket
	 * Create a maintenance ticket.
	 * @returns MaintenanceTicketRead Successful Response
	 * @throws ApiError
	 */
	public static createMaintenanceTicketApiV1MaintenanceTicketsPost(data: TDataCreateMaintenanceTicketApiV1MaintenanceTicketsPost): CancelablePromise<MaintenanceTicketRead> {
		const {
maintenanceRequestId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/maintenance/tickets',
			query: {
				maintenance_request_id: maintenanceRequestId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Maintenance Ticket
	 * Get a maintenance ticket.
	 * @returns MaintenanceTicket Successful Response
	 * @throws ApiError
	 */
	public static getMaintenanceTicketApiV1MaintenanceTicketsIdGet(data: TDataGetMaintenanceTicketApiV1MaintenanceTicketsIdGet): CancelablePromise<MaintenanceTicket> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/maintenance/tickets/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Maintenance Ticket
	 * Update a maintenance ticket.
	 * @returns MaintenanceTicketRead Successful Response
	 * @throws ApiError
	 */
	public static updateMaintenanceTicketApiV1MaintenanceTicketsIdPut(data: TDataUpdateMaintenanceTicketApiV1MaintenanceTicketsIdPut): CancelablePromise<MaintenanceTicketRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/maintenance/tickets/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Maintenance Ticket
	 * Delete a maintenance ticket.
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteMaintenanceTicketApiV1MaintenanceTicketsIdDelete(data: TDataDeleteMaintenanceTicketApiV1MaintenanceTicketsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/maintenance/tickets/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Complete Maintenance Ticket
	 * Complete a maintenance ticket.
	 * @returns MaintenanceTicketRead Successful Response
	 * @throws ApiError
	 */
	public static completeMaintenanceTicketApiV1MaintenanceTicketsIdCompletePatch(data: TDataCompleteMaintenanceTicketApiV1MaintenanceTicketsIdCompletePatch): CancelablePromise<MaintenanceTicketRead> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/api/v1/maintenance/tickets/{id}/complete',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Reopen Maintenance Ticket
	 * Reopen a maintenance ticket.
	 * @returns MaintenanceTicketRead Successful Response
	 * @throws ApiError
	 */
	public static reopenMaintenanceTicketApiV1MaintenanceTicketsIdReopenPatch(data: TDataReopenMaintenanceTicketApiV1MaintenanceTicketsIdReopenPatch): CancelablePromise<MaintenanceTicketRead> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/api/v1/maintenance/tickets/{id}/reopen',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Maintenance Tra
	 * Get all maintenance TRAs.
	 * @returns MaintenanceTRAList Successful Response
	 * @throws ApiError
	 */
	public static getMaintenanceTraApiV1MaintenanceTraGet(data: TDataGetMaintenanceTraApiV1MaintenanceTraGet = {}): CancelablePromise<MaintenanceTRAList> {
		const {
endDate,
limit = 50,
search,
skip = 0,
startDate,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/maintenance/tra',
			query: {
				skip, limit, start_date: startDate, end_date: endDate, search
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Maintenance Tra
	 * Create a maintenance TRA.
	 * @returns MaintenanceTRARead Successful Response
	 * @throws ApiError
	 */
	public static createMaintenanceTraApiV1MaintenanceTraPost(data: TDataCreateMaintenanceTraApiV1MaintenanceTraPost): CancelablePromise<MaintenanceTRARead> {
		const {
maintenanceTicketId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/maintenance/tra',
			query: {
				maintenance_ticket_id: maintenanceTicketId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Maintenance Tra
	 * Get a maintenance TRA.
	 * @returns MaintenanceTRA Successful Response
	 * @throws ApiError
	 */
	public static getMaintenanceTraApiV1MaintenanceTraIdGet(data: TDataGetMaintenanceTraApiV1MaintenanceTraIdGet): CancelablePromise<MaintenanceTRA> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/maintenance/tra/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Maintenance Tra
	 * Update a maintenance TRA.
	 * @returns MaintenanceTRARead Successful Response
	 * @throws ApiError
	 */
	public static updateMaintenanceTraApiV1MaintenanceTraIdPut(data: TDataUpdateMaintenanceTraApiV1MaintenanceTraIdPut): CancelablePromise<MaintenanceTRARead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/maintenance/tra/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Maintenance Tra
	 * Delete a maintenance TRA.
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteMaintenanceTraApiV1MaintenanceTraIdDelete(data: TDataDeleteMaintenanceTraApiV1MaintenanceTraIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/maintenance/tra/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get All Maintenance Ptws
	 * Get all maintenance PTWs.
	 * @returns MaintenancePTWList Successful Response
	 * @throws ApiError
	 */
	public static getAllMaintenancePtwsApiV1MaintenancePtwGet(data: TDataGetAllMaintenancePtwsApiV1MaintenancePtwGet = {}): CancelablePromise<MaintenancePTWList> {
		const {
endDate,
limit = 50,
search,
skip = 0,
startDate,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/maintenance/ptw',
			query: {
				skip, limit, start_date: startDate, end_date: endDate, search
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Maintenance Ptw
	 * Create a maintenance PTW.
	 * @returns MaintenancePTWRead Successful Response
	 * @throws ApiError
	 */
	public static createMaintenancePtwApiV1MaintenancePtwPost(data: TDataCreateMaintenancePtwApiV1MaintenancePtwPost): CancelablePromise<MaintenancePTWRead> {
		const {
mainternanceTraId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/maintenance/ptw',
			query: {
				mainternance_tra_id: mainternanceTraId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Maintenance Ptw
	 * Get a maintenance PTW.
	 * @returns MaintenancePTW Successful Response
	 * @throws ApiError
	 */
	public static getMaintenancePtwApiV1MaintenancePtwIdGet(data: TDataGetMaintenancePtwApiV1MaintenancePtwIdGet): CancelablePromise<MaintenancePTW> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/maintenance/ptw/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Maintenance Ptw
	 * Update a maintenance PTW.
	 * @returns MaintenancePTWRead Successful Response
	 * @throws ApiError
	 */
	public static updateMaintenancePtwApiV1MaintenancePtwIdPut(data: TDataUpdateMaintenancePtwApiV1MaintenancePtwIdPut): CancelablePromise<MaintenancePTWRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/maintenance/ptw/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Maintenance Ptw
	 * Delete a maintenance PTW.
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteMaintenancePtwApiV1MaintenancePtwIdDelete(data: TDataDeleteMaintenancePtwApiV1MaintenancePtwIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/maintenance/ptw/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Complete Maintenance Ptw
	 * Complete a maintenance PTW.
	 * @returns MaintenancePTWRead Successful Response
	 * @throws ApiError
	 */
	public static completeMaintenancePtwApiV1MaintenancePtwIdCompletePatch(data: TDataCompleteMaintenancePtwApiV1MaintenancePtwIdCompletePatch): CancelablePromise<MaintenancePTWRead> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/api/v1/maintenance/ptw/{id}/complete',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Cancel Maintenance Ptw
	 * Incomplete a maintenance PTW.
	 * @returns MaintenancePTWRead Successful Response
	 * @throws ApiError
	 */
	public static cancelMaintenancePtwApiV1MaintenancePtwIdIncompletePatch(data: TDataCancelMaintenancePtwApiV1MaintenancePtwIdIncompletePatch): CancelablePromise<MaintenancePTWRead> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/api/v1/maintenance/ptw/{id}/incomplete',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

}

export type TDataGetMaintenanceEventsApiV1MaintenancePlanningEventsGet = {
                endDate?: string | null
limit?: number
search?: string | null
skip?: number
startDate?: string | null
                
            }
export type TDataGetMaintenanceEventApiV1MaintenancePlanningEventsIdGet = {
                id: number
                
            }
export type TDataCreateMaintenanceEventWithTicketsApiV1MaintenancePlanningEventsWithTicketsPost = {
                requestBody: MaintenanceEventCreate
                
            }
export type TDataUpdateMaintenanceEventApiV1MaintenancePlanningEventsEventIdPut = {
                eventId: number
requestBody: MaintenanceEventUpdate
                
            }
export type TDataApproveMaintenanceEventApiV1MaintenancePlanningEventsEventIdApprovePatch = {
                eventId: number
requestBody: MaintenanceEventUpdate
                
            }
export type TDataStartMaintenanceEventApiV1MaintenancePlanningEventsEventIdStartPatch = {
                eventId: number
requestBody: MaintenanceEventUpdate
                
            }
export type TDataEndMaintenanceEventApiV1MaintenancePlanningEventsEventIdEndPatch = {
                eventId: number
requestBody: MaintenanceEventUpdate
                
            }

export class MaintenancePlanningService {

	/**
	 * Get Maintenance Events
	 * @returns MaintenanceEventList Successful Response
	 * @throws ApiError
	 */
	public static getMaintenanceEventsApiV1MaintenancePlanningEventsGet(data: TDataGetMaintenanceEventsApiV1MaintenancePlanningEventsGet = {}): CancelablePromise<MaintenanceEventList> {
		const {
endDate,
limit = 50,
search,
skip = 0,
startDate,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/maintenance-planning/events',
			query: {
				skip, limit, search, start_date: startDate, end_date: endDate
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Maintenance Event
	 * @returns MaintenanceEvent Successful Response
	 * @throws ApiError
	 */
	public static getMaintenanceEventApiV1MaintenancePlanningEventsIdGet(data: TDataGetMaintenanceEventApiV1MaintenancePlanningEventsIdGet): CancelablePromise<MaintenanceEvent> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/maintenance-planning/events/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Maintenance Event With Tickets
	 * @returns MaintenanceEventAddResponse Successful Response
	 * @throws ApiError
	 */
	public static createMaintenanceEventWithTicketsApiV1MaintenancePlanningEventsWithTicketsPost(data: TDataCreateMaintenanceEventWithTicketsApiV1MaintenancePlanningEventsWithTicketsPost): CancelablePromise<MaintenanceEventAddResponse> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/maintenance-planning/events-with-tickets',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Maintenance Event
	 * @returns MaintenanceEventRead Successful Response
	 * @throws ApiError
	 */
	public static updateMaintenanceEventApiV1MaintenancePlanningEventsEventIdPut(data: TDataUpdateMaintenanceEventApiV1MaintenancePlanningEventsEventIdPut): CancelablePromise<MaintenanceEventRead> {
		const {
eventId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/maintenance-planning/events/{event_id}',
			path: {
				event_id: eventId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Approve Maintenance Event
	 * @returns MaintenanceEventRead Successful Response
	 * @throws ApiError
	 */
	public static approveMaintenanceEventApiV1MaintenancePlanningEventsEventIdApprovePatch(data: TDataApproveMaintenanceEventApiV1MaintenancePlanningEventsEventIdApprovePatch): CancelablePromise<MaintenanceEventRead> {
		const {
eventId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/api/v1/maintenance-planning/events/{event_id}/approve',
			path: {
				event_id: eventId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Start Maintenance Event
	 * @returns MaintenanceEventRead Successful Response
	 * @throws ApiError
	 */
	public static startMaintenanceEventApiV1MaintenancePlanningEventsEventIdStartPatch(data: TDataStartMaintenanceEventApiV1MaintenancePlanningEventsEventIdStartPatch): CancelablePromise<MaintenanceEventRead> {
		const {
eventId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/api/v1/maintenance-planning/events/{event_id}/start',
			path: {
				event_id: eventId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * End Maintenance Event
	 * @returns MaintenanceEventRead Successful Response
	 * @throws ApiError
	 */
	public static endMaintenanceEventApiV1MaintenancePlanningEventsEventIdEndPatch(data: TDataEndMaintenanceEventApiV1MaintenancePlanningEventsEventIdEndPatch): CancelablePromise<MaintenanceEventRead> {
		const {
eventId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/api/v1/maintenance-planning/events/{event_id}/end',
			path: {
				event_id: eventId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

}



export class MaintenanceAnalysisService {

	/**
	 * Get Maintenance Requests Analysis
	 * Fetch data from the specified table and return data for charting.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static getMaintenanceRequestsAnalysisApiV1MaintenanceAnalysisRequestsGet(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/maintenance/analysis-requests/',
		});
	}

	/**
	 * Get Maintenance Tickets Analysis
	 * Fetch data from the specified table and return data for charting.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static getMaintenanceTicketsAnalysisApiV1MaintenanceAnalysisTicketsGet(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/maintenance/analysis-tickets/',
		});
	}

}

export type TDataCreateCategoryApiV1StoresCategoriesPost = {
                requestBody: app__schemas__stores__CategoryCreate
                
            }
export type TDataGetCategoryByIdApiV1StoresCategoriesIdGet = {
                id: number
                
            }
export type TDataUpdateCategoryApiV1StoresCategoriesIdPut = {
                id: number
requestBody: app__schemas__stores__CategoryUpdate
                
            }
export type TDataGetCategoryByNameApiV1StoresCategoriesByNameGet = {
                name: string
                
            }
export type TDataGetAllItemsApiV1StoresItemsGet = {
                endDate?: string | null
limit?: number
search?: string | null
skip?: number
startDate?: string | null
                
            }
export type TDataCreateItemApiV1StoresItemsPost = {
                categoryId: number
requestBody: ItemCreate
                
            }
export type TDataGetItemByIdApiV1StoresItemsIdGet = {
                id: number
                
            }
export type TDataDeleteItemApiV1StoresItemsIdDelete = {
                id: number
                
            }
export type TDataGetAllInventoryApiV1StoresInventoryGet = {
                endDate?: string | null
limit?: number
skip?: number
startDate?: string | null
                
            }
export type TDataCreateInventoryApiV1StoresInventoryPost = {
                requestBody: InventoryCreate
                
            }
export type TDataGetInventoryByIdApiV1StoresInventoryIdGet = {
                id: number
                
            }
export type TDataUpdateInventoryApiV1StoresInventoryIdPut = {
                id: number
requestBody: InventoryUpdate
                
            }
export type TDataDeleteInventoryApiV1StoresInventoryIdDelete = {
                id: number
                
            }
export type TDataAddItemToInventoryApiV1StoresAddItemInventoryIdPatch = {
                id: number
quantity: number
                
            }
export type TDataRemoveItemFromInventoryApiV1StoresRemoveItemInventoryIdPatch = {
                id: number
quantity: number
                
            }

export class StoresService {

	/**
	 * Get All Categories
	 * @returns CategoryList Successful Response
	 * @throws ApiError
	 */
	public static getAllCategoriesApiV1StoresCategoriesGet(): CancelablePromise<CategoryList> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/stores/categories',
		});
	}

	/**
	 * Create Category
	 * @returns CategoryRead Successful Response
	 * @throws ApiError
	 */
	public static createCategoryApiV1StoresCategoriesPost(data: TDataCreateCategoryApiV1StoresCategoriesPost): CancelablePromise<CategoryRead> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/stores/categories',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Category By Id
	 * @returns CategoryRead Successful Response
	 * @throws ApiError
	 */
	public static getCategoryByIdApiV1StoresCategoriesIdGet(data: TDataGetCategoryByIdApiV1StoresCategoriesIdGet): CancelablePromise<CategoryRead> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/stores/categories/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Category
	 * @returns CategoryRead Successful Response
	 * @throws ApiError
	 */
	public static updateCategoryApiV1StoresCategoriesIdPut(data: TDataUpdateCategoryApiV1StoresCategoriesIdPut): CancelablePromise<CategoryRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/stores/categories/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Category By Name
	 * @returns app__schemas__stores__Category Successful Response
	 * @throws ApiError
	 */
	public static getCategoryByNameApiV1StoresCategoriesByNameGet(data: TDataGetCategoryByNameApiV1StoresCategoriesByNameGet): CancelablePromise<app__schemas__stores__Category> {
		const {
name,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/stores/categories-by-name',
			query: {
				name
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get All Items
	 * @returns ItemList Successful Response
	 * @throws ApiError
	 */
	public static getAllItemsApiV1StoresItemsGet(data: TDataGetAllItemsApiV1StoresItemsGet = {}): CancelablePromise<ItemList> {
		const {
endDate,
limit = 50,
search,
skip = 0,
startDate,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/stores/items',
			query: {
				skip, limit, start_date: startDate, end_date: endDate, search
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Item
	 * @returns ItemRead Successful Response
	 * @throws ApiError
	 */
	public static createItemApiV1StoresItemsPost(data: TDataCreateItemApiV1StoresItemsPost): CancelablePromise<ItemRead> {
		const {
categoryId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/stores/items',
			query: {
				category_id: categoryId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Item By Id
	 * @returns Item Successful Response
	 * @throws ApiError
	 */
	public static getItemByIdApiV1StoresItemsIdGet(data: TDataGetItemByIdApiV1StoresItemsIdGet): CancelablePromise<Item> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/stores/items/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Item
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteItemApiV1StoresItemsIdDelete(data: TDataDeleteItemApiV1StoresItemsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/stores/items/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get All Inventory
	 * @returns InventoryList Successful Response
	 * @throws ApiError
	 */
	public static getAllInventoryApiV1StoresInventoryGet(data: TDataGetAllInventoryApiV1StoresInventoryGet = {}): CancelablePromise<InventoryList> {
		const {
endDate,
limit = 50,
skip = 0,
startDate,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/stores/inventory',
			query: {
				skip, limit, start_date: startDate, end_date: endDate
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Inventory
	 * @returns InventoryRead Successful Response
	 * @throws ApiError
	 */
	public static createInventoryApiV1StoresInventoryPost(data: TDataCreateInventoryApiV1StoresInventoryPost): CancelablePromise<InventoryRead> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/stores/inventory',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Inventory By Id
	 * @returns Inventory Successful Response
	 * @throws ApiError
	 */
	public static getInventoryByIdApiV1StoresInventoryIdGet(data: TDataGetInventoryByIdApiV1StoresInventoryIdGet): CancelablePromise<Inventory> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/stores/inventory/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Inventory
	 * @returns InventoryRead Successful Response
	 * @throws ApiError
	 */
	public static updateInventoryApiV1StoresInventoryIdPut(data: TDataUpdateInventoryApiV1StoresInventoryIdPut): CancelablePromise<InventoryRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/stores/inventory/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Inventory
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteInventoryApiV1StoresInventoryIdDelete(data: TDataDeleteInventoryApiV1StoresInventoryIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/stores/inventory/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Add Item To Inventory
	 * @returns InventoryRead Successful Response
	 * @throws ApiError
	 */
	public static addItemToInventoryApiV1StoresAddItemInventoryIdPatch(data: TDataAddItemToInventoryApiV1StoresAddItemInventoryIdPatch): CancelablePromise<InventoryRead> {
		const {
id,
quantity,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/api/v1/stores/add-item-inventory/{id}',
			path: {
				id
			},
			query: {
				quantity
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Remove Item From Inventory
	 * @returns InventoryRead Successful Response
	 * @throws ApiError
	 */
	public static removeItemFromInventoryApiV1StoresRemoveItemInventoryIdPatch(data: TDataRemoveItemFromInventoryApiV1StoresRemoveItemInventoryIdPatch): CancelablePromise<InventoryRead> {
		const {
id,
quantity,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/api/v1/stores/remove-item-inventory/{id}',
			path: {
				id
			},
			query: {
				quantity
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

}

export type TDataReadAllRequisitionsApiV1StoresRequisitionsGet = {
                limit?: number
skip?: number
                
            }
export type TDataCreateOrderWithoutMaintenanceIdApiV1StoresRequisitionsPost = {
                requestBody: OrderCreate
                
            }
export type TDataReadRequisitionByIdApiV1StoresRequisitionsOrderIdGet = {
                orderId: number
                
            }
export type TDataUpdateOrderApiV1StoresRequisitionsOrderIdPut = {
                orderId: number
requestBody: OrderUpdate
                
            }
export type TDataCreateOrderWithMaintenanceIdApiV1StoresRequisitionsMaintenanceRequestIdPost = {
                maintenanceRequestId: number
requestBody: OrderCreate
                
            }
export type TDataGetOrderPdfApiV1StoresRequisitionsOrderIdPdfGet = {
                orderId: number
                
            }
export type TDataApproveOrderApiV1StoresOrderOrderIdApprovePut = {
                orderId: number
                
            }
export type TDataRejectOrderApiV1StoresOrderOrderIdRejectPut = {
                orderId: number
                
            }
export type TDataCompleteOrderApiV1StoresOrderOrderIdCompletePut = {
                orderId: number
                
            }

export class RequisitionsService {

	/**
	 * Read All Requisitions
	 * Retrieves all requisitions.
 * 
 * Args:
 * skip (int): Number of records to skip.
 * limit (int): Maximum number of records to return.
 * session (AsyncSession): AsyncSession dependency.
 * 
 * Returns:
 * OrderList: Response model containing list of orders and count.
	 * @returns OrderList Successful Response
	 * @throws ApiError
	 */
	public static readAllRequisitionsApiV1StoresRequisitionsGet(data: TDataReadAllRequisitionsApiV1StoresRequisitionsGet = {}): CancelablePromise<OrderList> {
		const {
limit = 50,
skip = 0,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/stores/requisitions',
			query: {
				skip, limit
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Order Without Maintenance Id
	 * @returns RequisitionResponseModel Successful Response
	 * @throws ApiError
	 */
	public static createOrderWithoutMaintenanceIdApiV1StoresRequisitionsPost(data: TDataCreateOrderWithoutMaintenanceIdApiV1StoresRequisitionsPost): CancelablePromise<RequisitionResponseModel> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/stores/requisitions',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Requisition By Id
	 * Retrieves an order by ID.
 * 
 * Args:
 * order_id (int): ID of the order to retrieve.
 * session (AsyncSession): AsyncSession dependency.
 * 
 * Returns:
 * OrderRead: Response model containing details of the retrieved order.
	 * @returns Order Successful Response
	 * @throws ApiError
	 */
	public static readRequisitionByIdApiV1StoresRequisitionsOrderIdGet(data: TDataReadRequisitionByIdApiV1StoresRequisitionsOrderIdGet): CancelablePromise<Order> {
		const {
orderId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/stores/requisitions/{order_id}',
			path: {
				order_id: orderId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Order
	 * @returns Order Successful Response
	 * @throws ApiError
	 */
	public static updateOrderApiV1StoresRequisitionsOrderIdPut(data: TDataUpdateOrderApiV1StoresRequisitionsOrderIdPut): CancelablePromise<Order> {
		const {
orderId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/stores/requisitions/{order_id}',
			path: {
				order_id: orderId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Order With Maintenance Id
	 * @returns RequisitionResponseModel Successful Response
	 * @throws ApiError
	 */
	public static createOrderWithMaintenanceIdApiV1StoresRequisitionsMaintenanceRequestIdPost(data: TDataCreateOrderWithMaintenanceIdApiV1StoresRequisitionsMaintenanceRequestIdPost): CancelablePromise<RequisitionResponseModel> {
		const {
maintenanceRequestId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/stores/requisitions/{maintenance_request_id}',
			path: {
				maintenance_request_id: maintenanceRequestId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Order Pdf
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static getOrderPdfApiV1StoresRequisitionsOrderIdPdfGet(data: TDataGetOrderPdfApiV1StoresRequisitionsOrderIdPdfGet): CancelablePromise<unknown> {
		const {
orderId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/stores/requisitions/{order_id}/pdf',
			path: {
				order_id: orderId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Approve Order
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static approveOrderApiV1StoresOrderOrderIdApprovePut(data: TDataApproveOrderApiV1StoresOrderOrderIdApprovePut): CancelablePromise<unknown> {
		const {
orderId,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/stores/order/{order_id}/approve',
			path: {
				order_id: orderId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Reject Order
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static rejectOrderApiV1StoresOrderOrderIdRejectPut(data: TDataRejectOrderApiV1StoresOrderOrderIdRejectPut): CancelablePromise<unknown> {
		const {
orderId,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/stores/order/{order_id}/reject',
			path: {
				order_id: orderId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Complete Order
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static completeOrderApiV1StoresOrderOrderIdCompletePut(data: TDataCompleteOrderApiV1StoresOrderOrderIdCompletePut): CancelablePromise<unknown> {
		const {
orderId,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/stores/order/{order_id}/complete',
			path: {
				order_id: orderId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

}

export type TDataReadAllProcessVisorsApiV1ProcessVisorsGet = {
                completed?: boolean | null
endDate?: string | null
limit?: number
search?: string | null
skip?: number
startDate?: string | null
started?: boolean | null
                
            }
export type TDataCreateProcessVisorApiV1ProcessVisorsPost = {
                requestBody: ProcessVisorCreate
                
            }
export type TDataReadProcessVisorApiV1ProcessVisorsIdGet = {
                id: number
                
            }
export type TDataUpdateProcessVisorApiV1ProcessVisorsIdPut = {
                id: number
requestBody: ProcessVisorUpdate
                
            }
export type TDataDeleteProcessVisorApiV1ProcessVisorsIdDelete = {
                id: number
                
            }
export type TDataMarkProcessVisorAsStartedApiV1ProcessVisorsIdStartPatch = {
                id: number
                
            }
export type TDataMarkProcessVisorAsCompletedApiV1ProcessVisorsIdCompletePatch = {
                id: number
                
            }

export class ProcessVisorService {

	/**
	 * Read All Process Visors
	 * Get all process visors.
 * 
 * Args:
 * skip (int, optional): _description_. Defaults to 0.
 * limit (int, optional): _description_. Defaults to 100.
 * completed (Optional[bool], optional): _description_. Defaults to None.
 * started (Optional[bool], optional): _description_. Defaults to None.
 * search (Optional[str], optional): _description_. Defaults to None.
 * end_date (Optional[datetime], optional): _description_. Defaults to None.
 * start_date (Optional[datetime], optional): _description_. Defaults to None.
 * 
 * Returns:
 * dict: List of process visors pydantic model and count
	 * @returns ProcessVisorPublic Successful Response
	 * @throws ApiError
	 */
	public static readAllProcessVisorsApiV1ProcessVisorsGet(data: TDataReadAllProcessVisorsApiV1ProcessVisorsGet = {}): CancelablePromise<ProcessVisorPublic> {
		const {
completed,
endDate,
limit = 100,
search,
skip = 0,
startDate,
started,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/process_visors/',
			query: {
				skip, limit, completed, started, search, end_date: endDate, start_date: startDate
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Process Visor
	 * Create process visor
 * 
 * Args:
 * machine_process_visor (ProcessVisorCreate): _description_
 * 
 * Raises:
 * HTTPException: _description_
 * 
 * Returns:
 * ProcessVisorResponse: _description_
	 * @returns ProcessVisorResponse Successful Response
	 * @throws ApiError
	 */
	public static createProcessVisorApiV1ProcessVisorsPost(data: TDataCreateProcessVisorApiV1ProcessVisorsPost): CancelablePromise<ProcessVisorResponse> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/process_visors/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Process Visor
	 * Get process visor by id.
 * 
 * Args:
 * id (int): ID of the process visor
 * 
 * Returns:
 * dict: Pydantic model of process visor
	 * @returns ProcessVisor Successful Response
	 * @throws ApiError
	 */
	public static readProcessVisorApiV1ProcessVisorsIdGet(data: TDataReadProcessVisorApiV1ProcessVisorsIdGet): CancelablePromise<ProcessVisor> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/process_visors/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Process Visor
	 * Update process visor
 * 
 * Args:
 * id (int): _description_
 * machine_process_visor (ProcessVisorUpdate): _description_
 * 
 * Returns:
 * ProcessVisorResponse: _description_
	 * @returns ProcessVisorResponse Successful Response
	 * @throws ApiError
	 */
	public static updateProcessVisorApiV1ProcessVisorsIdPut(data: TDataUpdateProcessVisorApiV1ProcessVisorsIdPut): CancelablePromise<ProcessVisorResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/process_visors/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Process Visor
	 * Delete  process visor
 * 
 * Args:
 * id (int): _description_
 * 
 * Returns:
 * ProcessVisorResponse: _description_
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteProcessVisorApiV1ProcessVisorsIdDelete(data: TDataDeleteProcessVisorApiV1ProcessVisorsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/process_visors/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Mark Process Visor As Started
	 * Mark process visor as started.
 * 
 * Args:
 * id (int): ID of the process visor
 * 
 * Returns:
 * dict: Pydantic model of process visor
	 * @returns ProcessVisorResponse Successful Response
	 * @throws ApiError
	 */
	public static markProcessVisorAsStartedApiV1ProcessVisorsIdStartPatch(data: TDataMarkProcessVisorAsStartedApiV1ProcessVisorsIdStartPatch): CancelablePromise<ProcessVisorResponse> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/api/v1/process_visors/{id}/start',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Mark Process Visor As Completed
	 * Mark process visor as completed.
 * 
 * Args:
 * id (int): ID of the process visor
 * 
 * Returns:
 * dict: Pydantic model of process visor
	 * @returns ProcessVisorResponse Successful Response
	 * @throws ApiError
	 */
	public static markProcessVisorAsCompletedApiV1ProcessVisorsIdCompletePatch(data: TDataMarkProcessVisorAsCompletedApiV1ProcessVisorsIdCompletePatch): CancelablePromise<ProcessVisorResponse> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/api/v1/process_visors/{id}/complete',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

}

export type TDataReadAllProcessTestsApiV1pTestsGet = {
                endDate?: string | null
limit?: number
search?: string | null
skip?: number
startDate?: string | null
                
            }
export type TDataCreateProcessTestApiV1pTestsPost = {
                requestBody: ProcessTestCreate
                
            }
export type TDataReadProcessTestByIdApiV1pTestsIdGet = {
                id: number
                
            }
export type TDataUpdateProcessTestApiV1pTestsIdPut = {
                id: number
requestBody: ProcessTestUpdate
                
            }
export type TDataDeleteProcessTestApiV1pTestsIdDelete = {
                id: number
                
            }
export type TDataReadProcessTestByVisorIdApiV1pTestsPcvProcessVisorIdGet = {
                processVisorId: number
                
            }

export class ProcessTestsService {

	/**
	 * Read All Process Tests
	 * @returns ProcessTestPublic Successful Response
	 * @throws ApiError
	 */
	public static readAllProcessTestsApiV1PTestsGet(data: TDataReadAllProcessTestsApiV1pTestsGet = {}): CancelablePromise<ProcessTestPublic> {
		const {
endDate,
limit = 100,
search,
skip = 0,
startDate,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/p-tests/',
			query: {
				skip, limit, search, end_date: endDate, start_date: startDate
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Process Test
	 * @returns ProcessTestResponse Successful Response
	 * @throws ApiError
	 */
	public static createProcessTestApiV1PTestsPost(data: TDataCreateProcessTestApiV1pTestsPost): CancelablePromise<ProcessTestResponse> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/p-tests/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Process Test By Id
	 * @returns ProcessTestResponse Successful Response
	 * @throws ApiError
	 */
	public static readProcessTestByIdApiV1PTestsIdGet(data: TDataReadProcessTestByIdApiV1pTestsIdGet): CancelablePromise<ProcessTestResponse> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/p-tests/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Process Test
	 * @returns ProcessTestResponse Successful Response
	 * @throws ApiError
	 */
	public static updateProcessTestApiV1PTestsIdPut(data: TDataUpdateProcessTestApiV1pTestsIdPut): CancelablePromise<ProcessTestResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/p-tests/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Process Test
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteProcessTestApiV1PTestsIdDelete(data: TDataDeleteProcessTestApiV1pTestsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/p-tests/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Process Test By Visor Id
	 * @returns ProcessTestResponse Successful Response
	 * @throws ApiError
	 */
	public static readProcessTestByVisorIdApiV1PTestsPcvProcessVisorIdGet(data: TDataReadProcessTestByVisorIdApiV1pTestsPcvProcessVisorIdGet): CancelablePromise<ProcessTestResponse> {
		const {
processVisorId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/p-tests/pcv/{process_visor_id}',
			path: {
				process_visor_id: processVisorId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

}

export type TDataReadProductionLogsApiV1ProductionLogsGet = {
                endDate?: string | null
limit?: number
search?: string | null
skip?: number
startDate?: string | null
                
            }
export type TDataCreateProductionLogApiV1ProductionLogsPost = {
                kanbanNumber?: string | null
requestBody: ProductionLogCreate
                
            }
export type TDataReadProductionLogByKanbanIdApiV1ProductionLogsKanbanIdLogGet = {
                kanbanId: number
                
            }
export type TDataReadProductionLogByIdApiV1ProductionLogsIdGet = {
                id: number
                
            }
export type TDataUpdateProductionLogApiV1ProductionLogsIdPut = {
                id: number
requestBody: ProductionLogUpdate
                
            }
export type TDataDeleteProductionLogApiV1ProductionLogsIdDelete = {
                id: number
                
            }
export type TDataReadProductionReelsByProductionLogIdApiV1ProductionLogsReelsProductionLogIdGet = {
                productionLogId: number
                
            }
export type TDataReadProductionReelByIdApiV1ProductionLogsReelsIdGet = {
                id: number
                
            }
export type TDataUpdateProductionReelApiV1ProductionLogsReelsIdPut = {
                id: number
requestBody: ReelUpdate
                
            }
export type TDataDeleteProductionReelApiV1ProductionLogsReelsIdDelete = {
                id: number
                
            }
export type TDataCreateProductionReelApiV1ProductionLogsReelsPost = {
                productionLogId: number
requestBody: ReelCreate
                
            }
export type TDataReadProductionDowntimesByProductionLogIdApiV1ProductionLogsDowntimesProductionLogIdGet = {
                productionLogId: number
                
            }
export type TDataReadProductionDowntimeByIdApiV1ProductionLogsDowntimesIdGet = {
                id: number
                
            }
export type TDataUpdateProductionDowntimeApiV1ProductionLogsDowntimesIdPut = {
                id: number
requestBody: DowntimeUpdate
                
            }
export type TDataDeleteProductionDowntimeApiV1ProductionLogsDowntimesIdDelete = {
                id: number
                
            }
export type TDataCreateProductionDowntimeApiV1ProductionLogsDowntimesPost = {
                productionLogId: number
requestBody: DowntimeCreate
                
            }
export type TDataReadStockPrepDowntimesByProductionLogIdApiV1ProductionLogsSpDowntimesProductionLogIdGet = {
                productionLogId: number
                
            }
export type TDataReadStockPrepDowntimeByIdApiV1ProductionLogsSpDowntimesIdGet = {
                id: number
                
            }
export type TDataUpdateStockPrepDowntimeApiV1ProductionLogsSpDowntimesIdPut = {
                id: number
requestBody: StockPrepDowntimeUpdate
                
            }
export type TDataDeleteStockPrepDowntimeApiV1ProductionLogsSpDowntimesIdDelete = {
                id: number
                
            }
export type TDataCreateStockPrepDowntimeApiV1ProductionLogsSpDowntimesPost = {
                productionLogId: number
requestBody: StockPrepDowntimeCreate
                
            }
export type TDataReadProductionQciByReelIdApiV1ProductionLogsQciReelIdGet = {
                reelId: number
                
            }
export type TDataReadProductionQciByIdApiV1ProductionLogsQciIdGet = {
                id: number
                
            }
export type TDataUpdateProductionQciApiV1ProductionLogsQciIdPut = {
                id: number
requestBody: QualityInspectionItemUpdate
                
            }
export type TDataDeleteProductionQciApiV1ProductionLogsQciIdDelete = {
                id: number
                
            }
export type TDataCreateProductionQciApiV1ProductionLogsQciPost = {
                reelId: number
requestBody: QualityInspectionItemCreate
                
            }

export class ProductionLogsService {

	/**
	 * Read Production Logs
	 * Get all production logs.
 * 
 * Args:
 * skip (int, optional): _description_. Defaults to 0.
 * limit (int, optional): _description_. Defaults to 100.
 * completed (Optional[bool], optional): _description_. Defaults to None.
 * start_date (Optional[datetime], optional): _description_. Defaults to None.
 * end_date (Optional[datetime], optional): _description_. Defaults to None.
 * search (Optional[str], optional): _description_. Defaults to None.
 * 
 * Returns:
 * dict: List of production logs
	 * @returns ProductionLogPublic Successful Response
	 * @throws ApiError
	 */
	public static readProductionLogsApiV1ProductionLogsGet(data: TDataReadProductionLogsApiV1ProductionLogsGet = {}): CancelablePromise<ProductionLogPublic> {
		const {
endDate,
limit = 100,
search,
skip = 0,
startDate,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/production/logs/',
			query: {
				skip, limit, start_date: startDate, end_date: endDate, search
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Production Log
	 * Create a production log
	 * @returns ProductionLogRead Successful Response
	 * @throws ApiError
	 */
	public static createProductionLogApiV1ProductionLogsPost(data: TDataCreateProductionLogApiV1ProductionLogsPost): CancelablePromise<ProductionLogRead> {
		const {
kanbanNumber,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/production/logs/',
			query: {
				kanban_number: kanbanNumber
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Production Log By Kanban Id
	 * Get production log by kanban id.
 * 
 * Args:
 * kanban_id (int): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns ProductionLog Successful Response
	 * @throws ApiError
	 */
	public static readProductionLogByKanbanIdApiV1ProductionLogsKanbanIdLogGet(data: TDataReadProductionLogByKanbanIdApiV1ProductionLogsKanbanIdLogGet): CancelablePromise<ProductionLog> {
		const {
kanbanId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/production/logs/{kanban_id}/log',
			path: {
				kanban_id: kanbanId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Production Log By Id
	 * Get production log by id.
 * 
 * Args:
 * id (int): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns ProductionLog Successful Response
	 * @throws ApiError
	 */
	public static readProductionLogByIdApiV1ProductionLogsIdGet(data: TDataReadProductionLogByIdApiV1ProductionLogsIdGet): CancelablePromise<ProductionLog> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/production/logs/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Production Log
	 * Update production log
	 * @returns ProductionLogRead Successful Response
	 * @throws ApiError
	 */
	public static updateProductionLogApiV1ProductionLogsIdPut(data: TDataUpdateProductionLogApiV1ProductionLogsIdPut): CancelablePromise<ProductionLogRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/production/logs/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Production Log
	 * Delete production log
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteProductionLogApiV1ProductionLogsIdDelete(data: TDataDeleteProductionLogApiV1ProductionLogsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/production/logs/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Production Reels By Production Log Id
	 * Get production reels by production log id.
 * 
 * Args:
 * production_log_id (int): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns ReelPublic Successful Response
	 * @throws ApiError
	 */
	public static readProductionReelsByProductionLogIdApiV1ProductionLogsReelsProductionLogIdGet(data: TDataReadProductionReelsByProductionLogIdApiV1ProductionLogsReelsProductionLogIdGet): CancelablePromise<ReelPublic> {
		const {
productionLogId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/production/logs/reels/{production_log_id}',
			path: {
				production_log_id: productionLogId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Production Reel By Id
	 * Get production reel by id.
 * 
 * Args:
 * id (int): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns Reel Successful Response
	 * @throws ApiError
	 */
	public static readProductionReelByIdApiV1ProductionLogsReelsIdGet(data: TDataReadProductionReelByIdApiV1ProductionLogsReelsIdGet): CancelablePromise<Reel> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/production/logs/reels/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Production Reel
	 * Update production reel
	 * @returns ReelRead Successful Response
	 * @throws ApiError
	 */
	public static updateProductionReelApiV1ProductionLogsReelsIdPut(data: TDataUpdateProductionReelApiV1ProductionLogsReelsIdPut): CancelablePromise<ReelRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/production/logs/reels/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Production Reel
	 * Delete production reel
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteProductionReelApiV1ProductionLogsReelsIdDelete(data: TDataDeleteProductionReelApiV1ProductionLogsReelsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/production/logs/reels/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Production Reel
	 * Create production reel
	 * @returns ReelRead Successful Response
	 * @throws ApiError
	 */
	public static createProductionReelApiV1ProductionLogsReelsPost(data: TDataCreateProductionReelApiV1ProductionLogsReelsPost): CancelablePromise<ReelRead> {
		const {
productionLogId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/production/logs/reels',
			query: {
				production_log_id: productionLogId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Production Downtimes By Production Log Id
	 * Get production downtime by production log id.
 * 
 * Args:
 * production_log_id (int): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns DowntimePublic Successful Response
	 * @throws ApiError
	 */
	public static readProductionDowntimesByProductionLogIdApiV1ProductionLogsDowntimesProductionLogIdGet(data: TDataReadProductionDowntimesByProductionLogIdApiV1ProductionLogsDowntimesProductionLogIdGet): CancelablePromise<DowntimePublic> {
		const {
productionLogId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/production/logs/downtimes/{production_log_id}',
			path: {
				production_log_id: productionLogId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Production Downtime By Id
	 * Get production downtime by id.
 * 
 * Args:
 * id (int): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns Downtime Successful Response
	 * @throws ApiError
	 */
	public static readProductionDowntimeByIdApiV1ProductionLogsDowntimesIdGet(data: TDataReadProductionDowntimeByIdApiV1ProductionLogsDowntimesIdGet): CancelablePromise<Downtime> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/production/logs/downtimes/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Production Downtime
	 * Update production downtime
	 * @returns DowntimeRead Successful Response
	 * @throws ApiError
	 */
	public static updateProductionDowntimeApiV1ProductionLogsDowntimesIdPut(data: TDataUpdateProductionDowntimeApiV1ProductionLogsDowntimesIdPut): CancelablePromise<DowntimeRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/production/logs/downtimes/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Production Downtime
	 * Delete production downtime
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteProductionDowntimeApiV1ProductionLogsDowntimesIdDelete(data: TDataDeleteProductionDowntimeApiV1ProductionLogsDowntimesIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/production/logs/downtimes/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Production Downtime
	 * Create production downtime
	 * @returns DowntimeRead Successful Response
	 * @throws ApiError
	 */
	public static createProductionDowntimeApiV1ProductionLogsDowntimesPost(data: TDataCreateProductionDowntimeApiV1ProductionLogsDowntimesPost): CancelablePromise<DowntimeRead> {
		const {
productionLogId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/production/logs/downtimes',
			query: {
				production_log_id: productionLogId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Stock Prep Downtimes By Production Log Id
	 * Get stock prep downtime by production log id.
	 * @returns StockPrepDowntimePublic Successful Response
	 * @throws ApiError
	 */
	public static readStockPrepDowntimesByProductionLogIdApiV1ProductionLogsSpDowntimesProductionLogIdGet(data: TDataReadStockPrepDowntimesByProductionLogIdApiV1ProductionLogsSpDowntimesProductionLogIdGet): CancelablePromise<StockPrepDowntimePublic> {
		const {
productionLogId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/production/logs/sp-downtimes/{production_log_id}',
			path: {
				production_log_id: productionLogId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Stock Prep Downtime By Id
	 * Get stock prep downtime by id.
	 * @returns StockPrepDowntime Successful Response
	 * @throws ApiError
	 */
	public static readStockPrepDowntimeByIdApiV1ProductionLogsSpDowntimesIdGet(data: TDataReadStockPrepDowntimeByIdApiV1ProductionLogsSpDowntimesIdGet): CancelablePromise<StockPrepDowntime> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/production/logs/sp-downtimes/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Stock Prep Downtime
	 * Update stock prep downtime
	 * @returns StockPrepDowntimeRead Successful Response
	 * @throws ApiError
	 */
	public static updateStockPrepDowntimeApiV1ProductionLogsSpDowntimesIdPut(data: TDataUpdateStockPrepDowntimeApiV1ProductionLogsSpDowntimesIdPut): CancelablePromise<StockPrepDowntimeRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/production/logs/sp-downtimes/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Stock Prep Downtime
	 * Delete stock prep downtime
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteStockPrepDowntimeApiV1ProductionLogsSpDowntimesIdDelete(data: TDataDeleteStockPrepDowntimeApiV1ProductionLogsSpDowntimesIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/production/logs/sp-downtimes/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Stock Prep Downtime
	 * Create stock prep downtime
	 * @returns StockPrepDowntimeRead Successful Response
	 * @throws ApiError
	 */
	public static createStockPrepDowntimeApiV1ProductionLogsSpDowntimesPost(data: TDataCreateStockPrepDowntimeApiV1ProductionLogsSpDowntimesPost): CancelablePromise<StockPrepDowntimeRead> {
		const {
productionLogId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/production/logs/sp-downtimes',
			query: {
				production_log_id: productionLogId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Production Qci By Reel Id
	 * Get production quality inspection/control item by reel id.
	 * @returns QualityInspectionItemPublic Successful Response
	 * @throws ApiError
	 */
	public static readProductionQciByReelIdApiV1ProductionLogsQciReelIdGet(data: TDataReadProductionQciByReelIdApiV1ProductionLogsQciReelIdGet): CancelablePromise<QualityInspectionItemPublic> {
		const {
reelId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/production/logs/qci/{reel_id}',
			path: {
				reel_id: reelId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Production Qci By Id
	 * Get production quality inspection/control item by id.
	 * @returns QualityInspectionItem Successful Response
	 * @throws ApiError
	 */
	public static readProductionQciByIdApiV1ProductionLogsQciIdGet(data: TDataReadProductionQciByIdApiV1ProductionLogsQciIdGet): CancelablePromise<QualityInspectionItem> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/production/logs/qci/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Production Qci
	 * Update production quality inspection/control item
	 * @returns QualityInspectionItemRead Successful Response
	 * @throws ApiError
	 */
	public static updateProductionQciApiV1ProductionLogsQciIdPut(data: TDataUpdateProductionQciApiV1ProductionLogsQciIdPut): CancelablePromise<QualityInspectionItemRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/production/logs/qci/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Production Qci
	 * Delete production quality inspection/control item
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteProductionQciApiV1ProductionLogsQciIdDelete(data: TDataDeleteProductionQciApiV1ProductionLogsQciIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/production/logs/qci/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Production Qci
	 * Create production quality inspection/control item
	 * @returns QualityInspectionItemRead Successful Response
	 * @throws ApiError
	 */
	public static createProductionQciApiV1ProductionLogsQciPost(data: TDataCreateProductionQciApiV1ProductionLogsQciPost): CancelablePromise<QualityInspectionItemRead> {
		const {
reelId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/production/logs/qci',
			query: {
				reel_id: reelId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

}

export type TDataReadAllKanbansApiV1ProductionKanbansGet = {
                completed?: boolean | null
endDate?: string | null
limit?: number
search?: string | null
skip?: number
startDate?: string | null
started?: boolean | null
                
            }
export type TDataCreateKanbanApiV1ProductionKanbansPost = {
                requestBody: ProductionKanbanCreate
                
            }
export type TDataMarkKanbanAsCompletedApiV1ProductionKanbansKanbanIdCompletedPost = {
                kanbanId: number
                
            }
export type TDataMarkKanbanAsStartedApiV1ProductionKanbansKanbanIdStartedPatch = {
                kanbanId: number
                
            }
export type TDataUpdateKanbanApiV1ProductionKanbansKanbanIdPut = {
                kanbanId: number
requestBody: ProductionKanbanUpdate
                
            }
export type TDataGetKanbanApiV1ProductionKanbansKanbanIdGet = {
                kanbanId: number
                
            }
export type TDataDeleteKanbanApiV1ProductionKanbansKanbanIdDelete = {
                kanbanId: number
                
            }
export type TDataDownloadProductionReportApiV1ProductionKanbansKanbanIdDownloadReportGet = {
                kanbanId: number
                
            }

export class ProductionKanbansService {

	/**
	 * Read All Kanbans
	 * Get all production kanbans
 * Args:
 * skip (int, optional): _description_. Defaults to 0.
 * limit (int, optional): _description_. Defaults to 100.
 * completed (Optional[bool], optional): _description_. Defaults to None.
 * started (Optional[bool], optional): _description_. Defaults to None.
 * end_date (Optional[datetime], optional): _description_. Defaults to None.
 * start_date (Optional[datetime], optional): created at vs selected date. Defaults to None.
 * search (Optional[str], optional): search by name. Defaults to None.
 * Returns:
 * dict: Pydantic model of production kanbans
	 * @returns ProductionKanbanPublic Successful Response
	 * @throws ApiError
	 */
	public static readAllKanbansApiV1ProductionKanbansGet(data: TDataReadAllKanbansApiV1ProductionKanbansGet = {}): CancelablePromise<ProductionKanbanPublic> {
		const {
completed,
endDate,
limit = 100,
search,
skip = 0,
startDate,
started,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/production/kanbans/',
			query: {
				skip, limit, completed, started, end_date: endDate, start_date: startDate, search
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Kanban
	 * Create production kanban
 * Args:
 * kanban_data (ProductionKanbanCreate): Data model for creating production kanban
 * Returns:
 * dict: Pydantic model of production kanban
	 * @returns ProductionKanbanRead Successful Response
	 * @throws ApiError
	 */
	public static createKanbanApiV1ProductionKanbansPost(data: TDataCreateKanbanApiV1ProductionKanbansPost): CancelablePromise<ProductionKanbanRead> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/production/kanbans/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Mark Kanban As Completed
	 * Mark kanban as completed
 * Args:
 * kanban_id (int): Kanban id
 * Returns:
 * dict: Pydantic model of production kanban
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static markKanbanAsCompletedApiV1ProductionKanbansKanbanIdCompletedPost(data: TDataMarkKanbanAsCompletedApiV1ProductionKanbansKanbanIdCompletedPost): CancelablePromise<unknown> {
		const {
kanbanId,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/production/kanbans/{kanban_id}/completed',
			path: {
				kanban_id: kanbanId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Mark Kanban As Started
	 * Mark kanban as started
 * Args:
 * kanban_id (int): Kanban id
 * Returns:
 * dict: Pydantic model of production kanban
	 * @returns ProductionKanbanRead Successful Response
	 * @throws ApiError
	 */
	public static markKanbanAsStartedApiV1ProductionKanbansKanbanIdStartedPatch(data: TDataMarkKanbanAsStartedApiV1ProductionKanbansKanbanIdStartedPatch): CancelablePromise<ProductionKanbanRead> {
		const {
kanbanId,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/api/v1/production/kanbans/{kanban_id}/started',
			path: {
				kanban_id: kanbanId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Kanban
	 * Update production kanban
 * Args:
 * kanban_id (int): Kanban id
 * kanban_data (ProductionKanbanUpdate): Data model for updating production kanban
 * Returns:
 * dict: Pydantic model of production kanban
	 * @returns ProductionKanbanRead Successful Response
	 * @throws ApiError
	 */
	public static updateKanbanApiV1ProductionKanbansKanbanIdPut(data: TDataUpdateKanbanApiV1ProductionKanbansKanbanIdPut): CancelablePromise<ProductionKanbanRead> {
		const {
kanbanId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/production/kanbans/{kanban_id}',
			path: {
				kanban_id: kanbanId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Kanban
	 * Get production kanban
 * Args:
 * kanban_id (int): Kanban id
 * Returns:
 * dict: Pydantic model of production kanban
	 * @returns ProductionKanbanRead Successful Response
	 * @throws ApiError
	 */
	public static getKanbanApiV1ProductionKanbansKanbanIdGet(data: TDataGetKanbanApiV1ProductionKanbansKanbanIdGet): CancelablePromise<ProductionKanbanRead> {
		const {
kanbanId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/production/kanbans/{kanban_id}',
			path: {
				kanban_id: kanbanId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Kanban
	 * Delete production kanban
 * Args:
 * kanban_id (int): Kanban id
 * Returns:
 * dict: Pydantic model of production kanban
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static deleteKanbanApiV1ProductionKanbansKanbanIdDelete(data: TDataDeleteKanbanApiV1ProductionKanbansKanbanIdDelete): CancelablePromise<unknown> {
		const {
kanbanId,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/production/kanbans/{kanban_id}',
			path: {
				kanban_id: kanbanId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Download Production Report
	 * Download production report
 * Args:
 * kanban_id (int): Kanban id
 * Returns:
 * StreamingResponse: Response containing the downloaded production report.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static downloadProductionReportApiV1ProductionKanbansKanbanIdDownloadReportGet(data: TDataDownloadProductionReportApiV1ProductionKanbansKanbanIdDownloadReportGet): CancelablePromise<unknown> {
		const {
kanbanId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/production/kanbans/{kanban_id}/download-report',
			path: {
				kanban_id: kanbanId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

}

export type TDataGetAllSpecificationsApiV1ProductionSpecificationsGet = {
                active?: boolean | null
endDate?: string | null
limit?: number
search?: string | null
skip?: number
startDate?: string | null
                
            }
export type TDataCreateSpecificationApiV1ProductionSpecificationsPost = {
                requestBody: ProductSpecificationCreate
                
            }
export type TDataUpdateSpecificationApiV1ProductionSpecificationsSpecificationIdPut = {
                requestBody: ProductSpecificationUpdate
specificationId: number
                
            }
export type TDataGetSpecificationApiV1ProductionSpecificationsSpecificationIdGet = {
                specificationId: number
                
            }
export type TDataDeleteSpecificationApiV1ProductionSpecificationsSpecificationIdDelete = {
                specificationId: number
                
            }

export class ProductionSpecificationsService {

	/**
	 * Get All Specifications
	 * Get all production specifications.
 * 
 * Args:
 * skip (int, optional): _description_. Defaults to 0.
 * limit (int, optional): _description_. Defaults to 100.
 * active (Optional[bool], optional): _description_. Defaults to None.
 * search (Optional[str], optional): _description_. Defaults to None.
 * end_date (Optional[datetime], optional): _description_. Defaults to None.
 * start_date (Optional[datetime], optional): _description_. Defaults to None.
 * 
 * Returns:
 * dict: _description_
	 * @returns ProductSpecificationPublic Successful Response
	 * @throws ApiError
	 */
	public static getAllSpecificationsApiV1ProductionSpecificationsGet(data: TDataGetAllSpecificationsApiV1ProductionSpecificationsGet = {}): CancelablePromise<ProductSpecificationPublic> {
		const {
active,
endDate,
limit = 100,
search,
skip = 0,
startDate,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/production/specifications',
			query: {
				skip, limit, active, search, end_date: endDate, start_date: startDate
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Specification
	 * Create a new production specification.
 * 
 * Args:
 * specification (ProductSpecificationCreate): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns ProductSpecification Successful Response
	 * @throws ApiError
	 */
	public static createSpecificationApiV1ProductionSpecificationsPost(data: TDataCreateSpecificationApiV1ProductionSpecificationsPost): CancelablePromise<ProductSpecification> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/production/specifications',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Specification
	 * Update production specification.
 * 
 * Args:
 * specification_id (int): _description_
 * specification (ProductSpecificationUpdate): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns ProductSpecification Successful Response
	 * @throws ApiError
	 */
	public static updateSpecificationApiV1ProductionSpecificationsSpecificationIdPut(data: TDataUpdateSpecificationApiV1ProductionSpecificationsSpecificationIdPut): CancelablePromise<ProductSpecification> {
		const {
requestBody,
specificationId,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/production/specifications/{specification_id}',
			path: {
				specification_id: specificationId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Specification
	 * Get production specification by id. Returns 404 if not found.
 * 
 * Args:
 * specification_id (int): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns ProductSpecification Successful Response
	 * @throws ApiError
	 */
	public static getSpecificationApiV1ProductionSpecificationsSpecificationIdGet(data: TDataGetSpecificationApiV1ProductionSpecificationsSpecificationIdGet): CancelablePromise<ProductSpecification> {
		const {
specificationId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/production/specifications/{specification_id}',
			path: {
				specification_id: specificationId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Specification
	 * Delete production specification.
 * 
 * Args:
 * specification_id (int): _description_
 * 
 * Returns:
 * dict: _description_
	 * @returns ProductSpecification Successful Response
	 * @throws ApiError
	 */
	public static deleteSpecificationApiV1ProductionSpecificationsSpecificationIdDelete(data: TDataDeleteSpecificationApiV1ProductionSpecificationsSpecificationIdDelete): CancelablePromise<ProductSpecification> {
		const {
specificationId,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/production/specifications/{specification_id}',
			path: {
				specification_id: specificationId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

}



export class ProductionAnalysisService {

	/**
	 * Get Production Analysis
	 * Fetch data from the specified table and return data for charting.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static getProductionAnalysisApiV1AnalyticsProductionGet(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/analytics/production',
		});
	}

}

export type TDataReadSafetyObservationsApiV1SafetySafetyObservationsGet = {
                limit?: number
skip?: number
                
            }
export type TDataCreateSafetyObservationApiV1SafetySafetyObservationsPost = {
                requestBody: SafetyObservationCreateModel
                
            }
export type TDataReadSafetyObservationApiV1SafetySafetyObservationsIdGet = {
                id: number
                
            }
export type TDataUpdateSafetyObservationApiV1SafetySafetyObservationsIdPut = {
                id: number
requestBody: SafetyObservationUpdateModel
                
            }
export type TDataDeleteSafetyObservationApiV1SafetySafetyObservationsIdDelete = {
                id: number
                
            }
export type TDataReadRiskAssessmentsApiV1SafetyRiskAssessmentsGet = {
                limit?: number
skip?: number
                
            }
export type TDataCreateRiskAssessmentApiV1SafetyRiskAssessmentsPost = {
                requestBody: RiskAssessmentCreateModel
                
            }
export type TDataReadRiskAssessmentApiV1SafetyRiskAssessmentsIdGet = {
                id: number
                
            }
export type TDataUpdateRiskAssessmentApiV1SafetyRiskAssessmentsIdPut = {
                id: number
requestBody: RiskAssessmentUpdateModel
                
            }
export type TDataDeleteRiskAssessmentApiV1SafetyRiskAssessmentsIdDelete = {
                id: number
                
            }
export type TDataReadOsha300LogsApiV1SafetyOsha300LogsGet = {
                limit?: number
skip?: number
                
            }
export type TDataCreateOsha300LogApiV1SafetyOsha300LogsPost = {
                requestBody: OSHA300LogCreate
                
            }
export type TDataReadOsha300LogApiV1SafetyOsha300LogsIdGet = {
                id: number
                
            }
export type TDataUpdateOsha300LogApiV1SafetyOsha300LogsIdPut = {
                id: number
requestBody: OSHA300LogUpdate
                
            }
export type TDataDeleteOsha300LogApiV1SafetyOsha300LogsIdDelete = {
                id: number
                
            }
export type TDataReadSheMeetingsApiV1SafetySheMeetingsGet = {
                limit?: number
skip?: number
                
            }
export type TDataCreateSheMeetingApiV1SafetySheMeetingsPost = {
                requestBody: SHEMeetingCreate
                
            }
export type TDataReadSheMeetingApiV1SafetySheMeetingsIdGet = {
                id: number
                
            }
export type TDataUpdateSheMeetingApiV1SafetySheMeetingsIdPut = {
                id: number
requestBody: SHEMeetingUpdate
                
            }
export type TDataDeleteSheMeetingApiV1SafetySheMeetingsIdDelete = {
                id: number
                
            }
export type TDataReadSheIncidentsApiV1SafetySheIncidentsGet = {
                limit?: number
skip?: number
                
            }
export type TDataCreateSheIncidentApiV1SafetySheIncidentsPost = {
                requestBody: SHEIncidentCreate
                
            }
export type TDataReadSheIncidentApiV1SafetySheIncidentsIdGet = {
                id: number
                
            }
export type TDataUpdateSheIncidentApiV1SafetySheIncidentsIdPut = {
                id: number
requestBody: SHEIncidentUpdate
                
            }
export type TDataDeleteSheIncidentApiV1SafetySheIncidentsIdDelete = {
                id: number
                
            }
export type TDataReadSheInspectionApiV1SafetySheInspectionsGet = {
                limit?: number
skip?: number
                
            }
export type TDataCreateSheInspectionApiV1SafetySheInspectionsPost = {
                requestBody: SHEQInspectionCreate
                
            }
export type TDataReadSheInspectionApiV1SafetySheInspectionsIdGet = {
                id: number
                
            }
export type TDataUpdateSheInspectionApiV1SafetySheInspectionsIdPut = {
                id: number
requestBody: SHEQInspectionUpdate
                
            }
export type TDataDeleteSheInspectionApiV1SafetySheInspectionsIdDelete = {
                id: number
                
            }
export type TDataReadSheTrainingApiV1SafetySheTrainingsGet = {
                limit?: number
skip?: number
                
            }
export type TDataCreateSheTrainingApiV1SafetySheTrainingsPost = {
                requestBody: SHEQTrainingCreate
                
            }
export type TDataReadSheTrainingApiV1SafetySheTrainingsIdGet = {
                id: number
                
            }
export type TDataUpdateSheTrainingApiV1SafetySheTrainingsIdPut = {
                id: number
requestBody: SHEQTrainingUpdate
                
            }
export type TDataDeleteSheTrainingApiV1SafetySheTrainingsIdDelete = {
                id: number
                
            }

export class SafetyService {

	/**
	 * Read Safety Observations
	 * Get all safety observations
	 * @returns SafetyObersevationsPublic Successful Response
	 * @throws ApiError
	 */
	public static readSafetyObservationsApiV1SafetySafetyObservationsGet(data: TDataReadSafetyObservationsApiV1SafetySafetyObservationsGet = {}): CancelablePromise<SafetyObersevationsPublic> {
		const {
limit = 100,
skip = 0,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety/safety-observations',
			query: {
				skip, limit
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Safety Observation
	 * @returns SafetyObservationResponseModel Successful Response
	 * @throws ApiError
	 */
	public static createSafetyObservationApiV1SafetySafetyObservationsPost(data: TDataCreateSafetyObservationApiV1SafetySafetyObservationsPost): CancelablePromise<SafetyObservationResponseModel> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/safety/safety-observations',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Safety Observation
	 * @returns SafetyObservationResponseModel Successful Response
	 * @throws ApiError
	 */
	public static readSafetyObservationApiV1SafetySafetyObservationsIdGet(data: TDataReadSafetyObservationApiV1SafetySafetyObservationsIdGet): CancelablePromise<SafetyObservationResponseModel> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety/safety-observations/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Safety Observation
	 * @returns SafetyObservationResponseModel Successful Response
	 * @throws ApiError
	 */
	public static updateSafetyObservationApiV1SafetySafetyObservationsIdPut(data: TDataUpdateSafetyObservationApiV1SafetySafetyObservationsIdPut): CancelablePromise<SafetyObservationResponseModel> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/safety/safety-observations/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Safety Observation
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteSafetyObservationApiV1SafetySafetyObservationsIdDelete(data: TDataDeleteSafetyObservationApiV1SafetySafetyObservationsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/safety/safety-observations/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Risk Assessments
	 * Get all risk assessments
	 * @returns RiskAssessmentsPublic Successful Response
	 * @throws ApiError
	 */
	public static readRiskAssessmentsApiV1SafetyRiskAssessmentsGet(data: TDataReadRiskAssessmentsApiV1SafetyRiskAssessmentsGet = {}): CancelablePromise<RiskAssessmentsPublic> {
		const {
limit = 100,
skip = 0,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety/risk-assessments',
			query: {
				skip, limit
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Risk Assessment
	 * @returns RiskAssessmentResponseModel Successful Response
	 * @throws ApiError
	 */
	public static createRiskAssessmentApiV1SafetyRiskAssessmentsPost(data: TDataCreateRiskAssessmentApiV1SafetyRiskAssessmentsPost): CancelablePromise<RiskAssessmentResponseModel> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/safety/risk-assessments',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Risk Assessment
	 * Get a single risk assessment
	 * @returns RiskAssessmentResponseModel Successful Response
	 * @throws ApiError
	 */
	public static readRiskAssessmentApiV1SafetyRiskAssessmentsIdGet(data: TDataReadRiskAssessmentApiV1SafetyRiskAssessmentsIdGet): CancelablePromise<RiskAssessmentResponseModel> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety/risk-assessments/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Risk Assessment
	 * @returns RiskAssessmentResponseModel Successful Response
	 * @throws ApiError
	 */
	public static updateRiskAssessmentApiV1SafetyRiskAssessmentsIdPut(data: TDataUpdateRiskAssessmentApiV1SafetyRiskAssessmentsIdPut): CancelablePromise<RiskAssessmentResponseModel> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/safety/risk-assessments/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Risk Assessment
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteRiskAssessmentApiV1SafetyRiskAssessmentsIdDelete(data: TDataDeleteRiskAssessmentApiV1SafetyRiskAssessmentsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/safety/risk-assessments/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Osha 300 Logs
	 * Get all OSHA 300 logs
	 * @returns OSHA300LogList Successful Response
	 * @throws ApiError
	 */
	public static readOsha300LogsApiV1SafetyOsha300LogsGet(data: TDataReadOsha300LogsApiV1SafetyOsha300LogsGet = {}): CancelablePromise<OSHA300LogList> {
		const {
limit = 100,
skip = 0,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety/osha-300-logs',
			query: {
				skip, limit
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Osha 300 Log
	 * @returns OSHA300LogRead Successful Response
	 * @throws ApiError
	 */
	public static createOsha300LogApiV1SafetyOsha300LogsPost(data: TDataCreateOsha300LogApiV1SafetyOsha300LogsPost): CancelablePromise<OSHA300LogRead> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/safety/osha-300-logs',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Osha 300 Log
	 * Get a single OSHA 300 log
	 * @returns OSHA300LogRead Successful Response
	 * @throws ApiError
	 */
	public static readOsha300LogApiV1SafetyOsha300LogsIdGet(data: TDataReadOsha300LogApiV1SafetyOsha300LogsIdGet): CancelablePromise<OSHA300LogRead> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety/osha-300-logs/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Osha 300 Log
	 * @returns OSHA300LogRead Successful Response
	 * @throws ApiError
	 */
	public static updateOsha300LogApiV1SafetyOsha300LogsIdPut(data: TDataUpdateOsha300LogApiV1SafetyOsha300LogsIdPut): CancelablePromise<OSHA300LogRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/safety/osha-300-logs/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Osha 300 Log
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteOsha300LogApiV1SafetyOsha300LogsIdDelete(data: TDataDeleteOsha300LogApiV1SafetyOsha300LogsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/safety/osha-300-logs/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read She Meetings
	 * Get all SHE meetings
	 * @returns SHEMeetingList Successful Response
	 * @throws ApiError
	 */
	public static readSheMeetingsApiV1SafetySheMeetingsGet(data: TDataReadSheMeetingsApiV1SafetySheMeetingsGet = {}): CancelablePromise<SHEMeetingList> {
		const {
limit = 100,
skip = 0,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety/she-meetings',
			query: {
				skip, limit
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create She Meeting
	 * @returns SHEMeetingRead Successful Response
	 * @throws ApiError
	 */
	public static createSheMeetingApiV1SafetySheMeetingsPost(data: TDataCreateSheMeetingApiV1SafetySheMeetingsPost): CancelablePromise<SHEMeetingRead> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/safety/she-meetings',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read She Meeting
	 * Get a single SHE meeting
	 * @returns SHEMeetingRead Successful Response
	 * @throws ApiError
	 */
	public static readSheMeetingApiV1SafetySheMeetingsIdGet(data: TDataReadSheMeetingApiV1SafetySheMeetingsIdGet): CancelablePromise<SHEMeetingRead> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety/she-meetings/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update She Meeting
	 * @returns SHEMeetingRead Successful Response
	 * @throws ApiError
	 */
	public static updateSheMeetingApiV1SafetySheMeetingsIdPut(data: TDataUpdateSheMeetingApiV1SafetySheMeetingsIdPut): CancelablePromise<SHEMeetingRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/safety/she-meetings/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete She Meeting
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteSheMeetingApiV1SafetySheMeetingsIdDelete(data: TDataDeleteSheMeetingApiV1SafetySheMeetingsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/safety/she-meetings/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read She Incidents
	 * Get all SHE incidents
	 * @returns SHEIncidentList Successful Response
	 * @throws ApiError
	 */
	public static readSheIncidentsApiV1SafetySheIncidentsGet(data: TDataReadSheIncidentsApiV1SafetySheIncidentsGet = {}): CancelablePromise<SHEIncidentList> {
		const {
limit = 100,
skip = 0,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety/she-incidents',
			query: {
				skip, limit
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create She Incident
	 * @returns SHEIncidentRead Successful Response
	 * @throws ApiError
	 */
	public static createSheIncidentApiV1SafetySheIncidentsPost(data: TDataCreateSheIncidentApiV1SafetySheIncidentsPost): CancelablePromise<SHEIncidentRead> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/safety/she-incidents',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read She Incident
	 * Get a single SHE incident
	 * @returns SHEIncidentRead Successful Response
	 * @throws ApiError
	 */
	public static readSheIncidentApiV1SafetySheIncidentsIdGet(data: TDataReadSheIncidentApiV1SafetySheIncidentsIdGet): CancelablePromise<SHEIncidentRead> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety/she-incidents/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update She Incident
	 * @returns SHEIncidentRead Successful Response
	 * @throws ApiError
	 */
	public static updateSheIncidentApiV1SafetySheIncidentsIdPut(data: TDataUpdateSheIncidentApiV1SafetySheIncidentsIdPut): CancelablePromise<SHEIncidentRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/safety/she-incidents/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete She Incident
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteSheIncidentApiV1SafetySheIncidentsIdDelete(data: TDataDeleteSheIncidentApiV1SafetySheIncidentsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/safety/she-incidents/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read She Inspection
	 * Get all SHE inspections
	 * @returns SHEQInspectionList Successful Response
	 * @throws ApiError
	 */
	public static readSheInspectionApiV1SafetySheInspectionsGet(data: TDataReadSheInspectionApiV1SafetySheInspectionsGet = {}): CancelablePromise<SHEQInspectionList> {
		const {
limit = 100,
skip = 0,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety/she-inspections',
			query: {
				skip, limit
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create She Inspection
	 * @returns SHEQInspectionRead Successful Response
	 * @throws ApiError
	 */
	public static createSheInspectionApiV1SafetySheInspectionsPost(data: TDataCreateSheInspectionApiV1SafetySheInspectionsPost): CancelablePromise<SHEQInspectionRead> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/safety/she-inspections',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read She Inspection
	 * Get a single SHE inspection
	 * @returns SHEQInspectionRead Successful Response
	 * @throws ApiError
	 */
	public static readSheInspectionApiV1SafetySheInspectionsIdGet(data: TDataReadSheInspectionApiV1SafetySheInspectionsIdGet): CancelablePromise<SHEQInspectionRead> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety/she-inspections/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update She Inspection
	 * @returns SHEQInspectionRead Successful Response
	 * @throws ApiError
	 */
	public static updateSheInspectionApiV1SafetySheInspectionsIdPut(data: TDataUpdateSheInspectionApiV1SafetySheInspectionsIdPut): CancelablePromise<SHEQInspectionRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/safety/she-inspections/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete She Inspection
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteSheInspectionApiV1SafetySheInspectionsIdDelete(data: TDataDeleteSheInspectionApiV1SafetySheInspectionsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/safety/she-inspections/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read She Training
	 * Get all SHE trainings
	 * @returns SHEQTrainingList Successful Response
	 * @throws ApiError
	 */
	public static readSheTrainingApiV1SafetySheTrainingsGet(data: TDataReadSheTrainingApiV1SafetySheTrainingsGet = {}): CancelablePromise<SHEQTrainingList> {
		const {
limit = 100,
skip = 0,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety/she-trainings',
			query: {
				skip, limit
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create She Training
	 * @returns SHEQTrainingRead Successful Response
	 * @throws ApiError
	 */
	public static createSheTrainingApiV1SafetySheTrainingsPost(data: TDataCreateSheTrainingApiV1SafetySheTrainingsPost): CancelablePromise<SHEQTrainingRead> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/safety/she-trainings',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read She Training
	 * Get a single SHE training
	 * @returns SHEQTrainingRead Successful Response
	 * @throws ApiError
	 */
	public static readSheTrainingApiV1SafetySheTrainingsIdGet(data: TDataReadSheTrainingApiV1SafetySheTrainingsIdGet): CancelablePromise<SHEQTrainingRead> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety/she-trainings/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update She Training
	 * @returns SHEQTrainingRead Successful Response
	 * @throws ApiError
	 */
	public static updateSheTrainingApiV1SafetySheTrainingsIdPut(data: TDataUpdateSheTrainingApiV1SafetySheTrainingsIdPut): CancelablePromise<SHEQTrainingRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/safety/she-trainings/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete She Training
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteSheTrainingApiV1SafetySheTrainingsIdDelete(data: TDataDeleteSheTrainingApiV1SafetySheTrainingsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/safety/she-trainings/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

}



export class SafetyAnalysisService {

	/**
	 * Get Incidents Over Time
	 * Fetch data from the specified table and return data for charting.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static getIncidentsOverTimeApiV1SafetyAnalyticsIncidentsOverTimeGet(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety-analytics/incidents-over-time',
		});
	}

	/**
	 * Get Incidents
	 * Fetch data from the specified table and return data for charting.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static getIncidentsApiV1SafetyAnalyticsIncidentsGet(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety-analytics/incidents',
		});
	}

	/**
	 * Get Osha300 Over Time
	 * Fetch data from the specified table and return data for charting.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static getOsha300OverTimeApiV1SafetyAnalyticsOsha300OverTimeGet(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety-analytics/osha300-over-time',
		});
	}

	/**
	 * Get Osha300 By Department
	 * Fetch data from the specified table and return data for charting.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static getOsha300ByDepartmentApiV1SafetyAnalyticsOsha300ByDepartmentGet(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety-analytics/osha300-by-department',
		});
	}

	/**
	 * Get Osha300 By Lost Work Days
	 * Fetch data from the specified table and return data for charting.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static getOsha300ByLostWorkDaysApiV1SafetyAnalyticsOsha300ByLostWorkDaysGet(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety-analytics/osha300-by-lost-work-days',
		});
	}

	/**
	 * Get Safety Observations Over Time
	 * Fetch data from the specified table and return data for charting.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static getSafetyObservationsOverTimeApiV1SafetyAnalyticsSafetyObservationsOverTimeGet(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety-analytics/safety-observations-over-time',
		});
	}

	/**
	 * Get Safety Observations Severity
	 * Fetch data from the specified table and return data for charting.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static getSafetyObservationsSeverityApiV1SafetyAnalyticsSafetyObservationsSeverityGet(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety-analytics/safety-observations-severity',
		});
	}

	/**
	 * Get Ltifr
	 * Fetch data from the specified table and return data for charting.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static getLtifrApiV1SafetyAnalyticsLtifrGet(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/safety-analytics/ltifr',
		});
	}

}

export type TDataReadAllStockPrepDcsRelatedChecksApiV1SpDcsChecksGet = {
                endDate?: string | null
limit?: number
search?: string | null
skip?: number
startDate?: string | null
                
            }
export type TDataCreateStockPrepDcsCheckApiV1SpDcsChecksPost = {
                requestBody: StockPrepDCSRelatedCheckCreate
                
            }
export type TDataReadStockPrepDcsRelatedCheckByIdApiV1SpDcsChecksIdGet = {
                id: number
                
            }
export type TDataUpdateStockPrepDcsCheckApiV1SpDcsChecksIdPut = {
                id: number
requestBody: StockPrepDCSRelatedCheckUpdate
                
            }
export type TDataDeleteStockPrepDcsCheckApiV1SpDcsChecksIdDelete = {
                id: number
                
            }
export type TDataReadStockPrepDcsRelatedCheckByVisorIdApiV1SpDcsChecksPcvProcessVisorIdSpDcsCheckGet = {
                processVisorId: number
                
            }
export type TDataUpdateWaterSystemFieldCheckApiV1SpDcsChecksIdWsDcscPut = {
                id: number
requestBody: StockPrepDCSRelatedCheckUpdate
                
            }
export type TDataUpdateThickStockDcsCheckApiV1SpDcsChecksIdTcsDcscPut = {
                id: number
requestBody: StockPrepDCSRelatedCheckUpdate
                
            }
export type TDataUpdateThinStockDcsCheckApiV1SpDcsChecksIdTnsDcscPut = {
                id: number
requestBody: StockPrepDCSRelatedCheckUpdate
                
            }
export type TDataUpdateWashingSectionDcsCheckApiV1SpDcsChecksIdWshDcscPut = {
                id: number
requestBody: StockPrepDCSRelatedCheckUpdate
                
            }
export type TDataUpdateDespersingSectionDcsCheckApiV1SpDcsChecksIdDespsDcscPut = {
                id: number
requestBody: StockPrepDCSRelatedCheckUpdate
                
            }
export type TDataUpdatePostFlotationSectionDcsCheckApiV1SpDcsChecksPsfDcscPut = {
                id: number
requestBody: StockPrepDCSRelatedCheckUpdate
                
            }
export type TDataUpdateDewateringSectionDcsCheckApiV1SpDcsChecksIdDewaterDcscPut = {
                id: number
requestBody: StockPrepDCSRelatedCheckUpdate
                
            }
export type TDataAddRemarkToStockPrepDcsCheckApiV1SpDcsChecksIdAddRemarkPut = {
                id: number
remark: string
                
            }

export class SpDcsChecksService {

	/**
	 * Read All Stock Prep Dcs Related Checks
	 * @returns StockPrepDCSRelatedCheckPublic Successful Response
	 * @throws ApiError
	 */
	public static readAllStockPrepDcsRelatedChecksApiV1SpDcsChecksGet(data: TDataReadAllStockPrepDcsRelatedChecksApiV1SpDcsChecksGet = {}): CancelablePromise<StockPrepDCSRelatedCheckPublic> {
		const {
endDate,
limit = 100,
search,
skip = 0,
startDate,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/sp-dcs-checks/',
			query: {
				skip, limit, search, end_date: endDate, start_date: startDate
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Stock Prep Dcs Check
	 * @returns StockPrepDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static createStockPrepDcsCheckApiV1SpDcsChecksPost(data: TDataCreateStockPrepDcsCheckApiV1SpDcsChecksPost): CancelablePromise<StockPrepDCSRelatedCheckResponse> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/sp-dcs-checks/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Stock Prep Dcs Related Check By Id
	 * @returns StockPrepDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static readStockPrepDcsRelatedCheckByIdApiV1SpDcsChecksIdGet(data: TDataReadStockPrepDcsRelatedCheckByIdApiV1SpDcsChecksIdGet): CancelablePromise<StockPrepDCSRelatedCheckResponse> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/sp-dcs-checks/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Stock Prep Dcs Check
	 * @returns StockPrepDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateStockPrepDcsCheckApiV1SpDcsChecksIdPut(data: TDataUpdateStockPrepDcsCheckApiV1SpDcsChecksIdPut): CancelablePromise<StockPrepDCSRelatedCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/sp-dcs-checks/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Stock Prep Dcs Check
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static deleteStockPrepDcsCheckApiV1SpDcsChecksIdDelete(data: TDataDeleteStockPrepDcsCheckApiV1SpDcsChecksIdDelete): CancelablePromise<unknown> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/sp-dcs-checks/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Stock Prep Dcs Related Check By Visor Id
	 * @returns StockPrepDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static readStockPrepDcsRelatedCheckByVisorIdApiV1SpDcsChecksPcvProcessVisorIdSpDcsCheckGet(data: TDataReadStockPrepDcsRelatedCheckByVisorIdApiV1SpDcsChecksPcvProcessVisorIdSpDcsCheckGet): CancelablePromise<StockPrepDCSRelatedCheckResponse> {
		const {
processVisorId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/sp-dcs-checks/pcv/{process_visor_id}/sp-dcs-check',
			path: {
				process_visor_id: processVisorId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Water System Field Check
	 * @returns StockPrepDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateWaterSystemFieldCheckApiV1SpDcsChecksIdWsDcscPut(data: TDataUpdateWaterSystemFieldCheckApiV1SpDcsChecksIdWsDcscPut): CancelablePromise<StockPrepDCSRelatedCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/sp-dcs-checks/{id}/ws-dcsc',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Thick Stock Dcs Check
	 * @returns StockPrepDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateThickStockDcsCheckApiV1SpDcsChecksIdTcsDcscPut(data: TDataUpdateThickStockDcsCheckApiV1SpDcsChecksIdTcsDcscPut): CancelablePromise<StockPrepDCSRelatedCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/sp-dcs-checks/{id}/tcs-dcsc',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Thin Stock Dcs Check
	 * @returns StockPrepDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateThinStockDcsCheckApiV1SpDcsChecksIdTnsDcscPut(data: TDataUpdateThinStockDcsCheckApiV1SpDcsChecksIdTnsDcscPut): CancelablePromise<StockPrepDCSRelatedCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/sp-dcs-checks/{id}/tns-dcsc',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Washing Section Dcs Check
	 * @returns StockPrepDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateWashingSectionDcsCheckApiV1SpDcsChecksIdWshDcscPut(data: TDataUpdateWashingSectionDcsCheckApiV1SpDcsChecksIdWshDcscPut): CancelablePromise<StockPrepDCSRelatedCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/sp-dcs-checks/{id}/wsh-dcsc',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Despersing Section Dcs Check
	 * @returns StockPrepDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateDespersingSectionDcsCheckApiV1SpDcsChecksIdDespsDcscPut(data: TDataUpdateDespersingSectionDcsCheckApiV1SpDcsChecksIdDespsDcscPut): CancelablePromise<StockPrepDCSRelatedCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/sp-dcs-checks/{id}/desps-dcsc',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Post Flotation Section Dcs Check
	 * @returns StockPrepDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updatePostFlotationSectionDcsCheckApiV1SpDcsChecksPsfDcscPut(data: TDataUpdatePostFlotationSectionDcsCheckApiV1SpDcsChecksPsfDcscPut): CancelablePromise<StockPrepDCSRelatedCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/sp-dcs-checks/{}/psf-dcsc',
			query: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Dewatering Section Dcs Check
	 * @returns StockPrepDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateDewateringSectionDcsCheckApiV1SpDcsChecksIdDewaterDcscPut(data: TDataUpdateDewateringSectionDcsCheckApiV1SpDcsChecksIdDewaterDcscPut): CancelablePromise<StockPrepDCSRelatedCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/sp-dcs-checks/{id}/dewater-dcsc',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Add Remark To Stock Prep Dcs Check
	 * @returns StockPrepDCSRelatedCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static addRemarkToStockPrepDcsCheckApiV1SpDcsChecksIdAddRemarkPut(data: TDataAddRemarkToStockPrepDcsCheckApiV1SpDcsChecksIdAddRemarkPut): CancelablePromise<StockPrepDCSRelatedCheckResponse> {
		const {
id,
remark,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/sp-dcs-checks/{id}/add-remark',
			path: {
				id
			},
			query: {
				remark
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

}

export type TDataReadAllStockPrepFieldChecksApiV1SpFieldChecksGet = {
                endDate?: string | null
limit?: number
search?: string | null
skip?: number
startDate?: string | null
                
            }
export type TDataCreateStockPrepFieldCheckApiV1SpFieldChecksPost = {
                requestBody: StockPrepFieldCheckCreate
                
            }
export type TDataReadStockPrepFieldCheckByIdApiV1SpFieldChecksIdGet = {
                id: number
                
            }
export type TDataUpdateStockPrepFieldCheckApiV1SpFieldChecksIdPut = {
                id: number
requestBody: StockPrepFieldCheckUpdate
                
            }
export type TDataDeleteStockPrepFieldCheckApiV1SpFieldChecksIdDelete = {
                id: number
                
            }
export type TDataReadStockPrepFieldCheckByVisorIdApiV1SpFieldChecksPcvProcessVisorIdSpFieldCheckGet = {
                processVisorId: number
                
            }
export type TDataUpdateRejectHandlingFieldCheckApiV1SpFieldChecksIdRhFcPut = {
                id: number
requestBody: StockPrepFieldCheckUpdate
                
            }
export type TDataUpdateFromLevel100FieldCheckApiV1SpFieldChecksIdFromLevel100Put = {
                id: number
requestBody: StockPrepFieldCheckUpdate
                
            }
export type TDataUpdateFromLevel200FieldCheckApiV1SpFieldChecksIdFromLevel200Put = {
                id: number
requestBody: StockPrepFieldCheckUpdate
                
            }
export type TDataUpdateBasementFieldCheckApiV1SpFieldChecksIdBasementFcPut = {
                id: number
requestBody: StockPrepFieldCheckUpdate
                
            }
export type TDataUpdateWasteFieldCheckApiV1SpFieldChecksIdDwsFcPut = {
                id: number
requestBody: StockPrepFieldCheckUpdate
                
            }
export type TDataAddFieldCheckRemarksApiV1SpFieldChecksIdAddRemarksPut = {
                id: number
remarks: string
                
            }

export class SpFieldChecksService {

	/**
	 * Read All Stock Prep Field Checks
	 * @returns StockPrepFieldCheckPublic Successful Response
	 * @throws ApiError
	 */
	public static readAllStockPrepFieldChecksApiV1SpFieldChecksGet(data: TDataReadAllStockPrepFieldChecksApiV1SpFieldChecksGet = {}): CancelablePromise<StockPrepFieldCheckPublic> {
		const {
endDate,
limit = 100,
search,
skip = 0,
startDate,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/sp-field-checks/',
			query: {
				skip, limit, search, end_date: endDate, start_date: startDate
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Stock Prep Field Check
	 * @returns StockPrepFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static createStockPrepFieldCheckApiV1SpFieldChecksPost(data: TDataCreateStockPrepFieldCheckApiV1SpFieldChecksPost): CancelablePromise<StockPrepFieldCheckResponse> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/sp-field-checks/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Stock Prep Field Check By Id
	 * @returns StockPrepFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static readStockPrepFieldCheckByIdApiV1SpFieldChecksIdGet(data: TDataReadStockPrepFieldCheckByIdApiV1SpFieldChecksIdGet): CancelablePromise<StockPrepFieldCheckResponse> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/sp-field-checks/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Stock Prep Field Check
	 * @returns StockPrepFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateStockPrepFieldCheckApiV1SpFieldChecksIdPut(data: TDataUpdateStockPrepFieldCheckApiV1SpFieldChecksIdPut): CancelablePromise<StockPrepFieldCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/sp-field-checks/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Stock Prep Field Check
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteStockPrepFieldCheckApiV1SpFieldChecksIdDelete(data: TDataDeleteStockPrepFieldCheckApiV1SpFieldChecksIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/sp-field-checks/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Stock Prep Field Check By Visor Id
	 * @returns StockPrepFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static readStockPrepFieldCheckByVisorIdApiV1SpFieldChecksPcvProcessVisorIdSpFieldCheckGet(data: TDataReadStockPrepFieldCheckByVisorIdApiV1SpFieldChecksPcvProcessVisorIdSpFieldCheckGet): CancelablePromise<StockPrepFieldCheckResponse> {
		const {
processVisorId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/sp-field-checks/pcv/{process_visor_id}/sp-field-check',
			path: {
				process_visor_id: processVisorId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Reject Handling Field Check
	 * @returns StockPrepFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateRejectHandlingFieldCheckApiV1SpFieldChecksIdRhFcPut(data: TDataUpdateRejectHandlingFieldCheckApiV1SpFieldChecksIdRhFcPut): CancelablePromise<StockPrepFieldCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/sp-field-checks/{id}/rh-fc',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update From Level 100 Field Check
	 * @returns StockPrepFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateFromLevel100FieldCheckApiV1SpFieldChecksIdFromLevel100Put(data: TDataUpdateFromLevel100FieldCheckApiV1SpFieldChecksIdFromLevel100Put): CancelablePromise<StockPrepFieldCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/sp-field-checks/{id}/from-level-100',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update From Level 200 Field Check
	 * @returns StockPrepFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateFromLevel200FieldCheckApiV1SpFieldChecksIdFromLevel200Put(data: TDataUpdateFromLevel200FieldCheckApiV1SpFieldChecksIdFromLevel200Put): CancelablePromise<StockPrepFieldCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/sp-field-checks/{id}/from-level-200',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Basement Field Check
	 * @returns StockPrepFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateBasementFieldCheckApiV1SpFieldChecksIdBasementFcPut(data: TDataUpdateBasementFieldCheckApiV1SpFieldChecksIdBasementFcPut): CancelablePromise<StockPrepFieldCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/sp-field-checks/{id}/basement-fc',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Waste Field Check
	 * @returns StockPrepFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static updateWasteFieldCheckApiV1SpFieldChecksIdDwsFcPut(data: TDataUpdateWasteFieldCheckApiV1SpFieldChecksIdDwsFcPut): CancelablePromise<StockPrepFieldCheckResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/sp-field-checks/{id}/dws-fc',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Add Field Check Remarks
	 * @returns StockPrepFieldCheckResponse Successful Response
	 * @throws ApiError
	 */
	public static addFieldCheckRemarksApiV1SpFieldChecksIdAddRemarksPut(data: TDataAddFieldCheckRemarksApiV1SpFieldChecksIdAddRemarksPut): CancelablePromise<StockPrepFieldCheckResponse> {
		const {
id,
remarks,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/sp-field-checks/{id}/add-remarks',
			path: {
				id
			},
			query: {
				remarks
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

}

export type TDataReadElectricalIsolationPermitsApiV1PermitsElectricalIsolationGet = {
                limit?: number
skip?: number
                
            }
export type TDataCreateElectricalIsolationPermitApiV1PermitsElectricalIsolationPost = {
                permitId: number
requestBody: ElectricalIsolationPermitCreate
                
            }
export type TDataReadElectricalIsolationPermitApiV1PermitsElectricalIsolationIdGet = {
                id: number
                
            }
export type TDataUpdateElectricalIsolationPermitApiV1PermitsElectricalIsolationIdPut = {
                id: number
requestBody: ElectricalIsolationPermitUpdate
                
            }
export type TDataDeleteElectricalIsolationPermitApiV1PermitsElectricalIsolationIdDelete = {
                id: number
                
            }
export type TDataReadHotWorkPermitsApiV1PermitsHotWorkPermitsGet = {
                limit?: number
skip?: number
                
            }
export type TDataCreateHotWorkPermitApiV1PermitsHotWorkPermitsPost = {
                permitId: number
requestBody: HotWorkPermitCreate
                
            }
export type TDataReadHotWorkPermitApiV1PermitsHotWorkPermitsIdGet = {
                id: number
                
            }
export type TDataUpdateHotWorkPermitApiV1PermitsHotWorkPermitsIdPut = {
                id: number
requestBody: HotWorkPermitUpdate
                
            }
export type TDataDeleteHotWorkPermitApiV1PermitsHotWorkPermitsIdDelete = {
                id: number
                
            }
export type TDataReadConfinedSpacePermitsApiV1PermitsConfinedSpacePermitsGet = {
                limit?: number
skip?: number
                
            }
export type TDataCreateConfinedSpacePermitApiV1PermitsConfinedSpacePermitsPost = {
                permitId: number
requestBody: ConfinedSpacePermitCreate
                
            }
export type TDataReadConfinedSpacePermitApiV1PermitsConfinedSpacePermitsIdGet = {
                id: number
                
            }
export type TDataUpdateConfinedSpacePermitApiV1PermitsConfinedSpacePermitsIdPut = {
                id: number
requestBody: ConfinedSpacePermitUpdate
                
            }
export type TDataDeleteConfinedSpacePermitApiV1PermitsConfinedSpacePermitsIdDelete = {
                id: number
                
            }
export type TDataReadRiggingAndLiftingPermitsApiV1PermitsRiggingAndLiftingPermitsGet = {
                limit?: number
skip?: number
                
            }
export type TDataCreateRiggingAndLiftingPermitApiV1PermitsRiggingAndLiftingPermitsPost = {
                permitId: number
requestBody: RiggingAndLiftingPermitCreate
                
            }
export type TDataReadRiggingAndLiftingPermitApiV1PermitsRiggingAndLiftingPermitsIdGet = {
                id: number
                
            }
export type TDataUpdateRiggingAndLiftingPermitApiV1PermitsRiggingAndLiftingPermitsIdPut = {
                id: number
requestBody: RiggingAndLiftingPermitUpdate
                
            }
export type TDataDeleteRiggingAndLiftingPermitApiV1PermitsRiggingAndLiftingPermitsIdDelete = {
                id: number
                
            }
export type TDataReadWorkingAtHeightPermitsApiV1PermitsWorkingAtHeightPermitsGet = {
                limit?: number
skip?: number
                
            }
export type TDataCreateWorkingAtHeightPermitApiV1PermitsWorkingAtHeightPermitsPost = {
                permitId: number
requestBody: WorkAtHeightPermitCreate
                
            }
export type TDataReadWorkingAtHeightPermitApiV1PermitsWorkingAtHeightPermitsIdGet = {
                id: number
                
            }
export type TDataUpdateWorkingAtHeightPermitApiV1PermitsWorkingAtHeightPermitsIdPut = {
                id: number
requestBody: WorkAtHeightPermitUpdate
                
            }
export type TDataDeleteWorkingAtHeightPermitApiV1PermitsWorkingAtHeightPermitsIdDelete = {
                id: number
                
            }

export class PermitsService {

	/**
	 * Read Electrical Isolation Permits
	 * Get all electrical isolation permits
	 * @returns ElectricalIsolationPermitsList Successful Response
	 * @throws ApiError
	 */
	public static readElectricalIsolationPermitsApiV1PermitsElectricalIsolationGet(data: TDataReadElectricalIsolationPermitsApiV1PermitsElectricalIsolationGet = {}): CancelablePromise<ElectricalIsolationPermitsList> {
		const {
limit = 100,
skip = 0,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/permits/electrical-isolation',
			query: {
				skip, limit
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Electrical Isolation Permit
	 * Create an electrical isolation permit
	 * @returns ElectricalIsolationPermitRead Successful Response
	 * @throws ApiError
	 */
	public static createElectricalIsolationPermitApiV1PermitsElectricalIsolationPost(data: TDataCreateElectricalIsolationPermitApiV1PermitsElectricalIsolationPost): CancelablePromise<ElectricalIsolationPermitRead> {
		const {
permitId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/permits/electrical-isolation',
			query: {
				permit_id: permitId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Electrical Isolation Permit
	 * Get a single electrical isolation permit
	 * @returns ElectricalIsolationPermitRead Successful Response
	 * @throws ApiError
	 */
	public static readElectricalIsolationPermitApiV1PermitsElectricalIsolationIdGet(data: TDataReadElectricalIsolationPermitApiV1PermitsElectricalIsolationIdGet): CancelablePromise<ElectricalIsolationPermitRead> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/permits/electrical-isolation/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Electrical Isolation Permit
	 * Update an electrical isolation permit
	 * @returns ElectricalIsolationPermitRead Successful Response
	 * @throws ApiError
	 */
	public static updateElectricalIsolationPermitApiV1PermitsElectricalIsolationIdPut(data: TDataUpdateElectricalIsolationPermitApiV1PermitsElectricalIsolationIdPut): CancelablePromise<ElectricalIsolationPermitRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/permits/electrical-isolation/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Electrical Isolation Permit
	 * Delete an electrical isolation permit
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteElectricalIsolationPermitApiV1PermitsElectricalIsolationIdDelete(data: TDataDeleteElectricalIsolationPermitApiV1PermitsElectricalIsolationIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/permits/electrical-isolation/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Hot Work Permits
	 * Get all hot work permits
	 * @returns HotWorkPermitsList Successful Response
	 * @throws ApiError
	 */
	public static readHotWorkPermitsApiV1PermitsHotWorkPermitsGet(data: TDataReadHotWorkPermitsApiV1PermitsHotWorkPermitsGet = {}): CancelablePromise<HotWorkPermitsList> {
		const {
limit = 100,
skip = 0,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/permits/hot-work-permits',
			query: {
				skip, limit
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Hot Work Permit
	 * Create a hot work permit
	 * @returns HotWorkPermitRead Successful Response
	 * @throws ApiError
	 */
	public static createHotWorkPermitApiV1PermitsHotWorkPermitsPost(data: TDataCreateHotWorkPermitApiV1PermitsHotWorkPermitsPost): CancelablePromise<HotWorkPermitRead> {
		const {
permitId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/permits/hot-work-permits',
			query: {
				permit_id: permitId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Hot Work Permit
	 * Get a single hot work permit
	 * @returns HotWorkPermitRead Successful Response
	 * @throws ApiError
	 */
	public static readHotWorkPermitApiV1PermitsHotWorkPermitsIdGet(data: TDataReadHotWorkPermitApiV1PermitsHotWorkPermitsIdGet): CancelablePromise<HotWorkPermitRead> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/permits/hot-work-permits/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Hot Work Permit
	 * Update a hot work permit
	 * @returns HotWorkPermitRead Successful Response
	 * @throws ApiError
	 */
	public static updateHotWorkPermitApiV1PermitsHotWorkPermitsIdPut(data: TDataUpdateHotWorkPermitApiV1PermitsHotWorkPermitsIdPut): CancelablePromise<HotWorkPermitRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/permits/hot-work-permits/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Hot Work Permit
	 * Delete a hot work permit
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteHotWorkPermitApiV1PermitsHotWorkPermitsIdDelete(data: TDataDeleteHotWorkPermitApiV1PermitsHotWorkPermitsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/permits/hot-work-permits/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Confined Space Permits
	 * Get all confined space permits
	 * @returns ConfinedSpacePermitsList Successful Response
	 * @throws ApiError
	 */
	public static readConfinedSpacePermitsApiV1PermitsConfinedSpacePermitsGet(data: TDataReadConfinedSpacePermitsApiV1PermitsConfinedSpacePermitsGet = {}): CancelablePromise<ConfinedSpacePermitsList> {
		const {
limit = 100,
skip = 0,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/permits/confined-space-permits',
			query: {
				skip, limit
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Confined Space Permit
	 * Create a confined space permit
	 * @returns ConfinedSpacePermitRead Successful Response
	 * @throws ApiError
	 */
	public static createConfinedSpacePermitApiV1PermitsConfinedSpacePermitsPost(data: TDataCreateConfinedSpacePermitApiV1PermitsConfinedSpacePermitsPost): CancelablePromise<ConfinedSpacePermitRead> {
		const {
permitId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/permits/confined-space-permits',
			query: {
				permit_id: permitId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Confined Space Permit
	 * Get a single confined space permit
	 * @returns ConfinedSpacePermitRead Successful Response
	 * @throws ApiError
	 */
	public static readConfinedSpacePermitApiV1PermitsConfinedSpacePermitsIdGet(data: TDataReadConfinedSpacePermitApiV1PermitsConfinedSpacePermitsIdGet): CancelablePromise<ConfinedSpacePermitRead> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/permits/confined-space-permits/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Confined Space Permit
	 * Update a confined space permit
	 * @returns ConfinedSpacePermitRead Successful Response
	 * @throws ApiError
	 */
	public static updateConfinedSpacePermitApiV1PermitsConfinedSpacePermitsIdPut(data: TDataUpdateConfinedSpacePermitApiV1PermitsConfinedSpacePermitsIdPut): CancelablePromise<ConfinedSpacePermitRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/permits/confined-space-permits/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Confined Space Permit
	 * Delete a confined space permit
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteConfinedSpacePermitApiV1PermitsConfinedSpacePermitsIdDelete(data: TDataDeleteConfinedSpacePermitApiV1PermitsConfinedSpacePermitsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/permits/confined-space-permits/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Rigging And Lifting Permits
	 * Get all rigging and lifting permits
	 * @returns RiggingAndLiftingPermitsList Successful Response
	 * @throws ApiError
	 */
	public static readRiggingAndLiftingPermitsApiV1PermitsRiggingAndLiftingPermitsGet(data: TDataReadRiggingAndLiftingPermitsApiV1PermitsRiggingAndLiftingPermitsGet = {}): CancelablePromise<RiggingAndLiftingPermitsList> {
		const {
limit = 100,
skip = 0,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/permits/rigging-and-lifting-permits',
			query: {
				skip, limit
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Rigging And Lifting Permit
	 * Create a rigging and lifting permit
	 * @returns RiggingAndLiftingPermitRead Successful Response
	 * @throws ApiError
	 */
	public static createRiggingAndLiftingPermitApiV1PermitsRiggingAndLiftingPermitsPost(data: TDataCreateRiggingAndLiftingPermitApiV1PermitsRiggingAndLiftingPermitsPost): CancelablePromise<RiggingAndLiftingPermitRead> {
		const {
permitId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/permits/rigging-and-lifting-permits',
			query: {
				permit_id: permitId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Rigging And Lifting Permit
	 * Get a single rigging and lifting permit
	 * @returns RiggingAndLiftingPermitRead Successful Response
	 * @throws ApiError
	 */
	public static readRiggingAndLiftingPermitApiV1PermitsRiggingAndLiftingPermitsIdGet(data: TDataReadRiggingAndLiftingPermitApiV1PermitsRiggingAndLiftingPermitsIdGet): CancelablePromise<RiggingAndLiftingPermitRead> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/permits/rigging-and-lifting-permits/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Rigging And Lifting Permit
	 * Update a rigging and lifting permit
	 * @returns RiggingAndLiftingPermitRead Successful Response
	 * @throws ApiError
	 */
	public static updateRiggingAndLiftingPermitApiV1PermitsRiggingAndLiftingPermitsIdPut(data: TDataUpdateRiggingAndLiftingPermitApiV1PermitsRiggingAndLiftingPermitsIdPut): CancelablePromise<RiggingAndLiftingPermitRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/permits/rigging-and-lifting-permits/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Rigging And Lifting Permit
	 * Delete a rigging and lifting permit
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteRiggingAndLiftingPermitApiV1PermitsRiggingAndLiftingPermitsIdDelete(data: TDataDeleteRiggingAndLiftingPermitApiV1PermitsRiggingAndLiftingPermitsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/permits/rigging-and-lifting-permits/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Working At Height Permits
	 * Get all working at height permits
	 * @returns WorkAtHeightPermitsList Successful Response
	 * @throws ApiError
	 */
	public static readWorkingAtHeightPermitsApiV1PermitsWorkingAtHeightPermitsGet(data: TDataReadWorkingAtHeightPermitsApiV1PermitsWorkingAtHeightPermitsGet = {}): CancelablePromise<WorkAtHeightPermitsList> {
		const {
limit = 100,
skip = 0,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/permits/working-at-height-permits',
			query: {
				skip, limit
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Working At Height Permit
	 * Create a working at height permit
	 * @returns WorkAtHeightPermitsList Successful Response
	 * @throws ApiError
	 */
	public static createWorkingAtHeightPermitApiV1PermitsWorkingAtHeightPermitsPost(data: TDataCreateWorkingAtHeightPermitApiV1PermitsWorkingAtHeightPermitsPost): CancelablePromise<WorkAtHeightPermitsList> {
		const {
permitId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/permits/working-at-height-permits',
			query: {
				permit_id: permitId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Working At Height Permit
	 * Get a single working at height permit
	 * @returns WorkAtHeightPermitRead Successful Response
	 * @throws ApiError
	 */
	public static readWorkingAtHeightPermitApiV1PermitsWorkingAtHeightPermitsIdGet(data: TDataReadWorkingAtHeightPermitApiV1PermitsWorkingAtHeightPermitsIdGet): CancelablePromise<WorkAtHeightPermitRead> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/permits/working-at-height-permits/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Working At Height Permit
	 * Update a working at height permit
	 * @returns WorkAtHeightPermitRead Successful Response
	 * @throws ApiError
	 */
	public static updateWorkingAtHeightPermitApiV1PermitsWorkingAtHeightPermitsIdPut(data: TDataUpdateWorkingAtHeightPermitApiV1PermitsWorkingAtHeightPermitsIdPut): CancelablePromise<WorkAtHeightPermitRead> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/permits/working-at-height-permits/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Working At Height Permit
	 * Delete a working at height permit
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteWorkingAtHeightPermitApiV1PermitsWorkingAtHeightPermitsIdDelete(data: TDataDeleteWorkingAtHeightPermitApiV1PermitsWorkingAtHeightPermitsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/permits/working-at-height-permits/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

}

export type TDataReadAllWaterTestsApiV1wTestsGet = {
                endDate?: string | null
limit?: number
search?: string | null
skip?: number
startDate?: string | null
                
            }
export type TDataCreateWaterTestApiV1wTestsPost = {
                requestBody: WaterTestCreate
                
            }
export type TDataReadWaterTestByIdApiV1wTestsIdGet = {
                id: number
                
            }
export type TDataUpdateWaterTestApiV1wTestsIdPut = {
                id: number
requestBody: WaterTestUpdate
                
            }
export type TDataDeleteWaterTestApiV1wTestsIdDelete = {
                id: number
                
            }
export type TDataReadWaterTestByVisorIdApiV1wTestsPcvProcessVisorIdGet = {
                processVisorId: number
                
            }

export class WaterTestsService {

	/**
	 * Read All Water Tests
	 * @returns WaterTestPublic Successful Response
	 * @throws ApiError
	 */
	public static readAllWaterTestsApiV1WTestsGet(data: TDataReadAllWaterTestsApiV1wTestsGet = {}): CancelablePromise<WaterTestPublic> {
		const {
endDate,
limit = 100,
search,
skip = 0,
startDate,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/w-tests/',
			query: {
				skip, limit, search, end_date: endDate, start_date: startDate
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create Water Test
	 * @returns WaterTestResponse Successful Response
	 * @throws ApiError
	 */
	public static createWaterTestApiV1WTestsPost(data: TDataCreateWaterTestApiV1wTestsPost): CancelablePromise<WaterTestResponse> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/w-tests/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Water Test By Id
	 * @returns WaterTestResponse Successful Response
	 * @throws ApiError
	 */
	public static readWaterTestByIdApiV1WTestsIdGet(data: TDataReadWaterTestByIdApiV1wTestsIdGet): CancelablePromise<WaterTestResponse> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/w-tests/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update Water Test
	 * @returns WaterTestResponse Successful Response
	 * @throws ApiError
	 */
	public static updateWaterTestApiV1WTestsIdPut(data: TDataUpdateWaterTestApiV1wTestsIdPut): CancelablePromise<WaterTestResponse> {
		const {
id,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/w-tests/{id}',
			path: {
				id
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Delete Water Test
	 * @returns void Successful Response
	 * @throws ApiError
	 */
	public static deleteWaterTestApiV1WTestsIdDelete(data: TDataDeleteWaterTestApiV1wTestsIdDelete): CancelablePromise<void> {
		const {
id,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/v1/w-tests/{id}',
			path: {
				id
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Read Water Test By Visor Id
	 * @returns WaterTestResponse Successful Response
	 * @throws ApiError
	 */
	public static readWaterTestByVisorIdApiV1WTestsPcvProcessVisorIdGet(data: TDataReadWaterTestByVisorIdApiV1wTestsPcvProcessVisorIdGet): CancelablePromise<WaterTestResponse> {
		const {
processVisorId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/w-tests/pcv/{process_visor_id}',
			path: {
				process_visor_id: processVisorId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

}

export type TDataGetUsersApiV1UsersGet = {
                limit?: number
skip?: number
                
            }
export type TDataCreateUserApiV1UsersPost = {
                requestBody: User
                
            }
export type TDataGetUserApiV1UsersUserIdGet = {
                userId: string
                
            }
export type TDataUpdateUserApiV1UsersUserIdPut = {
                requestBody: UserUpdate
userId: string
                
            }
export type TDataUpdateUserPasswordApiV1UsersPasswordUserIdPut = {
                requestBody: ChangePassword
userId: string
                
            }

export class UsersService {

	/**
	 * Get Users
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static getUsersApiV1UsersGet(data: TDataGetUsersApiV1UsersGet = {}): CancelablePromise<unknown> {
		const {
limit = 50,
skip = 0,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/users/',
			query: {
				skip, limit
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Create User
	 * @returns User Successful Response
	 * @throws ApiError
	 */
	public static createUserApiV1UsersPost(data: TDataCreateUserApiV1UsersPost): CancelablePromise<User> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/users/',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Get Me
	 * Get current user
	 * @returns User Successful Response
	 * @throws ApiError
	 */
	public static getMeApiV1UsersMeGet(): CancelablePromise<User> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/users/me',
		});
	}

	/**
	 * Get User
	 * @returns User Successful Response
	 * @throws ApiError
	 */
	public static getUserApiV1UsersUserIdGet(data: TDataGetUserApiV1UsersUserIdGet): CancelablePromise<User> {
		const {
userId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/v1/users/{user_id}',
			path: {
				user_id: userId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update User
	 * @returns User Successful Response
	 * @throws ApiError
	 */
	public static updateUserApiV1UsersUserIdPut(data: TDataUpdateUserApiV1UsersUserIdPut): CancelablePromise<User> {
		const {
requestBody,
userId,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/users/{user_id}',
			path: {
				user_id: userId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Update User Password
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static updateUserPasswordApiV1UsersPasswordUserIdPut(data: TDataUpdateUserPasswordApiV1UsersPasswordUserIdPut): CancelablePromise<unknown> {
		const {
requestBody,
userId,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/v1/users/password/{user_id}',
			path: {
				user_id: userId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

}

export type TDataTestEmailApiV1TestEmailPost = {
                requestBody: Body_test_email_api_v1_test_email_post
                
            }

export class UtilisService {

	/**
	 * Test Email
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static testEmailApiV1TestEmailPost(data: TDataTestEmailApiV1TestEmailPost): CancelablePromise<unknown> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/v1/test-email',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

}