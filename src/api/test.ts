import request from '@/utils/axios'

const base = '/v2/api/cecp'

export function getAllPolicy() {
	return request({
		url: `${base}/server/privilegePolicy/definitions/all`,
	})
}
