import { lyla } from "@/utils/request";

export function getOpenID(data: { code: string }): Promise<any> {
  return lyla({
    method: "POST",
    json: data,
    url: "/user/wxMiniProgram/sessionInfo"
  })
}