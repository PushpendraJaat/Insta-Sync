import axios from 'axios'

export const refressToken = async (token:string) => {
  const refress_token = await axios.get(`${process.env.INSTAGRAM_BASE_URL}/refress_access_token?grant_type=ig_refress_token&access_token=${token}`)

  return refress_token.data
}