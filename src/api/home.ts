import { http } from "@/utils/http";

export function getOpenID(data: { code: string }): Promise<any> {
  return http({
    method: "POST",
    data: data,
    url: "/user/wxMiniProgram/sessionInfo"
  })
}