{
	"contents": {
		"6ab3b342-bda4-494f-8801-658419af9266": {
			"classDefinition": "com.sap.bpm.wfs.Model",
			"id": "PricingProposalRequestApproveOrReject",
			"subject": "PricingProposalRequestApproveOrReject",
			"name": "PricingProposalRequestApproveOrReject",
			"documentation": "Pricing Proposal Request Approval Workflow - CR0070",
			"lastIds": "62d7f4ed-4063-4c44-af8b-39050bd44926",
			"events": {
				"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
					"name": "StartEvent1"
				},
				"2798f4e7-bc42-4fad-a248-159095a2f40a": {
					"name": "EndEvent1"
				}
			},
			"activities": {
				"9c10a79e-1cbf-48c9-85a2-8993fe081630": {
					"name": "UserTask_ApprovePricingProposalRequest"
				}
			},
			"sequenceFlows": {
				"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
					"name": "SequenceFlow1"
				},
				"2cd26105-ef64-4d68-a085-08ed4534249a": {
					"name": "SequenceFlow2"
				}
			},
			"diagrams": {
				"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {}
			}
		},
		"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
			"classDefinition": "com.sap.bpm.wfs.StartEvent",
			"id": "startevent1",
			"name": "StartEvent1",
			"sampleContextRefs": {
				"0ff52a25-8f8c-4b4e-96fa-1d4b07ff4ddb": {}
			}
		},
		"2798f4e7-bc42-4fad-a248-159095a2f40a": {
			"classDefinition": "com.sap.bpm.wfs.EndEvent",
			"id": "endevent1",
			"name": "EndEvent1"
		},
		"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow1",
			"name": "SequenceFlow1",
			"sourceRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3",
			"targetRef": "9c10a79e-1cbf-48c9-85a2-8993fe081630"
		},
		"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {
			"classDefinition": "com.sap.bpm.wfs.ui.Diagram",
			"symbols": {
				"df898b52-91e1-4778-baad-2ad9a261d30e": {},
				"53e54950-7757-4161-82c9-afa7e86cff2c": {},
				"6bb141da-d485-4317-93b8-e17711df4c32": {},
				"37bfc0f1-447e-46e1-a625-8a659116c974": {},
				"8801e542-5173-4cbe-84e9-43ceb9997c5b": {}
			}
		},
		"0ff52a25-8f8c-4b4e-96fa-1d4b07ff4ddb": {
			"classDefinition": "com.sap.bpm.wfs.SampleContext",
			"reference": "/sample-data/PricingProposalRequestApproveOrReject/PricingProposalRequestApprovalOrReject.json",
			"id": "default-start-context"
		},
		"df898b52-91e1-4778-baad-2ad9a261d30e": {
			"classDefinition": "com.sap.bpm.wfs.ui.StartEventSymbol",
			"x": 100,
			"y": 100,
			"width": 32,
			"height": 32,
			"object": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3"
		},
		"53e54950-7757-4161-82c9-afa7e86cff2c": {
			"classDefinition": "com.sap.bpm.wfs.ui.EndEventSymbol",
			"x": 340,
			"y": 100,
			"width": 35,
			"height": 35,
			"object": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"6bb141da-d485-4317-93b8-e17711df4c32": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "116,117 232,117",
			"sourceSymbol": "df898b52-91e1-4778-baad-2ad9a261d30e",
			"targetSymbol": "37bfc0f1-447e-46e1-a625-8a659116c974",
			"object": "c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f"
		},
		"62d7f4ed-4063-4c44-af8b-39050bd44926": {
			"classDefinition": "com.sap.bpm.wfs.LastIDs",
			"sequenceflow": 2,
			"startevent": 1,
			"endevent": 1,
			"usertask": 1
		},
		"9c10a79e-1cbf-48c9-85a2-8993fe081630": {
			"classDefinition": "com.sap.bpm.wfs.UserTask",
			"subject": "UserTask_ApprovePricingProposalRequest",
			"description": "Approve or Reject Pricing Proposal Request Number - CR0070",
			"priority": "MEDIUM",
			"isHiddenInLogForParticipant": false,
			"userInterface": "sapui5://com.bmigroup.otc.pricingchg.request.approval/com.bmigroup.otc.pricingchg.request.approval",
			"id": "usertask1",
			"name": "UserTask_ApprovePricingProposalRequest",
			"documentation": "Approve Pricing Proposal Request Number"
		},
		"37bfc0f1-447e-46e1-a625-8a659116c974": {
			"classDefinition": "com.sap.bpm.wfs.ui.UserTaskSymbol",
			"x": 182,
			"y": 88,
			"width": 100,
			"height": 60,
			"object": "9c10a79e-1cbf-48c9-85a2-8993fe081630"
		},
		"2cd26105-ef64-4d68-a085-08ed4534249a": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow2",
			"name": "SequenceFlow2",
			"sourceRef": "9c10a79e-1cbf-48c9-85a2-8993fe081630",
			"targetRef": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"8801e542-5173-4cbe-84e9-43ceb9997c5b": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "232,117.75 357.5,117.75",
			"sourceSymbol": "37bfc0f1-447e-46e1-a625-8a659116c974",
			"targetSymbol": "53e54950-7757-4161-82c9-afa7e86cff2c",
			"object": "2cd26105-ef64-4d68-a085-08ed4534249a"
		}
	}
}